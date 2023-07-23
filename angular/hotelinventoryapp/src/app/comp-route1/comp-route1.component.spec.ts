import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRoute1Component } from './comp-route1.component';

describe('CompRoute1Component', () => {
  let component: CompRoute1Component;
  let fixture: ComponentFixture<CompRoute1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRoute1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompRoute1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
