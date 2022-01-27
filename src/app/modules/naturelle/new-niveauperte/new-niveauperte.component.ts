import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FicheactionComponent } from '../ficheaction/ficheaction.component';



@Component({
  selector: 'app-new-niveauperte',
  templateUrl: './new-niveauperte.component.html',
  styleUrls: ['./new-niveauperte.component.scss']
})
export class NewNiveauperteComponent implements OnInit {

  
  fiveFormGroup!: FormGroup;
  var_niveauperte!: String;
  message!:String;
  tc!:String;
  constructor(private _formBuilder: FormBuilder, 
    public router: Router,public dialog: MatDialog) {}


  ngOnInit(){
    this.tc= new String(localStorage.getItem('tokenPERTE'));
    this.fiveFormGroup = this._formBuilder.group({
      niveauperte: [this.tc, Validators.required],
    });
  }
newperte(){
  this.var_niveauperte=this.fiveFormGroup.get("niveauperte")?.value;
    let tokenP: any
    if(this.var_niveauperte.length!=0){
      console.log("zertyui",this.var_niveauperte)
      tokenP=this.var_niveauperte
      localStorage.setItem('tokenPERTE', tokenP); 
     
    const dialogRef = this.dialog.open(FicheactionComponent,
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
