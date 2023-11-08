import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  student!: Student;
  studentId : string = "";

  constructor(private router : Router, private activatedRoute: ActivatedRoute, private studentService : StudentService,
    private formBuilder : FormBuilder)
    { 
      this.studentId = this.activatedRoute.snapshot.paramMap.get("studentId") || "0";
    } 

  ngOnInit(): void { 
    let students : Student[] = [];
    if(localStorage.getItem("StudentData"))
    {
      students = JSON.parse(localStorage.getItem("StudentData") || '[]');
      for(let i=0;i<students.length;i++)
      {
        if(parseInt(this.studentId) == students[i].id)
        {
          this.student = students[i];
          break;
        }
      }
    }
  }
  
  closeModal()
  {
    this.router.navigateByUrl('Students');

  }
}
