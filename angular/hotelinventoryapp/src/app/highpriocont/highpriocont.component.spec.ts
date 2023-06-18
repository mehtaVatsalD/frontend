import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighpriocontComponent } from './highpriocont.component';

describe('HighpriocontComponent', () => {
  let component: HighpriocontComponent;
  let fixture: ComponentFixture<HighpriocontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighpriocontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighpriocontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
