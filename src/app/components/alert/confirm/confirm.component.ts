import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  formComfirm: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data, 
    public formBuilder: UntypedFormBuilder, 
    public dialogRef: MatDialogRef<ConfirmComponent> 
  ) {
    //This is intentional
  }

  ngOnInit() {
    this.formComfirm = this.formBuilder.group({
      observation: ['', Validators.required]
    });
  }

  cancel() {
    this.dialogRef.close();
  }

}
