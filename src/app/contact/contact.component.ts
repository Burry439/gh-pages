import { Component, OnInit,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { AuthService } from '../services/auth.service';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private messageService : MessageService, private authService: AuthService, private emailService: EmailService ) { }

  @ViewChild('f')emailInfo:NgForm

  minNum = 8

  sendEmail()
  { 


    let emailInfo = 
    {
      name : this.emailInfo.value.name,
      email : this.emailInfo.value.email,
      phone : this.emailInfo.value.phone,
      msg : this.emailInfo.value.txtMsg
    }

    console.log(emailInfo)

     this.emailService.sendEmail(emailInfo).subscribe((res) =>{
       console.log(res)
       this.messageService.add({severity:'success', summary:'Sent!', detail:'Hey ' + emailInfo.name + ' we got your message and will get back to you soon'});
       this.emailInfo.reset()
     }) 
  }

  ngOnInit() {
  }

}
