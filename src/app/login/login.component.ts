import { Component, OnInit,ViewChild} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private messageService : MessageService) { }





  @ViewChild('f')signinform:NgForm

  password:string
  email:string


  onSignIn()
  { 
    
    const user = 
    {
      password: this.signinform.value.password,
      email: this.signinform.value.email,
    }
    this.authService.authenticateUser(user).subscribe((res:any) =>{
        if(res.success)   
        { 
          this.authService.storeData(res.token, res.user)
          this.router.navigate(['/scheduler'])
        }

       else  if (!res.success)
        { 
          this.messageService.add({severity:'error', summary:'Wrong info', detail:"the email or password is incorrect"});
        }
       
    })
    
    
   
  }








  ngOnInit() {
  }

}
