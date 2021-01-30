import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerRequestService } from '../services/server-request.service';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  allUsers: object[];
  userForm: any;

  constructor(
    private serverRequestService: ServerRequestService,
    private appStateService: AppStateService
  ) { 
    this.allUsers = null;
  }

  addNewUser(){
    this.serverRequestService.addNewUser(this.appStateService.apiParams['usersApi'], this.userForm.value )
    .subscribe(data => {
      this.getAllUsers()
      this.userForm.reset()
    });
  }

  deleteUser(id) {
    if(!confirm("Delete this user?")) return
    this.serverRequestService.deleteUser(this.appStateService.apiParams['usersApi'], id)
    .subscribe(data => {
      this.getAllUsers()
    });
  }

  getAllUsers() {
    this.serverRequestService.getServerRequest(this.appStateService.apiParams['usersApi'])
    .subscribe(data => {
      console.log(data)
      this.allUsers = data.body.length? data.body : null ;
    });
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ 
        Validators.required,  
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$') 
      ]),
      password: new FormControl('', [ 
        Validators.required
      ]),
    })

    this.getAllUsers()
  }

}
