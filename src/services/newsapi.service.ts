// Core components
import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { NewsApiGlobal } from '../models/newsapi-global.model';

@Injectable()
export class NewsApiService {

    private baseUrl: string = 'https://newsapi.org/v1/';
    private apiKey: string = 'f6f0ac70efa145dfab949a5461a39d32';

    constructor(private http: Http) {

	}

    public getArticles(sourceName, order): Promise<NewsApiGlobal> {
		const url = `${this.baseUrl}articles?source=${sourceName}&sortBy=${order}&apiKey=${this.apiKey}`;

        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobal)
        .catch(error => console.log('An error has occured ' + error))
    }

}
