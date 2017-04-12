import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

import { Student } from '../../models/student';
import { StudentsService } from '../../shared/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  newStudent: Student;

  @ViewChild('staticModal') public modal: ModalDirective;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(res => {
      this.students = res.data;
    });
  }

  createStudent() {
    this.modal.hide();
    // Finish here
  }
}
