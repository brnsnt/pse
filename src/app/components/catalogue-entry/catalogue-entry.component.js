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
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var catalogue_entry_1 = require("./catalogue-entry");
var CatalogueEntryComponent = (function () {
    function CatalogueEntryComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', catalogue_entry_1.CatalogueEntry)
    ], CatalogueEntryComponent.prototype, "catalogueEntry", void 0);
    CatalogueEntryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'catalogue-entry',
            templateUrl: './catalogue-entry.component.html',
            styleUrls: ['./catalogue-entry.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], CatalogueEntryComponent);
    return CatalogueEntryComponent;
}());
exports.CatalogueEntryComponent = CatalogueEntryComponent;
//# sourceMappingURL=catalogue-entry.component.js.map