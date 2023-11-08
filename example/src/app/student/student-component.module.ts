
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { VideoComponent } from '../video/video.component';

const routes: Routes = [
    {
      path: '',
      component: StudentListComponent
    },
    {
      path: 'Student/Add',
      component: StudentAddComponent
    },
    {
        path: 'Student/Edit/:studentId',
        component: StudentEditComponent
    },
    {
        path: 'Student/Detail/:studentId',
        component: StudentDetailComponent
    },
    {
      path: 'Student/Delete/:studentId',
      component: StudentDeleteComponent
    },
    {
      path: 'Video/Play',
      component: VideoComponent
    },
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StudentComponentModule{ }