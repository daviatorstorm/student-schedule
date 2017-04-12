import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';

import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    StudentsComponent,
    DashboardComponent,
    TeachersComponent
  ]
})
export class ComponentsModule { }
