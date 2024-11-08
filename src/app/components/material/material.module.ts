import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatSelectSearchModule } from '../../../app/shared/mat-select-search/mat-select-search.module';
// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// Material Popups & Modals
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatRadioModule,
        MatInputModule,
        MatMenuModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule ,
        MatSelectModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatListModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        // MatSelectSearchModule,
        MatSliderModule,
        MatTooltipModule,
        MatTabsModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatButtonModule
    ],
    exports: [ 
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatRadioModule,
        MatInputModule,
        MatMenuModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule ,
        MatSelectModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatListModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        // MatSelectSearchModule,
        MatSliderModule,
        MatTooltipModule,
        MatTabsModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatButtonModule
    ],
    declarations: [],
    providers: []
})
export class MaterialSharedModule { }
