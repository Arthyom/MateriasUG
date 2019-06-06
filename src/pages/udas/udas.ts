import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UdasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-udas',
  templateUrl: 'udas.html',
})
export class UdasPage {

  udas: Array<String>;
  area: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // get element from other page
  
    this.area = navParams.get('item').area;
    this.udas = navParams.get('item').UDAS;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UdasPage');
  }

}
