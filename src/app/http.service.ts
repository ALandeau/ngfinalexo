import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http:Http) { }
  getData(){
    return this.http.get('https://angularhttpal.firebaseio.com/produit.json')
      .map((response:Response)=>response.json());
  }

  sendData(user:any){
    const body=JSON.stringify(user);
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('https://angularhttpal.firebaseio.com/produit.json',body,{headers:headers})
      .map((data:Response)=>data.json());
  }

  getMydata(){
    return this.http.get('https://angularhttpal.firebaseio.com/produit.json')
      .map((response:Response)=>response.json());
  }
}

