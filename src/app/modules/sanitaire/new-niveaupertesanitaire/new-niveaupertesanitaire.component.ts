import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FichesanitaireComponent } from '../fichesanitaire/fichesanitaire.component';

@Component({
  selector: 'app-new-niveaupertesanitaire',
  templateUrl: './new-niveaupertesanitaire.component.html',
  styleUrls: ['./new-niveaupertesanitaire.component.scss']
})
export class NewNiveaupertesanitaireComponent implements OnInit {

  fiveFormGroup!: FormGroup;
  var_niveaupertesanitaire!: String;
  message!:String;
  tc!:String;
  constructor(private _formBuilder: FormBuilder, 
    public router: Router,public dialog: MatDialog) {}


  ngOnInit(){
    this.tc= new String(localStorage.getItem('tokenPERTESANITAIRE'));
    this.fiveFormGroup = this._formBuilder.group({
      niveauperte: [this.tc, Validators.required],
    });
  }
newperte(){
  this.var_niveaupertesanitaire=this.fiveFormGroup.get("niveauperte")?.value;
    let tokenP: any
    if(this.var_niveaupertesanitaire.length!=0){
      console.log("zertyui",this.var_niveaupertesanitaire)
      tokenP=this.var_niveaupertesanitaire
      localStorage.setItem('tokenPERTESANITAIRE', tokenP); 
     
    const dialogRef = this.dialog.open(FichesanitaireComponent,
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
