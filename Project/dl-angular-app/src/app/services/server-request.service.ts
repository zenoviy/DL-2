import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  constructor( private http: HttpClient ) { }


  getServerRequest(apiLink: string): any {
    console.log(apiLink)
    return this.http.get(apiLink)
  }
}
