import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  addingStudent = true;
  loading = false;
  activeBtns = true;

  newStudent = new Student();

  @ViewChild('staticModal') public modal: ModalDirective;

  constructor(private studentsService: StudentsService, private router: Router) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(res => {
      this.students = res.data;
    });

    this.modal.onHidden.subscribe(() => this.newStudent = new Student());
  }

  openModal(id: number) {
    if (id) {
      this.addingStudent = false;
      this.studentsService.getById(id).subscribe(res => {
        this.newStudent = res.data;
        this.modal.show();
      });
    } else {
      this.addingStudent = true;
      this.modal.show();
    }
  }

  saveModalBtnClick(student: Student) {
    this.loading = true;
    if (this.addingStudent) {
      this.createStudent(student);
    } else {
      this.updateStudent(student);
    }
  }

  deleteStudent(id: number) {
    this.activeBtns = false;
    this.studentsService.deleteStudent(id).subscribe(res => {
      this.studentsService.getStudents().subscribe(students => {
        this.students = students.data;
        this.activeBtns = true;
      });
    });
  }

  private createStudent(student: Student) {
    this.studentsService.createStudent(student).subscribe(res => {
      this.newStudent = new Student();
      this.studentsService.getStudents().subscribe(students => {
        this.students = students.data;
        this.modal.hide();
        this.loading = false;
      });
    });
  }

  private updateStudent(student: Student) {
    this.studentsService.updateStudent(student).subscribe(res => {
      this.studentsService.getStudents().subscribe(students => {
        this.students = students.data;
        this.modal.hide();
        this.loading = false;
        this.addingStudent = true;
      });
    });
  }
}
