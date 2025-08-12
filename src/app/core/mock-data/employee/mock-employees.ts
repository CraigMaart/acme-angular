import { Employee } from '../../dto/employee/Employee';

export const MOCK_EMPLOYEES: (Employee & { password: string })[] = [
  {
    personId: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@acme.com',
    role: 'Developer',
    birthDate: '08/13/2025',
    employeeNum: 'EMP001',
    employedDate: '08/13/2025',
    employeeStatus: 'Deleted',
    terminatedDate: '',
    password: 'password123'
  },
  {
    personId: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@acme.com',
    role: 'Developer',
    birthDate: '08/13/2025',
    employeeNum: 'EMP002',
    employedDate: '08/13/2025',
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
    birthDate: '08/13/2025',
    employeeNum: 'EMP003',
    employedDate: '08/13/2025',
    employeeStatus: 'Active',
    terminatedDate: '',
    password: 'password123'
  },
  {
    personId: 4,
    firstName: 'Mark',
    lastName: 'Taylor',
    email: 'admin@acme.com',
    role: 'Admin',
    birthDate: '08/13/2025',
    employeeNum: 'EMP004',
    employedDate: '08/13/2025',
    employeeStatus: 'Active',
    terminatedDate: '',
    password: 'admin123'
  }
];
