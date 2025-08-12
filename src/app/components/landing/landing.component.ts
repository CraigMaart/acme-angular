import { Component } from '@angular/core';
import {TopbarComponent} from '../topbar/topbar.component';
import {DashboardViewComponent} from '../dashboard-view/dashboard-view.component';

@Component({
  selector: 'app-landing',
  imports: [
    TopbarComponent,
    DashboardViewComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
