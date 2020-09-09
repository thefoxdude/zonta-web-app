import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
   constructor() {
   }

   ngOnInit() {
      
   }

   showModal(show: boolean) {
      if (show) {
         (<HTMLElement> document.getElementById("pdfModal")).style.display = 'block';
      } else {
         (<HTMLElement> document.getElementById("pdfModal")).style.display = 'none';
      }
   }
  
}
