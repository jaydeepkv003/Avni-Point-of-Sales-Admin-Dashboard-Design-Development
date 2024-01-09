import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyFormModelComponent } from './dy-form-model.component';

describe('DyFormModelComponent', () => {
  let component: DyFormModelComponent;
  let fixture: ComponentFixture<DyFormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DyFormModelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyFormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
