import { NgModule } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';
import { CommonModule } from '@angular/common';
import { MyMaterialModule } from '../../../app/material.module';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule
  ],
  declarations: [
    MatSelectSearchComponent
  ],
  exports: [
    MyMaterialModule
  ]
})
export class MatSelectSearchModule { }
