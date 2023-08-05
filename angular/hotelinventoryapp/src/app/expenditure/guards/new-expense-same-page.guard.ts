import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NewExpenseSamePageService } from '../services/new-expense-same-page.service';

@Injectable({
  providedIn: 'root'
})
export class NewExpenseSamePageGuard {

  constructor(private newExpenseSamePageService: NewExpenseSamePageService, private router: Router) {}
  canActivateChild() {
    if (!this.newExpenseSamePageService.amOnSamePageAddNew()) {
      this.router.navigate(['/expenses'])
    }
    return true;
  }
  
}
