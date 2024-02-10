import { Component,Inject, OnDestroy, OnInit } from '@angular/core';
import { Apiservice } from '../../services/crud/apiservice.service';
import { Router, RouterModule } from '@angular/router';
import { DOCUMENT, NgIf } from '@angular/common';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css'],
  standalone:true,
  imports:[
    RouterModule,
    NgIf
  ]
})
export class ForbiddenComponent implements OnInit,OnDestroy{
  UserTheams:string = ''

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public _Apiservice:Apiservice,
    private _Router:Router) {

    }
  ngOnInit(): void {
    let Theams = localStorage.getItem("USER_Theams")
    if(Theams == null || Theams == undefined || Theams == ""){
      this.UserTheams = "light"
    }else {
      this.UserTheams = Theams
    }
  }
  Theams(Theams:string){
    if(Theams == "light"){
      this.document.getElementsByTagName('body')[0].classList.remove("dark")
      this.document.getElementsByTagName('body')[0].classList.add("light")
    }else {
      this.document.getElementsByTagName('body')[0].classList.remove("light")
      this.document.getElementsByTagName('body')[0].classList.add("dark")
    }
    this.UserTheams = Theams
    localStorage.setItem("USER_Theams",Theams)
  }
  ngOnDestroy(): void {

  }
}
