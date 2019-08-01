import { Component, OnInit } from '@angular/core';
import {NavParams,NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kaquno',
  templateUrl: 'kaquno.component.html',
  styleUrls: ['kaquno.component.scss'],
})
export class KaqunoComponent implements OnInit {

  public valor1;
  public valor2;
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
    this.valor1 ="AK'AL";
    const toast = await  this.toastController.create({
      message : "Error, la palabra correcta es: AK'AL" ,
      duration : 9000,
        showCloseButton: true,
        closeButtonText: 'Continuar',
    });
    toast.present();
  }

  
  async ventana2(){

    const toast = await  this.toastController.create({
      message : "Correcto" ,
      duration : 9000,
        showCloseButton: true,
        closeButtonText: 'Continuar',
    });
    toast.present();
  }


disableButton;

async truthClick() {
this.disableButton = true;
}

async truthClick1() {
  this.disableButton = true;
  }
  



valuno1(){
  this.valor1

  if(!this.valor1){
     
    this.ventana2()
  

  }else{

    this.ventana1()

  }

}
ngOnInit() {}

  

}

