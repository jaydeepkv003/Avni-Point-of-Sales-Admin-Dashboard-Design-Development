import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { ComponentTypes } from '@dynamics/dynamics.constants';
import { FieldConfig, FormInput } from '@dynamics/dynamics.interface';
import { DyFormPopupComponent } from '@dynamics/forms/dy-form-popup/dy-form-popup.component';
import {
  destroySubscriptions,
  pushSubscription,
  SubscriptionObject,
} from '@services/subscriber.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dy-form-extended',
  templateUrl: './dy-form-extended.component.html',
  styleUrls: ['./dy-form-extended.component.scss'],
})
export class DyFormExtendedComponent implements OnDestroy {
  modalRef: BsModalRef;
  formInputData: FormInput;
  formReset = false;
  formSubmit = false;
  reloadData = false;
  dySubForms: FieldConfig[];
  mainFormTitle: string;

  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  // tslint:disable-next-line: no-output-native
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('formPopup', { static: true }) formPopup: DyFormPopupComponent;
  private subList: SubscriptionObject[] = [];

  parentData = null;
  editableData = null;

  @Input() set formInput(data: FormInput) {
    if (data) {
      this.formInputData = data;
      this.dySubForms = data.formConfig.properties.filter(
        (d) => d.componentType === ComponentTypes.SubForm
      );
      this.loadParentData(data.formData);
    }
  }

  @Input() accessDetails;

  loadParentData(data: any): void {
    if (data && data.id) {
      this.parentData = { Data: data.id };
    } else {
      this.parentData = null;
    }
  }

  onSubmit(data: any): void {
    this.loadParentData(data);
    if (!this.dySubForms || !this.dySubForms.length) {
      this.close.next(true);
    }
  }

  onClose(event: any): void {
    this.close.next(true);
  }

  onReset(): void {
    this.formReset = true;
    setTimeout(() => (this.formReset = false), 100);
  }

  forceSubmit(): void {
    this.formSubmit = true;
    setTimeout(() => (this.formSubmit = false), 500);
  }

  openSubForm(config: FieldConfig): void {
    this.formPopup.show({
      formConfig: config.subForm,
      parentData: this.parentData,
      formData: this.editableData,
    });
    this.reloadData = false;
    pushSubscription(
      'DataSub',
      this.subList,
      this.formPopup.submit.subscribe((data) => {
        this.reloadData = true;
        this.editableData = null;
      })
    );
  }

  onOpenFormData(data): void {
    this.editableData = data;
  }

  ngOnDestroy(): void {
    destroySubscriptions(this.subList);
  }
}
