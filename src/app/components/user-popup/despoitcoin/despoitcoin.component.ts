import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-despoitcoin',
  templateUrl: './despoitcoin.component.html',
  styleUrls: ['./despoitcoin.component.scss']
})
export class DespoitcoinComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DespoitcoinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }
  closeModelBox(): void {
    this.dialogRef.close();
 
  }
}
