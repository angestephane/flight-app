import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFlightComponent } from './shared/components/search-flight/search-flight.component';
import { FlightListComponent } from './flight/components/flight-list/flight-list.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchFlightComponent,
  },
  {
    path: 'liste',
    component: FlightListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
