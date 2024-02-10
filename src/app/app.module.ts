import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { Apiservice } from './shared/services/crud/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeModule } from '@circlon/angular-tree-component';
import { TreeComponent } from './Components/tree/tree.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    Apiservice,
],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: true,
      progressAnimation: "increasing",
      preventDuplicates: true,
  }),
  BrowserAnimationsModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
