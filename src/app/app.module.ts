import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeKr from '@angular/common/locales/ko';
registerLocaleData(localeKr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTypedJsModule,
  ],
  providers: [
    AppRoutingModule,
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'KRW',
    },
    // {
    //   provide: LOCALE_ID,
    //   // deps: [I18NEXT_SERVICE],
    //   useValue: 'ko',
    //   // useFactory: localeIdFactory,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
function defaultInterpolationFormat(defaultInterpolationFormat: any) {
  throw new Error('Function not implemented.');
}
