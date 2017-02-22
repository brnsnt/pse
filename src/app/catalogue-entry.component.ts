import "rxjs/add/operator/switchMap";
import {Component, Input} from "@angular/core";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

import {CatalogueEntry} from "./catalogue-entry";

@Component({
    moduleId: module.id,
    selector: 'catalogue-entry',
    templateUrl: './catalogue-entry.component.html',
    styleUrls: ['./catalogue-entry.component.css'],
})


export class CatalogueEntryComponent {

    /*Catalogue entry to display*/
    @Input()
    catalogueEntry: CatalogueEntry;

    constructor() {
    }



}


