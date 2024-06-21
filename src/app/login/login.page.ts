import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facebook } from '@awesome-cordova-plugins/facebook/ngx';
import { FacebookLoginResponse } from '@awesome-cordova-plugins/facebook';
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
import { Platform } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { loginApi, loginByTyprApi } from '../services/api_url.hepler';
import { generateLocalUser } from '../services/constrant.helper';
import { getLang, setLanguage } from '../services/local.helper';
import { getUser, isLogin, setUser } from '../services/session.helper';
import { StoreService } from '../services/store.service';
import { UtilsService } from '../services/utils.service';
import { addUser } from '../store/user/user.action';
import { Plugins } from '@capacitor/core';
import { fire } from '../services/firebase.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any = '';
  password: any = '';
  lang: any = false;
  showAppleSignIn: boolean = false;
  constructor(
    private router: Router,
    private api: ApiService,
    private util: UtilsService,
    private store: Store,
    private translate: TranslateService,
    private ss: StoreService,
    private platform: Platform,
    private google: GooglePlus,
    private fb: Facebook
    // private keyboard: Keyboard
  ) {
    this.translate.use(getLang());


  }

  async ngOnInit() {
    if (getLang() == 'en') {
      console.log("here");
      this.lang = false;
    } else {
      console.log("here2");
      this.lang = true;
    }
    console.log(getLang(), this.lang);
    const { Device } = Plugins;
    let device = await Device.getInfo();
    this.showAppleSignIn = device.platform === 'ios';
  }
  goToSignup() {
    this.router.navigate(['signup']);
  }

  async login() {
    this.username = this.username.trim();
    if (this.username.length < 3) {
      this.username = '';
      this.util.showToast('email cannot be empty or enter a valid email');
      return;
    }
    if (this.password.length < 5) {
      this.util.showToast('please enter valid password');
      return;
    }
    let payload = {
      email: this.username,
      password: this.password,
    };
    this.util.showProgressDialog();
    let response = await this.api.postRequest(payload, loginApi);
    this.util.hideProgressDialog();
    console.log(response);
    if (response) {
      console.log(response);
      setUser(response);
      this.store.dispatch(addUser({ content: getUser() }));
      if (isLogin()) {
        this.ss.changeUser(getUser());
        this.router.navigate(['home']);
      }
    }
  }
  changeLang(ev) {
    console.log(ev);
    if (ev) {
      setLanguage('ar');
    } else {
      setLanguage('en');
    }
    location.reload();
  }
  signupWithFB() {

    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res);
        this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          let userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data’][‘url'], username: profile['name'], id: profile['id'] }
          // if (userData.email) {
          //   this.email = userData.email;
          // }
          // if (userData.username) {
          //   this.name = userData.username;
          // }
          // this.signup('facebook');
          if (userData.id) {
            this.loginByType('facebook', userData.email, userData.id);
          }
          console.log(profile);
          console.log(res);
        }).catch(e => {
          console.log(e);
          this.util.showToast("Cannot signin with facebook with this account right now. try again.");
        }).catch(e => console.log(e));
      })
      .catch(e => {
        console.log('Error logging into Facebook', e);
        this.util.showToast("Cannot signin with facebook with this account right now. try again.");
      });
  }
  signupWithApple() {
    const { SignInWithApple } = Plugins;
    SignInWithApple.Authorize()
      .then(async (res) => {
        console.log(res);
        if (res.response && res.response.identityToken) {
          // this.user = res.response;
          console.log("apple response", res);
          if (res.response.email)
            this.username = res.response.email;
          this.loginByType('gmail', res.response.email, res.response.identityToken);
        } else {
          this.util.showToast("Cannot signin with apple with this account right now. try again.");

          // this.presentAlert();
        }
      })
      .catch((response) => {
        this.util.showToast("Cannot signin with apple with this account right now. try again.");
        console.log(response);
        // this.presentAlert();
      });
  }
  signupWithGoogle() {
    let params: any;
    if (this.platform.is('capacitor')) {
      if (this.platform.is('android')) {
        params = {
          webClientId: '102537792344-3pk67efcu22r9jr5p600clnmd4hb9flq.apps.googleusercontent.com', //  webclientID 'string'
          offline: true
        };
      } else {
        params = {};
      }
      this.google.login(params)
        .then((response) => {
          const { idToken, accessToken } = response;
          console.log(response);
          this.loginByType('gmail', response.email, response.userId);
        }).catch((error) => {
          console.log(error);
          alert('error:' + JSON.stringify(error));
        });
    } else {
      console.log('else...');
      fire.auth().signInWithPopup(new fire.auth.GoogleAuthProvider()).then(success => {
        console.log('success in google login', success);
        if (success) {
          this.loginByType('gmail', success.user.email, success.user.uid);
        }
      }).catch(err => {
        console.log(err.message, 'error in google login');
      });
    }
  }
  async loginByType(type, email, id) {
    let payload = {
      type: type,
      id: id,
      email: email,
    }
    this.util.showProgressDialog();
    let response = await this.api.postRequest(payload, loginByTyprApi);
    this.util.hideProgressDialog();
    console.log("type", response);
    if (response) {
      console.log("response");
      setUser(response);
      this.store.dispatch(addUser({ content: getUser() }));
      if (isLogin()) {
        console.log("response2");
        this.ss.changeUser(getUser());
        this.router.navigate(['home']);
      }
    }
  }

  skip() {
    generateLocalUser();
    this.ss.changeUser(getUser());
    this.router.navigate(['home']);
  }
}
