import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {CataloguesComponent} from "./components/catalogues/catalogues.component";
import {CatalogueSearchComponent} from "./components/catalogue-search/catalogue-search.component";
import {AppRoutingModule} from "./app-routing.module";
import {CatalogueEntryComponent} from "./components/catalogue-entry/catalogue-entry.component";
import {CatalogueService} from "./components/catalogues/catalogue.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        CataloguesComponent,
        CatalogueSearchComponent,
        CatalogueEntryComponent,
    ],
    bootstrap: [AppComponent],
    providers: [CatalogueService]

})

export class AppModule {
}


