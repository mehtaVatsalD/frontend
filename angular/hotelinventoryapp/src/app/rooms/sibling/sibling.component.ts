import { Component, Input } from '@angular/core';

@Component({
  selector: 'hinv-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent {

  @Input() badData: string = 'bad data';
  @Input() goodData: string = 'good data';
}
