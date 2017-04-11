import { Http, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class BaseService {
    constructor(protected http: Http) { }

    protected makeRequest<T>(requestMehod: RequestMethod, url: string, body?: T, options?: any) {
        return this.http.request(url, { body, method: RequestMethod[requestMehod] })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: any) {
        return response.json();
    }

    private handleError(err: any) {
        return Observable.throw(err);
    }
}
