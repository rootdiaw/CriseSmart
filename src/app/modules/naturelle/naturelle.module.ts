import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

import { NaturelleRoutingModule } from './naturelle-routing.module';
import { NewNaturelleComponent } from './new-naturelle/new-naturelle.component';
import { FicheactionComponent } from './ficheaction/ficheaction.component';
import { RouterModule } from '@angular/router';
import { ListNaturelleComponent } from './list-naturelle/list-naturelle.component';
import { NewFrequenceComponent } from './new-frequence/new-frequence.component';
import { NewAmpleurComponent } from './new-ampleur/new-ampleur.component';
import { NewNiveaucontroleComponent } from './new-niveaucontrole/new-niveaucontrole.component';
import { NewNiveauperteComponent } from './new-niveauperte/new-niveauperte.component';


@NgModule({
  declarations: [NewNaturelleComponent, FicheactionComponent, ListNaturelleComponent, NewFrequenceComponent, NewAmpleurComponent, NewNiveaucontroleComponent, NewNiveauperteComponent,],
  imports: [
    CommonModule,
    NaturelleRoutingModule,
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
export class NaturelleModule { }
