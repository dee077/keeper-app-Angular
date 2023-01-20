import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keeper-app';
  notedata = [
    {id: 0,title: "Delegation",content:"Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"},
    {id: 1,title: "Loops",content:"How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."},
    {id: 2,title: "Arrays",content:"Q. Why did the programmer quit his job? A. Because he didn't get arrays."},
    {id: 3,title: "Hardware vs. Software",content:"What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."},
  ];
  reciveData($event:any){
    this.notedata.push({id: this.notedata.length,title: $event.title, content: $event.content});
    console.warn(this.notedata)
  }
  reciveDataDelete($event:any){
    // console.warn($event);
    this.notedata=this.notedata.filter(item=>item.id!==$event);
  }
}
