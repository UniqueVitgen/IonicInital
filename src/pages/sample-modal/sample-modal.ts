import { Component,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController} from 'ionic-angular';

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
    public viewCtrl: ViewController) {
      this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModalPage');
  }

  success() {
    let myObj = {answer:true,text:this.text}
    this.viewCtrl.dismiss(myObj);
  }

  cancel() {
    let myObj = {answer:false,text:this.text}
    this.viewCtrl.dismiss(myObj);
  }



}
