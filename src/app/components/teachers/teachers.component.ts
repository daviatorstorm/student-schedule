import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';

import { Teacher } from '../../models/teacher';
import { TeachersService } from '../../shared/services/teachers.service';

@Component({
  selector: 'app-students',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[];
  addingTeacher = true;
  loading = false;
  activeBtns = true;

  newTeacher = new Teacher();

  @ViewChild('staticModal') public modal: ModalDirective;

  constructor(private teachersService: TeachersService, private router: Router) { }

  ngOnInit() {
    this.teachersService.getTeachers().subscribe(res => {
      this.teachers = res.data;
    });

    this.modal.onHidden.subscribe(() => this.newTeacher = new Teacher());
  }

  openModal(id: number) {
    if (id) {
      this.addingTeacher = false;
      this.teachersService.getById(id).subscribe(res => {
        this.newTeacher = res.data;
        this.modal.show();
      });
    } else {
      this.addingTeacher = true;
      this.modal.show();
    }
  }

  saveModalBtnClick(teacher: Teacher) {
    this.loading = true;
    if (this.addingTeacher) {
      this.createTeacher(teacher);
    } else {
      this.updateTeacher(teacher);
    }
  }

  deleteTeacher(id: number) {
    this.activeBtns = false;
    this.teachersService.deleteTeacher(id).subscribe(res => {
      this.teachersService.getTeachers().subscribe(teachers => {
        this.teachers = teachers.data;
        this.activeBtns = true;
      });
    });
  }

  private createTeacher(teacher: Teacher) {
    this.teachersService.createTeacher(teacher).subscribe(res => {
      this.newTeacher = new Teacher();
      this.teachersService.getTeachers().subscribe(teachers => {
        this.teachers = teachers.data;
        this.modal.hide();
        this.loading = false;
      });
    });
  }

  private updateTeacher(teacher: Teacher) {
    this.teachersService.updateTeacher(teacher).subscribe(res => {
      this.teachersService.getTeachers().subscribe(teachers => {
        this.teachers = teachers.data;
        this.modal.hide();
        this.loading = false;
        this.addingTeacher = true;
      });
    });
  }
}
