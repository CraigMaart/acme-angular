import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Employee} from '../../dto/employee/Employee';
import {MOCK_EMPLOYEES} from '../../mock-data/employee/mock-employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  getEmployees(): Observable<Employee[]> {
    return of(MOCK_EMPLOYEES);
  }
}
