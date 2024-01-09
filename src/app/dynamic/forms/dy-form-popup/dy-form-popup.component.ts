import { Component, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { FormInput } from '@dynamics/dynamics.interface';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dy-form-popup',
  templateUrl: './dy-form-popup.component.html',
  styleUrls: ['./dy-form-popup.component.scss'],
  providers: [BsModalService],
})
export class DyFormPopupComponent {
  modalRef: BsModalRef;
  formInput: FormInput;
  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  submit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private modalService: BsModalService) {}

  show(formInput?: FormInput): void {
    if (formInput) {
      this.formInput = formInput;
    }
    this.modalRef = this.modalService.show(this.template, {
      backdrop: true,
      ignoreBackdropClick: true,
      class: 'modal-right',
    });
  }

  onSubmit(event: any): void {
    this.submit.next(event);
    this.modalRef.hide();
  }

  onClose(event: any): void {
    this.modalRef.hide();
  }
}
