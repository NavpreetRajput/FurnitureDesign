import { Component, OnInit } from '@angular/core';
import{trigger,state,style,transition,animate} from'@angular/animations';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-sidenav',
//   Reference to the html file
  templateUrl: './sidenav.component.html',
//   Reference to the css file.
  styleUrls: ['./sidenav.component.css'],
 
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
