import {Component} from "@angular/core";
import {CatalogueSearchService} from "../../services/catalogue-search.service";
import {Catalogue, CATALOGUES} from "../../model/catalogue";
import {SearchRequest} from "../../model/search-request";
import {SearchResult} from "../../model/search-result";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})

/**
 * 1. Let a user select a catalogue and open a search-form component.
 * 2. Handle the submit event from the search form and get the results from the search service.
 * 3. Add search-results component to display the results.
 */
export class SearchComponent {

  catalogues: Catalogue[] = CATALOGUES;

  search:SearchRequest;                   //Output from search-form component
  selectedCatalogue: Catalogue;    //Input for search-form component
  searchResults: SearchResult[]; //Input for search-result component
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
   * @param {SearchRequest} search
   */
  public handleSearchSubmitted(search: SearchRequest): void {
    this.search = search;
    this.catalogueSearchService.getResults(search)
      .subscribe(results => this.setResults(results));
  }

  /**
   * Set results as input for search-result component.
   * @param {SearchResult[]} results
   */
  private setResults(results: SearchResult[] ): void {
    this.searchResults = results;
    this.searchSubmitted = true;
  }
}
