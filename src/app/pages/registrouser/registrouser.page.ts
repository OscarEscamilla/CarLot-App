import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrouser',
  templateUrl: './registrouser.page.html',
  styleUrls: ['./registrouser.page.scss'],
})
export class RegistrouserPage implements OnInit {

  registro = {};

  constructor() { }

  ngOnInit() {
  }

  logForm() {
    console.log(this.registro[0]);
  }

}
