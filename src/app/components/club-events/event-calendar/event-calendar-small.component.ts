import { Component } from '@angular/core';
import { CreateEvents } from 'src/app/core/services/createEvents.service';
import { Event } from 'src/app/core/models/event';

@Component({
   selector: 'app-event-calendar-small',
   templateUrl: './event-calendar-small.component.html'
})
export class EventCalendarSmallComponent {
   events: Event[];
   smallEvents: Event[];
   eventIdToExpanded;

   constructor(private eventService: CreateEvents) {
      this.events = this.eventService.getEvents();
      this.smallEvents = [];
      this.eventIdToExpanded = {};
      for (let i = 0; i < 2; i++) {
         this.smallEvents.push(this.events[i]);
         this.eventIdToExpanded[this.events[i].id] = false;
      }
      console.log(new Date('Mon Nov 11 2019 19:27'));
   }

   expand(id: number) {
      this.eventIdToExpanded[id] = !this.eventIdToExpanded[id];
   }
}
