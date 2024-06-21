import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, NavParams, Platform, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../services/api.service';
import { getTypes, signupApi, verifyPhone } from '../services/api_url.hepler';
import { generateLocalUser } from '../services/constrant.helper';
import { getLang, setLanguage } from '../services/local.helper';
import { getUser, setUser } from '../services/session.helper';
import { StoreService } from '../services/store.service';
import { UtilsService } from '../services/utils.service';
import { OtpPage } from '../otp/otp.page';
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
import { Facebook } from '@awesome-cordova-plugins/facebook/ngx';
import { FacebookLoginResponse } from '@awesome-cordova-plugins/facebook';
import { CountriesPage } from '../countries/countries.page';
import { Plugins } from '@capacitor/core';
import { fire } from '../services/firebase.config';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  selectedType: any = '';
  name: any = '';
  email: any = '';
  password: any = '';
  confirmPassword: any = '';
  phoneNumber: any = '';
  loginType = 'Normal';
  lang: any = false;
  // auth = getAuth();
  phone = "+923043372285"
  recaptchaVerifier: any;
  confirmResult: any;
  firebase: any;
  user: any;
  code: string = "+974";
  windowRef: any;
  googleId: any = '';
  facebookId: any = '';
  acTypes: any = [];
  selectedAccountTypeId;
  selectedCountry: any = {
    "country_id": 178,
    "phonecode": 974,
    "name" : "Qatar",
  }
  // selectedCountry: any = {
  //   "country_id": 166,
  //   "phonecode": 92,
  //   "name" : "Qatar",
  // }
  showAppleSignIn: boolean = false;
  accountTypeError = false;
  // private google: GooglePlus
  // private firebaseAuth:any = FirebaseAuthentication;

  constructor(
    private router: Router,
    private api: ApiService,
    private util: UtilsService,
    private navCtrl: NavController,
    private translate: TranslateService,
    private ss: StoreService,
    private modelCtrl: PopoverController,
    private platform: Platform,
    private google: GooglePlus,
    private fb: Facebook
  ) {
    this.translate.use(getLang());
    this.getPageData();
    // this.fireAuth.setC
  }
  async sendOtp() {
    // this.angularAuth.signInWithPhoneNumber(
    //   "+923043372285",
    // )

  }
  async getPageData(){
    this.util.showProgressDialog('Please wait',true);
    var response = await this.api.getRequest(getTypes);
    console.log(response)
    this.util.hideProgressDialog();
    if(response){
      this.acTypes = response;
    }

  }
  async ngOnInit() {
    if (getLang() == 'en') {
      this.lang == false;
    } else {
      this.lang = true;
    }
    const { Device } = Plugins;
    let device = await Device.getInfo();
    this.showAppleSignIn = device.platform === 'ios';
    // this.windowRef.recaptchaVerifier.render().then((widgetId) => {
    //   console.log(widgetId);
    //   this.windowRef.recaptchaWidgetId = widgetId;
    // });
  }
  async ionViewDidEnter() {
    // console.log("ionViewDidEnter");
    // let recaptchaVerifier = new RecaptchaVerifier('sign-in-button', { 'size': 'invisible' }, auth);
    // if (!this.recaptchaVerifier) {
    //   recaptchaVerifier.verify().then(() => {
    //     console.log("recaptchaVerifier");
    //     this.recaptchaVerifier = recaptchaVerifier
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // } else {
    //   console.log("recaptchaVerifie2");
    //   try {
    //     recaptchaVerifier.clear();
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    // console.log("ionViewDidEnter2");

  }
  ionViewDidLoad() {
    // console.log("ionViewDidLoad");
    // let recaptchaVerifier = new RecaptchaVerifier('sign-in-button', { 'size': 'invisible' }, auth);
    // if(!this.recaptchaVerifier){
    //   recaptchaVerifier.verify().then(() => this.recaptchaVerifier = recaptchaVerifier)
    // }else{
    //   recaptchaVerifier.clear();
    // }
    // console.log("ionViewDidLoad2");

  }
  ionViewDidLeave() {
    console.log("leave");
    if (this.recaptchaVerifier)
      this.recaptchaVerifier.clear();
  }

  async getCountry() {
    const modal = await this.modelCtrl.create({
      component: CountriesPage,
      componentProps: {
        country: this.selectedCountry
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);
      if (dataReturned.data !== null && dataReturned.data != undefined) {
        // this.util.showToast("Verifing");
        if (dataReturned.data.country) {
          console.log(dataReturned.data.country)
          this.selectedCountry = dataReturned.data.country;
        }
      } else {
        // this.util.showToast("No country selected");
        this.selectedCountry = {
          "country_id": 178,
          "phonecode": 974,
        };
      }
    });
    await modal.present();

  }
  // signinWithPhone() {
  //   // this.fireAuth.verifyPhoneNumber()
  //   signInWithPhoneNumber(auth, "+" + this.selectedCountry.phonecode + this.phoneNumber, this.recaptchaVerifier).then(
  //     confirmResult => {
  //       console.log(confirmResult);
  //       this.confirmResult = confirmResult;
  //       this.openVerificationScreen();
  //     }
  //   ).catch(er => {
  //     console.log(er);
  //     this.util.showToast('Cannot verify this phone number please try again next time');
  //   });
  // }
  // async openVerificationScreen() {
  //   const modal = await this.modelCtrl.create({
  //     component: OtpPage,
  //     componentProps: {
  //       res: this.confirmResult,
  //     },
  //     swipeToClose: true,
  //     presentingElement: await this.modelCtrl.getTop(),
  //   });
  //   modal.onDidDismiss().then((dataReturned) => {
  //     console.log(dataReturned);
  //     if (dataReturned !== null) {
  //       this.util.showToast("Verifing");
  //       if (dataReturned.data == true) {
  //         this.phoneVerified();
  //       }
  //     } else {
  //       this.util.showToast("Your phone number is not verified");
  //       if (this.user.user_id) {
  //         setUser(this.user);
  //         this.ss.changeUser(this.user);
  //         this.navCtrl.navigateForward('/home');
  //       }
  //     }
  //   });
  //   await modal.present();
  // }
  // async phoneVerified() {
  //   var user_id = this.user.user_id;
  //   this.util.showProgressDialog();
  //   var response = await this.api.getRequest(verifyPhone + "/" + user_id + "/" + (this.selectedCountry.phonecode + " " + this.phoneNumber));
  //   this.util.hideProgressDialog();
  //   if (response) {
  //     this.util.showToast(response.req_message);
  //     setUser(response);
  //     this.ss.changeUser(response);
  //     this.navCtrl.navigateForward('/home');
  //   }
  // }
  // verifyOtp(code) {
  //   if (this.confirmResult) {
  //     this.confirmResult.confirm(code).then(res => {
  //       console.log(res);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  //   }
  // }

  goToLogin() {
    this.router.navigate(['login']);
  }
  changeType(type) {
    this.selectedType = type;
  }

  async signup(signupType = "normal") {
    // this.signinWithPhone();
    // // this.openVerificationScreen();
    // return;
    if (this.selectedType.length < 1) {
      this.util.showToast('Please select account type first, COMPANY or INDIVAIDUAL');
      return;
    }
    if (signupType == "normal") {
      if (this.phoneNumber.length < 8) {
        this.util.showToast('Phone number is not valid must have atleast 8 digits');
        return;
      }
      if (this.name.length < 2) {
        this.util.showToast('Invalid name');
        return;
      }
      if (this.email.length < 1) {
        this.util.showToast('Invalid email address');
        return;
      }

      if (this.password.length < 6) {
        this.util.showToast('Invalid password. password must be atleast 6 charecters long');
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.util.showToast("Password doesn't match")
        return;
      }
    }

    if(!this.selectedAccountTypeId){
      this.accountTypeError = true;
      return;
    }
    if(this.selectedAccountTypeId.length < 1){
      this.accountTypeError = true;
      return;
    }
    var type = "Individual";
    if (this.selectedType == "indiv") {
      type = "Individual";
    } else {
      type = "Company";
    }
    
    

    let mphone = '';
    if (this.phoneNumber.toString().length > 0)
      mphone = this.selectedCountry.phonecode + "-" + this.phoneNumber;

    var payload = {
      email: this.email,
      name: this.name,
      phone: mphone,
      type: type,
      login_type: this.loginType,
      password: this.password,
      ac_type: signupType,
      google_id: this.googleId,
      facebook_id: this.facebookId,
      country_id: this.selectedCountry.country_id,
      account_id: this.selectedAccountTypeId
    };
    this.util.showProgressDialog('Please Wait',true);
    var response = await this.api.postRequest(payload, signupApi);
    this.util.hideProgressDialog();
    if (response) {
      this.util.showToast(response.req_message);
      this.user = response;
      // if (!this.recaptchaVerifier) {
      setUser(response);
      this.ss.changeUser(getUser());

      this.navCtrl.navigateForward('/edit-account', {
        queryParams: {
          message: "Fill out required information. "
        }
      });
      // } else {
      //   this.signinWithPhone();
      // }


    }
  }
  //  <dict>
  //      <key>CFBundleTypeRole</key>
  //      <key>CFBundleURLName</key>
  //      <key>CFBundleURLSchemes</key>
  //      <string>Editor</string>
  //      <string>REVERSED_CLIENT_ID</string>
  //      <array>
  //        <string>$REVERSED_CLIENT_ID</string>
  //      </array>
  //    </dict>
  // <string name="REVERSED_CLIENT_ID">REVERSE_CLIENT_ID</string>
  signupWithApple() {
    const { SignInWithApple } = Plugins;
    SignInWithApple.Authorize()
      .then(async (res) => {
        console.log(res);
        if (res.response && res.response.identityToken) {
          // this.user = res.response;
          console.log("apple response", res);
          let response = res.response;
          if (response.email)
            this.email = response.email;
          if (response.givenName)
            this.name = response.givenName;
          if (response.identityToken)
            this.googleId = response.identityToken;
          this.signup('gmail');
          // this.loginByType('google', res.response.email, res.response.identityToken);
        } else {
          this.util.showToast("Cannot signup with apple with this account right now. try again.");

          // this.presentAlert();
        }
      })
      .catch((response) => {
        this.util.showToast("Cannot signup with apple with this account right now. try again.");
        console.log(response);
        // this.presentAlert();
      });
  }
  signupWithGoogle() {
    var type = "Individual";
    if (this.selectedType == "indiv") {
      type = "Individual";
    } else {
      type = "Company";
    }
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
          if (response.email)
            this.email = response.email;
          if (response.displayName)
            this.name = response.displayName;
          if (response.uid)
            this.googleId = response.userId;
          this.signup('gmail');
          // this.onLoginSuccess(idToken, accessToken);
        }).catch((error) => {
          console.log(error);
          alert('error:' + JSON.stringify(error));
        });
    } else {
      console.log('else...');
      fire.auth().signInWithPopup(new fire.auth.GoogleAuthProvider()).then(success => {
        console.log('success in google login', success);
        if (success) {
          this.email = success.user.email;
          this.name = success.user.displayName;
          this.googleId = success.user.uid;
          this.signup('gmail');
        }
      }).catch(err => {
        console.log(err.message, 'error in google login');
      });
    }
  }

  signupWithFB() {
    // if (this.phoneNumber.length < 8) {
    //   this.util.showToast('Phone number is not valid must have atleast 8 digits');
    //   return;
    // }
    // if (this.password.length < 6) {
    //   this.util.showToast('Invalid password. password must be atleast 6 charecters long');
    //   return;
    // }
    // if (this.password !== this.confirmPassword) {
    //   this.util.showToast("Password doesn't match")
    //   return;
    // }
    var type = "Individual";
    if (this.selectedType == "indiv") {
      type = "Individual";
    } else {
      type = "Company";
    }
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res);
        this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          let userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data’][‘url'], username: profile['name'], id: profile['id'] }
          if (userData.email) {
            this.email = userData.email;
          }
          if (userData.username) {
            this.name = userData.username;
          }
          if (userData.id) {
            this.facebookId = userData.id;
          }
          this.signup('facebook');

          console.log(profile);
          console.log(userData);
        }).catch(e => {
          console.log(e);

        }).catch(e => console.log(e));
      })
      .catch(e => {
        console.log('Error logging into Facebook', e);
        this.util.showToast("Cannot signup with facebook with this account right now. try again.");
      });
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
  skip() {
    generateLocalUser();
    this.ss.changeUser(getUser());
    this.router.navigate(['home']);
  }
}
