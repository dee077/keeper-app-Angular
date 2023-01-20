import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent {
    @Input() data:{id: number, title: string, content: string}={id:-1,title:'',content:''};
    @Output() event= new EventEmitter <number>();
    sendDataDelete(id:number){
        // console.warn(id);
        this.event.emit(id);
    }

}
