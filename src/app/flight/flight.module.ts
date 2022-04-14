import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//This Module Component
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FlightComponent } from './pages/flight/flight.component';
import { FlightPageComponent } from './pages/flight-page/flight-page.component';

//PrimeNg Module
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { BadgeModule } from 'primeng/badge';

//My App Modules
import { PortalModule } from '../portal/portal.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [FlightListComponent, FlightComponent, FlightPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    TableModule,
    PaginatorModule,
    FieldsetModule,
    DividerModule,
    BadgeModule,
    ButtonModule,

    SharedModule,
    PortalModule,
  ],
  exports: [FlightListComponent, FlightComponent],
})
export class FlightModule {}
