import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http : HttpClient) { }


  sendEmail(emailInfo)
  {
    return this.http.put(environment.ws_url + 'email', emailInfo)
  }

}
