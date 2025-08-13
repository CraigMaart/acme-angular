# AcmeAngular

A simple employee management Angular application built with Angular CLI v19.1.8.

This app allows you to add, update, and soft-delete employees with a clean UI and client-side validation. It uses PrimeNG components for forms and Angular Material for dialogs and icons.

---

## Features

- Add new employees with details including name, email, role, and dates
- Update existing employee records
- Mark employees as "Deleted" (soft delete)
- Client-side form validation (required fields and email format)
- Table filtering, and pagination
- Toast notifications for user feedback on operations
- **Includes a rough project mockup** located at:  
  `/acme-angular/planning/project-mock.pdf`


---

## Getting Started



### Prerequisites

- Node.js (v16 or later recommended)
- Angular CLI (v19.1.8) installed globally

````bash
npm install -g @angular/cli@19.1.8

## Running Locally

Clone the repository:

```bash
git clone https://github.com/your-username/acme-angular.git
cd acme-angular
npm install
ng serve

````
Notes on Roles
This application is role-based, but all functionality is currently available only to the Admin/Manager role. You can test the application using the following credentials:

  {
    email: 'admin@acme.com',
    password: 'admin123',
  },
