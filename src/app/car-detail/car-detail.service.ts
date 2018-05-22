import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import { Observable, BehaviorSubject } from 'rxjs';
// import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


// Environment config

// Rxjs: library for composing asynchronous and event-based programs using observable
// toPromise: Converts an existing observable sequence to an ES6 Compatible Promise.

@Injectable()
export class CarDetailService {

    constructor(private http: Http) {

    }
    private baseApiUrl = 'http://localhost:3000/car/';

    fetchCarDetail(params: any) {
        const  eventsUrl: string = this.baseApiUrl + 'getCar/' + params.carName;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(eventsUrl, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: any;
        if (error instanceof Response) {
            errMsg = error.json() || '';
            errMsg.status = error.status;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
