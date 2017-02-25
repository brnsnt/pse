import {Component, OnInit, OnChanges} from '@angular/core';
import {CatalogueSearchService} from "../../services/catalogue-search.service";
import {CatalogueService} from "../../services/catalogue.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Catalogue, CATALOGUES} from "../../model/catalogue";
import {Search} from "../../model/search";
import {Observable} from "rxjs";
import {CatalogueEntry} from "../catalogue-entry/catalogue-entry";

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})

export class SearchComponent {
  selectedCatalogue:Catalogue;
  catalogues: Catalogue[] = CATALOGUES;

  searchResults: CatalogueEntry[];
  constructor(private catalogueService: CatalogueService,
              private route: ActivatedRoute,
              private catalogueSearchService: CatalogueSearchService,
  ) { }

  public select(catalogue:Catalogue) {
    this.selectedCatalogue = catalogue;
  }

  public handleSearchSubmitted(search:Search): void {

    this.catalogueSearchService.getResults(search).subscribe(
      catalogueEntries => this.searchResults = catalogueEntries
    );
  }
}
