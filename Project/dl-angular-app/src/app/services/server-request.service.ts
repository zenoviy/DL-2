import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface UserProfile {
  name: string;
  email: string;
  password: string;
}
// "name":"asd","email":"asd12@adsd","password"

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  constructor( private http: HttpClient ) { }


  getServerRequest(apiLink: string): any {
    console.log(apiLink)
    return this.http.get(apiLink)
  }

  deleteUser(link:string, userId: string): any {
    let headers = new HttpHeaders()
    .append("user-id", userId.toString());

    return this.http.delete(link, { headers });
  }


  addNewUser(appLink: string, body: UserProfile): any {
    console.log(appLink, body)
    return this.http.post(appLink, body);
  }
}
