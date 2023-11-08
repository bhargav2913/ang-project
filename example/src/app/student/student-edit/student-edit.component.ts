import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  saveClicked : boolean = false;
  studentForm!: FormGroup;
  student : Student | undefined
  students : Student[] = [];
  studentId : string = "";

  constructor(private router : Router, private formBuilder : FormBuilder, private toastr :ToastrService,private studentService: StudentService,
    private activatedRoute: ActivatedRoute) 
    { 
      this.studentId = this.activatedRoute.snapshot.paramMap.get("studentId") || "0";
    } 

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
      for(let i=0;i<this.students.length;i++)
      {
        if(parseInt(this.studentId) == this.students[i].id)
        {
          this.studentForm.patchValue(this.students[i]);
          break;
        }
      }
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
      for(let i=0;i<this.students.length;i++)
      {
        if(parseInt(this.studentId) == this.students[i].id)
        {
          this.students[i] = this.studentForm.value;
          break;
        }
      }      
      localStorage.setItem('StudentData', JSON.stringify(this.students));
      this.showNotificationToastr("Student Edited Successfully","success");
      this.saveClicked=false;
      this.router.navigateByUrl('Students');
    }
    catch(e)
    {
      this.saveClicked=false;
      this.showNotificationToastr("Student Not Edited Successfully", "error");
      this.router.navigateByUrl('Students');
    }
  }
  closeModal()
  {
    this.router.navigateByUrl('Students');
  }
  }


