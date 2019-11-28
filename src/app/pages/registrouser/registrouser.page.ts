import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';


import { Router } from '@angular/router';
import { LoadingController , AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-registrouser',
  templateUrl: './registrouser.page.html',
  styleUrls: ['./registrouser.page.scss'],
})
export class RegistrouserPage implements OnInit {


  togle = false;

  user = {
    id: "0",
    rol: "",
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

  addUser(){
    try {
      this.user.rol = '0';
      console.log('objeto obtenido', this.user);
      this.presentLoading();
      this.userService.addUser(this.user).subscribe(
        (user) => {
          this.result = user;
          if (this.result.Status === 'Usuario Registrado') {
            this.presentToast('¡Bienvenido! ahora puede ingresar', 3000);
            this.router.navigate(['/login']);
          } else {
            this.presentToast('¡Ha ocurrido un error!', 2000);
          }
        }
      );
    } catch (error) {
      this.presentToast('¡Ha ocurrido un error!', 2000);
    }
  }


  addPark(){
    try {
      this.user.rol = '1';
      console.log('objeto obtenido', this.user);
    } catch (error) {
      this.presentToast('¡Ha ocurrido un error! addPark', 2000);
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
      message: '¿Como desea registrarse?',
      buttons: [
        {
          text: 'Usuario',
          cssClass: 'secondary',
          handler: () => {
            // llama la funcion de agregar usuario comun
           this.addUser();
          }
        }, {
          text: 'Estacionamiento',
          cssClass: 'secondary',
          handler: () => {
            // llama la funcion de agregar estacionamientos
            this.addPark();
          }
        }
      ]
    });

    await alert.present();
  }
  
}
