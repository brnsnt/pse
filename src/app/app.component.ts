/**
 * Created by brns on 21.02.17.
 */
import { Component } from '@angular/core';

/*
* <h1>{{title}}</h1>
 <nav>
 <a routerLink="/dashboard">Dashboard</a>
 <a routerLink="/catalogues">Catalogues</a>
 </nav>
 <catalogues></catalogues>
 */
@Component({
    selector: 'app-root',
    template: `<h1>{{title}}</h1>
<catalogues></catalogues>
 <router-outlet></router-outlet>
`,
})

export class AppComponent {
    title = 'search.eonum.ch';
}
