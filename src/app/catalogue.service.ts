/**
 * Created by brns on 21.02.17.
 */
import { Injectable } from '@angular/core';
import {Catalogue, CATALOGUES} from "./catalogue";


@Injectable()
export class CatalogueService {

    /**Overkill promise getter for a constant.**/
    getCatalogues(): Promise<Catalogue[]> {
        return Promise.resolve(CATALOGUES);
    }

    getCatalogue(tag: string): Promise<Catalogue> {
        return this.getCatalogues()
            .then(catalogues => catalogues.find(catalogue=> catalogue.tag === tag));
    }
}
