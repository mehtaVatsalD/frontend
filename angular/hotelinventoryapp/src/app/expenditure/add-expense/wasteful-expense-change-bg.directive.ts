import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[hinvWastefulExpenseChangeBg]',
})
export class WastefulExpenseChangeBgDirective implements OnChanges {
  @Input() wastefulExpense: boolean = false;
  @HostBinding('style.backgroundColor') backgroundColor: string = '#fafafa';

  // @Output() emitNumbers = interval(1000);
  // @HostListener('emit', ["$event"]) emitNumberHandler(num: number) {
  //   console.log(num);
  // }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this can give example why not to subscribe!
    // this.emitNumbers.subscribe(val => console.log("Wil never die! -> " + val));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['wastefulExpense']) {
      // this.elementRef.nativeElement.style.backgroundColor = changes["wastefulExpense"].currentValue ? '#f8e5e4' : '#c6e5d7'
      // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', changes["wastefulExpense"].currentValue ? '#f8e5e4' : '#c6e5d7');
      this.backgroundColor = changes['wastefulExpense'].currentValue
        ? '#f8e5e4'
        : '#c6e5d7';
    }
  }
}
