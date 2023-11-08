import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string): any {
    return this.http.get(environment.apiURL + url);
  }

  getFile(url: string): any {
      return this.http.get(environment.apiURL + url, { responseType: 'blob' });
  }

  post(url: string, data: string): any {
      return this.http.post(environment.apiURL + url, data);
  }
  
  postJSONData(url: string, data: JSON): any {

    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    return this.http.post(environment.apiURL + url, data, httpOptions);
  }
  
  postData(url: string, formData: FormData): any {

      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/x-www-form-urlencoded',
              'enctype': 'multipart/form-data'
          })
      };

      return this.http.post(environment.apiURL + url, formData, httpOptions);
  }

  delete(url: string): any {
      return this.http.delete(environment.apiURL + url);
  }

  private handleError(error: any) {
      return error.statusText;
  }

  private handleResponse(data: Object) {
      
      return data;
  }
}

