webpackJsonp([1,4],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalogue__ = __webpack_require__(464);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogueService = (function () {
    function CatalogueService() {
    }
    /**Overkill promise getter for a constant.**/
    CatalogueService.prototype.getCatalogues = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__catalogue__["a" /* CATALOGUES */]);
    };
    CatalogueService.prototype.getCatalogue = function (tag) {
        return this.getCatalogues()
            .then(function (catalogues) { return catalogues.find(function (catalogue) { return catalogue.tag === tag; }); });
    };
    CatalogueService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CatalogueService);
    return CatalogueService;
}());
//# sourceMappingURL=/home/brns/projects/pse/src/catalogue.service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__catalogue_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalogue_search_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Subject__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CatalogueSearchComponent = (function () {
    function CatalogueSearchComponent(catalogueService, catalogueSearchService, route, location) {
        this.catalogueService = catalogueService;
        this.catalogueSearchService = catalogueSearchService;
        this.route = route;
        this.location = location;
        /*Produces observable event stream (of strings)*/
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_11_rxjs_Subject__["Subject"]();
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
        this.catalogueEntries = __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].of([]);
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
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].of([]);
    };
    /** Get the search result from the Catalogue Search Service */
    CatalogueSearchComponent.prototype.doSearch = function (term) {
        if (term)
            return this.catalogueSearchService.search(term, this.catalogue);
        else
            return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].of([]);
    };
    CatalogueSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Component */])({
            selector: 'catalogue-search',
            template: __webpack_require__(526),
            styles: [__webpack_require__(522)],
            providers: [__WEBPACK_IMPORTED_MODULE_5__catalogue_search_service__["a" /* CatalogueSearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__catalogue_service__["a" /* CatalogueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__catalogue_service__["a" /* CatalogueService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__catalogue_search_service__["a" /* CatalogueSearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__catalogue_search_service__["a" /* CatalogueSearchService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* Location */]) === 'function' && _d) || Object])
    ], CatalogueSearchComponent);
    return CatalogueSearchComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/brns/projects/pse/src/catalogue-search.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 340;


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(467);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/brns/projects/pse/src/main.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalogue_search_component__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'dashboard',  component: DashboardComponent },
 { path: 'catalogues',     component: CataloguesComponent }
 */
var routes = [
    { path: 'catalogue/:tag', component: __WEBPACK_IMPORTED_MODULE_2__catalogue_search_component__["a" /* CatalogueSearchComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/brns/projects/pse/src/app-routing.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
* <h1>{{title}}</h1>
 <nav>
 <a routerLink="/dashboard">Dashboard</a>
 <a routerLink="/catalogues">Catalogues</a>
 </nav>
 <catalogues></catalogues>
 */
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'search.eonum.ch';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'app-root',
            template: "<h1>{{title}}</h1>\n<catalogues></catalogues>\n <router-outlet></router-outlet>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/brns/projects/pse/src/app.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalogues_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__catalogue_search_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__catalogue_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__catalogue_entry_component__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__catalogues_component__["a" /* CataloguesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__catalogue_search_component__["a" /* CatalogueSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__catalogue_entry_component__["a" /* CatalogueEntryComponent */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__catalogue_service__["a" /* CatalogueService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/brns/projects/pse/src/app.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__catalogue_entry__ = __webpack_require__(462);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueEntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CatalogueEntryComponent = (function () {
    function CatalogueEntryComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__catalogue_entry__["a" /* CatalogueEntry */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__catalogue_entry__["a" /* CatalogueEntry */]) === 'function' && _a) || Object)
    ], CatalogueEntryComponent.prototype, "catalogueEntry", void 0);
    CatalogueEntryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Component */])({
            selector: 'catalogue-entry',
            template: __webpack_require__(525),
            styles: [__webpack_require__(521)],
        }), 
        __metadata('design:paramtypes', [])
    ], CatalogueEntryComponent);
    return CatalogueEntryComponent;
    var _a;
}());
//# sourceMappingURL=/home/brns/projects/pse/src/catalogue-entry.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueEntry; });
/**
 * Class for a diagnosis related group entry in a catalog.
 */
