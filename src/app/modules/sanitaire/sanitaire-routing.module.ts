import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSanitaireComponent } from './new-sanitaire/new-sanitaire.component';

const routes: Routes = [
  {
    path: 'newsanitaire',
    component: NewSanitaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanitaireRoutingModule { }
