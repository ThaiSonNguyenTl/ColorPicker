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
  public arrNumber: number[]
  public sortValue: number = 1
  public sortPrice: number = 1
  public sortBy: string = 'name'
  public productsArr : any[] = [
    {
      id:1,
      name: "Apple Iphone7",
      price: 28
    },
    {
      id:2,
      name: "Samsung",
      price: 38
    },
    {
      id:3,
      name: "Oppo",
      price: 58
    },
    {
      id:4,
      name: "IphoneX",
      price: 48
    },
    {
      id:5,
      name: "Iphone11",
      price: 98
    },
  ]
  constructor(){
    this.colorDefault = 'red';
    this.fontSizeDefault = 16;
    this.arrNumber = [8,4,6,2,1,7,9]
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
  Increase(value:number){
    this.sortValue = value

  }
  Decrease(value:number){
    this.sortValue = value
  }
  onSort(col:string){
     this.sortBy = col
     this.sortPrice = -this.sortPrice
  }
}
