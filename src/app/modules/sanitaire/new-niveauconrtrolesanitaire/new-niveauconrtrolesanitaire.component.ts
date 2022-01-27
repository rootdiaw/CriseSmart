import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-niveauconrtrolesanitaire',
  templateUrl: './new-niveauconrtrolesanitaire.component.html',
  styleUrls: ['./new-niveauconrtrolesanitaire.component.scss']
})
export class NewNiveauconrtrolesanitaireComponent implements OnInit {

  fourFormGroup!: FormGroup;
  var_niveaucontrolesanitaire!: String;
  message!:String;
  tc!:String;
  constructor(private _formBuilder: FormBuilder, 
    public router: Router, public dialog: MatDialog) {}


  ngOnInit(){
    this.tc= new String(localStorage.getItem('tokenCONTROLESANITAIRE'));
    this.fourFormGroup = this._formBuilder.group({
      niveaucontrole: [this.tc, Validators.required],
    });
  }
newcontrole(){
  this.var_niveaucontrolesanitaire=this.fourFormGroup.get("niveaucontrole")?.value;
    let tokenC: any
    if(this.var_niveaucontrolesanitaire.length!=0){
      console.log("zertyui",this.var_niveaucontrolesanitaire)
      tokenC=this.var_niveaucontrolesanitaire
      localStorage.setItem('tokenCONTROLESANITAIRE', tokenC); 
      this.router.navigate(['/pertesanitaire']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }
}
