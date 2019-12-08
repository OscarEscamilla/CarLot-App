import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ParkService } from '../../servicios/park.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {


  public parks: any;


  constructor(
    protected userService: UserService,
    public actionSheetController: ActionSheetController,
    public router: Router,
    public parkService: ParkService) { }

  ngOnInit() {
    this.ongetUsers();
  }

  ongetUsers() {

    this.parkService.getParks().subscribe(
      (data) => {
        console.log(data);
        this.parks = data;
      }
    ); 
  }


 


}
