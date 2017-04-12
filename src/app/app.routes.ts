import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'teachers', component: TeachersComponent }
];
