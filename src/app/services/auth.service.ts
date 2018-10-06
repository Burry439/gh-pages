import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  authToken:any
  loggedIn:boolean




 authenticateUser(user)
 {

   return this.http.post(environment.ws_url+'users/authenticate', user)
 }

 loadToken()
 { 
   ///id_token is the default name 
   const token = localStorage.getItem('id_token')
   this.authToken = token
 }

 storeData(token,user)
 {
   localStorage.setItem('id_token',token)
   localStorage.setItem('user',JSON.stringify(user))
   this.authToken = token
   this.loggedIn = true
 }

 logOut()
 {
    this.authToken = null
    localStorage.clear()
    this.loggedIn = false

 }


 isLoggedIn()
 {
   if (localStorage.getItem('id_token')) {
     return  true;
   }
   else
   {
     return false;
   }
 }



}


