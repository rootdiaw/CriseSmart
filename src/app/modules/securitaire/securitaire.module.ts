import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { SecuritaireRoutingModule } from './securitaire-routing.module';
import { NewSecuritaireComponent } from './new-securitaire/new-securitaire.component';
import { FichesecuritaireComponent } from './fichesecuritaire/fichesecuritaire.component';
import { NewAmpleursecuritaireComponent } from './new-ampleursecuritaire/new-ampleursecuritaire.component';
import { NewFrequencesecuritaireComponent } from './new-frequencesecuritaire/new-frequencesecuritaire.component';
import { NewNiveauconrtrolesecuritaireComponent } from './new-niveauconrtrolesecuritaire/new-niveauconrtrolesecuritaire.component';
import { NewNiveaupertesecuritaireComponent } from './new-niveaupertesecuritaire/new-niveaupertesecuritaire.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [NewSecuritaireComponent, FichesecuritaireComponent, NewAmpleursecuritaireComponent, NewFrequencesecuritaireComponent, NewNiveauconrtrolesecuritaireComponent, NewNiveaupertesecuritaireComponent],
  imports: [
    CommonModule,
    SecuritaireRoutingModule,
    MatFormFieldModule,
    MatInputModule, 
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    MatStepperModule, 
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
  ]
})
export class SecuritaireModule { }
