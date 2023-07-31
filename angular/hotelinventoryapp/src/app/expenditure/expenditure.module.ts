import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenditureRoutingModule } from './expenditure-routing.module';
import { WastefulExpenseChangeBgDirective } from './add-expense/wasteful-expense-change-bg.directive';
import { ExpenseemitbgchangerDirective } from './expenseemitter/expenseemitbgchanger.directive';
import { ExpenseemitterComponent } from './expenseemitter/expenseemitter.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { AllExpensesComponent } from './all-expenses/all-expenses.component';


@NgModule({
  declarations: [
    WastefulExpenseChangeBgDirective,
    ExpenseemitterComponent,
    ExpenseemitbgchangerDirective,
    AddExpenseComponent,
    AllExpensesComponent,
    ExpenseemitbgchangerDirective,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    ExpenditureRoutingModule
  ],
  exports: [
    // this component is being used by junk component which is part of main app module.
    // As this component is to be used outside this module, it needs to be exported using
    // this mechanism!
    AllExpensesComponent 
  ]
})
export class ExpenditureModule { }
