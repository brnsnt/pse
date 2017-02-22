/**
 * Created by brns on 22.02.17.
 */
import {Http, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import {CatalogueEntry} from "../catalogue-entry/catalogue-entry";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Catalogue} from "../catalogues/catalogue";

@Injectable()
export class CatalogueSearchService {

    private searchUrl = 'https://search.eonum.ch/de';  // URL to web api

    constructor(private http: Http) { }

    search(searchText: string, catalogue:Catalogue): Observable<CatalogueEntry[]> {
        let params = new URLSearchParams();
        params.set('search', searchText);
        params.set('max_results', '10');
        params.set('show_highlighted', '1');
        params.set('show_detail', '0');

        let url = this.buildUrl(catalogue);


        return this.http.get(url, {search:params })
            .map(response => response.json() as CatalogueEntry[])
            .catch(this.handleError);
    }

    private buildUrl(catalogue:Catalogue): string {
        return this.searchUrl + '/' + catalogue.domain + '/' + catalogue.version + '/search'
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
