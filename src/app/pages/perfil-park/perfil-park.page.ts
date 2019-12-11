import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ParkService } from '../../servicios/park.service';
@Component({
  selector: 'app-perfil-park',
  templateUrl: './perfil-park.page.html',
  styleUrls: ['./perfil-park.page.scss'],
})
export class PerfilParkPage implements OnInit {

  private id: number;
  private park: any; // objeto obtenido de web service

  constructor(
    private activatedRoute: ActivatedRoute,
    private parkService: ParkService ) {
      this.id = this.activatedRoute.snapshot.params.id;
      this.getPark(this.id);
    }

  ngOnInit() {

  }

  async getPark(id: number){
    const data = {id: this.id};
    await this.parkService.getParkById(data).subscribe(
      (res) => {
        this.park = res[0];
        console.log(this.park);
      }
    );
  }

}
