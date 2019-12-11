import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController}  from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  private data_user: JSON;

  constructor(
    private actionSheetController: ActionSheetController,
    public router: Router) {
    this.data_user = JSON.parse(localStorage.getItem('user'));
    console.log(this.data_user);
  }

  ngOnInit() {
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
