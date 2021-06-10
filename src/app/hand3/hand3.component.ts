import { Component, OnInit } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-hand3',
//   Reference to the html file
  templateUrl: './hand3.component.html',
//   Reference to the css file
  styleUrls: ['./hand3.component.css']
})
export class Hand3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
