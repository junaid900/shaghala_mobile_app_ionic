import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { baseUrl } from '../services/api_url.hepler';
import { generateLocalUser } from '../services/constrant.helper';
import { GlobalProvider } from '../services/global.provider';
import { getLang } from '../services/local.helper';
import { getUser, isLogin, logout, setUser } from '../services/session.helper';
import { StoreService } from '../services/store.service';
import { AppState } from '../store/app.store';
import { loadUser, removeUser } from '../store/user/user.action';
import { selectUser } from '../store/user/user.selector';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user: any = {};
  checkLogin: boolean = false;
  appUrl: string = baseUrl;
  storeUser: any = {};
  constructor(private router: Router,
    private store: Store<AppState>,
    private navCtrl: NavController,
    private translate: TranslateService,
    private globalProvider: GlobalProvider,
    private platform: Platform,
    private ss: StoreService,
    private menu: MenuController) {
    console.log(getLang());
    this.getPageData();
  }
  ionViewDidEnter() {
    this.translate.use(getLang());
    if (isLogin()) {
      this.platform.resume.subscribe(() => {
        console.log("here")
      });
      this.checkLogin = true;
      this.user = getUser();
    }else{
      
    }
  }
  async getPageData() {
    this.user = getUser();
    this.ss.currentUser.subscribe(res => {
      this.user = res;
      console.log('tab2', res);
    });
  }

  async goToHome() {
    await this.router.navigate(['home-page']);
    console.log("here");
  }
  goToProfile() {
    this.router.navigate(['account']);
  }
  goToSetting() {
    this.router.navigate(['setting']);
  }
  goToComplainCenter() {
    this.router.navigate(['complain-center']);
  }
  logout() {
    new AlertController().create({
      header: "Warning!",
      message: "Do you want to logout?",
      buttons: [{
        text: "No",
        handler: () => {

        }
      }, {
        text: "Yes",
        handler: () => {
          this.store.dispatch(removeUser());
          logout();
          this.ss.changeUser({});
          this.navCtrl.navigateForward('/login');
          // console.log(generateLocalUser());
          // setUser(generateLocalUser());
          generateLocalUser();
          this.ionViewDidEnter();
        }
      }]
    }).then(res => res.present())

  }
  goToLogin() {
    this.router.navigate(['login']);
  }

  openMenu() {
    this.menu.open();
  }

}
