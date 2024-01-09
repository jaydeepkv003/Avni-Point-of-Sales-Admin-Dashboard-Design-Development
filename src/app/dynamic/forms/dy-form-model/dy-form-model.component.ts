import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormInput } from '@dynamics/dynamics.interface';
import { FormService } from '@services/form.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dy-form-model',
  templateUrl: './dy-form-model.component.html',
  styleUrls: ['./dy-form-model.component.scss'],
  providers: [FormService],
})
export class DyFormModelComponent {
  constructor(public formService: FormService) {}

  @Input() set formConfig(formInput: FormInput) {
    if (formInput) {
      if (formInput.parentData) {
        let patchData = {};
        const parentFields = formInput.formConfig.properties.filter(
          (d) => d.notInSubForm === true
        );
        parentFields.forEach((field) => {
          patchData = { ...patchData, [field.name]: formInput.parentData.Data };
        });
        formInput.formData = { ...formInput.formData, ...patchData };
      }
      this.formService.onLoadForm(formInput.formConfig, formInput.formData);
    }
  }

  @Input() set reset(value: boolean) {
    if (value) {
      this.formService.dyForm.reset();
    }
  }

  @Input() isPopup = false;

  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  // tslint:disable-next-line: no-output-native
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  async onSubmit(event: Event): Promise<void> {
    if (this.formService.dyFormConfig.isSave) {
      if (await this.formService.onSubmit(event)) {
        this.submit.next(this.formService.savedData);
        this.formService.onLoadForm(
          this.formService.dyFormConfig,
          this.formService.savedData
        );
      }
    } else if (this.formService.dyFormConfig.isSearch) {
      if (await this.formService.onSearch(event)) {
        this.submit.next(this.formService.dyForm.value);
      }
    } else if (this.formService.dyFormConfig.isExport) {
      if (await this.formService.onSearch(event)) {
        if (await this.formService.onExport(event)) {
          this.submit.next(true);
        }
      }
    } else {
      if (await this.formService.onSubmit(event, false)) {
        this.submit.next(true);
      }
    }
  }

  onReset(): void {
    this.formService.onLoadForm(
      this.formService.dyFormConfig,
      this.formService.defaultData
    );
  }

  onClose(): void {
    this.close.next(true);
  }
}
