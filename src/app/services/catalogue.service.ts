import { Injectable } from '@angular/core';
import {Catalogue, CATALOGUES} from "../model/catalogue";


@Injectable()
export class CatalogueService {

  /**Overkill promise getter for a constant.**/
  getCatalogues(): Promise<Catalogue[]> {
    return Promise.resolve(CATALOGUES);
  }

  getCatalogue(domain: string): Promise<Catalogue> {
    return this.getCatalogues()
      .then(catalogues => catalogues.find(catalogue=> catalogue.domain === domain));
  }
}
