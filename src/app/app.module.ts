import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {CatalogueService} from "./services/catalogue.service";
import {SearchFormComponent} from "./components/search-form/search-form.component";
import { SearchComponent } from './components/search/search.component';
import {CatalogueSearchService} from "./services/catalogue-search.service";
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchComponent,
    SearchResultComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    CatalogueService,
    CatalogueSearchService
  ]

})

export class AppModule {}


