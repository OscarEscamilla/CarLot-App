import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  constructor(private httpClient: HttpClient) { }

  public getParks(){
    return this.httpClient.get('http://carlotapinode.herokuapp.com/getParks');
  }


  public getParkById(id: any) {
    return this.httpClient.post('http://carlotapinode.herokuapp.com/getOnePark', id );
  }
  
}
