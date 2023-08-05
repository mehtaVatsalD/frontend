import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Expense } from '../models/expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private expenses: Expense[] = []
  private subject!: Subject<Expense[]>;
  private subscriptions: Subscription[] = [];

  constructor(private httpClient: HttpClient) {}

  clearSubs() {
    this.subscriptions.forEach(subs => subs.unsubscribe());
    this.subscriptions = [];
  }

  addExpense(expense: Expense) {
    this.subject.next(
      [expense, ...this.expenses]
    );
  }

  getExpensesSubject() {
    this.subject = new Subject<Expense[]>();
    this.subscriptions.push(this.httpClient.get<Expense[]>("/api/v1/expenses").subscribe({
      next: (expenses) => this.subject.next(expenses)
    }));

    this.subscriptions.push(
      this.subject.subscribe(expenses => {console.log(`expenses-> ${JSON.stringify(expenses)}`); this.expenses = expenses}, error => {}, () => {
        console.log("Doneee1")
      })
    );
    return this.subject;
  }
}
