import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { isNullOrUndefined } from 'util';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {


  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.angularFireAuth.authState.pipe(map(auth => {
        if (isNullOrUndefined(auth)){
          return true;
        } else{
          this.router.navigate(['/tabs/tab1']);
          return false;
        }
      }));
   
  }
}
