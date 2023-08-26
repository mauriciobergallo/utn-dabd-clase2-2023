import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludadorComponent } from './saludador.component';
import { PadreComponent } from './padre.component';
import { HijoComponent } from './hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludadorComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
