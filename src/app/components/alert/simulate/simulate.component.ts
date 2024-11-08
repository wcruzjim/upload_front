import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.scss']
})
export class SimulateComponent implements OnInit {
  formComfirm: UntypedFormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data, 
    public formBuilder: UntypedFormBuilder, 
    public dialogRef: MatDialogRef<SimulateComponent>
  ) {
    //This is intentional
  }

  ngOnInit() {
    this.formComfirm = this.formBuilder.group({
      document: ['', Validators.required]
    });
  }

  cancel() {
    this.dialogRef.close();
  }

}
