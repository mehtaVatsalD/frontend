import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllExpensesComponent } from './all-expenses/all-expenses.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';

const routes: Routes = [
  {path: '', title: "All Expenses", component: AllExpensesComponent, children: [
    {path: 'samePageNew', title: "New Expense", component: AddExpenseComponent}
  ]},
  {path: 'new', title: "New Expense", component: AddExpenseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenditureRoutingModule { }
