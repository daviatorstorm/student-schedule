import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base.service';

@Injectable()
export class StudentsService extends BaseService {
  constructor(http: Http) {
    super(http);
  }

  getStudents() {
    return this.http.get('api/students');
  }
}
