import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.page.html',
  styleUrls: ['./check-email.page.scss'],
})
export class CheckEmailPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }

}
