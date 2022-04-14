import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'menu-gauche',
  templateUrl: './menu-gauche.component.html',
  styleUrls: ['./menu-gauche.component.css'],
})
export class MenuGaucheComponent implements OnInit {
  items: Array<MenuItem>;
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Accueil', icon: 'pi pi-home' },
      { label: 'Voir les vols', icon: 'pi pi-external-link' },
      { label: 'Statistic', icon: 'pi pi-chart-line' },
      { label: 'Favoris', icon: 'pi pi-bookmark-fill' },
      { label: 'Déconnexion', icon: 'pi pi-power-off' },
    ];
  }
}
