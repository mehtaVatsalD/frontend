import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Expense } from '../models/expenses';
import { Observable } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ProvidedInAnyServiceDemoService } from 'src/app/services/provided-in-any-service-demo.service';

@Component({
  selector: 'hinv-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.scss']
})
export class AllExpensesComponent {


  samePageAddExpenseView = false;

  allExpenses$: Observable<Expense[]> = this.httpClient.get<Expense[]>("/api/v1/expenses");

  // non lazy loaded module using service (ProvidedInAnyServiceDemoService) that has providedIn = any
  constructor(private httpClient: HttpClient, private providedInAnyServiceDemo: ProvidedInAnyServiceDemoService) { }

  toggleSamePageAddExpenseView(value: MatSlideToggleChange) {
    this.samePageAddExpenseView = value.checked;
  }

}
