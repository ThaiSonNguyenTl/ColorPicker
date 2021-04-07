import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PickColorApp';
  public colorDefault : string ;
  public fontSizeDefault : number;
  constructor(){
    this.colorDefault = 'red';
    this.fontSizeDefault = 16;
  }
  init(){
    this.colorDefault = 'red';
    this.fontSizeDefault = 16;
  }
  getColor(event:string){
    this.colorDefault=event
  }
  getSizeUpdate(sizeUpdate:number){
    this.fontSizeDefault = sizeUpdate
  }
  getResetInitial(){
    this.init()
  }
}
