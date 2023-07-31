import { Directive,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[hinvExpenseemitbgchanger]'
})
export class ExpenseemitbgchangerDirective {

  constructor(private router: Router) {

  }

  // this directive is applied on one component and is being listened here
  @HostListener('emitNumbers', ["$event"]) emitNumberHandler(num: number) {
    // if (num > 10) {
    //   this.router.navigate(['/expenses']);
    // }
    console.log(num);
  }

}
