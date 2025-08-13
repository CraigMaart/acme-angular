import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';

interface DeleteDialogData {
  message: string;
}

@Component({
  selector: 'app-delete-employee-confirmation',
  imports: [MatDialogContent, MatDialogActions, MatButton],
  templateUrl: './delete-employee-confirmation.component.html',
  styleUrl: './delete-employee-confirmation.component.scss',
})
export class DeleteEmployeeConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteEmployeeConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteDialogData,
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
