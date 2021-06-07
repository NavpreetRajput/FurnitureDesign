import { Component, OnInit } from '@angular/core';

// this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.
@Component({
  selector: 'app-about',
// reference to the html file created in the new component.
  templateUrl: './about.component.html',
// reference to the style file.
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  items:Array<any>=[]
  constructor(){
    this.items=[
      {name:"../../assets/images/slider1.jpg"},
      {name:"../../assets/images/slider2.jpg"},
      {name:"../../assets/images/slider3.jpg"},
      {name:"../../assets/images/slider4.jpg"},
      {name:"../../assets/images/slider5.jpg"},
      {name:"../../assets/images/slider6.jpg"},
      {name:"../../assets/images/slider7.jpg"},
      {name:"../../assets/images/slider8.jpg"},
      {name:"../../assets/images/slider9.jpg"},
      {name:"../../assets/images/slider10.jpg"},
      {name:"../../assets/images/slider11.jpg"},
     
    ]
  }
 //ngOnInit constructor is called by default when the class is executed.
  ngOnInit() {
  }

}
