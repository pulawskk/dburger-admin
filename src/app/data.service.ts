import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postData = {
    firstName: 'karl',
    lastName: 'carlito',
    email: 'mejlito@gmail.com'
  };

  url: string = 'http://localhost:8888/api/v1/users/';

  getUsers() {
    return this.http.get(this.url);
  }

  createUser() {
    this.http.post(this.url, this.postData).toPromise().then(data => {
      console.log(data);
    });
  }
}
