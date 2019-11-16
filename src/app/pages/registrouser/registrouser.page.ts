import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrouser',
  templateUrl: './registrouser.page.html',
  styleUrls: ['./registrouser.page.scss'],
})
export class RegistrouserPage implements OnInit {

  todo = {};

  constructor() { }

  ngOnInit() {
  }

  logForm() {
    console.log(this.todo);
  }

}
