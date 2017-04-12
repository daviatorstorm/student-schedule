import { Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { Student } from '../../models/student';

import { BaseService } from './base.service';

@Injectable()
export class StudentsService extends BaseService {
  constructor(http: Http) {
    super(http);
  }

  getStudents() {
    return this.makeRequest(RequestMethod.Get, 'api/students');
  }

  getById(id: number) {
    return this.makeRequest(RequestMethod.Get, `api/students/${id}`);
  }

  createStudent(student: Student) {
    return this.makeRequest(RequestMethod.Post, 'api/students', student);
  }

  updateStudent(student: Student) {
    return this.makeRequest(RequestMethod.Put, `api/students/${student.id}`, student);
  }

  deleteStudent(id: number) {
    return this.makeRequest(RequestMethod.Delete, `api/students/${id}`);
  }
}
