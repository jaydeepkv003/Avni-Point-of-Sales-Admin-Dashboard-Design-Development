import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FieldConfig } from '@dynamics/dynamics.interface';
import { ComponentMapper } from '@dynamics/form.mapper';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[dyFormField]',
})
export class DyFormFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  @Input() form: FormGroupDirective;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if (ComponentMapper[this.field.componentType]) {
      const factory = this.resolver.resolveComponentFactory(
        ComponentMapper[this.field.componentType]
      );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
      this.componentRef.instance.form = this.form;
    }
  }
}
