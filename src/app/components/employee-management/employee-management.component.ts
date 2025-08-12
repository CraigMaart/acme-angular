import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  MatCellDef,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {Employee} from '../../core/dto/employee/Employee';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {EmployeeService} from '../../core/services/employee/employee.service';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {AddEmployeeDialogComponent} from '../add-employee-dialog/add-employee-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Toast} from 'primeng/toast';

@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatPaginator,
    MatTableModule,
    MatInputModule,
    MatIcon,
    FormsModule,
    ReactiveFormsModule,
    Toast,
  ],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.scss',
})
export class EmployeeManagementComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['employeeNum', 'firstName', 'lastName', 'email', 'role', 'employeeStatus'];
  dataSource!: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      const cleanEmployees: Employee[] = employees
        .filter(e => e.role !== 'Admin')
        .map(e => ({
          personId: e.personId,
          firstName: e.firstName,
          lastName: e.lastName,
          email: e.email,
          role: e.role,
          birthDate: e.birthDate,
          employeeNum: e.employeeNum,
          employedDate: e.employedDate,
          employeeStatus: e.employeeStatus,
          terminatedDate: e.terminatedDate,
          password: e.password
        }));

      this.dataSource = new MatTableDataSource(cleanEmployees);
      if (this.paginator && this.sort) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }


  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  toggleAddEmployeeDialog(employee?: Employee) {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        employee: employee || null,
        isEditing: !!employee
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const existingIndex = this.dataSource.data.findIndex(e => e.personId === result.personId);
        if (existingIndex !== -1) {
          this.dataSource.data[existingIndex] = result;
        } else {
          this.dataSource.data = [...this.dataSource.data, result];
        }
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
