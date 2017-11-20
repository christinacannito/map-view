import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddressViewerComponent } from './address-viewer/address-viewer.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { AddressService }         from './address.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressViewerComponent,
    AddressDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
