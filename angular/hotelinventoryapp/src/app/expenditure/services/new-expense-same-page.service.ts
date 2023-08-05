import { Injectable } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewExpenseSamePageService {

  private samePageNewExpenseAdd: boolean;

  constructor(private router: Router) {
    this.samePageNewExpenseAdd = true;
  }

  toggleSamePageAddExpenseView(value: MatSlideToggleChange) {
    this.samePageNewExpenseAdd = value.checked;
    this.checkPage();

  }

  public checkPage() {
    if (this.amOnSamePageAddNew())
      this.router.navigate(["/expenses/samePageNew"])
    else
      this.router.navigate(["/expenses"])

  }

  public amOnSamePageAddNew(): boolean {
    return this.samePageNewExpenseAdd;
  }
}
