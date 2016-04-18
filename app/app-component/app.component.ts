import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { MainComponent } from '../main/main.component';
import { GameComponent } from '../game/game.component';
import { SelfieComponent } from '../selfie/selfie.component';

declare var componentHandler: any;

@Component({
    selector: 'rh-keynote-app',
    template: `
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <span class="mdl-layout-title">App</span>
                    <div class="mdl-layout-spacer"></div>
                    <!--<nav class="mdl-navigation mdl-layout--large-screen-only">
                        <a class="mdl-navigation__link" [routerLink]="['Main']">Main</a>
                        <a class="mdl-navigation__link" [routerLink]="['Game']">Game</a>
                        <a class="mdl-navigation__link" [routerLink]="['Selfie']">Selfie</a>
                    </nav>-->
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">Red Hat Summit Demo</span>
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" [routerLink]="['Main']" (click)="closeDrawer()"><i class="material-icons">home</i><span>Main</span></a>
                    <a class="mdl-navigation__link" [routerLink]="['Game']" (click)="closeDrawer()"><i class="material-icons">games</i><span>Game</span></a>
                    <a class="mdl-navigation__link" [routerLink]="['Selfie']" (click)="closeDrawer()"><i class="material-icons">photo_camera</i><span>Selfie</span></a>
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div class="page-content">
                    <router-outlet></router-outlet>
                </div>
            </main>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/main',   name: 'Main',   component: MainComponent, useAsDefault: true },
    { path: '/game',   name: 'Game',   component: GameComponent },
    { path: '/selfie', name: 'Selfie', component: SelfieComponent }
])

export class AppComponent implements OnInit {
    ngOnInit() {
        componentHandler.upgradeDom();
    }

    closeDrawer() {
        let matches = document.querySelectorAll('.mdl-layout__drawer, .mdl-layout__obfuscator');
        [].forEach.call(matches, element => {
            element.classList.remove('is-visible');
        });
    }
}
