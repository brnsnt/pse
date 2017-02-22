import {Component, OnInit} from "@angular/core";
import {Catalogue, CATALOGUES} from "./catalogue";
import {Router} from "@angular/router";
import {CatalogueService} from "./catalogue.service";

@Component({
    moduleId: module.id,
    selector: 'catalogues',
    templateUrl: 'catalogues.component.html',
    styleUrls: ['catalogues.component.css'],
  }
)

/**
 * Navigation for the different catalogues.
 * Routes currently to the CatalogueSearchComponent.
 * */
export class CataloguesComponent implements OnInit {

  constructor(private router: Router,
              private catalogueService: CatalogueService) {}

  /**
   * Init component
   */
  ngOnInit(): void {
    //Resolve promise and set catalogues
    this.catalogueService.getCatalogues().then(
      catalogue => this.catalogues = catalogue);
  }

  catalogues: Catalogue[];
  selectedCatalogue: Catalogue;

  /**
   * Navigate to the catalogue search of the selected catalogue
   * @param {Catalogue} catalogue
   */
  onSelect(catalogue: Catalogue): void {
    this.selectedCatalogue = catalogue;
    //navigate to catalogue search
    this.router.navigate(['/catalogue', this.selectedCatalogue.tag]);
  }
}



