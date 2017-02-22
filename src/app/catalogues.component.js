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
var core_1 = require("@angular/core");
var catalogue_service_1 = require("./catalogue.service");
var router_1 = require("@angular/router");
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
        core_1.Component({
            moduleId: module.id,
            selector: 'catalogues',
            templateUrl: './catalogues.component.html',
            styleUrls: ['./catalogues.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, catalogue_service_1.CatalogueService])
    ], CataloguesComponent);
    return CataloguesComponent;
}());
exports.CataloguesComponent = CataloguesComponent;
//# sourceMappingURL=catalogues.component.js.map