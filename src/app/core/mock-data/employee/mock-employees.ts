import { Employee } from '../../dto/employee/Employee';

export const MOCK_EMPLOYEES: (Employee & { password: string })[] = [
  {
    personId: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@acme.com',
    role: 'Developer',
    birthDate: '1990-05-15',
    employeeNum: 'EMP001',
    employedDate: '2020-01-10',
    employeeStatus: 'Deleted',
    terminatedDate: '',
    password: 'password123'
  },
  {
    personId: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@acme.com',
    role: 'Designer',
    birthDate: '1992-09-21',
    employeeNum: 'EMP002',
    employedDate: '2021-06-05',
    employeeStatus: 'Active',
    terminatedDate: '',
    password: 'password123'
  },
  {
    personId: 3,
    firstName: 'Alice',
    lastName: 'Brown',
    email: 'alice@acme.com',
    role: 'Manager',
    birthDate: '1988-03-12',
    employeeNum: 'EMP003',
    employedDate: '2019-11-20',
    employeeStatus: 'Active',
    terminatedDate: '',
    password: 'password123'
  },
  {
    personId: 4,
    firstName: 'Mark',
    lastName: 'Taylor',
    email: 'admin@acme.com',
    role: 'Administration',
    birthDate: '1985-07-08',
    employeeNum: 'EMP004',
    employedDate: '2018-04-15',
    employeeStatus: 'Active',
    terminatedDate: '',
    password: 'admin123'
  }
];
