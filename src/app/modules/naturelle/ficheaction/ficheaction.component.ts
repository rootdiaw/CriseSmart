import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CatastropheNaturelle } from 'src/app/models/naturel.model';
import { CatastropheNaturelleService } from 'src/app/services/catastropheNaturel.service';

@Component({
  selector: 'app-ficheaction',
  templateUrl: './ficheaction.component.html',
  styleUrls: ['./ficheaction.component.scss']
})
export class FicheactionComponent implements OnInit {
  form!:FormGroup;
  catastrophenaturelle: CatastropheNaturelle= new CatastropheNaturelle();
  var_vitesse1!: String;
  var_frequence1!: String;
  var_ampleur1!: String;
  var_niveaucontrole1!: String;
  var_niveauperte1!: String;

  constructor( public catastropheNaturelleService: CatastropheNaturelleService,
    private fb: FormBuilder,
    private router: Router) 
  {}


  ngOnInit(){
    this.var_vitesse1= new String(localStorage.getItem('tokenVITESSE'));
    this.var_frequence1= new String(localStorage.getItem('tokenFREQUENCE'));
    this.var_ampleur1= new String(localStorage.getItem('tokenAMPLEUR'));
    this.var_niveaucontrole1= new String(localStorage.getItem('tokenCONTROLE'));
    this.var_niveauperte1= new String(localStorage.getItem('tokenPERTE'));

    this.form = this.fb.group({
      vitesse: [this.var_vitesse1 ],
      frequence: [this.var_frequence1],
      ampleur: [ this.var_ampleur1],
      niveaucontrole:[ this.var_niveaucontrole1],
      niveauperte:[ this.var_niveauperte1]
      
      
    })
    }
    addCatastropheNaturelle(){
      this.catastrophenaturelle=this.form.value;
      this.catastropheNaturelleService.addCatastropheNaturelle(this.catastrophenaturelle).subscribe(
        data=>{
          console.log("********************",data)
          this.router.navigate(["/"])
        }
      )

    }

}
