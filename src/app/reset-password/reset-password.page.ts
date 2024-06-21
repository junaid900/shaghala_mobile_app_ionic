import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GooglePlus } from '@awesome-cordova-plugins/google-plus/ngx';
import { ModalController, NavController, Platform, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CountriesPage } from '../countries/countries.page';
import { OtpPage } from '../otp/otp.page';
import { ApiService } from '../services/api.service';
import { resetPassword, signupApi } from '../services/api_url.hepler';
import { StoreService } from '../services/store.service';
import { UtilsService } from '../services/utils.service';

import { convertToBase64 } from '../services/constrant.helper';
import { fire } from '../services/firebase.config';
import { cfaSignInPhone, cfaSignInPhoneOnCodeSent } from 'capacitor-firebase-auth';
import { Plugins } from '@capacitor/core';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  phoneNumber: any = '';
  recaptchaVerifier: any;
  confirmResult: any;
  firebase: any;
  user: any;
  code: string = "+92";
  windowRef: any;
  selectedCountry: any = {
    "country_id": 178,
    "phonecode": 974,
  };
  userResponse: any = {};
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
  ) {

  }

  ngOnInit() {
  }
  async ionViewDidEnter() {
    console.log("ionViewDidEnter");
    let recaptchaVerifier = new fire.auth.RecaptchaVerifier('sign-in-button', { 'size': 'invisible' });
    if (!this.recaptchaVerifier) {
      recaptchaVerifier.verify().then(() => {
        console.log("recaptchaVerifier");
        this.recaptchaVerifier = recaptchaVerifier
      }).catch(err => {
        console.log(err);
      })
    } else {
      console.log("recaptchaVerifie2");
      try {
        recaptchaVerifier.clear();
      } catch (e) {
        console.log(e);
      }
    }
    console.log("ionViewDidEnter2");
  }
  goBack() {
    this.navCtrl.back();
  }
  async getCountry() {
    const modal = await this.modelCtrl.create({
      component: CountriesPage,
      // swipeToClose: true,
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
  async openVerificationScreen() {
    const modal = await this.modelCtrl.create({
      component: OtpPage,
      componentProps: {
        res: this.confirmResult,
      },
      cssClass: ['otp-pop']
      // swipeToClose: true,
      // presentingElement: await this.modelCtrl.getTop(),
    });
    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);
      if (dataReturned !== null) {
        this.util.showToast("Verifing");
        if (!dataReturned.data) {
          this.util.showToast("Your phone number is not verified try again");
          return;
        }
        if (dataReturned.data.phone == true) {
          // this.phoneVerified();
          this.resetPassword();

        }
      } else {
        this.util.showToast("Your phone number is not verified try again");
      }
    });
    await modal.present();
  }
  resetPassword() {
    if (!this.userResponse.user_id) {
      this.util.showToast("We are sorry. cannot proceed your request right now try again later.");
      return;
    }
    var data = JSON.stringify(this.userResponse);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: convertToBase64(data),
      }
    };
    this.router.navigate(['new-password'], navigationExtras);
  }
  async signinWithPhone() {
    // this.fireAuth.verifyPhoneNumber()

    const { Device } = Plugins;
    let device = await Device.getInfo();
    console.log(device);
    if (device.platform == 'ios') {
      console.log('========+++> Verify');
      cfaSignInPhone("+" + this.selectedCountry.phonecode + this.phoneNumber).subscribe(
        user => console.log("cfaSignInPhone", user.phoneNumber)
      )
      cfaSignInPhoneOnCodeSent().subscribe((verificationId) => {
        console.log("cfaSignInPhoneOnCodeSent", verificationId);
        console.log("cfaSignInPhoneOnCodeSent", verificationId.length > 0);
        if (verificationId.length > 0) {
          this.confirmResult = verificationId;
          console.log(this.confirmResult);
          setTimeout(() => {
            this.openVerificationScreen();
          }, 400)
        } else {
          this.util.showToast("Cannot verify");
        }
      }
      )
      // cfaSignInPhoneOnCodeReceived().subscribe(
      //   (event: { verificationId: string, verificationCode: string }) => {
      //     console.log("cfaSignInPhoneOnCodeReceived",`${event.verificationId}:${event.verificationCode}`);

      //   })
    } else {
      fire.auth().signInWithPhoneNumber("+" + this.selectedCountry.phonecode + this.phoneNumber, this.recaptchaVerifier).then(
        confirmResult => {
          console.log(confirmResult);
          this.confirmResult = confirmResult;
          this.openVerificationScreen();
        }
      ).catch(er => {
        console.log(er);
        this.util.showToast('Cannot verify this phone number please try again next time');
      });
    }
  }

  async verify() {
    if (!this.recaptchaVerifier) {
      this.util.showToast("Cannot verify try next time");
      return;
    }
    if (this.phoneNumber.length < 8) {
      this.util.showToast("Phone number length cannot be less then 8");
      return;
    }
    this.util.showProgressDialog();
    var payload = {
      code: this.selectedCountry.phonecode,
      phone: this.phoneNumber
    };
    var response = await this.api.postRequest(payload, resetPassword);
    this.util.hideProgressDialog();
    if (response) {
      this.util.showToast(response.req_message);
      console.log(response);
      this.userResponse = response;
      this.signinWithPhone();
    }
  }

}
