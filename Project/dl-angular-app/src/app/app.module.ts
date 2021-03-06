import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


/* Secrvices */
import { AppStateService } from './services/app-state.service';
import { ServerRequestService } from './services/server-request.service';


/* Components */
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DetailsComponentComponent } from './home-page/details-component/details-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ImageFormatPipe } from './pipes/image-format.pipe';
import { LinkNameFormatPipe } from './pipes/link-name-format.pipe';
import { ShopSinglePageComponent } from './shop-page/shop-single-page/shop-single-page.component';
import { ShopSidePanelComponent } from './shop-page/shop-side-panel/shop-side-panel.component';


const router: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'about', component: AboutPageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'shop/:name', component: ShopSinglePageComponent },
  { path: 'users', component: UserPageComponent },
  { path: '**', component: NotFoundPageComponent }


]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShopPageComponent,
    AboutPageComponent,
    UserPageComponent,
    NotFoundPageComponent,
    DetailsComponentComponent,
    FooterComponentComponent,
    ImageFormatPipe,
    LinkNameFormatPipe,
    ShopSinglePageComponent,
    ShopSidePanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),
    HttpClientModule
  ],
  providers: [
    AppStateService, 
    ServerRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
