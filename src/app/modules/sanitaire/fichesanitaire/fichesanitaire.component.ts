import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatastropheSanitaire } from 'src/app/models/sanitaire.model';
import { CatastropheSanitaireService } from 'src/app/services/catastropheSanitaire.service';

@Component({
  selector: 'app-fichesanitaire',
  templateUrl: './fichesanitaire.component.html',
  styleUrls: ['./fichesanitaire.component.scss']
})
export class FichesanitaireComponent implements OnInit {

  form!:FormGroup;
  catastrophesanitaire: CatastropheSanitaire= new CatastropheSanitaire();
  var_vitessesanitaire!: String;
  var_frequencesanitaire!: String;
  var_ampleursanitaire!: String;
  var_niveaucontrolesanitaire!: String;
  var_niveaupertesanitaire!: String;

  constructor( public catastropheSanitaireService: CatastropheSanitaireService,
    private fb: FormBuilder,
    private router: Router) 
  {}


  ngOnInit(){
    this.var_vitessesanitaire= new String(localStorage.getItem('tokenVITESSESANITAIRE'));
    this.var_frequencesanitaire= new String(localStorage.getItem('tokenFREQUENCESANITAIRE'));
    this.var_ampleursanitaire= new String(localStorage.getItem('tokenAMPLEURSANITAIRE'));
    this.var_niveaucontrolesanitaire= new String(localStorage.getItem('tokenCONTROLESANITAIRE'));
    this.var_niveaupertesanitaire= new String(localStorage.getItem('tokenPERTESANITAIRE'));

    this.form = this.fb.group({
      vitesse: [this.var_vitessesanitaire ],
      frequence: [this.var_frequencesanitaire],
      ampleur: [ this.var_ampleursanitaire],
      niveaucontrole:[ this.var_niveaucontrolesanitaire],
      niveauperte:[ this.var_niveaupertesanitaire]
      
      
    })
    }
    addCatastropheSanitaire(){
      this.catastrophesanitaire=this.form.value;
      this.catastropheSanitaireService.addCatastropheSanitaire(this.catastrophesanitaire).subscribe(
        data=>{
          console.log("********************",data)
          this.router.navigate(["/"])
        }
      )

    }


}
