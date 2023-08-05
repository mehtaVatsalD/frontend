import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JunkService {

  private allowJunk: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toggleAllowJunk(newVal: boolean) {
    this.allowJunk.next(newVal);
  }

  getAllowJunk(): Observable<boolean> {
    return this.allowJunk.asObservable();
  }
}
