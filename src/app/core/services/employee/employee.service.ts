import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../../dto/employee/Employee';
import { MOCK_EMPLOYEES } from '../../mock-data/employee/mock-employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: (Employee & { password: string })[] = [...MOCK_EMPLOYEES]; // make a local copy

  constructor() {}

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

  addEmployee(
    employee: Omit<Employee, 'personId' | 'employeeNum'> & { password: string },
  ): Observable<Employee> {
    const newPersonId =
      this.employees.length > 0 ? Math.max(...this.employees.map((e) => e.personId)) + 1 : 1;
    const newEmployeeNum = `EMP${newPersonId.toString().padStart(3, '0')}`;

    const newEmployee: Employee & { password: string } = {
      ...employee,
      personId: newPersonId,
      employeeNum: newEmployeeNum,
    };

    this.employees.push(newEmployee);

    return of(newEmployee);
  }

  updateEmployee(employee: Employee & { password: string }): Observable<Employee> {
    const index = MOCK_EMPLOYEES.findIndex((e) => e.personId === employee.personId);
    if (index !== -1) {
      MOCK_EMPLOYEES[index] = employee;
    }
    return of(employee);
  }
}
