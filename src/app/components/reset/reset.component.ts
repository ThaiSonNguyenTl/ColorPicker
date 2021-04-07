import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  @Input('sizeDefault') sizeDefault : number = 0
  @Input('color') color: string = ''
  @Output('resetInitial') reset = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {
  }
  ResetInitial(){
    this.reset.emit(true)
  }

}
