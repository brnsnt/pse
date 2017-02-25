import {Catalogue} from "./catalogue";
export class Search {
  constructor(public catalogue: Catalogue,
              public version: string,
              public searchTerm: string,) {
  }
}
