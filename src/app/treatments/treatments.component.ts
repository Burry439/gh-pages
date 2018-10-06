import { Component, OnInit,ViewChild } from '@angular/core';
import { TreatmentService } from '../services/treatment.service';
import { AuthService } from '../services/auth.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  constructor(private treatmentService : TreatmentService, public authService: AuthService) { }
    @ViewChild('f')treatmentInfo:NgForm
    treatments:any
    display: boolean = false;
    

    addTreatment()
    {
      this.treatmentService.addTreatment(this.treatmentInfo.value).subscribe((res)=>{
        console.log(res)
        this.treatments.push(res)
        this.treatmentInfo.reset()
        this.display = false
      })
    }

    deleteTreatment(id, index)
    {   
        console.log("yo")
        this.treatments.splice(index, 1)
       this.treatmentService.deleteTreatment(id).subscribe((res)=>{
         console.log(res)
       })
    }


    editTreatment(treatment, i)
    {   
      console.log("hi")
        console.log(treatment.name + ' ' + i)
        this.treatments[i].name = treatment.name
        this.treatments[i].duration = treatment.duration
        this.treatments[i].price = treatment.price
        this.treatments[i].details = treatment.details
        
    }


    showDialog() {
        this.display = true;
    }

  ngOnInit() {
    this.treatmentService.getAllTreatments().subscribe((treatments)=>{
      console.log(treatments)
      this.treatments = treatments
    })
  }




}
