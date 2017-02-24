import {Component, OnInit} from "@angular/core";
import {Search} from "../../shared/search";
import {Catalogue, CATALOGUES} from "../../shared/catalogue";
import {CatalogueService} from "../../shared/catalogue.service";

@Component({
  moduleId: module.id,
  selector: 'search-form',
  styleUrls: ['search-form.component.css'],
  templateUrl: 'search-form.component.html'
})

export class SearchFormComponent implements OnInit {

  DEFAULT_CATALOGUE = CATALOGUES[0]

  constructor(private catalogueService: CatalogueService,) {
  }

  model = new Search(this.DEFAULT_CATALOGUE.domain, this.DEFAULT_CATALOGUE.versions[0], '');

  /* Select options */
  versions: string[] = this.DEFAULT_CATALOGUE.versions;
  domains: string[];

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit(): void {
    this.domains = ['drgs', 'adrgs', 'chops', 'icds'];
  }

  /**
   * Set versions to the ones of the selected domain's catalogue.
   */
  public setVersions():void{

    this.catalogueService.getCatalogue(this.model.domain).then(
      catalogue => {
        this.versions = catalogue.versions;
        this.model.version = this.versions[0]
      })
  }

}

