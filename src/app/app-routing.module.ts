/**
 * Created by brns on 22.02.17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueSearchComponent} from "./components/catalogue-search/catalogue-search.component";
import {SearchFormComponent} from "./components/search-form/search-form.component";
import {SearchComponent} from "./components/search/search.component";

const routes: Routes = [
  { path: 'catalogue/:domain', component: CatalogueSearchComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
