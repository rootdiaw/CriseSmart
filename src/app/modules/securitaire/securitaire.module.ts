import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuritaireRoutingModule } from './securitaire-routing.module';
import { NewSecuritaireComponent } from './new-securitaire/new-securitaire.component';


@NgModule({
  declarations: [NewSecuritaireComponent],
  imports: [
    CommonModule,
    SecuritaireRoutingModule
  ]
})
export class SecuritaireModule { }
