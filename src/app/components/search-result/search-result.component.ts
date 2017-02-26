import {Component, Input} from '@angular/core';
import {SearchResult} from "../../model/search-result";

@Component({
  selector: 'search-result',
  templateUrl: 'search-result.component.html',
  styleUrls: ['search-result.component.css']
})

/**
 * Display the search results.
 */
export class SearchResultComponent {
  @Input() results: SearchResult[];

  constructor() { }
}
