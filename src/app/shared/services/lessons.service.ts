import { Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';
import { BaseService } from './base.service';

@Injectable()
export class LessonsService extends BaseService {
  constructor(http: Http) {
    super(http);
  }

  getLessons() {
    return this.makeRequest(RequestMethod.Get, 'api/lessons');
  }
}
