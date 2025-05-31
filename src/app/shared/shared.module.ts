import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbsharedModule } from '../ngbshared/ngbshared.module';
import { Ng5SliderModule } from 'ng5-slider';
import { SwitchComponent } from './switch/switch.component';
import { NumDirective } from './directives/num.directive';
import { AlphaspaceDirective } from './directives/alphaspace.directive';
import { AddressPipe } from './pipes/address.pipe';
import { AgePipe } from './pipes/age.pipe';
import { ChartsModule } from 'ng2-charts';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImageSrcPipe } from './pipes/image-src.pipe';
import { FileUploadModule } from 'ng2-file-upload';
import { Loader } from './loader/loader.component';
import { RequestCategoryPipe } from './pipes/requestCategory.pipe';
import { ErrorsComponent } from './errors/errors.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxDateRangeModule } from 'ngx-daterange';



@NgModule({
  declarations: [ErrorsComponent, SwitchComponent, NumDirective, AlphaspaceDirective, AddressPipe, AgePipe, ImageSrcPipe, Loader, RequestCategoryPipe, PaginationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    NgbsharedModule,
    ChartsModule,
    NgSelectModule,
    NgxDateRangeModule,

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    NgbsharedModule,
    SwitchComponent,
    ErrorsComponent,
    NumDirective,
    AlphaspaceDirective,
    AddressPipe,
    AgePipe,
    ChartsModule,
    NgSelectModule,
    ImageSrcPipe,
    FileUploadModule,
    Loader,
    RequestCategoryPipe,
    PaginationComponent,
    NgxDateRangeModule,

  ]
})
export class SharedModule { }
