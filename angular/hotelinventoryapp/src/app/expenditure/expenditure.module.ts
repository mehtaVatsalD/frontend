import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenditureRoutingModule } from './expenditure-routing.module';
import { WastefulExpenseChangeBgDirective } from './add-expense/wasteful-expense-change-bg.directive';
import { ExpenseemitbgchangerDirective } from './expenseemitter/expenseemitbgchanger.directive';
import { ExpenseemitterComponent } from './expenseemitter/expenseemitter.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AllExpensesComponent } from './all-expenses/all-expenses.component';
import { AddExpenseReactiveComponent } from './add-expense-reactive/add-expense-reactive.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ErrorStateMatcher } from '@angular/material/core'; 
import { TouchedErrorStateMatcher } from './touched-error-state.matcher';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NotTestTextValidatorDirective } from './validators/not-test-text-validator.directive';



@NgModule({
  declarations: [
    WastefulExpenseChangeBgDirective,
    ExpenseemitterComponent,
    ExpenseemitbgchangerDirective,
    AddExpenseComponent,
    AllExpensesComponent,
    ExpenseemitbgchangerDirective,
    AddExpenseReactiveComponent,
    NotTestTextValidatorDirective,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
    ExpenditureRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    // this component is being used by junk component which is part of main app module.
    // As this component is to be used outside this module, it needs to be exported using
    // this mechanism!
    AllExpensesComponent 
  ],
  providers: [
    // be default mat error is only shown when input is touched and is left in invalid state.
    // this provide helps in showing errors immediately without waiting for input to be left.
    {provide: ErrorStateMatcher, useClass: TouchedErrorStateMatcher}
  ]
})
export class ExpenditureModule { }
