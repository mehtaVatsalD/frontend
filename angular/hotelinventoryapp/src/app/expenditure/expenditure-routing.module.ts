import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllExpensesComponent } from './all-expenses/all-expenses.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { NewExpenseSamePageGuard } from './guards/new-expense-same-page.guard';
import { AddExpenseReactiveComponent } from './add-expense-reactive/add-expense-reactive.component';

const routes: Routes = [
  {
    path: '', title: "All Expenses", component: AllExpensesComponent, canActivateChild: [() => inject(NewExpenseSamePageGuard).canActivateChild()], children: [
      {
        path: 'samePageNew', title: "New Expense", component: AddExpenseReactiveComponent
      }
    ]
  },
  { path: 'new', title: "New Expense", component: AddExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenditureRoutingModule { }
