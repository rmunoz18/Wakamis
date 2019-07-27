import { Component, OnInit } from '@angular/core';
import {NavParams,NavController } from '@ionic/angular';
@Component({
  selector: 'app-kaqchikel',
  templateUrl: './kaqchikel.component.html',
  styleUrls: ['./kaqchikel.component.scss'],
})
export class KaqchikelComponent implements OnInit {

  
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public navCtrl: NavController) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  
  
  abrirkaq(){
    this.navCtrl.navigateForward("home");
   }

   abrircalen(){
    this.navCtrl.navigateForward("calendario");
   }

   
   abrirPro(){
    this.navCtrl.navigateForward("progreso");
   }

   abrirTien(){
     this.navCtrl.navigateForward("tienda");
   }


   abrirkaquno(){
    this.navCtrl.navigateForward("kaquno");
  }
  ngOnInit() {}

}
