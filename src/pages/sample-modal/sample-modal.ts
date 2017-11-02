import { Component,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController, 
  AlertController  } from 'ionic-angular';

/**
 * Generated class for the SampleModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample-modal',
  templateUrl: 'sample-modal.html',
})
export class SampleModalPage {

  text: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public renderer: Renderer,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController) {
      this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModalPage');
  }

  closeModal() {
    this.viewCtrl.dismiss(this.text);
  }

}
