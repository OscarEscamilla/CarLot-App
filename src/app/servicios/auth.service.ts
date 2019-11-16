import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})



export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    public router: Router
  ) { }


  login(email: string, password: string){

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, rejected)=>{
      this.angularFireAuth.auth.signInWithEmailAndPassword(email,password)
      .then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  async logout(){
    await this.angularFireAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}
