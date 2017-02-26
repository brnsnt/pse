/**
 * Created by brns on 22.02.17.
 */
import {Http, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import {SearchResult} from "../model/search-result";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Catalogue} from "../model/catalogue";
import {SearchRequest} from "../model/search-request";
import 'rxjs/add/operator/catch';

const BASE_URL = 'https://search.eonum.ch/de';  // web api

@Injectable()
export class CatalogueSearchService {

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

  public getResults(search: SearchRequest) {
    let params = new URLSearchParams();

    params.set('search', search.searchTerm);
    params.set('max_results', '100');
    params.set('show_highlighted', '1');
    params.set('show_detail', '1');

    let url = this.buildUrls(search);

    return this.http.get(url, {search:params })
      .map(response => response.json() as SearchResult[])
      .catch(this.handleError);
  }

  /**
   * Build url for catalogue request.
   * @param {SearchRequest} search
   * @returns {string}
   */
  buildUrls(search:SearchRequest):string {
  return [BASE_URL, search.catalogue.domain, search.version, 'search'].join('/')
}
}


