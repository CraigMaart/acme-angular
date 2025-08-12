import {Component, OnInit, ViewChild} from '@angular/core';
import {MatFormField, MatLabel} from '@angular/material/input';
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
    MatFormField,
    MatLabel
  ],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.scss',
})
export class EmployeeManagementComponent implements OnInit {


  displayedColumns: string[] = ['employeeNum', 'firstName', 'lastName', 'email', 'role', 'employedDate', 'employeeStatus'];
  dataSource!: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      const cleanEmployees: Employee[] = employees.map(e => ({
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
      // console.log(cleanEmployees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
