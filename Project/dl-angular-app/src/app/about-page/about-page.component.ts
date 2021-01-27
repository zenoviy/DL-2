import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  numberOfClicks: number;
  constructor( private stateService: AppStateService ) { 
    this.numberOfClicks = stateService.clickCounter;
  }

  ngOnInit(): void {
  }

}
