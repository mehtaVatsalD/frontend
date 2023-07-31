import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynacompComponent } from './dynacomp.component';

describe('DynacompComponent', () => {
  let component: DynacompComponent;
  let fixture: ComponentFixture<DynacompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynacompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynacompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
