import { Component, OnInit } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-new1',
//   Reference to the html file
  templateUrl: './new1.component.html',
//   Reference to the css file
  styleUrls: ['./new1.component.css']
})
export class New1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
