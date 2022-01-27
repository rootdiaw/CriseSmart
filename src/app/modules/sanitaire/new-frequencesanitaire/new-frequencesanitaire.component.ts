import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-frequencesanitaire',
  templateUrl: './new-frequencesanitaire.component.html',
  styleUrls: ['./new-frequencesanitaire.component.scss']
})
export class NewFrequencesanitaireComponent implements OnInit {
  message!:String;
  var_frequencesanitaire!: String;
  tf!:String;
  secondFormGroup!: FormGroup;
  isEditable = false;
  constructor(private _formBuilder: FormBuilder ,public router: Router) {}

  ngOnInit() {
    this.tf= new String(localStorage.getItem('tokenFREQUENCESANITAIRE'));
    this.secondFormGroup = this._formBuilder.group({
      frequence: [this.tf, Validators.required],
    });
  }
  newampleur(){
    console.log("new ampleur")
    this.var_frequencesanitaire=this.secondFormGroup.get("frequence")?.value;
    let tokenF: any
    if(this.var_frequencesanitaire.length!=0){
      console.log("zertyui",this.var_frequencesanitaire)
      tokenF=this.var_frequencesanitaire
      localStorage.setItem('tokenFREQUENCESANITAIRE', tokenF); 
      this.router.navigate(['/ampleursanitaire']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }

}
