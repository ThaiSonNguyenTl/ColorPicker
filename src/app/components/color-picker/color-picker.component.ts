import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  @Output('outColor') colorConnector = new EventEmitter<string>()

  public colors : string[] = []
  constructor() { }

  ngOnInit(): void {
    this.colors = ['red' , 'green', 'blue','gray','#ccc','purple','orange','#e8ecf2','#537c3d','#d32a3b','#5d699b','#2b3c84','#a6abc1']
  }
  SendColor(color:string){
    this.colorConnector.emit(color)
  }
}
