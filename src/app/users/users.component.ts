import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // model for this component
  user = {fname:'Grace', lname:'Hopper', pword:'booblydoo'}

  constructor() { }

  ngOnInit(): void {
  }

  // methods of this component
  handleButton(){
    this.user = {fname:'Mary', lname:'Jackson', pword:'altered'}

  }

}
