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
 * Created by brns on 21.02.17.
 */
var core_1 = require('@angular/core');
var catalogue_1 = require("./catalogue");
var CatalogueService = (function () {
    function CatalogueService() {
    }
    /**Overkill promise getter for a constant.**/
    CatalogueService.prototype.getCatalogues = function () {
        return Promise.resolve(catalogue_1.CATALOGUES);
    };
    CatalogueService.prototype.getCatalogue = function (tag) {
        return this.getCatalogues()
            .then(function (catalogues) { return catalogues.find(function (catalogue) { return catalogue.tag === tag; }); });
    };
    CatalogueService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CatalogueService);
    return CatalogueService;
}());
exports.CatalogueService = CatalogueService;
//# sourceMappingURL=catalogue.service.js.map