import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

interface Voyage {
  name: string;
}

@Component({
  selector: 'search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css'],
})
export class SearchFlightComponent implements OnInit {
  searchFlightForm: FormGroup;

  //Select option array
  company: Array<Voyage>;
  typeVoyage: Array<Voyage>;
  typeVole: Array<Voyage>;

  //Style customize variable
  showDateRetour = true;

  //set date : date min and date max
  minDateValue: Date = new Date('31/12/20');
  maxDateValue: Date = new Date('31/12/25');

  constructor(private readonly sharedService: SharedService) {
    this.company = [
      { name: 'Air France' },
      { name: 'Air Corsica' },
      { name: 'Air Senegal' },
      { name: 'Royal Air Cargo' },
    ];

    this.typeVoyage = [{ name: 'Allez simple' }, { name: 'Allez retour' }];
    this.typeVole = [
      { name: 'vol direct' },
      { name: 'vol par correspondance' },
    ];
  }

  //initial FormGroup from service
  ngOnInit(): void {
    this.sharedService.createFilterSearchForm();
    this.searchFlightForm = this.sharedService.filterSearchForm;
    console.log(this.searchFlightForm);
  }

  /**
   * TODOs : reset this form
   * @param flightForm
   */
  resteForm(flightForm: FormGroup) {
    flightForm.reset();
  }

  /**
   * TODO : get our form values
   */
  searchFlight() {
    const searchFlightValue = this.searchFlightForm;
    console.log(searchFlightValue);
  }

  /**
   *TODO : Allow to hide or display date depart field in form
   *TODO : si la valeur sélectionnée est 'Allez simple' le champs
   *TODO : Le champs date retour sera masqué
   * @param value
   */
  checkValueSelected(value: string): void {
    if (value === 'Allez simple') {
      this.showDateRetour = false;
    } else {
      this.showDateRetour = true;
    }
  }
}
