import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {


  constructor(private http : HttpClient) { }


  addTreatment(newTreatment)
  {
      return this.http.post(environment.ws_url + 'treatments/newTreatment' , newTreatment)
  }

  getAllTreatments()
  {
    return this.http.get(environment.ws_url + 'treatments/getTreatments')
  }

  getTreatment(treatmentId)
  { 

    const headers = new HttpHeaders().set("treatmentId", treatmentId)
     return this.http.get(environment.ws_url + 'treatments/getTreatment', {headers})
  }

  deleteTreatment(treatmentId)
  {
    const headers = new HttpHeaders().set("treatmentId", treatmentId)
    return this.http.delete(environment.ws_url + 'treatments/deleteTreatment', {headers})

  }


  editTreatment(updatedTreatment, id)
  {
    return this.http.put(environment.ws_url + 'treatments/editTreatment' , {treatment:updatedTreatment, id:id})

  }
  


}
