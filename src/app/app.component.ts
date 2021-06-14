import { Component } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-root',
//   Reference to the html File
  templateUrl: './app.component.html',
//   Reference to the css File
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  
 
}
