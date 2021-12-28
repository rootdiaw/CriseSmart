import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'
import {FullModule} from './layouts/full/full.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { DasboardComponent } from './modules/dasboard/dasboard.component';
import {MatCardModule} from '@angular/material/card';

import { MatTooltipModule } from '@angular/material/tooltip';
import { NaturelleModule } from './modules/naturelle/naturelle.module';
import { SanitaireModule } from './modules/sanitaire/sanitaire.module';
import { SecuritaireModule } from './modules/securitaire/securitaire.module';


@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FullModule,
    HighchartsChartModule,
    MatCardModule,
    NaturelleModule,
    SanitaireModule,
    SecuritaireModule

  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
