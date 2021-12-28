import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FicheactionComponent } from '../ficheaction/ficheaction.component';

@Component({
  selector: 'app-new-naturelle',
  templateUrl: './new-naturelle.component.html',
  styleUrls: ['./new-naturelle.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class NewNaturelleComponent implements OnInit {
  message!:String;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  threeFormGroup!: FormGroup;
  fourFormGroup!: FormGroup;
  fiveFormGroup!: FormGroup;
  sixFormGroup!: FormGroup;
  isEditable = true;

  var_vitesse!: String;
  var_frequence!: String;
  var_ampleur!: String;
  var_niveaucontrole!: String;
  var_niveauperte!: String;
  tv!:String;
  constructor(private _formBuilder: FormBuilder, 
    public router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.tv= new String(localStorage.getItem('tokenVITESSE'));
    this.firstFormGroup = this._formBuilder.group({
      vitesse: [this.tv, Validators.required]
    });
  
     
    this.fiveFormGroup = this._formBuilder.group({
      niveauperte: ['', Validators.required],
    });
  }
  ficheaction(){
    this.var_vitesse=this.firstFormGroup.get("vitesse")?.value;
this.var_frequence=this.secondFormGroup.get("frequence")?.value;
this.var_ampleur=this.threeFormGroup.get("ampleur")?.value;
this.var_niveaucontrole=this.fourFormGroup.get("niveaucontrole")?.value;
this.var_niveauperte=this.fiveFormGroup.get("niveauperte")?.value;

    const dialogRef = this.dialog.open(FicheactionComponent,
      {
        width: '23%',
        height: '80%',
        data: {var_vitesse: this.var_vitesse,
          var_frequence : this.var_frequence,
          var_ampleur : this.var_ampleur,
          var_niveaucontrole: this.var_niveaucontrole,
          var_niveauperte: this.var_niveauperte

        },}
      );
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }


  newfrequence(){
    this.var_vitesse=this.firstFormGroup.get("vitesse")?.value;
    let tokenV: any
    if(this.var_vitesse.length!=0){
      console.log("zertyui",this.var_vitesse)
      tokenV=this.var_vitesse
      localStorage.setItem('tokenVITESSE', tokenV); 
      this.router.navigate(['/freq']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }
  
}
