import { Component, OnInit } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-item3',
//   Reference to the html file
  templateUrl: './item3.component.html',
//   Reference to the css file
  styleUrls: ['./item3.component.css']
})
export class Item3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
