/**
 * Created by brns on 21.02.17.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>{{title}}</h1>
<nav>
 <a routerLink="/catalogue/drgs">DRGs</a>
 <a routerLink="/catalogue/adrgs">ADRGs</a>
 <a routerLink="/catalogue/chops">CHOPs</a>
 <a routerLink="/catalogue/icds">ICDs</a>
 <a routerLink="/search">Search Form</a>
 </nav>
 <router-outlet></router-outlet>
`,
  styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'search.eonum.ch';
}
