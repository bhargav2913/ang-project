import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private apiService: ApiService) { }


  saveStudent(student : Student) {
    return this.apiService.post('/st/save', JSON.stringify(student));
  }
 
}
