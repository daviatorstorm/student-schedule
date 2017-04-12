import { Http, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';

export class BaseService {
    constructor(protected http: Http) { }

    protected makeRequest(requestMehod: RequestMethod, url: string, body?: any, options?: any) {
        return this.http.request(url, { body: JSON.stringify(body), method: RequestMethod[requestMehod] })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: any) {
        return response.json();
    }

    private handleError(err: any) {
        console.log(Observable.throw);
        return Observable.throw(err.message);
    }
}
