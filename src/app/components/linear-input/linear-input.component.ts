import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-linear-input',
  templateUrl: './linear-input.component.html',
  styleUrls: ['./linear-input.component.css']
})
export class LinearInputComponent {


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {

  }
}