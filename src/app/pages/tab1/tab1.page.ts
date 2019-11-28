import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {


  public users: any;

  constructor(
    protected userService: UserService,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.ongetUsers();
  }

  ongetUsers() {

    this.userService.getUsers().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'sign-out',
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
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
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
