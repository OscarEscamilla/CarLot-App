import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {


  public users: any;
 

  constructor(
    protected userService: UserService,
    public actionSheetController: ActionSheetController,
    public router: Router) { }

  ngOnInit() {
    this.ongetUsers();
  }

  ongetUsers() {

    this.userService.getUsers().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }


 


}
