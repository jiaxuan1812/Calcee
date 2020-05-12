import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Inputfield1Component } from './inputfield1/inputfield1.component';
import { OutputfieldComponent } from './outputfield/outputfield.component';
import { AppRoutingModule, routingComponents } from './app--routing.module';
import { AboutMeDataService } from './about-me-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Inputfield1Component,
    OutputfieldComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //Dependency Injection - these are the services components are dependent on
  providers: [AboutMeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
