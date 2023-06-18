import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hinv-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  @Input() badData: string = 'bad data';
  @Input() goodData: string = 'good data';
  @Output() goodDataChanger = new EventEmitter<string>();

  caseCntr: number = 0;
  changeBadData : () => void = () => {
    this.badData = this.caseCntr%2 == 0 ? this.badData.toUpperCase() : this.badData.toLowerCase();
    this.caseCntr++;
  }

  changeGoodData : () => void = () => {
    this.goodDataChanger.emit(this.goodData)
  }

}
