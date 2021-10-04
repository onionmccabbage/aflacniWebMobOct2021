import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  // let's provide a date stamp
  now = new Date() // just plain JavaScript

  constructor() { }

  ngOnInit(): void {
  }

}
