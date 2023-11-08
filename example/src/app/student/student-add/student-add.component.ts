import { StudentService } from './../../service/student.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  saveClicked : boolean = false;
  studentForm!: FormGroup<any>;
  student : Student | undefined
  students : Student[] = [];

  constructor(private router : Router, private formBuilder : FormBuilder, private toastr :ToastrService,private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.saveClicked = false;
    this.studentForm = this.formBuilder.group({
      id :[''],
      name :['',Validators.required],
      email :['',Validators.required],
      url :['',Validators.required],
      pincode : ['', [Validators.required, Validators.pattern('[0-9]+'),Validators.minLength(6)]],
      mobile : ['', [Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10)]],
      address : ['',Validators.required]
    });


    if(localStorage.getItem("StudentData"))
    {
      this.students = JSON.parse(localStorage.getItem("StudentData") || '[]');
    }
  }

  showNotificationToastr(message: string, notificationType: string)
  {
    if(notificationType == "success")
    {
      this.toastr.success(message);
    }
    else if(notificationType == "info")
    {
      this.toastr.info(message);
    }
    else
    {
      this.toastr.error(message);
    }
  }
  isControlHasError(controlName: string, validationType: string): boolean 
  {
    const control = this.studentForm.controls[controlName];
    let result : boolean = true;
    if (!control) {
      return false;
    }
    let type: string[] = validationType.split(",");
    for(let i = 0; i < type.length; i++)
    {
      result = control.hasError(type[i]) && (control.dirty);
      if(result)
      {
        break;
      }
    }
    return result;
  }

  async saveStudent()
  {
    try
    {
      this.students.push(this.studentForm.value);
      localStorage.setItem('StudentData', JSON.stringify(this.students));
      this.showNotificationToastr("Student Saved Successfully","success");
      this.saveClicked=false;
      this.router.navigateByUrl('Students');
    }
    catch(e)
    {
      this.saveClicked=false;
      this.showNotificationToastr("Student Not Saved Successfully", "error");
      this.router.navigateByUrl('Students');
    }
  }
  closeModal()
  {
    this.router.navigateByUrl('Students');
  }
  }
