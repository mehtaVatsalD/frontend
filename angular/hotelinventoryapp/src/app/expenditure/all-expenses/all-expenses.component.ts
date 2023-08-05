import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Expense } from '../models/expenses';
import { Observable, Subject, Subscription } from 'rxjs';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ProvidedInAnyServiceDemoService } from 'src/app/services/provided-in-any-service-demo.service';
import { NewExpenseSamePageService } from '../services/new-expense-same-page.service';
import { ExpensesService } from '../services/expenses.service';

@Component({
  selector: 'hinv-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.scss']
})
export class AllExpensesComponent implements OnDestroy {

  allExpenses!: Expense[];
  subscription: Subscription;

  // non lazy loaded module using service (ProvidedInAnyServiceDemoService) that has providedIn = any
  constructor(private httpClient: HttpClient, private providedInAnyServiceDemo: ProvidedInAnyServiceDemoService, private newExpenseSamePageService: NewExpenseSamePageService
    , private expensesService: ExpensesService) {
      this.subscription = expensesService.getExpensesSubject().subscribe(expenses => this.allExpenses = expenses);
    }


  toggleSamePageAddExpenseView(value: MatSlideToggleChange) {
    this.newExpenseSamePageService.toggleSamePageAddExpenseView(value);
  }

  amOnSamePageAddNew(): boolean {
    return this.newExpenseSamePageService.amOnSamePageAddNew();
  }

  ngOnDestroy(): void {
      this.expensesService.clearSubs();
      this.subscription.unsubscribe();
  }

}
