import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
// import { Plugins } from 'protractor/built/plugins';
import { getUser, isLogin, logout, setUser } from './services/session.helper';
import { Plugins } from '@capacitor/core';
const { Keyboard } = Plugins;
import * as $ from "jquery";
import { getUserByIdApi } from './services/api_url.hepler';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';

// import {setStatusBarStyleLight, showStatusBar} from './services/constrant.helper'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private platform: Platform,
    private api: ApiService,
    private ss: StoreService,
  ) {
    this.platform.ready().then(res => {
      if (this.platform.is('cordova'))
        if (this.platform.is('android') || this.platform.is('ios')) {
          console.log(this.platform.is('android'));
          console.log("ios", this.platform.is('ios'));
          try {
            Keyboard.addListener("keyboardWillShow", function (e) {
              // console.log("Hey !?");
              // console.log("Keyboard", e);
            });
            Keyboard.addListener("keyboardDidShow", function (e) {
              // console.log("Hey !?");
              // console.log("Keyboard", e);
            });
            Keyboard.addListener("keyboardWillHide", function (e) {
              // console.log("Hide");
              // console.log("Keyboard", e);
            });
            Keyboard.addListener("keyboardDidHide", function (e) {
              // console.log("Hey !?");
              // console.log("Keyboard", e);
            });
            window.addEventListener("keyboardDidShow", function (e: any) {
              console.log("show");
              // console.log(e);
              const height = $(document).height() - e.keyboardHeight;
              // console.log(height);
              $('body').animate({ 'height': height + 'px' }, 100);
              // console.log( document.
              //   activeElement);
              setTimeout(function () {
                let total = 0;
                let container = null;
                console.log(document.
                  activeElement);
                const percent = ($(document.activeElement).offset().top / $(document.body).height()) * 100;
                document.
                  activeElement.
                  scrollIntoView({ behavior: 'smooth' });

                // window.scrollBy(0, 30);
              }, 100);
            });
            window.addEventListener("keyboardDidHide", function (e: any) {
              console.log("hide");
              const height = $(document).height();
              console.log(height);
              $('body').animate({ 'height': height + 'px' }, 100);

            });
            window.addEventListener("keyboardWillShow", function (e: any) {
              // console.log("window", e);
              // console.log("keyboard show");
              // const offset = $(document.body).height();
              // const percent = ($(document.activeElement).offset().top / $(document.body).height()) * 100;
              // console.log("body", offset);
              // console.log("ac element", $(document.activeElement).offset().top)
              // console.log("percent",percent);
              // let height = (e.keyboardHeight) * -1;
              // console.log("height", height);
              // height = height > 0 ? 0 : height;
              // if (percent > 50)
              //   $('body').animate({ 'marginTop': height + 'px' }, 100);
            });
            window.addEventListener("keyboardWillHide", function (e: any) {
              // console.log("window", e);
              // console.log(e);
              // console.log("keyboard Hide");
              // $('body').animate({ 'marginTop': 0 + 'px' }, 100);
            });
          } catch (e) {
            console.log(e);
          }

        }
    })


    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: true, });

      StatusBar.setStyle({
        style: Style.Default,

      });
      StatusBar.getInfo();
      StatusBar.show();
    }
    this.checkUser();
  }
  async checkUser() {
    console.log(isLogin());
    if (!isLogin()) {
      this.router.navigate(['login']);
    } else {
      if (getUser().type != 'local') {
        var response = await this.api.getRequest(getUserByIdApi + "/" + getUser().user_id);
        console.log("user_response", response);

        if (response) {
          setUser(response);
          this.ss.changeUser(response);
        }else{
          logout();
          this.router.navigate(['login']);
        }
      }
    }
  }
}