var CatalogueEntry = (function () {
    function CatalogueEntry() {
    }
    return CatalogueEntry;
}());
//# sourceMappingURL=/home/brns/projects/pse/src/catalogue-entry.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogueSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatalogueSearchService = (function () {
    function CatalogueSearchService(http) {
        this.http = http;
        this.searchUrl = 'https://search.eonum.ch/de'; // URL to web api
    }
    CatalogueSearchService.prototype.search = function (searchText, catalogue) {
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* URLSearchParams */]();
        params.set('search', searchText);
        params.set('max_results', '10');
        params.set('show_highlighted', '1');
        params.set('show_detail', '0');
        var url = this.buildUrl(catalogue);
        return this.http.get(url, { search: params })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CatalogueSearchService.prototype.buildUrl = function (catalogue) {
        return this.searchUrl + '/' + catalogue.domain + '/' + catalogue.version + '/search';
    };
    CatalogueSearchService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CatalogueSearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CatalogueSearchService);
    return CatalogueSearchService;
    var _a;
}());
//# sourceMappingURL=/home/brns/projects/pse/src/catalogue-search.service.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Catalogue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATALOGUES; });
var Catalogue = (function () {
    function Catalogue() {
    }
    return Catalogue;
}());
var CATALOGUES = [
    { tag: 'DRGs', name: 'Diagnosis Related Groups', domain: 'drgs', version: 'V3.0' },
    { tag: 'ADRGs', name: 'Base DRG', domain: 'adrgs', version: 'V3.0' },
    { tag: 'CHOPs', name: 'Swiss Surgery Classification', domain: 'chops', version: 'CHOP_2017' },
    { tag: 'ICDs', name: 'International Classification of Diseases', domain: 'icds', version: 'ICD10-2008' }
];
//# sourceMappingURL=/home/brns/projects/pse/src/catalogue.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalogue_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CataloguesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CataloguesComponent = (function () {
    function CataloguesComponent(router, catalogueService) {
        this.router = router;
        this.catalogueService = catalogueService;
        this.title = 'Eonum Cataloge Search';
    }
    CataloguesComponent.prototype.ngOnInit = function () {
        this.getCatalogues();
    };
    CataloguesComponent.prototype.onSelect = function (catalogue) {
        this.selectedCatalogue = catalogue;
        //navigate to catalogue search
        this.router.navigate(['/catalogue', this.selectedCatalogue.tag]);
    };
    /**Resolve the promise from the overkill getter and set the catalogues**/
    CataloguesComponent.prototype.getCatalogues = function () {
        var _this = this;
        this.catalogueService.getCatalogues().then(function (catalogue) { return _this.catalogues = catalogue; });
    };
    CataloguesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'catalogues',
            template: __webpack_require__(527),
            styles: [__webpack_require__(523)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__catalogue_service__["a" /* CatalogueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__catalogue_service__["a" /* CatalogueService */]) === 'function' && _b) || Object])
    ], CataloguesComponent);
    return CataloguesComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/brns/projects/pse/src/catalogues.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalogue_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/**
 * Created by brns on 21.02.17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(catalogueService) {
        this.catalogueService = catalogueService;
        this.catalogues = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogueService.getCatalogues()
            .then(function (catalogues) { return _this.catalogues = catalogues; });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
            selector: 'my-dashboard',
            template: __webpack_require__(528),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__catalogue_service__["a" /* CatalogueService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__catalogue_service__["a" /* CatalogueService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=/home/brns/projects/pse/src/dashboard.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/brns/projects/pse/src/environment.js.map

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
// imports


// module
exports.push([module.i, ".selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.catalogues {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 25em;\n}\n.catalogues li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n}\n.catalogues li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.catalogues li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.catalogues .text {\n    position: relative;\n    top: -3px;\n}\n.catalogues .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
// imports


// module
exports.push([module.i, ".search-result{\n    border-bottom: 1px solid gray;\n    border-left: 1px solid gray;\n    border-right: 1px solid gray;\n    width: 600px;\n    height: 20px;\n    padding: 5px;\n    background-color: snow;\n    color: darkslategray;\n    cursor: pointer;\n    overflow: hidden;\n}\n#search-box{\n    width: 610px;\n    height: 30px;\n    background-color: lightgray;\n    color: darkslategray;\n}\n\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.results {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n}\n.results div {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n\n}\n.results div.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.results div:hover {\n    color: #607D8B;\n    background-color: #DDD;\n}\n.results .text {\n    position: relative;\n}\n.results .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(89)();
// imports


// module
exports.push([module.i, ".selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.catalogues {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 25em;\n}\n.catalogues li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n}\n.catalogues li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.catalogues li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.catalogues .text {\n    position: relative;\n    top: -3px;\n}\n.catalogues .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<div class=\"entry\" *ngIf=\"catalogueEntry\">\n    <span class=\"badge\">{{catalogueEntry.code}}</span>\n    {{catalogueEntry.text}}\n</div>\n"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"catalogue\">\n    <h2>{{catalogue.name}}\n        <span class=\"badge\">({{catalogue.tag}})</span>\n    </h2>\n    <div id=\"search-component\">\n        <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n        <div class=\"results\">\n            <div *ngFor=\"let entry of catalogueEntries | async\"\n                  class=\"search-result\" >\n                <div (click)=\"showCatalogueEntry(entry)\">\n                <span class=\"badge\">{{entry.code}}</span> - {{entry.text | slice:0:50}}...\n                </div>\n            </div>\n        </div>\n    </div>\n    <catalogue-entry [catalogueEntry]=\"selectedCatalogueEntry\"></catalogue-entry>\n</div>\n\n"

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<ul class=\"catalogues\">\n    <li *ngFor=\"let catalogue of catalogues\"\n        [class.selected]=\"catalogue === selectedCatalogue\"\n        (click)=\"onSelect(catalogue)\">\n        <span class=\"badge\">{{catalogue.tag}}</span>\n        {{catalogue.name}}\n    </li>\n</ul>\n<!--\n<div *ngIf=\"selectedCatalogue\">\n</div>\n-->"

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<h3>Catalogues</h3>\n<div class=\"grid grid-pad\">\n    <a *ngFor=\"let catalogue of catalogues\"\n       [routerLink]=\"['/catalogue', catalogue.tag]\"\n       class=\"col-1-4\">\n        <div class=\"module catalogue\">\n            <h4>{{catalogue.tag}}</h4>\n        </div>\n    </a>\n</div>"

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);


/***/ })

},[554]);
//# sourceMappingURL=main.bundle.js.map