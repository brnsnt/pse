/**
 * Created by brns on 22.02.17.
 */
import {Http, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import {CatalogueEntry} from "../components/catalogue-entry/catalogue-entry";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Catalogue} from "../model/catalogue";
import {Search} from "../model/search";


const BASE_URL = 'https://search.eonum.ch/de';  // web api

@Injectable()
export class CatalogueSearchService {

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
        return BASE_URL + '/' + catalogue.domain + '/' + catalogue.versions[0] + '/search'
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

  public getResults(search: Search) {
    let params = new URLSearchParams();

    params.set('search', search.searchTerm);
    params.set('max_results', '100');
    params.set('show_highlighted', '1');
    params.set('show_detail', '1');

    let url = this.buildUrls(search);

    return this.http.get(url, {search:params })
      .map(response => response.json() as CatalogueEntry[])
      .catch(this.handleError);
  }

  /**
   * Build url for catalogue request.
   * @param {Search} search
   * @returns {string}
   */
  buildUrls(search:Search):string {
  return [BASE_URL, search.catalogue.domain, search.version, 'search'].join('/')
}
}


