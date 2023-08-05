import { Component, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'hinv-expenseemitter',
  templateUrl: './expenseemitter.component.html',
  styleUrls: ['./expenseemitter.component.scss'],
  exportAs: 'expenseEmit'
})
export class ExpenseemitterComponent {

  someVarToBeAccessedUsingTempRefVar: boolean  = false;
  @Output() emitNumbers = interval(100000000);
}
