import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[hinvNotTestTextValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NotTestTextValidatorDirective,
      multi: true
    }
  ]
})
export class NotTestTextValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
      const val = control.value as string;
      if (val && val.includes("test")) {
        return {
          containsTestInText: true
        }
      }
      return null;
  }

}
