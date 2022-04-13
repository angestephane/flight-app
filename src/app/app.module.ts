import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//other module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlightModule } from './flight/flight.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlightModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
