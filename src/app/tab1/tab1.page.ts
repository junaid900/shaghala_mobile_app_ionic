import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { getLang } from '../services/local.helper';
import { loadTest } from '../store/test/test.actions';
import { selectAllTest } from '../store/test/test.selector';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // public tests = this.store.select(selectAllTest);
  constructor(private translate: TranslateService, private store: Store,
    private navCtrl: NavController,
    private router: Router,
    private menu: MenuController,
  ) {
    this.translate.use(getLang());
    // this.translate.use('ar');
  }
  ngOnInit() {
    // this.store.dispatch(loadTest());
  }
  goBack() {
    this.navCtrl.back();
  }
  goToFav(type) {
    let navExtras: NavigationExtras = {
      queryParams: {
        type: type
      }
    };
    this.router.navigate(['favourit'], navExtras);

  }
  openMenu(){
    this.menu.open();
  }
}
