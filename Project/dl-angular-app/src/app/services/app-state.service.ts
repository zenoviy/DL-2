import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  clickCounter: number;
  pageText: string;
  isRed: boolean;
  _HOST: string;
  apiParams: object;
  constructor() { 
    this.clickCounter = 0;
    this.pageText = "";
    this.isRed = false;
    this._HOST = "http://localhost:3500";
    this.apiParams = {
      getProduct: this['_HOST'] + '/get-product',
      usersApi: this['_HOST'] +  '/api/app-users'
    }
  }
}
