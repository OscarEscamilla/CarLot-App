import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-perfil-park',
  templateUrl: './perfil-park.page.html',
  styleUrls: ['./perfil-park.page.scss'],
})
export class PerfilParkPage implements OnInit {

  private id: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
  }

}
