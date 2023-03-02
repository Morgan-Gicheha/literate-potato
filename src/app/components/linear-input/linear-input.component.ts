import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-linear-input',
  templateUrl: './linear-input.component.html',
  styleUrls: ['./linear-input.component.css'],
})
export class LinearInputComponent {
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  firstFormGroup = this._formBuilder.group({
    campaignName: ['campaign Name', Validators.required],
    message: ['sample message', Validators.required],
  });

  ngOnInit() {}

  openDialog() {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        ...this.firstFormGroup.value
      },
    });
  }


}
