import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FloatLabel} from 'primeng/floatlabel';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputTextModule} from 'primeng/inputtext';
import {Select} from 'primeng/select';
import {DatePickerModule} from 'primeng/datepicker';
import {EmployeeService} from '../../core/services/employee/employee.service';
import {Employee} from '../../core/dto/employee/Employee';
import {NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api';

interface DialogData {
  employee: Employee | null;
  isEditing: boolean;
}

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  imports: [
    ReactiveFormsModule,
    FloatLabel,
    FloatLabelModule,
    InputTextModule,
    Select,
    DatePickerModule,
    NgIf,
    MatIcon,
    MatButton,
    ToastModule
  ],
  styleUrls: ['./add-employee-dialog.component.scss']
})
export class AddEmployeeDialogComponent implements OnInit {
  employeeForm!: FormGroup;
  isEditing = false;
  employeeToEdit?: Employee;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddEmployeeDialogComponent>,
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.isEditing = this.data.isEditing;

    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      birthDate: ['', Validators.required],
      employedDate: ['', Validators.required],
      employeeStatus: ['', Validators.required],
      terminatedDate: [''],
      password: ['']
    });

    if (this.data && this.data.employee) {
      this.isEditing = true;
      this.employeeToEdit = this.data.employee;
      this.employeeForm.patchValue(this.employeeToEdit);
    }

    if (this.isEditing && this.data.employee) {
      this.employeeForm.patchValue(this.data.employee);
      this.employeeForm.get('password')?.setValue('');
    }
  }
  saveNew() {
    if (this.employeeForm.valid) {
      const formValue = this.employeeForm.value;
      const payload = this.preparePayload(formValue);

      this.employeeService.addEmployee(payload).subscribe({
        next: newEmployee => {
          this.messageService.add({ severity: 'success', summary: 'Added', detail: 'Employee added successfully', life: 3000 });
          this.dialogRef.close(newEmployee);
        },
        error: err => {
          alert('Add failed, see console');
          console.error(err);
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all required fields with valid data.', life: 3000 });
    }
  }

  updateExisting() {
    if (this.employeeForm.valid && this.data.employee) {
      const formValue = this.employeeForm.value;
      const payload = this.preparePayload(formValue);
      const updatedPayload = { ...this.data.employee, ...payload };

      this.employeeService.updateEmployee(updatedPayload).subscribe({
        next: updatedEmployee => {
          this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Employee updated successfully', life: 3000 });
          this.dialogRef.close(updatedEmployee);
        },
        error: err => {
          alert('Update failed, see console');
          console.error(err);
        }
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all required fields with valid data.', life: 3000 });
    }
  }

  preparePayload(formValue: any) {
    const formattedBirthDate = this.formatDate(formValue.birthDate);
    const formattedEmployedDate = this.formatDate(formValue.employedDate);
    const formattedTerminatedDate = formValue.terminatedDate ? this.formatDate(formValue.terminatedDate) : '';

    return {
      ...formValue,
      birthDate: formattedBirthDate,
      employedDate: formattedEmployedDate,
      terminatedDate: formattedTerminatedDate,
      password: formValue.password || (this.data.employee?.password || 'password123')
    };
  }



  formatDate(date: any): string {
    if (!date) return '';

    if (typeof date === 'string') {
      return date;
    }

    if (date instanceof Date) {
      const mm = (date.getMonth() + 1).toString().padStart(2, '0');
      const dd = date.getDate().toString().padStart(2, '0');
      const yyyy = date.getFullYear();
      return `${mm}/${dd}/${yyyy}`;
    }

    return '';
  }

  deleteRecord() {
    if (this.employeeToEdit) {
      const updatedEmployee = {
        ...this.employeeToEdit,
        employeeStatus: 'Deleted'
      };
      this.employeeService.updateEmployee(updatedEmployee).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'warn',
            summary: 'Deleted',
            detail: 'Employee marked as Deleted',
            life: 3000
          });
          this.dialogRef.close(updatedEmployee);
        },
        error: err => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to delete employee',
            life: 3000
          });
          console.error(err);
        }
      });
    }
  }

  cancel(){
    this.employeeForm.reset();
    this.dialogRef.close(null);
  }

}
