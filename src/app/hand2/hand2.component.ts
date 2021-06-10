import { Component, OnInit } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-hand2',
//   Reference to the html file
  templateUrl: './hand2.component.html',
//   Reference to the css file
  styleUrls: ['./hand2.component.css']
})
export class Hand2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
