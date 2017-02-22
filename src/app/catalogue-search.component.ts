import "rxjs/add/operator/switchMap";
import {Component} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {Catalogue} from "./catalogue";
import {CatalogueService} from "./catalogue.service";
import {CatalogueSearchService} from "./catalogue-search.service";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {CatalogueEntry} from "./catalogue-entry";

@Component({
    moduleId: module.id,
    selector: 'catalogue-search',
    templateUrl: './catalogue-search.component.html',
    styleUrls: ['./catalogue-search.component.css'],
    providers: [CatalogueSearchService]
})


export class CatalogueSearchComponent {

    /*Catalogue to search from*/
    catalogue: Catalogue;

    /*Last search results*/
    catalogueEntries: Observable<CatalogueEntry[]>;

    /*Produces observable event stream (of strings)*/
    private searchTerms = new Subject<string>();

    private selectedCatalogueEntry: CatalogueEntry;

    constructor(private catalogueService: CatalogueService,
                private catalogueSearchService: CatalogueSearchService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        this.setupRoute();
        this.setupSearch()
        this.selectedCatalogueEntry = undefined;
    }

    /* Push a search term into the observable stream.*/
    search(term: string): void {
        this.searchTerms.next(term);
    }

    /*Navigate to last url*/
    goBack(): void {
        this.location.back();
    }

    showCatalogueEntry(catalogueEntry:CatalogueEntry): void {
        this.selectedCatalogueEntry = catalogueEntry;
        this.catalogueEntries = Observable.of<CatalogueEntry[]>([]);
    }
    /* Set route to catalogue/:tag and bind this catalogue to the tag. */
    private setupRoute(): void {
        this.route.params
            .switchMap((params: Params) => this.catalogueService.getCatalogue(params['tag']))
            .subscribe(catalogue => this.catalogue = catalogue);
    }

    /*Set up observing of the searchTerms Subject*/
    private setupSearch(): void {
        this.catalogueEntries = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => this.doSearch(term) )  // switch to new observable each time the term changes
            .catch(error => this.handleSearchError(error));
    }

    private handleSearchError(error:any): Observable<CatalogueEntry[]>{
        // TODO: add real error handling
        console.log(error);
        return Observable.of<CatalogueEntry[]>([]);
    }

    /** Get the search result from the Catalogue Search Service */
    private doSearch(term: string):Observable<CatalogueEntry[]> {
        if (term)
            return this.catalogueSearchService.search(term, this.catalogue);
        else
            return Observable.of<CatalogueEntry[]>([]);
    }


}

