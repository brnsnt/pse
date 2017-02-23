import "rxjs/add/operator/switchMap";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {CatalogueSearchService} from "./catalogue-search.service";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {CatalogueEntry} from "../catalogue-entry/catalogue-entry";
import {Catalogue} from "../../shared/catalogue";
import {CatalogueService} from "../../shared/catalogue.service";

@Component({
  moduleId: module.id,
  selector: 'catalogue-search',
  templateUrl: 'catalogue-search.component.html',
  styleUrls: ['catalogue-search.component.css'],
  providers: [CatalogueSearchService]
})


export class CatalogueSearchComponent implements OnInit {

  /*Catalogue to search from*/
  catalogue: Catalogue;

  /*Last search results*/
  catalogueEntries: Observable<CatalogueEntry[]>;

  /**
   * Produces observable event stream (of strings) that is
   * bound to the input field.
   * @type {Subject<string>}
   */
  private searchTerms = new Subject<string>();

  private selectedCatalogueEntry: CatalogueEntry;

  constructor(private catalogueService: CatalogueService,
              private catalogueSearchService: CatalogueSearchService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  /**
   * Init Component
   */
  ngOnInit(): void {
    this.setupRoute();
    this.setupSearch()
    this.selectedCatalogueEntry = undefined;
  }


  /**
   * Push a search term into the observable stream.
   * @param {string} term
   */
  search(term: string): void {
    this.searchTerms.next(term);
  }

  /**
   * Navigate to last url - Just as example
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Handles click on an entry in the preview.
   * @param {CatalogueEntry} catalogueEntry - selected entry
   */
  showCatalogueEntry(catalogueEntry: CatalogueEntry): void {
    this.selectedCatalogueEntry = catalogueEntry;
    this.catalogueEntries = Observable.of<CatalogueEntry[]>([]);
  }

  /**
   * Set route to catalogue/:tag and bind this.catalogue to the tag.
   */
  private setupRoute(): void {
    this.route.params
      .switchMap((params: Params) =>{
      console.log(params);
        return this.catalogueService.getCatalogue(params['domain'])})
      .subscribe(catalogue => {
        console.log(catalogue)
        this.catalogue = catalogue
        this.setupSearch();
        console.log(this)});
  }


  /**
   * Add observer to the search terms to provide auto-completion.
   */
  private setupSearch(): void {

    this.searchTerms = new Subject<string>();
    this.catalogueEntries = this.searchTerms
      .debounceTime(150)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => this.doSearch(term))  // switch to new observable each time the term changes
      .catch(error => this.handleSearchError(error));
  }

  /**
   *
   * @param error
   * @returns {Observable<CatalogueEntry[]>} - probably empty
   */
  private handleSearchError(error: any): Observable<CatalogueEntry[]> {
    // TODO: add real error handling
    console.log(error);
    return Observable.of<CatalogueEntry[]>([]);
  }


  /**
   *  Get the search result from the Catalogue Search Service.
   *
   * @param {string} term - some search text
   * @returns {Observable<CatalogueEntry[]>} - empty if no term given.
   */
  private doSearch(term: string): Observable<CatalogueEntry[]> {
    if (term)
      return this.catalogueSearchService.search(term, this.catalogue);
    else
      return Observable.of<CatalogueEntry[]>([]);
  }


}

