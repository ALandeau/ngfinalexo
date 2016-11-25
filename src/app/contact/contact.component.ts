import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'la-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  users=[];
  constructor() { }
  ngOnInit() {

  }

  onSubmitUser(name:string,nickname:string){
    var user={nom: name, prenom: nickname};
    this.users.push(user);
  }
}
