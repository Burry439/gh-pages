import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http : HttpClient) { }

//   appointments = [
//     {
//         "title": "All Day Event",
//         "start": "2018-09-01"
//     },
//     {
//       "title": "All Day Event 2",
//       "start": "2018-09-11T16:00:00",
//     }
// ];


  newAppointment(appointment)
  { 

      return this.http.post(environment.ws_url + 'appointments/newAppointement', appointment)
  }


 getAppointments()
 {    
    console.log("yo")
     return this.http.get(environment.ws_url + 'appointments/getAppointements')
 }


}
