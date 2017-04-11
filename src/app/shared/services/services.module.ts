import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from './students.service';
import { TeachersService } from './teachers.service';
import { LessonsService } from './lessons.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    StudentsService,
    TeachersService,
    LessonsService
  ]
})
export class ServicesModule { }
