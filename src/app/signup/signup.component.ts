import { Component, OnInit } from '@angular/core';
// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.

@Component({
  selector: 'app-signup',
 // Reference to the html file
  templateUrl: './signup.component.html',
//   Reference to the css file
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mclickrel1(event){
    alert("congratulations!!!You have successfully signup")
  }
  mclickrel(event){
    alert("Signup Canceled")
  }
}
