import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//This Module component
import { MenuGaucheComponent } from './menu-gauche/menu-gauche.component';

//PrimeNg Modules
import { MenuModule } from 'primeng/menu';

import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [MenuGaucheComponent],
  imports: [CommonModule, MenuModule, ToolbarModule],
  exports: [MenuGaucheComponent],
})
export class PortalModule {}
