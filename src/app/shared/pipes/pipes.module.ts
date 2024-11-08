import { NgModule } from "@angular/core";
import { FilterPipe } from "./filter.pipe";
import { StatusPipe } from "./status.pipe";
import { SafePipe } from "./safe.pipe";
import { TimeAgoPipe, CustomDateFormatPipe } from "./time-ago.pipe";

@NgModule({
	imports: [],
	exports: [
		FilterPipe,
		StatusPipe,
		SafePipe,
		TimeAgoPipe,
		CustomDateFormatPipe,
	],
	declarations: [
		FilterPipe,
		StatusPipe,
		SafePipe,
		TimeAgoPipe,
		CustomDateFormatPipe,
	],
	providers: [],
})
export class PipesModule {}
