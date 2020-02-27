import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(public Router:Router) { }


  ngOnInit() {
  }

  navigate =()=>{
    this.Router.navigate(['/dashboard'])
  }
}
