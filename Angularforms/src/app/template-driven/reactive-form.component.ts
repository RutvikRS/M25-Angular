import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  //sampleForm: FormGroup;

  constructor(){}
  sampleForm!: FormGroup;
  ngOnInit(): void{
    this.sampleForm=new FormGroup({'email': new FormControl('',[Validators.required]),
    'password': new FormControl('',[Validators.required]),
    'Repeat-Password': new FormControl('',[Validators.required])});
  }

  onSubmit()
  {
    console.log(this.sampleForm.value);
  }
}
