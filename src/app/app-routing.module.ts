/**
 * Created by brns on 22.02.17.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueSearchComponent} from "./catalogue-search.component";

/*
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'dashboard',  component: DashboardComponent },
 { path: 'catalogues',     component: CataloguesComponent }
 */
const routes: Routes = [
    { path: 'catalogue/:tag', component: CatalogueSearchComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
