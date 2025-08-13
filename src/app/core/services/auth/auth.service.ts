import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_EMPLOYEES } from '../../mock-data/employee/mock-employees';
import { Employee } from '../../dto/employee/Employee';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): Observable<Employee | null> {
    const foundUser = MOCK_EMPLOYEES.find((u) => u.email === email && u.password === password);
    return of(foundUser || null);
  }
}
