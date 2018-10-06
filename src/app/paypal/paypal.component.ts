import { Component, OnInit,AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';

declare let paypal:any



@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit,AfterViewChecked {

  constructor() { }


  addScript:boolean = false
  paypalLoad: boolean = true;
  @Input()price
  @Output()paid = new EventEmitter<boolean>()

  paypalConfig = {

    style: {
      layout: 'vertical',  // horizontal | vertical
      size:   'responsive',    // medium | large | responsive
      shape:  'pill',      // pill | rect
      color:  'gold'       // gold | blue | silver | white | black
    },


    env: 'sandbox',
    client: {
      sandbox: 'AbsN23CP6js6HHDc_v09aiWh7TA3J6tZqc8r9YwWy0T6dOA3t13Knnx-ESHTHwVx6lGmI5ob-yY4Nkyi',
      production: '<your-production-key-here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.price, currency: 'ILS' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
       this.paid.emit(true)
      })
    }
  };



ngAfterViewChecked():void
{
   if(!this.addScript)
   {
     this.addPaypalScript().then(()=>{
      paypal.Button.render(this.paypalConfig, '#paypal-button-container')
      this.paypalLoad = false
     })
   }
}


addPaypalScript()
{
  this.addScript = true;
  return new Promise ((resolve,reject)=>{
    let scriptTagElement = document.createElement('script')
    scriptTagElement.src = "https://www.paypalobjects.com/api/checkout.js"
    scriptTagElement.onload = resolve;
    document.body.appendChild(scriptTagElement)
  })
}



  ngOnInit() {
  }

}
