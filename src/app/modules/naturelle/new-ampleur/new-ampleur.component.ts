import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ampleur',
  templateUrl: './new-ampleur.component.html',
  styleUrls: ['./new-ampleur.component.scss']
})
export class NewAmpleurComponent implements OnInit {
  message!:String;
  var_ampleur!: String;
  ta!:String;
  threeFormGroup!: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder ,public router: Router) {}

  ngOnInit() {
    this.ta= new String(localStorage.getItem('tokenAMPLEUR'));
    this.threeFormGroup = this._formBuilder.group({
      ampleur: [this.ta, Validators.required],
    });
  }
  newcontrole(){
    this.var_ampleur=this.threeFormGroup.get("ampleur")?.value;
    let tokenA: any
    if(this.var_ampleur.length!=0){
      console.log("zertyui",this.var_ampleur)
      tokenA=this.var_ampleur
      localStorage.setItem('tokenAMPLEUR', tokenA); 
      this.router.navigate(['/controle']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }

}
