import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-size-setting',
  templateUrl: './size-setting.component.html',
  styleUrls: ['./size-setting.component.css']
})
export class SizeSettingComponent implements OnInit {

  @Input('sizeDefault') sizeDefault : number = 0;
  @Output('sizeUpdate') sizeUpdate = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  IncreaseSize(){
    if(this.sizeDefault + 2 <= 36){
      this.sizeDefault += 2
    }
    this.sizeUpdate.emit(this.sizeDefault)
  }
  DecreaseSize(){
    if(this.sizeDefault - 2 >= 8 ){
      this.sizeDefault -= 2
    }
    this.sizeUpdate.emit(this.sizeDefault)
  }

}
