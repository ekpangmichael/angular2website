import { Component } from '@angular/core';
@Component({
  moduleId:module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent { 
  private jbtHeading:string;
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl:string;

  constructor(){
this.jbtHeading = "Hello World";
this.jbtText="this is just a demo for a very cool app am tryna design using angular 2";
this.jbtBtnText ="Read More";
this.jbtBtnUrl = "/about";

  }
  
  
}
