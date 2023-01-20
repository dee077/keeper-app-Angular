import { Component, Input,Output, EventEmitter,OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent {
    constructor(public shared: SharedService){}
    @Input() data:{id: number, title: string, content: string}={id:-1,title:'',content:''};
    @Output() event= new EventEmitter <number>();
    sendDataDelete(id:number){
        // console.warn(id);
        this.event.emit(id);
    }
    sendDataEdit(data:any){
        this.shared.setData(data);
        console.warn("displayNote:",this.shared.getData());
    }
}
