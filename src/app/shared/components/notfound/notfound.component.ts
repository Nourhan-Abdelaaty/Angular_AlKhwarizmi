import { Component, Inject, OnInit } from '@angular/core';
//import { TranslateService } from '@ngx-translate/core';
import { Apiservice } from '../../services/crud/apiservice.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit{
  UserTheams:string = ''
  constructor(
    //private translate:TranslateService,
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

}
