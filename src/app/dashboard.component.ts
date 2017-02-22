/**
 * Created by brns on 21.02.17.
 */


import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "./catalogue.service";
import {Catalogue} from "./catalogue";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',

})

export class DashboardComponent implements OnInit {

    catalogues: Catalogue[] = [];

    constructor(private catalogueService: CatalogueService) { }

    ngOnInit(): void {
        this.catalogueService.getCatalogues()
            .then(catalogues => this.catalogues = catalogues);
    }
}

