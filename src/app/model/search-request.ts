import {Catalogue} from "./catalogue";

/**
 * Model for an api search request.
 */
export class SearchRequest {
  constructor(public catalogue: Catalogue,
              public version: string,
              public searchTerm: string,) {
  }
}
