import { Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Delete produto</h2>
      <mat-dialog-content>Tem certeza que quer deletar esse produto?</mat-dialog-content>
      <mat-dialog-actions [align]="'end'">
        <button mat-button (click)= "onNotClick()">Não</button>
        <button mat-raised-button (click)= "onYesClick()" color="primary" cdkFocusInitial>Sim</button>
      </mat-dialog-actions>
  `,
  imports: [MatButtonModule, MatDialogModule],
  standalone: true
})
export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef)

  onNotClick(): void {
    this.matDialogRef.close(false)
  }
  onYesClick(): void {
    this.matDialogRef.close(true)
  }
}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  matDialog = inject( MatDialog )

  constructor() { }

  openDialog() : Observable<boolean> {
    return this.matDialog.open(ConfirmationDialogComponent).afterClosed()
  }
}
