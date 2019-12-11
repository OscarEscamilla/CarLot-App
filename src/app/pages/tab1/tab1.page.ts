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
  public data_user: JSON;

  constructor(
    protected userService: UserService,
    public actionSheetController: ActionSheetController,
    public router: Router,
    public parkService: ParkService) { 
      this.data_user = JSON.parse(localStorage.getItem('user'));
      console.log(this.data_user);
    }

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


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Log out',
        icon: 'log-out',
        handler: () => {
          localStorage.clear();
          this.data_user = null;
          this.router.navigate(['/login']);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

 


}
