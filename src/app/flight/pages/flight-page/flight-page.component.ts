import { Component, OnInit } from '@angular/core';
import { FlightSourceService } from '../../services/flight-source.service';

@Component({
  selector: 'app-flight-page',
  templateUrl: './flight-page.component.html',
  styleUrls: ['./flight-page.component.css'],
})
export class FlightPageComponent implements OnInit {
  value: number = 0;
  totalRecord: number = 0;

  constructor(private fs: FlightSourceService) {}

  ngOnInit(): void {
    this.fs.getFlightData().subscribe({
      next: (data) => (this.totalRecord = data.length),
      error: (err) => console.log('erreur de chargement des données ', err),
    });
    this.getValueRowSelected();
  }

  getValueRowSelected(value?: number) {
    this.value = value;
  }

  countRowSelectedText(value: number): string {
    if (value > 0) {
      if (value > 1) {
        return value + ' Sélections';
      } else {
        return value + ' Sélection';
      }
    }
    return 0 + ' Sélection';
  }
}
