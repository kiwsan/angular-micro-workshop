import {ModuleWithProviders, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {HttpResponseInterceptor} from './http.interceptor';
import {HttpResponseHandler} from './http-response-handler.service';
import {ApiService} from './api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule]
})
export class HttpServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpServiceModule,
      providers: [
        ApiService,
        HttpResponseHandler,
        {provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true}
      ]
    };
  }
}
