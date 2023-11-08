import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  StudentList(){
    this.router.navigate(['/Students']);
  }
  StudentAdd(){
    this.router.navigate(['/Students/Student/Add']);
  }
}
