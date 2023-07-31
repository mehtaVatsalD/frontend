import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseemitterComponent } from './expenseemitter.component';

describe('ExpenseemitterComponent', () => {
  let component: ExpenseemitterComponent;
  let fixture: ComponentFixture<ExpenseemitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseemitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseemitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
