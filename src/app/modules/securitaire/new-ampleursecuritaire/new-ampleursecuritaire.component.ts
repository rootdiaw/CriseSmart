import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ampleursecuritaire',
  templateUrl: './new-ampleursecuritaire.component.html',
  styleUrls: ['./new-ampleursecuritaire.component.scss']
})
export class NewAmpleursecuritaireComponent implements OnInit {

  message!:String;
  var_ampleurSecuritaire!: String;
  ta!:String;
  threeFormGroup!: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder ,public router: Router) {}

  ngOnInit() {
    this.ta= new String(localStorage.getItem('tokenAMPLEURSECURITAIRE'));
    this.threeFormGroup = this._formBuilder.group({
      ampleur: [this.ta, Validators.required],
    });
  }

  newcontrole(){
    this.var_ampleurSecuritaire=this.threeFormGroup.get("ampleur")?.value;
    let tokenA: any
    if(this.var_ampleurSecuritaire.length!=0){
      console.log("zertyui",this.var_ampleurSecuritaire)
      tokenA=this.var_ampleurSecuritaire
      localStorage.setItem('tokenAMPLEURSECURITAIRE', tokenA); 
      this.router.navigate(['/controlesecuritaire']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }


}
