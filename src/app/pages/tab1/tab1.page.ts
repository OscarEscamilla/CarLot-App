import { Component, OnInit } from '@angular/core';
import { UserService} from '../../servicios/user.service';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {


  public users: any;

  constructor(protected userService: UserService) { }

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
