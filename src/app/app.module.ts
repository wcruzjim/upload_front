import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnvironmentProviders, ErrorHandler, NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './upload/upload.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { DragdropfileModule } from './components/dragdropfile/dragdropfile.module';
import { NgxUiLoaderModule, NgxUiLoaderConfig, POSITION, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';
import { DatetimepickerDirective } from './shared/directives/datetimepicker/datetimepicker.directive';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyMaterialModule } from './material.module';
import { MatomoModule } from 'ngx-matomo';
import { TablaCbzModule } from "./components/tables/tabla-cbz/tabla-cbz.module";
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { ColorPickerModule } from 'ngx-color-picker';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    bgsColor: '#002855',
    fgsColor: '#ffffff',
    pbColor: '#002855',
    bgsPosition: POSITION.bottomCenter,
    bgsSize: 20,
    fgsSize: 20,
    bgsOpacity: 0.5,
    overlayColor: 'rgba(9, 46, 89, 0.5)',
    bgsType: SPINNER.pulse, // background spinner type
    fgsType: SPINNER.pulse, // foreground spinner type
    pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
    pbThickness: 5, // progress bar thickness
    hasProgressBar: true,
    logoPosition: "center-center",
    logoSize: 250,
    logoUrl: "assets/img/preloader.png"
};


const enable_sentry :boolean = false;

export function createTranslateLoader(http: HttpClient) {
return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

let providersList : Array<Provider | EnvironmentProviders> =  [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    }
]



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ComponentsModule,
        // ColorPickerModule,
        RouterModule,
        MyMaterialModule,
        DragdropfileModule,
        HttpClientModule,
        TablaCbzModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        MatomoModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        HttpClientXsrfModule.withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'XSRF-TOKEN'
        }),
        // LanguageTranslationModule
    ],
    declarations: [	
        AppComponent,
        UploadComponent,
        DatetimepickerDirective
    ],
    providers: providersList,
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }