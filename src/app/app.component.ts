import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   isHome: boolean;
   route: string;
  
   constructor(private location: Location, private router: Router) {
      router.events.subscribe(val => {
         if (val instanceof NavigationEnd) {
            this.setHome(location.path().split('/')[1]);
         }
      });
   }

   setHome(destination: string) {
      if (destination == 'home' || destination == 'event-calendar') {
         this.isHome = true;
      } else {
         this.isHome = false;
      }
      console.log(this.isHome);
   }

   showMobileMenu() {
      let x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
         x.className += " responsive";
      } else {
         x.className = "topnav";
      }
   }
   
}
