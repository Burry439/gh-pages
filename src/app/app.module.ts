import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import { HomeComponent } from './home/home.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { ArticlesComponent } from './articles/articles.component';
import { ClinicHomeComponent } from './clinic-home/clinic-home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const appRoutes = 
[
  {path: '', redirectTo:'home', pathMatch:'full'},  
  {path: 'home', component: HomeComponent},
  {path: 'treatments', component: TreatmentsComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'clinic', component: ClinicHomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},

  
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
    ClinicHomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
