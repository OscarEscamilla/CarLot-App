import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';
import { identifierModuleUrl } from '@angular/compiler';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';


import { Router } from '@angular/router';
import { LoadingController , AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-registrouser',
  templateUrl: './registrouser.page.html',
  styleUrls: ['./registrouser.page.scss'],
})
export class RegistrouserPage implements OnInit {

  user = {
    "id": 0,
    "rol": "0"
  };

  result: any;

  constructor(
    public userService: UserService,
    public router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }

  addRegistro(rol: string){

    this.user.id = 0;
    this.user.rol = rol;
    console.log('objeto obtenido', this.user);
    if(rol == '0'){
      this.presentLoading();
      this.userService.addUser(this.user).subscribe(
        (user) => {
          this.result = user;
          if(this.result.Status === 'Usuario Registrado') {
            this.presentToast('¡Bienvenido! ahora puede ingresar', 3000);
            this.router.navigate(['/login']);
          }else{
            this.presentToast('¡Ha ocurrido un error!', 2000);
          }
        }
      );
    }else{
      this.router.navigate(['/registroparkr']);
    }
 }

 async presentToast(mensaje: string, duracion: number) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: duracion
  });
  toast.present();
}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  // metodo para preguntar al usuario como desea registrarse
  async presentAlertUserType() {
    const alert = await this.alertController.create({
      header: 'Usuario S-Park',
      message: '<strong>¿En que tipo de usuario desea registrarse?</strong>',
      buttons: [
        {
          text: 'Usuario',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           this.addRegistro("0");
          }
        }, {
          text: 'Estacionamiento',
          cssClass: 'secondary',
          handler: () => {
            this.addRegistro("1");
          }
        }
      ]
    });

    await alert.present();
  }

}
