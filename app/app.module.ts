import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NavbarComponent} from './components/navbar/navbar.component'
import {AppComponent} from './app.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {AboutComponent} from './components/pages/about.component';
import {HomeComponent} from './components/pages/home.component';
import {ContactComponent} from './components/pages/contact.component'
import {rounting} from './app.rounting';
@NgModule({
  imports:      [ BrowserModule, rounting],
  declarations: [ AppComponent, NavbarComponent, JumbotronComponent, AboutComponent, HomeComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
