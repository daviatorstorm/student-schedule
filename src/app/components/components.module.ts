import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap';

import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentAddEditComponent } from './student-add-edit/student-add-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [
    StudentsComponent,
    DashboardComponent,
    StudentAddEditComponent
  ],
  exports: [
    StudentsComponent,
    DashboardComponent
  ]
})
export class ComponentsModule { }
