import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import events from '../mocks/events.json';

@Injectable()
export class CreateEvents {
   events: Event[];

   constructor() {
      this.events = events;
   }

   getEvents(): Event[] {
      return this.events;
   }
}