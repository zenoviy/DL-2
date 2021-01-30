import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerRequestService } from '../../services/server-request.service';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-shop-single-page',
  templateUrl: './shop-single-page.component.html',
  styleUrls: ['./shop-single-page.component.css']
})
export class ShopSinglePageComponent implements OnInit {

  allProducts: object[];
  currentProduct: object;
  navigationSubscribe: any;
  titlePicture: string;
  constructor(
    private serviceRequest: ServerRequestService,
    private activeRouter: ActivatedRoute,
    private appStateService: AppStateService
  ) { 
    this.currentProduct = null;
    this.allProducts = null;
    this.titlePicture = null;
  }

  searchProduct(allProduct: object[], id: string){
    return allProduct.find(item => item['id'] == id)
  }

  selectGalleryPicture(picture){
    this.titlePicture = picture;
  }

  routerEvent(){
    this.navigationSubscribe = this.activeRouter.params.subscribe(routerParams => {
      //console.log(routerParams)
      this.activeRouter.queryParams.subscribe(queryString => {
        //console.log(queryString)
        const url = this.appStateService.apiParams['getProduct'];
        this.serviceRequest.getServerRequest(url).
        subscribe(data => {
          this.allProducts = data.dataBody;
          this.currentProduct = this.searchProduct(this.allProducts, queryString.id);
          this.titlePicture = this.currentProduct['image'][0];
          console.log(this.currentProduct)
        })
      })
    })
  }

  ngOnInit(): void {
    this.routerEvent()
  }
  ngOnDestroy(): void {
    if(this.navigationSubscribe){
      this.navigationSubscribe.unsubscribe();
    }   
  }

}
