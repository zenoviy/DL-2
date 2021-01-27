import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {

  constructor() { }

  @Input() makeClickCounter
  @Output() makeClick = new EventEmitter();


  innerClick(){
    this.makeClick.emit();
  }


  ngOnInit(): void {
  }

}
