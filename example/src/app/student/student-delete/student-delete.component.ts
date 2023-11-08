import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.scss']
})
export class StudentDeleteComponent implements OnInit {
  studentId!: string;
  students : Student[] = [];

  constructor(private studentService : StudentService, private router: Router, private toastr :ToastrService,
    private activatedRoute :ActivatedRoute) 
    { 
      this.studentId = this.activatedRoute.snapshot.paramMap.get("studentId") || "0";
    }

  ngOnInit(): void 
  {
    if(localStorage.getItem("StudentData"))
    {
      this.students = JSON.parse(localStorage.getItem("StudentData") || '[]');
      
    }
  }

  showSuccessToastr(message: string, notificationType: string)
  {
    if(notificationType == "success")
    {
      this.toastr.success(message)
    }
  }

  showErrorToastr(message: string | undefined, notificationType: string)
  {
    if(notificationType == "success")
    {
      this.toastr.success(message);
    }
    else
    {
      this.toastr.error(message);
    }
  }

  async deleteRecord() 
  {
    for(let i=0;i<this.students.length;i++)
    {
      if(parseInt(this.studentId) == this.students[i].id)
      {
        this.students.splice(i,1);
        break;
      }
    }
    localStorage.setItem("StudentData", JSON.stringify(this.students));
    this.router.navigateByUrl('Students');
    
  }

  closeModal()
  {
    this.router.navigateByUrl('Students');
  }

}