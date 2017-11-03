import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { SampleModalPage } from '../sample-modal/sample-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // constructor(public navCtrl: NavController) {

  // }

  constructor(public modalCtrl: ModalController,public navCtrl:NavController) { }
  userName: string;
  text: string = '';

    openModal() {
      let myModal = this.modalCtrl.create(SampleModalPage);
      myModal.present();

      myModal.onDidDismiss(data => {
        if(data.answer)
        this.text = data.text;
      });
    }

}