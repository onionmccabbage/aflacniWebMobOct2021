import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // declare data model
  title = 'basics';
  price = 3.99
  datestamp = new Date() // i.e. now
}
