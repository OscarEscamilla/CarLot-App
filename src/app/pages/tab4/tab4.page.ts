import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../servicios/auth.service';

import { AlertController, ActionSheetController}  from '@ionic/angular';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public data_user: JSON;

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    public router: Router) { }

  ngOnInit() {
    this.data_user = JSON.parse(localStorage.getItem('user'));
    console.log(this.data_user);
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Log out',
      message: '<strong>Desea cerrar sesion</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log(blah);
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.onLogout();
          }
        }
      ]
    });

    await alert.present();
  }

  // funcion para cerrar sesion del usuario
  onLogout() {
    this.authService.logout();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
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
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
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
