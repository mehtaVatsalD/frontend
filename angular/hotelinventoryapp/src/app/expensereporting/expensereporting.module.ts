import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensereportingRoutingModule } from './expensereporting-routing.module';
import { ExpensereportingComponent } from './expensereporting.component';


@NgModule({
  declarations: [
    ExpensereportingComponent
  ],
  imports: [
    CommonModule,
    ExpensereportingRoutingModule
  ]
})
export class ExpensereportingModule { }
