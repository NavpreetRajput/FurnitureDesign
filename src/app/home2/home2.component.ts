import { Component, OnInit } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-home2',
//   Reference to the html file
  templateUrl: './home2.component.html',
//   Reference to the css file
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
