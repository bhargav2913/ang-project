import { StudentService } from 'src/app/service/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students : Student[] = [];
  constructor(private route:Router, private studentService:StudentService) { 
  }

  ngOnInit(): void {
    this.students = [];
    if(localStorage.getItem("StudentData"))
    {
      this.students = JSON.parse(localStorage.getItem("StudentData") || '[]');
      console.log(this.students);
    }
  }
  deleteStudent(studentId: any)
  {
    this.route.navigateByUrl('Students/Student/Delete/'+studentId);
  }
  playVideo(url: any)
  {
    let jsonObj = {"url" : url};
    localStorage.setItem("VideoURL",JSON.stringify(jsonObj));
    this.route.navigateByUrl('Students/Demo/Play');
  }
}