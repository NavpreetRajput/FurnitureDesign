import { Component, OnInit } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-home3',
//   Reference to the html file
  templateUrl: './home3.component.html',
//   Reference to the css file
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
