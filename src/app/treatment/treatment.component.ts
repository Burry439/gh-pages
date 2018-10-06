import { Component, OnInit, Input, Output,EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TreatmentService } from '../services/treatment.service';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {


  @Input()treatment
  @Output()deleteTreatmentEmission = new EventEmitter<any>()
  @Output()editTreatmentEmission = new EventEmitter<any>()

  display:boolean = false
  @ViewChild('f')treatmentInfo:NgForm

  constructor(private router :Router,private treatmentService : TreatmentService, public authService: AuthService) { }


  deleteTreatment()
  { 
      this.deleteTreatmentEmission.emit()
  }


  editTreatment()
  {
     this.display = true
  }


  confirmEdit()
  {   
     this.treatmentService.editTreatment(this.treatmentInfo.value, this.treatment._id).subscribe((res) =>{
       console.log(res)
       this.display = false
      this.editTreatmentEmission.emit(res)

     })
  }


  toTreatment(id)
  { 
    console.log(id)
    this.router.navigate(['/treatment', id])  
  }


  ngOnInit() {
    console.log(this.treatment)
  }

}
