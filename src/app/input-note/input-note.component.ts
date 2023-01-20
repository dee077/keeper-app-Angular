import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-note',
  templateUrl: './input-note.component.html',
  styleUrls: ['./input-note.component.css']
})
export class InputNoteComponent {
    @Output() event=new EventEmitter
    tempdata={title:"",content:""}
    getTitle(item:any){
      this.tempdata.title=item;
    }
    getContent(item:any){
      this.tempdata.content=item
    }
    sendData(){
      this.event.emit(this.tempdata)
      console.warn("Send Data:", this.tempdata)
    }
}
