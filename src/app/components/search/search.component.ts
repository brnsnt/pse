import {Component} from "@angular/core";
import {CatalogueSearchService} from "../../services/catalogue-search.service";
import {Catalogue, CATALOGUES} from "../../model/catalogue";
import {Search} from "../../model/search";
import {CatalogueEntry} from "../catalogue-entry/catalogue-entry";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})

export class SearchComponent {

  catalogues: Catalogue[] = CATALOGUES;

  search:Search;                   //Output from search-form component
  selectedCatalogue: Catalogue;    //Input for search-form component
  searchResults: CatalogueEntry[]; //Input for search-result component
  searchSubmitted = false;         //already searched in the selected catalogue ?

  /**
   * @constructor
   * @param {CatalogueSearchService} catalogueSearchService
   */
  constructor(private catalogueSearchService: CatalogueSearchService,) {
  }

  /**
   * Set catalogue as input for search-form component.
   * @param {Catalogue} catalogue
   */
  public select(catalogue: Catalogue): void {
    this.selectedCatalogue = catalogue;
    this.searchSubmitted = false;
    this.search = undefined;
  }

  /**
   * Request and subscribe to the search results.
   * @param {Search} search
   */
  public handleSearchSubmitted(search: Search): void {
    this.search = search;
    this.catalogueSearchService.getResults(search)
      .subscribe(results => this.setResults(results));
  }

  /**
   * Set results as input for search-result component.
   * @param {CatalogueEntry[]} results
   */
  private setResults(results: CatalogueEntry[] ): void {
    this.searchResults = results;
    this.searchSubmitted = true;
  }
}
