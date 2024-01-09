import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyFormPopupComponent } from './dy-form-popup.component';

describe('DyFormPopupComponent', () => {
  let component: DyFormPopupComponent;
  let fixture: ComponentFixture<DyFormPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DyFormPopupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyFormPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
