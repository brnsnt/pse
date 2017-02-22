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
/**
 * Created by brns on 22.02.17.
 */
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var CatalogueSearchService = (function () {
    function CatalogueSearchService(http) {
        this.http = http;
        this.searchUrl = 'https://search.eonum.ch/de'; // URL to web api
    }
    CatalogueSearchService.prototype.search = function (searchText, catalogue) {
        var params = new http_1.URLSearchParams();
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
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CatalogueSearchService);
    return CatalogueSearchService;
}());
exports.CatalogueSearchService = CatalogueSearchService;
//# sourceMappingURL=catalogue-search.service.js.map