import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';
import { identifierModuleUrl } from '@angular/compiler';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Component({
  selector: 'app-registrouser',
  templateUrl: './registrouser.page.html',
  styleUrls: ['./registrouser.page.scss'],
})
export class RegistrouserPage implements OnInit {

  user = {};

  person = {};

 

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  logForm() {
    
  }

}
