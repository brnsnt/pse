import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {CataloguesComponent} from "./catalogues.component";
import {CatalogueSearchComponent} from "./catalogue-search.component";
import {DashboardComponent} from "./dashboard.component";
import {CatalogueService} from "./catalogue.service";
import {AppRoutingModule} from "./app-routing.module";
import {CatalogueEntryComponent} from "./catalogue-entry.component";

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
        DashboardComponent,
        CatalogueSearchComponent,
        CatalogueEntryComponent,
    ],
    bootstrap: [AppComponent],
    providers: [CatalogueService]

})

export class AppModule {
}


