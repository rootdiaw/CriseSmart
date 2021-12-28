import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-frequence',
  templateUrl: './new-frequence.component.html',
  styleUrls: ['./new-frequence.component.scss']
})
export class NewFrequenceComponent implements OnInit {
  message!:String;
  var_frequence!: String;
  tf!:String;
  secondFormGroup!: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder ,public router: Router) {}

  ngOnInit() {
    this.tf= new String(localStorage.getItem('tokenFREQUENCE'));
    this.secondFormGroup = this._formBuilder.group({
      frequence: [this.tf, Validators.required],
    });
  }
  newampleur(){
    console.log("new ampleur")
    this.var_frequence=this.secondFormGroup.get("frequence")?.value;
    let tokenF: any
    if(this.var_frequence.length!=0){
      console.log("zertyui",this.var_frequence)
      tokenF=this.var_frequence
      localStorage.setItem('tokenFREQUENCE', tokenF); 
      this.router.navigate(['/ampl']);
    }
    else{
      this.message="Champ avec (*) est obligatoire!";  

    }
  }

}
