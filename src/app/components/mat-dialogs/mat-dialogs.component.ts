import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-mat-dialogs',
  templateUrl: './mat-dialogs.component.html',
  styleUrls: ['./mat-dialogs.component.scss']
})
export class MatDialogsComponent implements OnInit {
  sendInf = "It work`s"
  constructor(
    public dialogRef: MatDialogRef<MatDialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  
    ngOnInit() {
      console.log(this.data)
    }


    close(result: any) {
      this.dialogRef.close(this.sendInf)
    }
}
