import { ExampleService } from './services/example.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptor } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [ExampleService,
  {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi:true}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
