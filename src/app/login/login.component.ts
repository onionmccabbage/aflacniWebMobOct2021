import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // model for this component
  users = [{fname:'Timnit', lname:'Gebru',    pword:'wibble'},
           {fname:'Ada',    lname:'Lovelace', pword:'wabble'},
           {fname:'Meng',   lname:'Wanzhou',  pword:'webble'}]
  constructor() { }

  ngOnInit(): void {
  }

}
