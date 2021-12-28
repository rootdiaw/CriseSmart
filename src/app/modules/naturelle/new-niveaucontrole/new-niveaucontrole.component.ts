import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-niveaucontrole',
  templateUrl: './new-niveaucontrole.component.html',
  styleUrls: ['./new-niveaucontrole.component.scss']
})
export class NewNiveaucontroleComponent implements OnInit {

  fourFormGroup!: FormGroup;
  var_niveaucontrole!: String;
  message!:String;
  tc!:String;
  constructor(private _formBuilder: FormBuilder, 
    public router: Router, public dialog: MatDialog) {}


  ngOnInit(){
    this.tc= new String(localStorage.getItem('tokenCONTROLE'));
    this.fourFormGroup = this._formBuilder.group({
      niveaucontrole: [this.tc, Validators.required],
    });
  }
newcontrole(){
  this.var_niveaucontrole=this.fourFormGroup.get("niveaucontrole")?.value;
    let tokenC: any
    if(this.var_niveaucontrole.length!=0){
      console.log("zertyui",this.var_niveaucontrole)
      tokenC=this.var_niveaucontrole
      localStorage.setItem('tokenCONTROLE', tokenC); 
      this.router.navigate(['/perte']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }
  

}
