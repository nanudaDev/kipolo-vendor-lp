import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTypedJsModule,
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
function defaultInterpolationFormat(defaultInterpolationFormat: any) {
  throw new Error('Function not implemented.');
}
