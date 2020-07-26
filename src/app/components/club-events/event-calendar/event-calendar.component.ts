import { Component } from '@angular/core';
import { CreateEvents } from 'src/app/core/services/createEvents.service';
import { Event } from 'src/app/core/models/event';

@Component({
   selector: 'app-event-calendar',
   templateUrl: './event-calendar.component.html'
})
export class EventCalendarComponent {
   events: Event[];
   eventIdToExpanded;

   constructor(private eventService: CreateEvents) {
      this.eventIdToExpanded = {};
      this.events = this.eventService.getEvents();
      for (let event of this.events) {
         this.eventIdToExpanded[event.id] = false;
      }
   }

   expand(id: number) {
      this.eventIdToExpanded[id] = !this.eventIdToExpanded[id];
   }
}
