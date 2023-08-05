import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';
import { JunkService } from '../junk/junk.service';

@Injectable({
  providedIn: 'root'
})
export class JunkGuard implements CanActivate, CanLoad {

  constructor(private junkService: JunkService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return firstValueFrom(this.junkService.getAllowJunk()).then(val => {
      if (!val) {
        this.router.navigate(['/route1'])
      }
      return val;
    })
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
