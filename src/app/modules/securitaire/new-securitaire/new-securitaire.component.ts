import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-securitaire',
  templateUrl: './new-securitaire.component.html',
  styleUrls: ['./new-securitaire.component.scss']
})
export class NewSecuritaireComponent implements OnInit {
  message!:String;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  threeFormGroup!: FormGroup;
  fourFormGroup!: FormGroup;
  fiveFormGroup!: FormGroup;
  sixFormGroup!: FormGroup;
  isEditable = true;

  var_vitesseSecuritaire!: String;
  var_frequenceSecuritaire!: String;
  var_ampleurSecuritaire!: String;
  var_niveaucontroleSecuriitaire!: String;
  var_niveauperteSecuriitaire!: String;
  tvsecuritaire!:String;
  constructor(private _formBuilder: FormBuilder, 
    public router: Router, public dialog: MatDialog) {}

    ngOnInit() {
      this.tvsecuritaire= new String(localStorage.getItem('tokenVITESSESECURITAIRE'));
      this.firstFormGroup = this._formBuilder.group({
        vitesse: [this.tvsecuritaire, Validators.required]
      });
  
    }

    
  newfrequenceSecuritaire(){
    this.var_vitesseSecuritaire=this.firstFormGroup.get("vitesse")?.value;
    let tokenV: any
    if(this.var_vitesseSecuritaire.length!=0){
      console.log("zertyui",this.var_vitesseSecuritaire)
      tokenV=this.var_vitesseSecuritaire
      localStorage.setItem('tokenVITESSESECURITAIRE', tokenV); 
      this.router.navigate(['/frequencesecuritaire']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }


}
