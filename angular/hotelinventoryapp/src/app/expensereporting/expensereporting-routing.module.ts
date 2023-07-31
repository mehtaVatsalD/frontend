import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensereportingComponent } from './expensereporting.component';

const routes: Routes = [{ path: '', component: ExpensereportingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensereportingRoutingModule { }
