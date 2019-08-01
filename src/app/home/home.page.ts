import { Component } from '@angular/core';
import {NavParams,NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}


  abrirkaq(){
    this.navCtrl.navigateForward("registrate");
   }


   
  abrirlog(){
    this.navCtrl.navigateForward("login");
   }

}
