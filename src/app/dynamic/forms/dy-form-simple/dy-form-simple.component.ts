import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormConfig } from '@dynamics/dynamics.interface';
import { FormService } from '@services/form.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dy-form-simple',
  templateUrl: './dy-form-simple.component.html',
  styleUrls: ['./dy-form-simple.component.scss'],
  providers: [FormService],
})
export class DyFormSimpleComponent {
  @Input() set formConfig(form: FormConfig) {
    if (form && form.properties) {
      this.formService.onLoadForm(form, {});
    }
  }
  @Input() set reset(value: boolean) {
    if (value) {
      this.formService.dyForm.reset();
    }
  }

  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  get value(): any {
    return this.formService.dyForm.value;
  }

  constructor(public formService: FormService) {}

  onSubmit(event: Event): void {
    if (this.formService.isValidForm(event)) {
      this.submit.emit(this.formService.dyForm.value);
    }
  }
}
