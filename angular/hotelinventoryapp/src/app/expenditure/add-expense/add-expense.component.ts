import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewExpense } from '../models/expenses';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { interval, lastValueFrom } from 'rxjs';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

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
    wastefulExpense: false
  }

  constructor(private httpClient: HttpClient, private router: Router) { }

  addNewExpense() {
    const splittedTags = this.newExpense.tags.split(",").map(tag => tag.trim());
    console.log(splittedTags);
    const addNewExpenseResponseObservable = this.httpClient.post("/api/v1/expenses", {
      amount: this.newExpense.amount,
      description: this.newExpense.description,
      tags: splittedTags
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    lastValueFrom(addNewExpenseResponseObservable).then(() => this.router.navigate(['/expenses']));
    // can provide any sub url parts in navigate method like this.router.navigate(['/expenses', 'lol', 'haha', 1, false])
    // there is also other method called navigateByUrl
    //reset and resetForm could be used instead of routing to other view
  }

  wastefulExpenseValChange(value: MatSlideToggleChange) {
    this.newExpense.wastefulExpense = value.checked;
  }
}
