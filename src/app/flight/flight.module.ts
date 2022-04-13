import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//This Module Component
import { FlightListComponent } from './components/flight-list/flight-list.component';

//PrimeNg Module
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [FlightListComponent],
  imports: [CommonModule, TableModule, HttpClientModule, PaginatorModule],
  exports: [FlightListComponent],
})
export class FlightModule {}
