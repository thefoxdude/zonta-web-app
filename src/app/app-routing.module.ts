import { NgModule } from '@angular/core';
import { RouterModule, Routes, NavigationExtras } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScholarshipsComponent } from './components/club-services/scholarships/scholarships.component';
import { EventCalendarComponent } from './components/club-events/event-calendar/event-calendar.component';
import { BosomBuddiesComponent } from './components/club-services/bosom-buddies/bosom-buddies.component';
import { ContactUsComponent } from './components/about-us/contact-us/contact-us.component';
import { JoinUsComponent } from './components/about-us/join-us/join-us.component';
import { UnitedNationsComponent } from './components/advocacy/united-nations/united-nations.component';
import { ZontaSaysNoComponent } from './components/advocacy/zonta-says-no/zonta-says-no.component';
import { ERAComponent } from './components/advocacy/era/era.component';

const routes: Routes = [

   { path: 'home', component: HomeComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'scholarships', component: ScholarshipsComponent },
   { path: 'event-calendar', component: EventCalendarComponent },
   { path: 'bosom-buddies', component: BosomBuddiesComponent },
   { path: 'contact-us', component: ContactUsComponent },
   { path: 'join-us', component: JoinUsComponent },
   { path: 'united-nations', component: UnitedNationsComponent },
   { path: 'zonta-says-no', component: ZontaSaysNoComponent },
   { path: 'era', component: ERAComponent }

];

@NgModule({
   imports: [ RouterModule.forRoot(routes, {  }) ],
   exports: [ RouterModule ]
})

export class AppRoutingModule { }
