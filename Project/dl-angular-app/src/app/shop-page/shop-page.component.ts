import { Component, OnInit } from '@angular/core';
import { ServerRequestService } from '../services/server-request.service';
import { AppStateService } from '../services/app-state.service';


@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  allProduct: object[];
  constructor( 
    private appState: AppStateService, 
    private requestService: ServerRequestService
  ) { }



  ngOnInit(): void {
    let apiProductLink = this.appState.apiParams['getProduct'];
    console.log(apiProductLink)
    this.requestService.getServerRequest(apiProductLink)
    .subscribe(data => {
      console.log(data)
      this.allProduct = data.dataBody;
    })
  }

}
