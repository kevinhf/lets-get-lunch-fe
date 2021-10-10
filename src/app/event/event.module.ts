import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventCreateComponent } from './event-create/event-create.component';

import { ReactiveFormsModule } from '@angular/forms';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { EventViewComponent } from './event-view/event-view.component';

import { CommentCreateModule } from '../comment-create/comment-create.module';

import { MemberListModule } from '../member-list/member-list.module';

import { RecommendationsListModule } from '../recommendations-list/recommendations-list.module';
import { EventUpdateComponent } from './event-update/event-update.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    CommentCreateModule,
    MemberListModule,
    RecommendationsListModule
  ],
  declarations: [EventCreateComponent, EventViewComponent, EventUpdateComponent]
})
export class EventModule { }
