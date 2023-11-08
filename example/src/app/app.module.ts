import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { StudentService } from './service/student.service';
import { StudentListComponent } from './student/student-list/student-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { VideoComponent } from './video/video.component';
import { YouTubePlayerModule } from "@angular/youtube-player";


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailComponent,
    StudentDeleteComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
  ],
  providers: [
    ApiService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

