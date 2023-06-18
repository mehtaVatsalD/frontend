import { Component, Input } from '@angular/core';

@Component({
  selector: 'hinv-super-grandc',
  templateUrl: './super-grandc.component.html',
  styleUrls: ['./super-grandc.component.scss']
})
export class SuperGrandcComponent {


  @Input() badData: string = 'bad data';
  @Input() goodData: string = 'good data';




}
