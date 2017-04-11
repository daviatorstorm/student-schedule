import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from './students.service';
import { TeachersService } from './teachers.service';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    StudentsService,
    TeachersService
  ],
  declarations: [BaseComponent]
})
export class ServicesModule { }
