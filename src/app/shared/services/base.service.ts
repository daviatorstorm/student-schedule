import { Http, RequestMethod } from '@angular/http';

export class BaseService {
    constructor(protected http: Http) { }

    protected makeRequest<T>(requestMehod: RequestMethod, url: string, body: T, options: any) {
        this.http.request(url, {
            body: body,
            method: RequestMethod[requestMehod]
        }).subscribe(this.extractData, this.handleError);
    }

    private extractData(response: any) {
        return response.json();
    }

    private handleError(err: any) {
        console.log(err);
    }
}
