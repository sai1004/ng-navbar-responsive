import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'ng-navbar-responsive';
    isNavOpen: boolean = false;

    menusList: any[] = [
        {
            name: 'news',
            path: '/news',
        },
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'health',
            path: '/health',
        },
        {
            name: 'lifestyle',
            path: '/lifes-tyle',
        },

        {
            name: 'tech',
            path: '/tech',
        },
        {
            name: 'sports',
            path: '/sports',
        },
    ];
}
