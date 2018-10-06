import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


///// primeNg modules ///////////////////
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScheduleModule} from 'primeng/schedule';
import {DialogModule} from 'primeng/dialog';

////////////////////////////////////////////
import {MessageService} from 'primeng/api';
import { GaurdService } from  './services/gaurd.service';
import {CalendarModule} from 'primeng/calendar';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import { HomeComponent } from './home/home.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaypalComponent } from './paypal/paypal.component';
import { TreatmentComponent } from './treatment/treatment.component';


const appRoutes = 
[
  {path: '', redirectTo:'home', pathMatch:'full'},  
  {path: 'home', component: HomeComponent},
  {path: 'treatments', component: TreatmentsComponent},
  {path: 'treatment/:id', component: CheckoutComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: LoginComponent},
  {path: 'scheduler', component: SchedulerComponent, canActivate:[GaurdService]}

  
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TreatmentsComponent,
    ArticlesComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    SchedulerComponent,
    CheckoutComponent,
    PaypalComponent,
    TreatmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    ScheduleModule,
    CalendarModule,
    DialogModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GaurdService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
