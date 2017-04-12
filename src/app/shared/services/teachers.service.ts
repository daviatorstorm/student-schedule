import { Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';
import { Teacher } from '../../models/teacher';

import { BaseService } from './base.service';

@Injectable()
export class TeachersService extends BaseService {
  constructor(http: Http) {
    super(http);
  }

  getTeachers() {
    return this.makeRequest(RequestMethod.Get, 'api/teachers');
  }

  getById(id: number) {
    return this.makeRequest(RequestMethod.Get, `api/teachers/${id}`);
  }

  createTeacher(teacher: Teacher) {
    return this.makeRequest(RequestMethod.Post, 'api/teachers', teacher);
  }

  updateTeacher(teacher: Teacher) {
    return this.makeRequest(RequestMethod.Put, `api/teachers/${teacher.id}`, teacher);
  }

  deleteTeacher(id: number) {
    return this.makeRequest(RequestMethod.Delete, `api/teachers/${id}`);
  }
}
