import { Component, OnInit } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-item2',
//   Reference to the html File
  templateUrl: './item2.component.html',
//   Reference to the css file
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
