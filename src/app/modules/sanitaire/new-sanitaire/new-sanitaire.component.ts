import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-sanitaire',
  templateUrl: './new-sanitaire.component.html',
  styleUrls: ['./new-sanitaire.component.scss']
})
export class NewSanitaireComponent implements OnInit {
  message!:String;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  threeFormGroup!: FormGroup;
  fourFormGroup!: FormGroup;
  fiveFormGroup!: FormGroup;
  sixFormGroup!: FormGroup;
  isEditable = true;

  var_vitesseSanitaire!: String;
  var_frequenceSanitaire!: String;
  var_ampleurSanitaire!: String;
  var_niveaucontroleSanitaire!: String;
  var_niveauperteSanitaire!: String;
  tvsani!:String;
  constructor(private _formBuilder: FormBuilder, 
    public router: Router, public dialog: MatDialog) {}

    ngOnInit() {
      this.tvsani= new String(localStorage.getItem('tokenVITESSESANITAIRE'));
      this.firstFormGroup = this._formBuilder.group({
        vitesse: [this.tvsani, Validators.required]
      });
    
       
      this.fiveFormGroup = this._formBuilder.group({
        niveauperte: ['', Validators.required],
      });
    }

    
  newfrequenceSanitaire(){
    this.var_vitesseSanitaire=this.firstFormGroup.get("vitesse")?.value;
    let tokenV: any
    if(this.var_vitesseSanitaire.length!=0){
      console.log("zertyui",this.var_vitesseSanitaire)
      tokenV=this.var_vitesseSanitaire
      localStorage.setItem('tokenVITESSESANITAIRE', tokenV); 
      this.router.navigate(['/frequencesanitaire']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }

}
