import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragdropfileComponent } from './dragdropfile.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { MyMaterialModule } from '../../../app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    NgxDropzoneModule,
    FormsModule,
    MyMaterialModule,
    FlexLayoutModule
  ],
  exports: [DragdropfileComponent],
  declarations: [DragdropfileComponent],
  providers: []
})
export class DragdropfileModule { }
