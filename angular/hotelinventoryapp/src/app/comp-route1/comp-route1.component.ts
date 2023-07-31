import { Component } from '@angular/core';
import { ProvidedInAnyServiceDemoService } from '../services/provided-in-any-service-demo.service';

@Component({
  selector: 'hinv-comp-route1',
  templateUrl: './comp-route1.component.html',
  styleUrls: ['./comp-route1.component.scss']
})
export class CompRoute1Component {

  // non lazy loaded module using service that has providedIn = any
  constructor(private providedInAnyServiceDemo: ProvidedInAnyServiceDemoService) {}

}
