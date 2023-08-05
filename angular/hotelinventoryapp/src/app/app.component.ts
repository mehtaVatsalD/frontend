import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hinv-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',

  // can also provide inline html, css, scss etc.

  // template: '<h1>Hello Angular!</h1>',
  // template: `<h1>Hello Angular!</h1>
  // <h2>Angular app name: {{title}}</h2>`,
  // styles: [
  //   `h1 {
  //     color: blueviolet;
  //   }`,
  //   `h2 {
  //     color: red;
  //   }`
  // ]
})
export class AppComponent implements OnInit, OnDestroy {

  private routerEvents$!: Subscription;

 constructor(private router: Router) {}

  ngOnInit(): void {

    // can filter out based on event's instace type too!
    /*
      For example fiter like 
      event instanceof NavigationStart
    */
    this.routerEvents$ = this.router.events.subscribe(events => {
      // console.log(events);
    });
  }

  ngOnDestroy(): void {
      this.routerEvents$.unsubscribe();
  }



}
