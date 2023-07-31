import { Component } from '@angular/core';
import { ProvidedInAnyServiceDemoService } from '../services/provided-in-any-service-demo.service';

@Component({
  selector: 'hinv-expensereporting',
  templateUrl: './expensereporting.component.html',
  styleUrls: ['./expensereporting.component.scss']
})
export class ExpensereportingComponent {

  // yet another component in lazy loaded module using provided in any service
  constructor(private providedInAnyServiceDemo: ProvidedInAnyServiceDemoService) {

  }

}
