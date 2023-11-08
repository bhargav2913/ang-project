import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
title = 'Youtube Video'
isLoading:boolean = false;
error:string = '';
response:any ={};

search:any ={keyword:'', channelId:'',type:'',maxResults:''};
constructor(private http : HttpClient ,private sanitizer:DomSanitizer){}
ngOnInit(): void {
}

searchYoutube(): void{
  this.isLoading = true;

  const url ='https://www.googleapis.com/youtube/v3/search';

  const urlParams = new HttpParams ()
  .set('part','snippet')
  .set('key','AIzaSyA9KccjdLyfPQZ7swREQOqUxBm2pwe45F4')
  .set('q',this.search.keyword)
  .set('type',this.search.type)
  .set('channelId',this.search.channelId)
  .set('maxResults',this.search.maxResults);

  const options = {params:urlParams};

  this.http.get<any>(url,options).subscribe(
    (data) => {
      this.response = data;
      this.isLoading = false;
    },
    (err) => {
      this.error = err;
      this.isLoading = false;

    });
}

getVideoSource(id: string): SafeResourceUrl {
  if (id != '') {
    const url = "https://www.youtube.com/embed/" + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }else{
    return '';
  }
}

}
