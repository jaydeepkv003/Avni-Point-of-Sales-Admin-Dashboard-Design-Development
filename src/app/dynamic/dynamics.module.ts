import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicsService } from '@services/dynamics.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ArchwizardModule } from 'angular-archwizard';
import { EmailEditorModule } from 'angular-email-editor';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BootstrapModule } from './bootstrap.module';
import { DyFormExtendedComponent } from './forms/dy-form-extended/dy-form-extended.component';
import { DyFormFieldDirective } from './forms/dy-form-field/dy-form-field.directive';
import { DyFormModelComponent } from './forms/dy-form-model/dy-form-model.component';
import { DyFormPopupComponent } from './forms/dy-form-popup/dy-form-popup.component';
import { DyFormSimpleComponent } from './forms/dy-form-simple/dy-form-simple.component';

@NgModule({
  declarations: [
    DyFormSimpleComponent,
    DyFormPopupComponent,

    DyFormFieldDirective,

    DyFormExtendedComponent,
    DyFormModelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    BootstrapModule,
    NgSelectModule,
    NgxDatatableModule,
    DropzoneModule,
    RoundProgressModule,
    PerfectScrollbarModule,
    ZXingScannerModule,
    EmailEditorModule,
    ArchwizardModule,
  ],
  exports: [
    DyFormSimpleComponent,
    DyFormPopupComponent
  ],
  providers: [DynamicsService],
})
export class DynamicsModule {}
