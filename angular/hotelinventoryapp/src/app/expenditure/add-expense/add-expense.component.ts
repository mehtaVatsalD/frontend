import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Expense, NewExpense } from '../models/expenses';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { interval, lastValueFrom } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ExpensesService } from '../services/expenses.service';
import { NewExpenseSamePageService } from '../services/new-expense-same-page.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent {
  newExpense: NewExpense = {
    amount: 0,
    description: '',
    tags: '',
    wastefulExpense: false,
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private expensesService: ExpensesService,
    private newExpenseSamePageService: NewExpenseSamePageService
  ) {}

  // @Output() emit = interval(5000);

  addNewExpense(addExpenseForm: NgForm) {
    const splittedTags = this.newExpense.tags
      .split(',')
      .map((tag) => tag.trim());
    console.log(splittedTags);
    const addNewExpenseResponseObservable = this.httpClient.post<Expense>(
      '/api/v1/expenses',
      {
        amount: this.newExpense.amount,
        description: this.newExpense.description,
        tags: splittedTags,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    lastValueFrom(addNewExpenseResponseObservable).then((expenseAdded) => {
      this.expensesService.addExpense(expenseAdded);
      addExpenseForm.reset();
      if (this.newExpenseSamePageService.amOnSamePageAddNew()) {
        this.router.navigate(['/expenses/samePageNew']);
      } else {
        this.router.navigate(['/expenses']);
      }
    });
    // can provide any sub url parts in navigate method like this.router.navigate(['/expenses', 'lol', 'haha', 1, false])
    // there is also other method called navigateByUrl
    //reset and resetForm could be used instead of routing to other view
  }

  wastefulExpenseValChange(value: MatSlideToggleChange) {
    this.newExpense.wastefulExpense = value.checked;
  }
}
