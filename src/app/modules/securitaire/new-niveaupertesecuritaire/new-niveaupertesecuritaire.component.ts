import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FichesecuritaireComponent } from '../fichesecuritaire/fichesecuritaire.component';

@Component({
  selector: 'app-new-niveaupertesecuritaire',
  templateUrl: './new-niveaupertesecuritaire.component.html',
  styleUrls: ['./new-niveaupertesecuritaire.component.scss']
})
export class NewNiveaupertesecuritaireComponent implements OnInit {

  fiveFormGroup!: FormGroup;
  var_niveaupertesecuritaire!: String;
  message!:String;
  tc!:String;
  constructor(private _formBuilder: FormBuilder, 
    public router: Router,public dialog: MatDialog) {}


  ngOnInit(){
    this.tc= new String(localStorage.getItem('tokenPERTESECURITAIRE'));
    this.fiveFormGroup = this._formBuilder.group({
      niveauperte: [this.tc, Validators.required],
    });
  }
newperte(){
  this.var_niveaupertesecuritaire=this.fiveFormGroup.get("niveauperte")?.value;
    let tokenP: any
    if(this.var_niveaupertesecuritaire.length!=0){
      console.log("zertyui",this.var_niveaupertesecuritaire)
      tokenP=this.var_niveaupertesecuritaire
      localStorage.setItem('tokenPERTESECURITAIRE', tokenP); 
     
    const dialogRef = this.dialog.open(FichesecuritaireComponent,
      {
        width: '23%',
        height: '87%',
        data: {

        },}
      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }
  

}
