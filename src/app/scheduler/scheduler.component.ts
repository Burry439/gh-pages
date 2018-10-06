import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';




@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  constructor(private scheduleService: ScheduleService) { }

  appointments:any


  ngOnInit() {
    this.scheduleService.getAppointments().subscribe((res) =>{
      this.appointments = res
    })
 }




  }


