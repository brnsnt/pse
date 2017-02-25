import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {CatalogueSearchComponent} from "./components/catalogue-search/catalogue-search.component";
import {AppRoutingModule} from "./app-routing.module";
import {CatalogueEntryComponent} from "./components/catalogue-entry/catalogue-entry.component";
import {CatalogueService} from "./services/catalogue.service";
import {SearchFormComponent} from "./components/search-form/search-form.component";
import { SearchComponent } from './components/search/search.component';
import {CatalogueSearchService} from "./services/catalogue-search.service";
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // template driven forms
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    CatalogueSearchComponent,
    CatalogueEntryComponent,
    SearchFormComponent,
    SearchComponent,
    SearchResultComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ // globally injectable services
    CatalogueService,
    CatalogueSearchService
  ]

})

export class AppModule {}


