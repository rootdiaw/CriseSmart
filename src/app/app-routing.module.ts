import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import {DasboardComponent} from './modules/dasboard/dasboard.component';
import { NewAmpleurComponent } from './modules/naturelle/new-ampleur/new-ampleur.component';
import { NewFrequenceComponent } from './modules/naturelle/new-frequence/new-frequence.component';
import { NewNaturelleComponent } from './modules/naturelle/new-naturelle/new-naturelle.component';
import { NewNiveaucontroleComponent } from './modules/naturelle/new-niveaucontrole/new-niveaucontrole.component';
import { NewNiveauperteComponent } from './modules/naturelle/new-niveauperte/new-niveauperte.component';
import {FooterComponent} from './shared/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children:[
      {
        path:'accueil',
        component: DasboardComponent,
        children:[
          {
            path:'naturelle',
            loadChildren: () => import('./modules/naturelle/naturelle.module').then(m => m.NaturelleModule)
          },
          {
            path:'sanitaire',
            loadChildren: () => import('./modules/sanitaire/sanitaire.module').then(m => m.SanitaireModule)
          },
          {
            path:'securitaire',
            loadChildren: () => import('./modules/securitaire/securitaire.module').then(m => m.SecuritaireModule)
          }
        ]
      }
      ,
      {
        path:'faq',
        component:NewNaturelleComponent
      }
      ,
      {
        path:'freq',
        component:NewFrequenceComponent
      } ,
      {
        path:'ampl',
        component:NewAmpleurComponent
      }
      ,
      {
        path:'controle',
        component:NewNiveaucontroleComponent
      } ,
      {
        path:'perte',
        component:NewNiveauperteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
