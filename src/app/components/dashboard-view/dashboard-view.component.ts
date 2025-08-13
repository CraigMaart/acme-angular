import { Component, OnInit } from '@angular/core';
import { NgIf, TitleCasePipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { Employee } from '../../core/dto/employee/Employee';
import { EmployeeManagementComponent } from '../employee-management/employee-management.component';

@Component({
  selector: 'app-dashboard-view',
  imports: [NgIf, MatDivider, EmployeeManagementComponent, TitleCasePipe],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss',
})
export class DashboardViewComponent implements OnInit {
  firstName: string | null = null;
  lastName: string | null = null;
  loggedInUser: Employee | null = null;

  ngOnInit(): void {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.loggedInUser = user;
      this.firstName = user.firstName || null;
      this.lastName = user.lastName || null;
    }
  }
}
