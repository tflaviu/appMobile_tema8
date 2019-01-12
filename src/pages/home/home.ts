import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  phoneNumber = '';

  constructor(public navCtrl: NavController) {

  }

  onInputChange(event) {
    event.length === 10 ? this.phoneNumber = event : null;
  }
}
