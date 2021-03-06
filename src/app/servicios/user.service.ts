import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})




export class UserService {

  constructor(private httpClient: HttpClient) { }


  getUsers(){
    return this.httpClient.get('http://carlotapinode.herokuapp.com/getAllUsers');
  }

  addUser(user: any ) {
      return this.httpClient.post('http://carlotapinode.herokuapp.com/registroUsuario', user);
  }

  registroParks(park: any){
    return this.httpClient.post('http://carlotapinode.herokuapp.com/registroParks', park);
  }

  validateLogin(data: any ) {
    return this.httpClient.post('http://carlotapinode.herokuapp.com/login', data);
}

  
}
