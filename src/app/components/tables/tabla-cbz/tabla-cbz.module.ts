import { NgModule } from '@angular/core';
import { TablaCbzComponent } from './tabla-cbz.component';
import { MaterialSharedModule } from '../../../../app/components/material/material.module';
import { SharedTranslateModule } from '../../../../app/shared/modules/sharedtranslate.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common'; 

@NgModule({
    imports: [
        CommonModule,
        MaterialSharedModule, 
        FormsModule,
        ReactiveFormsModule,
        SharedTranslateModule, 
        MatTableModule], 
    exports: [TablaCbzComponent,SharedTranslateModule],
    declarations: [TablaCbzComponent],
    providers: []
})
export class TablaCbzModule { }
