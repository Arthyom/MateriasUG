import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sistemas',
  templateUrl: 'sistemas.html',
})
export class SistemasPage {

  items: Array<{id: string, area: string, UDAS: Array<String>}>;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push({ id: '1', area: 'CREATIVIDAD Y ESPIRITU EMPRENDEDOR', UDAS:['hola', 'hola'] });
    this.items.push({ id: '2', area: 'DESARROLLO PERSONAL', UDAS: ['hola', 'hola']});
    this.items.push({ id: '3', area: 'FORMACIÓN CULTURAL E INTERCULTURAL', UDAS: ['hola', 'hola']});
    this.items.push({ id: '4', area: 'RESPONSABILIDAD SOCIAL', UDAS:['hola', 'hola']});
    this.items.push({ id: '5', area: 'BÁSICA COMÚN', UDAS:['hola', 'hola']});
    this.items.push({ id: '6', area: 'COMPLEMENTARIA', UDAS: ['hola', 'hola']});
    this.items.push({ id: '7', area: 'BÁSICA DISCIPLINAR', UDAS: ['hola', 'hola']});
    this.items.push({ id: '8', area: 'PROFUNDIZACIÓN', UDAS: ['hola', 'hola']});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SistemasPage');
  }

}
