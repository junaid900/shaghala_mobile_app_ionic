import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { appSettingApi, baseUrl } from '../services/api_url.hepler';
import { generateLocalUser } from '../services/constrant.helper';
import { GlobalProvider } from '../services/global.provider';
import { getLang } from '../services/local.helper';
import { getUser, isLogin, logout } from '../services/session.helper';
import { StoreService } from '../services/store.service';
import { AppState } from '../store/app.store';
import { removeUser } from '../store/user/user.action';
import {Share} from '@capacitor/share'
import { ApiService } from '../services/api.service';
import { UtilsService } from '../services/utils.service';
import { isEmpty } from '@firebase/util';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  user: any;
  appUrl = baseUrl;
  checkLogin: boolean = false;
  settings: any;
  isSettingLoading: boolean = false;
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private navCtrl: NavController,
    private translate: TranslateService,
    private globalProvider: GlobalProvider,
    private platform: Platform,
    private ss: StoreService,
    private menu: MenuController,
    private api: ApiService,
    private util: UtilsService,
  ) {
    this.user = getUser();
   }

  ngOnInit() {
    this.ss.currentUser.subscribe(user=>{
      this.user = user;
    })
  }

  checkAccount(){
    // console.log("here");
    // if(getUser().admin_status){
    //   console.log("here4");
    //   if(getUser().admin_status != "Active"){
    //     console.log("here5");
    //     var navParams =  {
    //       queryParams:{
    //         from: "menu",
    //       }
    //     }
    //     this.navCtrl.navigateBack(['edit-account'],navParams);
    //   }
    // }  
  }

  ionViewDidEnter(){
    this.checkAccount();
    this.getSettings();
    console.log("menu enter");
    // this.user = getUser();
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
  async getSettings(){
    this.isSettingLoading = true;
    let response = await this.api.getRequest(appSettingApi);
    this.isSettingLoading = false;
    if(response){
      this.settings = response;
    }
    console.log(response);
  }
  goToProfile() {
    this.router.navigate(['account']);
    this.menu.close();
  }
  goToSetting() {
    this.router.navigate(['setting']);
    this.menu.close();
  }
  goToComplainCenter() {
    this.router.navigate(['complain-center']);
    this.menu.close();
  }
  goToAboutUs(){
    this.router.navigate(['about-us'])
  }
  goToReservations(){
    this.router.navigate(['reservation']);
    this.menu.close();
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
  async shareApp(){
    if(!this.settings.share_text){
      this.util.showToast("Cannot get url to share try next time");
      this.getSettings();
      return;
    }
    let url = '';
    if(this.platform.is('android')){
      url = this.settings.android_app_url;
    }else if(this.platform.is('ios')){
      url = this.settings.ios_app_url;
    }
    console.log(url);
    if(url.length < 1){
      this.util.showToast("Cannot get url");
      return;
    }
    
    await Share.share({
      title: 'Share Shkalah App',
      text: this.settings.share_text,
      url: url,
      dialogTitle: 'Share with people',
    });
  }
}
