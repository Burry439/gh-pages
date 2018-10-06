import { Component, OnInit,ViewChild, AfterViewChecked } from '@angular/core';
import { TreatmentService } from '../services/treatment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../services/schedule.service';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';






@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {



  constructor(private treatmentService: TreatmentService,
              private ar: ActivatedRoute, 
              private router : Router,
              private scheduleSevice: ScheduleService,
              private messageService : MessageService
              ) { }


  @ViewChild('f')appInfo:NgForm
  treatment:any
  time:any
  canPay:boolean = false
  orderInfo:any
  back()
  {
    this.router.navigate(['/treatments'])
  }

  proccedToPayment()
  { 
    console.log("yo")
    this.canPay = !this.canPay
    this.orderInfo = this.appInfo.value
  }

  confirmOrder()
  {   
    var tzoffset = (new Date(this.time)).getTimezoneOffset() * 60000; 
    var localISOTime = (new Date(this.time - tzoffset)).toISOString().slice(0, -1);

     console.log(this.time)
     this.scheduleSevice.newAppointment({"title" : this.treatment.name, "start": localISOTime, "name" : this.orderInfo.name, "email" : this.orderInfo.email, "phone" : this.orderInfo.phone}).subscribe((res)=>{
       
      this.messageService.add({severity:'success', summary:'Order Confirmed', detail:'Hey ' + this.orderInfo.name + ' we got your request for ' + this.treatment.name + ' see you soon'});
      this.time = null
       this.canPay = false
        console.log(res)
    })

  }


  ngOnInit() {

    this.ar.params.subscribe(id =>{
      let treatmentId = id.id
        console.log(treatmentId)
        this.treatmentService.getTreatment(treatmentId).subscribe((treatment)=>{
            this.treatment = treatment
        })
      })
  }
}
