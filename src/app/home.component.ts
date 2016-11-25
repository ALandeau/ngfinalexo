import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import { HttpService } from './http.service';

@Component({
  selector: 'la-home',
  templateUrl: './home.component.html',
  styles: [],
  providers:[HttpService]
})
export class HomeComponent implements OnInit {

  constructor(private httpservice:HttpService){

  }

  items:any[];

  title = 'http works!';

  ngOnInit(){
    this.httpservice.getData()
      .subscribe(
        (data:any) => console.log(data)
      );
  }

  onSubmit(username:string,email:string){
    this.httpservice.sendData({username:username,email:email})
      .subscribe(
        (data:any) => console.log(data)
      );
  }

  onGetdata(){
    this.httpservice.getMydata()
      .subscribe(

        data => {
          const array = [];
          for(let key in data){
            array.push(data[key]);
          }
          this.items=array;
        }
      );
  }

}
