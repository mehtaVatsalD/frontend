import { Component } from '@angular/core';
import { ProvidedInAnyServiceDemoService } from '../services/provided-in-any-service-demo.service';
import { JunkService } from '../junk/junk.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'hinv-comp-route1',
  templateUrl: './comp-route1.component.html',
  styleUrls: ['./comp-route1.component.scss']
})
export class CompRoute1Component {

  // non lazy loaded module using service that has providedIn = any
  constructor(private providedInAnyServiceDemo: ProvidedInAnyServiceDemoService, private junkService: JunkService) {}

  toggleAllowJunk(newVal: MatSlideToggleChange) {
    this.junkService.toggleAllowJunk(newVal.checked);
  }

  getAllowJunk() {
    return this.junkService.getAllowJunk();
  }

}
