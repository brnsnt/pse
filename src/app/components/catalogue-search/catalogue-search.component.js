"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var catalogue_service_1 = require("./../../catalogue.service.ts");
var catalogue_search_service_1 = require("./catalogue-search.service");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
var CatalogueSearchComponent = (function () {
    function CatalogueSearchComponent(catalogueService, catalogueSearchService, route, location) {
        this.catalogueService = catalogueService;
        this.catalogueSearchService = catalogueSearchService;
        this.route = route;
        this.location = location;
        /*Produces observable event stream (of strings)*/
        this.searchTerms = new Subject_1.Subject();
    }
    CatalogueSearchComponent.prototype.ngOnInit = function () {
        this.setupRoute();
        this.setupSearch();
        this.selectedCatalogueEntry = undefined;
    };
    /* Push a search term into the observable stream.*/
    CatalogueSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    /*Navigate to last url*/
    CatalogueSearchComponent.prototype.goBack = function () {
        this.location.back();
    };
    CatalogueSearchComponent.prototype.showCatalogueEntry = function (catalogueEntry) {
        this.selectedCatalogueEntry = catalogueEntry;
        this.catalogueEntries = Observable_1.Observable.of([]);
    };
    /* Set route to catalogue/:tag and bind this catalogue to the tag. */
    CatalogueSearchComponent.prototype.setupRoute = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.catalogueService.getCatalogue(params['tag']); })
            .subscribe(function (catalogue) { return _this.catalogue = catalogue; });
    };
    /*Set up observing of the searchTerms Subject*/
    CatalogueSearchComponent.prototype.setupSearch = function () {
        var _this = this;
        this.catalogueEntries = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return _this.doSearch(term); }) // switch to new observable each time the term changes
            .catch(function (error) { return _this.handleSearchError(error); });
    };
    CatalogueSearchComponent.prototype.handleSearchError = function (error) {
        // TODO: add real error handling
        console.log(error);
        return Observable_1.Observable.of([]);
    };
    /** Get the search result from the Catalogue Search Service */
    CatalogueSearchComponent.prototype.doSearch = function (term) {
        if (term)
            return this.catalogueSearchService.search(term, this.catalogue);
        else
            return Observable_1.Observable.of([]);
    };
    CatalogueSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'catalogue-search',
            templateUrl: './catalogue-search.component.html',
            styleUrls: ['./catalogue-search.component.css'],
            providers: [catalogue_search_service_1.CatalogueSearchService]
        }),
        __metadata('design:paramtypes', [catalogue_service_1.CatalogueService, catalogue_search_service_1.CatalogueSearchService, router_1.ActivatedRoute, common_1.Location])
    ], CatalogueSearchComponent);
    return CatalogueSearchComponent;
}());
exports.CatalogueSearchComponent = CatalogueSearchComponent;
//# sourceMappingURL=catalogue-search.component.js.map
