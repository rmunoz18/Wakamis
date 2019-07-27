import { Component, OnInit } from '@angular/core';
import {NavParams,NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { and } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-kaquno',
  templateUrl: 'kaquno.component.html',
  styleUrls: ['kaquno.component.scss'],
})
export class KaqunoComponent implements OnInit {

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
  constructor(public navCtrl: NavController, public toastController: ToastController) { 
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }


  async ventana1(){
    const toast = await  this.toastController.create({
      message : "puto",
      duration : 2000,
        showCloseButton: true,
        closeButtonText: 'Continuar',
    });
    toast.present();
  }



  
disableButton;

async truthClick() {
this.disableButton = true;
}
ngOnInit() {}

  

}

