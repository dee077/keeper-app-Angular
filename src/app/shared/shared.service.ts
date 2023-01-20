import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  data:{id:number,title:string,content:string}={id:-1,title:'',content:''};
  setData(data:any){
      this.data=data;
  }
  getData(){
      return this.data;
  }
}
 