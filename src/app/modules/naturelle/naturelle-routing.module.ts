import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewNaturelleComponent } from './new-naturelle/new-naturelle.component';

const routes: Routes = [
  {
    path: 'newnaturelle',
    component: NewNaturelleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaturelleRoutingModule { }
