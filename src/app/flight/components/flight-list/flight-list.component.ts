import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { FlightSourceService } from '../../services/flight-source.service';

@Component({
  selector: 'flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent implements OnInit {
  flights: Array<Flight>;
  cols: Array<any>;

  selectedFlight: Array<Flight>;

  constructor(private flightData: FlightSourceService) {}

  ngOnInit(): void {
    this.flightData.getFlightData().subscribe({
      next: (flight) => (this.flights = flight) /* ,
        this.flights.map((data) => {
          console.log(data);
        }) */,
      error: (err) => console.log('erreur de chargement ' + err),
    });
  }

  /**
   * TODO Récupération des ligne désélectionnées
   * @param event
   * !Pour toutes ces méthodes voir la doc de primeNg
   * !https://www.primefaces.org/primeng/table/selection
   */
  onRowSelect(event: any) {
    console.log('event data : ', this.selectedFlight);
  }

  /**
   * TODO Récupération des ligne désélectionnées
   * @param event
   */
  onRowUnselect(event: any) {
    console.log('row unselect : ', this.selectedFlight);
  }

  /**
   * TODO récupère tous les éléments du tableau si
   * TODO checkValue est true
   * @param checkValue
   */
  selectRow(checkValue: boolean) {
    if (checkValue) {
      this.selectedFlight = this.flights;
      console.log(this.selectedFlight);
    }
  }
}
