import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-niveauconrtrolesecuritaire',
  templateUrl: './new-niveauconrtrolesecuritaire.component.html',
  styleUrls: ['./new-niveauconrtrolesecuritaire.component.scss']
})
export class NewNiveauconrtrolesecuritaireComponent implements OnInit {

  
  fourFormGroup!: FormGroup;
  var_niveaucontrolesecuriitaire!: String;
  message!:String;
  tc!:String;
  constructor(private _formBuilder: FormBuilder, 
    public router: Router, public dialog: MatDialog) {}


  ngOnInit(){
    this.tc= new String(localStorage.getItem('tokenCONTROLESECURITAIRE'));
    this.fourFormGroup = this._formBuilder.group({
      niveaucontrole: [this.tc, Validators.required],
    });
  }
newcontrole(){
  this.var_niveaucontrolesecuriitaire=this.fourFormGroup.get("niveaucontrole")?.value;
    let tokenC: any
    if(this.var_niveaucontrolesecuriitaire.length!=0){
      console.log("zertyui",this.var_niveaucontrolesecuriitaire)
      tokenC=this.var_niveaucontrolesecuriitaire
      localStorage.setItem('tokenCONTROLESECURITAIRE', tokenC); 
      this.router.navigate(['/pertesecuritaire']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }

}
