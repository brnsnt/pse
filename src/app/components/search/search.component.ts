import { Component, OnInit } from '@angular/core';
import {CatalogueSearchService} from "../catalogue-search/catalogue-search.service";
import {CatalogueService} from "../../shared/catalogue.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private catalogueSearchService: CatalogueSearchService,
              private route: ActivatedRoute,
  ) { }

  ngOnInit() {

  }

}
