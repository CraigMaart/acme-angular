import { Employee } from '../../dto/employee/Employee';

export const MOCK_EMPLOYEES: (Employee & { password: string })[] = [
  {
    personId: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@acme.com',
    role: 'Developer',
    BirthDate: '1990-05-15',
    EmployeeNum: 'EMP001',
    EmployedDate: '2020-01-10',
    EmployeeStatus: 'Active',
    TerminatedDate: '',
    password: 'password123'
  },
  {
    personId: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@acme.com',
    role: 'Designer',
    BirthDate: '1992-09-21',
    EmployeeNum: 'EMP002',
    EmployedDate: '2021-06-05',
    EmployeeStatus: 'Active',
    TerminatedDate: '',
    password: 'password123'
  },
  {
    personId: 3,
    firstName: 'Alice',
    lastName: 'Brown',
    email: 'alice@acme.com',
    role: 'Manager',
    BirthDate: '1988-03-12',
    EmployeeNum: 'EMP003',
    EmployedDate: '2019-11-20',
    EmployeeStatus: 'Active',
    TerminatedDate: '',
    password: 'password123'
  },
  {
    personId: 4,
    firstName: 'Mark',
    lastName: 'Taylor',
    email: 'mark@acme.com',
    role: 'ADMIN',
    BirthDate: '1985-07-08',
    EmployeeNum: 'EMP004',
    EmployedDate: '2018-04-15',
    EmployeeStatus: 'Active',
    TerminatedDate: '',
    password: 'admin123'
  }
];
