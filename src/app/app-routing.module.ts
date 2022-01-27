import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import {DasboardComponent} from './modules/dasboard/dasboard.component';
import { NewAmpleurComponent } from './modules/naturelle/new-ampleur/new-ampleur.component';
import { NewFrequenceComponent } from './modules/naturelle/new-frequence/new-frequence.component';
import { NewNaturelleComponent } from './modules/naturelle/new-naturelle/new-naturelle.component';
import { NewNiveaucontroleComponent } from './modules/naturelle/new-niveaucontrole/new-niveaucontrole.component';
import { NewNiveauperteComponent } from './modules/naturelle/new-niveauperte/new-niveauperte.component';
import { NewAmpleursanitaireComponent } from './modules/sanitaire/new-ampleursanitaire/new-ampleursanitaire.component';
import { NewFrequencesanitaireComponent } from './modules/sanitaire/new-frequencesanitaire/new-frequencesanitaire.component';
import { NewNiveauconrtrolesanitaireComponent } from './modules/sanitaire/new-niveauconrtrolesanitaire/new-niveauconrtrolesanitaire.component';
import { NewNiveaupertesanitaireComponent } from './modules/sanitaire/new-niveaupertesanitaire/new-niveaupertesanitaire.component';
import { NewSanitaireComponent } from './modules/sanitaire/new-sanitaire/new-sanitaire.component';
import { NewAmpleursecuritaireComponent } from './modules/securitaire/new-ampleursecuritaire/new-ampleursecuritaire.component';
import { NewFrequencesecuritaireComponent } from './modules/securitaire/new-frequencesecuritaire/new-frequencesecuritaire.component';
import { NewNiveauconrtrolesecuritaireComponent } from './modules/securitaire/new-niveauconrtrolesecuritaire/new-niveauconrtrolesecuritaire.component';
import { NewNiveaupertesecuritaireComponent } from './modules/securitaire/new-niveaupertesecuritaire/new-niveaupertesecuritaire.component';
import { NewSecuritaireComponent } from './modules/securitaire/new-securitaire/new-securitaire.component';
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
      /*  CATASTROPHE NATURELLE */
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
       /*  CATASTROPHE SANITAIRE */
       ,
      {
        path:'newsanitaire',
        component:NewSanitaireComponent
      }
      ,
      {
        path:'frequencesanitaire',
        component:NewFrequencesanitaireComponent
      }  ,
      {
        path:'ampleursanitaire',
        component:NewAmpleursanitaireComponent
      },
      {
        path:'controlesanitaire',
        component:NewNiveauconrtrolesanitaireComponent
      },
      {
        path:'pertesanitaire',
        component:NewNiveaupertesanitaireComponent
      }
       /*  CATASTROPHE SECURITAIRE */
       ,
      {
        path:'newsecuritaire',
        component:NewSecuritaireComponent
      }
      ,
      {
        path:'frequencesecuritaire',
        component:NewFrequencesecuritaireComponent
      }  ,
      {
        path:'ampleursecuritaire',
        component:NewAmpleursecuritaireComponent
      },
      {
        path:'controlesecuritaire',
        component:NewNiveauconrtrolesecuritaireComponent
      },
      {
        path:'pertesecuritaire',
        component:NewNiveaupertesecuritaireComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
