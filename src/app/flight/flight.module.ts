import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//This Module Component
import { FlightListComponent } from './components/flight-list/flight-list.component';

//PrimeNg Module
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FlightComponent } from './pages/flight/flight.component';
import { FlightPageComponent } from './pages/flight-page/flight-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FlightListComponent, FlightComponent, FlightPageComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    PaginatorModule,
    SharedModule,
  ],
  exports: [FlightListComponent, FlightComponent],
})
export class FlightModule {}
