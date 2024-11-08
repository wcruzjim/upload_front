import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AlertComponent } from "./alert/alert/alert.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { ConfirmComponent } from "./alert/confirm/confirm.component";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { SimulateComponent } from "./alert/simulate/simulate.component";
import { ExcelService } from "../../app/services/excelservice/excelservice.service";
import { SelectmultsearchComponent } from "./selectmultsearch/selectmultsearch.component";
import { PipesModule } from "../../app/shared/pipes/pipes.module";
import { SharedTranslateModule } from "../../app/shared/modules/sharedtranslate.module";
import { SelectsimplesearchComponent } from "./selectsimplesearch/selectsimplesearch.component";
import { MaterialSharedModule } from "./material/material.module";
import { CloseModalModule } from "./closemodalbutton/closemodalbutton.module";
import { TablaCbzModule } from "./tables/tabla-cbz/tabla-cbz.module";
import { SelectmultisearchComponent } from "./selectmultisearch/selectmultisearch.component";
import { FieldselectviewerComponent } from "./fieldselectviewer/fieldselectviewer.component";
import { ErrorHandlerComponent } from "./errores/error_handler/error_handler.component";
import { DragdropfileModule } from "./dragdropfile/dragdropfile.module";
import { SummaryDragDropComponent } from "./summary-drag-drop/summary-drag-drop.component";
import { MarkdownModule, MarkedOptions } from "ngx-markdown";
import "prismjs";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-highlight/prism-line-highlight.js";
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
import { ColorPickerModule } from "ngx-color-picker";

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialSharedModule,
		ScrollingModule,
		TranslateModule,
		NgxMatSelectSearchModule,
		PipesModule,
		SharedTranslateModule,
		// ColorPickerModule,
		CloseModalModule,
		TablaCbzModule,
		DragdropfileModule,
		ChartModule,
		MarkdownModule.forRoot({
			markedOptions: {
				provide: MarkedOptions,
				useValue: {
					gfm: true,
					tables: true,
					breaks: true,
					pedantic: false,
					sanitize: true,
					smartLists: true,
					smartypants: false,
				},
			},
		})

	],
	declarations: [
		AlertComponent,
		ConfirmComponent,
		SimulateComponent,
		SelectmultsearchComponent,
		SelectsimplesearchComponent,
		SelectmultisearchComponent,
		FieldselectviewerComponent,
		ErrorHandlerComponent,
		SummaryDragDropComponent
	],
	exports: [
		SelectmultsearchComponent,
		SelectsimplesearchComponent,
		TablaCbzModule,
		AlertComponent,
		SelectmultisearchComponent,
		FieldselectviewerComponent,
		DragdropfileModule,
	],
	providers: [ExcelService,
		{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
