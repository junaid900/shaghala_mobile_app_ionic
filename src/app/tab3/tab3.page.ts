import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
@Injectable()
export class Tab3Page {

  constructor(
    private navParms: NavParams,
    private store: StoreService
  ) {
    console.log("here");
    console.log(this.navParms.get('data'));
    // console.log(store.storeData);

  }

}
