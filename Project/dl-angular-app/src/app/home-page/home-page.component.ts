import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  clickCounter: number;
  helloWord: string;
  pageText: string;
  isRed: boolean;
  
  constructor( private appState: AppStateService) {
    this.helloWord = "Hello Angular";
    this.clickCounter = appState.clickCounter;
    this.pageText = appState.pageText;
    this.isRed = appState.isRed;
  }

  makeClick(){
    this.appState.clickCounter += 1;
    this.clickCounter = this.appState.clickCounter;
  }
  makeDecreaseClick(){
    console.log("Check")
    this.appState.clickCounter -= 1;
    this.clickCounter = this.appState.clickCounter;
  }


  changePageText(event: object): void {
    console.log(event)
    this.pageText = event['target'].value;
    this.appState.pageText = this.pageText;
  }
  changeBoxEvent(event: object ): void {
    this.isRed = event['target'].checked;
    this.appState.isRed = this.isRed;
  }


  ngOnInit(): void {
  }

}
