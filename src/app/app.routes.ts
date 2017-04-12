import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'students', component: StudentsComponent }
];
