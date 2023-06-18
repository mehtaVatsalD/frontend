import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowpriocontComponent } from './lowpriocont.component';

describe('LowpriocontComponent', () => {
  let component: LowpriocontComponent;
  let fixture: ComponentFixture<LowpriocontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowpriocontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowpriocontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
