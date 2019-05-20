import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage }        from '../pages/home/home';
import { ListPage }        from '../pages/list/list';
import { InicioPage }      from '../pages/inicio/inicio';
import { SistemasPage }    from '../pages/sistemas/sistemas';
import { ElectronicaPage } from '../pages/electronica/electronica';
import { GestionPage }     from '../pages/gestion/gestion';
import { LeiPage }         from '../pages/lei/lei';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Home',                              component: HomePage },
      { title: 'Inicio',                            component: InicioPage },
      { title: 'Ing. Sistemas Computacionales',     component: SistemasPage},
      { title: 'Ing. Comunicaciones y Electronica', component: ElectronicaPage},
      { title: 'Lic. Gestion Empresarial',          component: GestionPage},
      { title: 'Lic. Enseñanza del Ingles',         component: LeiPage},
      { title: 'List',   component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
