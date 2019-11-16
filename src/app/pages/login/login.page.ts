import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import {AuthService} from '../../servicios/auth.service';
import { LoadingController , AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    public router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController) {
  }

  ngOnInit() {
  }

  async onSubmitLogin(){
    const result = await this.authService.login(this.email, this.password)
    .then(res =>{
      this.presentLoadingWithOptions();
      this.router.navigate(['/tabs/tab1']);
    }).catch(err => {
      this.presentToast();
    });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o Contraseña Incorrectos',
      duration: 3000
    });
    toast.present();
  }
}
