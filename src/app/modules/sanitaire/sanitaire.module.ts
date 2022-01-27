import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanitaireRoutingModule } from './sanitaire-routing.module';
import { NewSanitaireComponent } from './new-sanitaire/new-sanitaire.component';
import { NewNiveaupertesanitaireComponent } from './new-niveaupertesanitaire/new-niveaupertesanitaire.component';
import { NewNiveauconrtrolesanitaireComponent } from './new-niveauconrtrolesanitaire/new-niveauconrtrolesanitaire.component';
import { NewFrequencesanitaireComponent } from './new-frequencesanitaire/new-frequencesanitaire.component';
import { NewAmpleursanitaireComponent } from './new-ampleursanitaire/new-ampleursanitaire.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
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
import { FichesanitaireComponent } from './fichesanitaire/fichesanitaire.component';

@NgModule({
  declarations: [NewSanitaireComponent, NewNiveaupertesanitaireComponent, NewNiveauconrtrolesanitaireComponent, NewFrequencesanitaireComponent, NewAmpleursanitaireComponent, FichesanitaireComponent],
  imports: [
    CommonModule,
    SanitaireRoutingModule,
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
export class SanitaireModule { }
