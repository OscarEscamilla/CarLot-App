import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../servicios/auth.service';

import { AlertController}  from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private authService: AuthService, private alertController: AlertController) { }

  ngOnInit() {
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


}
