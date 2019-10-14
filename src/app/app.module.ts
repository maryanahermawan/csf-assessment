import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ValuePassingService } from './services/value-passing.service';
import { HttpRequestService } from './services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form.component';
import { ConfirmationPageComponent } from './components/confirmation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ConfirmationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MaterialModule, ReactiveFormsModule, FlexLayoutModule, HttpClientModule
  ],
  providers: [ValuePassingService, HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
