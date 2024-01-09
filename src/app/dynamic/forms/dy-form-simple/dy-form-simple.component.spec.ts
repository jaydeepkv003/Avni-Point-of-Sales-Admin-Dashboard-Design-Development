import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyFormSimpleComponent } from './dy-form-simple.component';

describe('DyFormSimpleComponent', () => {
  let component: DyFormSimpleComponent;
  let fixture: ComponentFixture<DyFormSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DyFormSimpleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyFormSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
