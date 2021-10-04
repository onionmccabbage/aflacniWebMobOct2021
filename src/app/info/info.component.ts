import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  // we may declare a model for this component
  askCookies = true // it is true that we should ask for cookie agreement
  toggle = 1 // 0 evaluates to false, anything else evaluates to true

  constructor() { }

  ngOnInit(): void {
  }
  // we may add methods to this component
  handleAgree(){ // this is a function inside a class
    this.askCookies = false // they havea greed, so no need to show the quesion
  }

}
