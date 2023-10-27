import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Angular + SpringBoot + MySQL - Fullstack CRUD Apps';
  isDisplay:boolean=true;
  constructor(private router:Router){
  }


ngOnInit():void{

  if(!window.navigator.onLine){

    this.isDisplay=false;
    this.router.navigate(['/offline']);

   // window.location.href='/assets/offline.html';
  }

}}