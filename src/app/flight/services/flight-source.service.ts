import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../../models/flight.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightSourceService {
  constructor(private http: HttpClient) {}

  getFlightData(): Observable<Flight[]> {
    return this.http.get<Flight[]>('../../../assets/data/data.json');
  }
}
