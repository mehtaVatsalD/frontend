import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRoutewithsub2Component } from './comp-routewithsub2.component';

describe('CompRoutewithsub2Component', () => {
  let component: CompRoutewithsub2Component;
  let fixture: ComponentFixture<CompRoutewithsub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRoutewithsub2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompRoutewithsub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
