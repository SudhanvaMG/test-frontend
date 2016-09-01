import {Component} from '@angular/core';
import {homePageComponent} from './homepage/homepage.component';

@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,
    directives : [homePageComponent]
})
export class AppComponent {

}