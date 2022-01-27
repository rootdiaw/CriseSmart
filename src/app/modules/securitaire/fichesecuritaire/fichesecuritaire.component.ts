import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatastropheSecuritaire } from 'src/app/models/securitaire.model';
import { CatastropheSecuritaireService } from 'src/app/services/catastropheSecuritaire.service';

@Component({
  selector: 'app-fichesecuritaire',
  templateUrl: './fichesecuritaire.component.html',
  styleUrls: ['./fichesecuritaire.component.scss']
})
export class FichesecuritaireComponent implements OnInit {

  form!:FormGroup;
  catastrophesecuritaire: CatastropheSecuritaire= new CatastropheSecuritaire();
  var_vitessesecuritaire!: String;
  var_frequencesecuritaire!: String;
  var_ampleursecuritaire!: String;
  var_niveaucontrolesecuritaire!: String;
  var_niveaupertesecuritaire!: String;

  constructor( public catastropheSecuritaireService: CatastropheSecuritaireService,
    private fb: FormBuilder,
    private router: Router) 
  {}


  ngOnInit(){
    this.var_vitessesecuritaire= new String(localStorage.getItem('tokenVITESSESECURITAIRE'));
    this.var_frequencesecuritaire= new String(localStorage.getItem('tokenFREQUENCESECURITAIRE'));
    this.var_ampleursecuritaire= new String(localStorage.getItem('tokenAMPLEURSECURITAIRE'));
    this.var_niveaucontrolesecuritaire= new String(localStorage.getItem('tokenCONTROLESECURITAIRE'));
    this.var_niveaupertesecuritaire= new String(localStorage.getItem('tokenPERTESECURITAIRE'));

    this.form = this.fb.group({
      vitesse: [this.var_vitessesecuritaire ],
      frequence: [this.var_frequencesecuritaire],
      ampleur: [ this.var_ampleursecuritaire],
      niveaucontrole:[ this.var_niveaucontrolesecuritaire],
      niveauperte:[ this.var_niveaupertesecuritaire]
      
      
    })
    }
    addCatastropheSecuritaire(){
      this.catastrophesecuritaire=this.form.value;
      this.catastropheSecuritaireService.addCatastropheSecuritaire(this.catastrophesecuritaire).subscribe(
        data=>{
          console.log("********************",data)
          this.router.navigate(["/"])
        }
      )

    }


}
