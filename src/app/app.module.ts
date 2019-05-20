import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InicioPage } from '../pages/inicio/inicio';
import { SistemasPage } from '../pages/sistemas/sistemas';
import { ElectronicaPage } from '../pages/electronica/electronica';
import { GestionPage }     from '../pages/gestion/gestion';
import { LeiPage }         from '../pages/lei/lei';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SistemasPage,
    ElectronicaPage,
    GestionPage,
    LeiPage,
    InicioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SistemasPage,
    ElectronicaPage,
    LeiPage,
    GestionPage,
    InicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
