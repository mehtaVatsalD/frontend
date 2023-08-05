import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomValidators } from '../validators/custom-validators';

@Component({
  selector: 'hinv-add-expense-reactive',
  templateUrl: './add-expense-reactive.component.html',
  styleUrls: ['./add-expense-reactive.component.scss'],
})
export class AddExpenseReactiveComponent implements OnInit, OnDestroy {
  addExpenseForm!: FormGroup;
  private valueChangesSubscription!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addExpenseForm = this.fb.group(
      {
        // same as writing new FormGroup({...}) ?
        amount: ['', [Validators.required, Validators.min(0)]],
        metadata: this.fb.group({
          description: new FormControl('', {
            validators: [
              Validators.required,
              CustomValidators.InvalidTextValTest,
            ],
            updateOn: 'blur', // can use this to change when the validations for this field will occur. This will also affect valueChanges stream
          }),
          // tags: [''], // same as writing new FormControl('')
          tags: this.fb.array(
            [
              this.getTagFormGroup(),
              // see here required is needed if minlength of 1 is to be checked
            ],
            [Validators.required, Validators.minLength(2)]
          ),
        }),
        expenseDate: new FormControl(
          {
            value: new Date(),
            disabled: false,
          },
          [Validators.required]
        ),
      },
      {
        updateOn: 'blur', // to change the way changes are captured and validated for entire form
        validators: [CustomValidators.shouldHaveLargeTag, CustomValidators.shouldHaveLateTag],
      }
    );

    this.valueChangesSubscription = this.addExpenseForm.valueChanges.subscribe({
      next: (data) => console.log(data),
    });
  }

  ngOnDestroy(): void {
    this.valueChangesSubscription.unsubscribe();
  }

  addNewExpense() {
    // value field does not provide the value of those input which have default and are disabled!
    // use getRawValue() instead!
    // console.log(this.addExpenseForm.value);
    console.log(this.addExpenseForm.getRawValue());
  }

  resetForm() {
    this.addExpenseForm.reset({
      expenseDate: new Date(),
    });
  }

  get tags() {
    return this.addExpenseForm.get(['metadata', 'tags']) as FormArray;
  }

  addTag() {
    this.tags.push(this.getTagFormGroup());
  }

  deleteTag(i: number) {
    this.tags.removeAt(i);
  }

  private getTagFormGroup(): FormGroup {
    return this.fb.group({
      tagVal: new FormControl('', [
        Validators.required,
        Validators.pattern('([\\w]+(-[\\w])*)+'),
        CustomValidators.InvalidTextValTest,
        CustomValidators.wordsNotAllowed('adhoc'),
      ]),
    });
  }
}
