import { Component, OnInit } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-hand1',
//   Reference to the html file 
  templateUrl: './hand1.component.html',
//   Reference to the css file
  styleUrls: ['./hand1.component.css']
})
export class Hand1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
