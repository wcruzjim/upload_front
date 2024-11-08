import { NgModule } from '@angular/core';
import { ClosemodalbuttonComponent } from './closemodalbutton.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [MatDialogModule],
    exports: [ClosemodalbuttonComponent],
    declarations: [ClosemodalbuttonComponent],
    providers: []
})
export class CloseModalModule { }
