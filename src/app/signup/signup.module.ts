import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignupRoutingModule } from '../signup/signup-routing.module';
import { SignupComponent } from '../signup/signup.component';


@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule
  ],
  declarations: [SignupComponent]
})

export class SignupModule { }
