import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEvents } from './core/services/createEvents.service';
import { EventCalendarComponent } from './components/club-events/event-calendar/event-calendar.component';
import { ScholarshipsComponent } from './components/club-services/scholarships/scholarships.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EventCalendarSmallComponent } from './components/club-events/event-calendar/event-calendar-small.component';
import { BosomBuddiesComponent } from './components/club-services/bosom-buddies/bosom-buddies.component';
import { ContactUsComponent } from './components/about-us/contact-us/contact-us.component';
import { ContactService } from './core/services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { JoinUsComponent } from './components/about-us/join-us/join-us.component';
import { UnitedNationsComponent } from './components/advocacy/united-nations/united-nations.component';
import { ZontaSaysNoComponent } from './components/advocacy/zonta-says-no/zonta-says-no.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      EventCalendarComponent,
      ScholarshipsComponent,
      SidebarComponent,
      EventCalendarSmallComponent,
      BosomBuddiesComponent,
      ContactUsComponent,
      JoinUsComponent,
      UnitedNationsComponent,
      ZontaSaysNoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MDBBootstrapModule.forRoot(),
      HttpClientModule
   ],
   providers: [
      CreateEvents,
      ContactService,
      FormBuilder
   ],
   bootstrap: [AppComponent],
   schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
