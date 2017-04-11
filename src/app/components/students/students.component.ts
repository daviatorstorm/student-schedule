import { Component, OnInit } from '@angular/core';

import { Student } from '../../models/student';
import { StudentsService } from '../../shared/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(res => {
      this.students = res.data;
    });
  }
}
