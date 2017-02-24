import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {CatalogueSearchComponent} from "./components/catalogue-search/catalogue-search.component";
import {AppRoutingModule} from "./app-routing.module";
import {CatalogueEntryComponent} from "./components/catalogue-entry/catalogue-entry.component";
import {CatalogueService} from "./shared/catalogue.service";
import {SearchFormComponent} from "./components/search-form/search-form.component";
import { SearchComponent } from './components/search/search.component';
import {CatalogueSearchService} from "./components/catalogue-search/catalogue-search.service";

@NgModule({
  imports: [ // imported stuff
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [ // self made stuff
    AppComponent,
    CatalogueSearchComponent,
    CatalogueEntryComponent,
    SearchFormComponent,
    SearchComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ // globally injectable services
    CatalogueService,
    CatalogueSearchService
  ]

})

export class AppModule {
}


