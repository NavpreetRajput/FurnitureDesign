import { Component, OnInit } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-home',
//   Reference to html file
  templateUrl: './home.component.html',
 // Reference to css file
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
