/**
 * Created by brns on 21.02.17.
 *<nav>
 <a routerLink="/catalogue/drgs">DRGs</a>
 <a routerLink="/catalogue/adrgs">ADRGs</a>
 <a routerLink="/catalogue/chops">CHOPs</a>
 <a routerLink="/catalogue/icds">ICDs</a>
 <a routerLink="/search">Search Form</a>
 </nav>
 */
import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    template: `<h1>{{title}}</h1>
 <router-outlet></router-outlet>`,
  styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Prototyp: search.eonum.ch Text-Suche';
}
