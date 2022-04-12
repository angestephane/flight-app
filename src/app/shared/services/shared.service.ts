import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _filterSearchForm: FormGroup;

  constructor() {}

  public get filterSearchForm(): FormGroup {
    return this._filterSearchForm;
  }
  public set filterSearchForm(value: FormGroup) {
    this._filterSearchForm = value;
  }

  createFilterSearchForm() {
    this._filterSearchForm = new FormGroup({
      compagnie: new FormControl(''),
      modeVoyage: new FormControl(''),
      vole: new FormControl(''),
      avion: new FormControl(''),
      prov: new FormControl(''),
      des: new FormControl(''),
      dateDeMin: new FormControl(''),
      dateDepMax: new FormControl(''),
    });
  }
}
