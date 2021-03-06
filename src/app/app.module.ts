import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
