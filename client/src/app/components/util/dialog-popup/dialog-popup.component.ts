import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IDialogData } from '../project-card/project-card.component';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) private data: IDialogData) { }

  get Link() { return this.data.link; }

  OnClose(result: string) {
    this.dialogRef.close(result);
  }

  ngOnInit() {
  }

}
