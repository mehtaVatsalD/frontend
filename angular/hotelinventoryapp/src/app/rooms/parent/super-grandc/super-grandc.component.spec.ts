import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperGrandcComponent } from './super-grandc.component';

describe('SuperGrandcComponent', () => {
  let component: SuperGrandcComponent;
  let fixture: ComponentFixture<SuperGrandcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperGrandcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperGrandcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
