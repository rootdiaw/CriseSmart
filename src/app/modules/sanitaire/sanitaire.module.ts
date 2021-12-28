import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanitaireRoutingModule } from './sanitaire-routing.module';
import { NewSanitaireComponent } from './new-sanitaire/new-sanitaire.component';


@NgModule({
  declarations: [NewSanitaireComponent],
  imports: [
    CommonModule,
    SanitaireRoutingModule
  ]
})
export class SanitaireModule { }
