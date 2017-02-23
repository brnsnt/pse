/**
 * Created by brns on 22.02.17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueSearchComponent} from "./components/catalogue-search/catalogue-search.component";

const routes: Routes = [
    { path: 'catalogue/:domain', component: CatalogueSearchComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
