import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/events/events.service';
import { Event } from '../../services/events/event';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {
  event: Event;
  eventId: string;
  isCreator: boolean;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.eventId = params['id'];
    this.eventsService.get(this.eventId).subscribe(res => {
      this.event = res;
      this.isCreator = this.eventsService.isEventCreator(this.event._creator);
    });
  }

}
