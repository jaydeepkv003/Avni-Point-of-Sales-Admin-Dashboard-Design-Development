import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyFormExtendedComponent } from './dy-form-extended.component';

describe('DyFormExtendedComponent', () => {
  let component: DyFormExtendedComponent;
  let fixture: ComponentFixture<DyFormExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DyFormExtendedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyFormExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
