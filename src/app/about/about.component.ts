import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
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
      {name:"../../assets/images/slider12.jpg"},
    ]
  }
  ngOnInit() {
  }

}
