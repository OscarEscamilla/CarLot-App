import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ParkService } from '../../servicios/park.service';
@Component({
  selector: 'app-detallepark',
  templateUrl: './detallepark.page.html',
  styleUrls: ['./detallepark.page.scss'],
})
export class DetalleparkPage implements OnInit {

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
