import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensereportingComponent } from './expensereporting.component';

describe('ExpensereportingComponent', () => {
  let component: ExpensereportingComponent;
  let fixture: ComponentFixture<ExpensereportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensereportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensereportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
