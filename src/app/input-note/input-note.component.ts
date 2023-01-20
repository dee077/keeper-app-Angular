import { Component, Output,EventEmitter, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-input-note',
  templateUrl: './input-note.component.html',
  styleUrls: ['./input-note.component.css']
})
export class InputNoteComponent {
    constructor(public shared: SharedService){console.warn("InputNote",this.shared.getData())}
    @Output() event=new EventEmitter
    tempdata={title:"",content:""}
    inputEdit=this.shared.getData();
    getTitle(item:any){
      this.tempdata.title=item;
    }
    getContent(item:any){
      this.tempdata.content=item
    }
    sendData(){
      this.event.emit(this.tempdata)
      // console.warn("Send Data:", this.tempdata)
    }
}
