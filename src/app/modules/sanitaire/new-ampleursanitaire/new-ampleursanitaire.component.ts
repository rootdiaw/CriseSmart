import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ampleursanitaire',
  templateUrl: './new-ampleursanitaire.component.html',
  styleUrls: ['./new-ampleursanitaire.component.scss']
})
export class NewAmpleursanitaireComponent implements OnInit {
  message!:String;
  var_ampleurSanitaire!: String;
  ta!:String;
  threeFormGroup!: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder ,public router: Router) {}

  ngOnInit() {
    this.ta= new String(localStorage.getItem('tokenAMPLEURSANITAIRE'));
    this.threeFormGroup = this._formBuilder.group({
      ampleur: [this.ta, Validators.required],
    });
  }

  newcontrole(){
    this.var_ampleurSanitaire=this.threeFormGroup.get("ampleur")?.value;
    let tokenA: any
    if(this.var_ampleurSanitaire.length!=0){
      console.log("zertyui",this.var_ampleurSanitaire)
      tokenA=this.var_ampleurSanitaire
      localStorage.setItem('tokenAMPLEURSANITAIRE', tokenA); 
      this.router.navigate(['/controlesanitaire']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }

  

}
