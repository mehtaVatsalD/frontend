import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcontainerComponent } from './contcontainer.component';

describe('ContcontainerComponent', () => {
  let component: ContcontainerComponent;
  let fixture: ComponentFixture<ContcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
