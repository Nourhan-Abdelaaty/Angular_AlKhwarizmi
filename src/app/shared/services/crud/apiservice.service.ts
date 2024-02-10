import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {  Observable, map } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { ResResult } from '../../models/Helper/Response';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class Apiservice {

 public isLoading:boolean = false
 public isServer:boolean = false
 public Language:string = 'ar'
 public ErrorMassage:string = ''
 public SuccessMassage:string = ''

  constructor(
    @Inject(PLATFORM_ID) platformID:Object,
    private _HttpClient:HttpClient)
    {
    this.isServer = isPlatformServer(platformID)
    //this.language()
    }



getAll<T>(controller:string ,loader:boolean = false):Observable<ResResult>{
  this.isLoading = loader
  return this._HttpClient.get<ResResult>(`${environment.url}/${controller}`)
}

get<T>(controller:string ,loader:boolean = false):Observable<ResResult>{
  this.isLoading = loader

  return this._HttpClient.get<ResResult>(`${environment.url}/${controller}`)
}

getById<T>( controller:string , modelID:number | string ,loader:boolean = false):Observable<ResResult> {
  this.isLoading = loader
  return this._HttpClient.get<ResResult>(`${environment.url}/${controller}?id=${modelID}&lang=${this.Language}`)
}

post<T>(controller:string , model:T ,loader:boolean = false):Observable<ResResult> {
  this.isLoading = loader
  return this._HttpClient.post<ResResult>(`${environment.url}/${controller}`,model)
}

delete<T>(controller:string , Id:number | string ,loader:boolean = false):Observable<ResResult>{
  this.isLoading = loader
  return this._HttpClient.delete<ResResult>(`${environment.url}/${controller}/${Id}`)
}

put<T>(controller:string  ,  model:T ,loader:boolean = false ):Observable<ResResult>{
  this.isLoading = loader
  return this._HttpClient.put<ResResult>(`${environment.url}/${controller}/`,model)
}

getToken(){
  return ""
}

}
