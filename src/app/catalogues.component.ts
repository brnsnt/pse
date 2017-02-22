import {Component, OnInit} from "@angular/core";
import {Catalogue} from "./catalogue";
import {CatalogueService} from "./catalogue.service";
import {Router} from "@angular/router";

@Component({
        moduleId: module.id,
        selector: 'catalogues',
        templateUrl: './catalogues.component.html',
        styleUrls: ['./catalogues.component.css'],
    }
)


export class CataloguesComponent implements OnInit {

    constructor(private router: Router,
                private catalogueService: CatalogueService) {
    }

    ngOnInit(): void {
        this.getCatalogues()
    }

    title = 'Eonum Cataloge Search';
    catalogues: Catalogue[];
    selectedCatalogue: Catalogue;

    onSelect(catalogue: Catalogue): void {
        this.selectedCatalogue = catalogue;
        //navigate to catalogue search
        this.router.navigate(['/catalogue', this.selectedCatalogue.tag]);
    }

    /**Resolve the promise from the overkill getter and set the catalogues**/
    getCatalogues(): void {
        this.catalogueService.getCatalogues().then(
            catalogue => this.catalogues = catalogue);
    }

}



