import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-frequencesecuritaire',
  templateUrl: './new-frequencesecuritaire.component.html',
  styleUrls: ['./new-frequencesecuritaire.component.scss']
})
export class NewFrequencesecuritaireComponent implements OnInit {

  message!:String;
  var_frequencesecuritaire!: String;
  tf!:String;
  secondFormGroup!: FormGroup;
  isEditable = false;
  constructor(private _formBuilder: FormBuilder ,public router: Router) {}

  ngOnInit() {
    this.tf= new String(localStorage.getItem('tokenFREQUENCESECURITAIRE'));
    this.secondFormGroup = this._formBuilder.group({
      frequence: [this.tf, Validators.required],
    });
  }
  newampleur(){
    console.log("new ampleur")
    this.var_frequencesecuritaire=this.secondFormGroup.get("frequence")?.value;
    let tokenF: any
    if(this.var_frequencesecuritaire.length!=0){
      console.log("zertyui",this.var_frequencesecuritaire)
      tokenF=this.var_frequencesecuritaire
      localStorage.setItem('tokenFREQUENCESECURITAIRE', tokenF); 
      this.router.navigate(['/ampleursecuritaire']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }


}
