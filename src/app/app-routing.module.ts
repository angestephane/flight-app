import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFlightComponent } from './shared/components/search-flight/search-flight.component';
import { FlightListComponent } from './flight/components/flight-list/flight-list.component';
import { FlightPageComponent } from './flight/pages/flight-page/flight-page.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchFlightComponent,
  },
  {
    path: 'liste',
    component: FlightListComponent,
  },
  {
    path: 'flight',
    component: FlightPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
