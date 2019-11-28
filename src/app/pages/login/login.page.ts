import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import {AuthService} from '../../servicios/auth.service';
import { LoadingController , AlertController, ToastController } from '@ionic/angular';
import { UserService } from '../../servicios/user.service';

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
    public toastController: ToastController,
    public userService: UserService ) {
  }

  ngOnInit() {
  }


  async onSubmitLogin() {
    const data = {
      'correo': this.email,
      'password': this.password
    };
    this.presentLoading();
    const result = await this.userService.validateLogin(data).subscribe(
        (res) => {
          if (res != null) {
            this.router.navigate(['/tabs/tab1']);
          } else {
            this.presentToast();
          }
        }
      );
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario o Contraseña Incorrectos',
      duration: 3000
    });
    toast.present();
  }
}
