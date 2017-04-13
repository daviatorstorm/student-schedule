import { Http, RequestMethod, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class BaseService {
    constructor(protected http: Http) { }

    protected makeRequest(requestMehod: RequestMethod, url: string, body?: any, options?: any) {
        return this.http.request(url, { body: JSON.stringify(body), method: RequestMethod[requestMehod] })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        const mapped = response.json() || {};
        return mapped.data || mapped;
    }

    private handleError(err: any, obs: any) {
        console.log('error message.', err);
        return Observable.throw(err);
    }
}
