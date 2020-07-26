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
         if (i < this.events.length) {
            this.smallEvents.push(this.events[i]);
            this.eventIdToExpanded[this.events[i].id] = false;
         }  
      }
   }

   expand(id: number) {
      this.eventIdToExpanded[id] = !this.eventIdToExpanded[id];
   }
}
