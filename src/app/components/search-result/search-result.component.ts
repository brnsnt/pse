import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {CatalogueEntry} from "../catalogue-entry/catalogue-entry";

@Component({
  selector: 'search-result',
  templateUrl: 'search-result.component.html',
  styleUrls: ['search-result.component.css']
})
export class SearchResultComponent implements OnChanges {
  @Input() results:CatalogueEntry[];
  constructor() { }

  ngOnChanges() {
  }

}
