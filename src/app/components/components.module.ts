import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StudentsComponent,
    DashboardComponent
  ],
  exports: [
    StudentsComponent,
    DashboardComponent
  ]
})
export class ComponentsModule { }
