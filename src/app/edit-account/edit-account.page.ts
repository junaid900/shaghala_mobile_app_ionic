import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ActionSheetController, AlertController, ModalController, PopoverController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CountriesPage } from '../countries/countries.page';
import { OtpPage } from '../otp/otp.page';
import { ApiService } from '../services/api.service';
import { baseUrl, getUserByIdApi, sendMailOtpApi, updateProfileApi, uploadCVWorkerApi, uploadDocumentApi, uploadProfilePicApi, verifyEmail, verifyPhone } from '../services/api_url.hepler';
import { getUser, logout, setUser } from '../services/session.helper';
import { StoreService } from '../services/store.service';
import { UtilsService } from '../services/utils.service';
import { ActivatedRoute, Router } from '@angular/router';
import { removeUser } from '../store/user/user.action';
import { convertToBase64, generateLocalUser } from '../services/constrant.helper';
import { getLang } from '../services/local.helper';
import { Plugins } from '@capacitor/core';
import { cfaSignInPhone, cfaSignInPhoneOnCodeReceived, cfaSignInPhoneOnCodeSent } from 'capacitor-firebase-auth';
import { fire } from '../services/firebase.config';
// import { error } from 'console';
// import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {
  user: any;
  password: string = "";
  appUrl: any = baseUrl;
  email: any = '';
  phone: any = '';
  selectedCountry: any = {
    "country_id": 178,
    "phonecode": 974,
    // "phonecode": 92,
    "name" : "Qatar",
  }
  confirmResult: any;
  recaptchaVerifier: any;
  message: any = '';
  userPhoneNumber: any = '';
  emailCode: string = '';
  isPassword: boolean = false;
  cvFile: File = null;
  docUrl: string = '';


  constructor(
    private navCtrl: NavController,
    private util: UtilsService,
    private translate: TranslateService,
    private api: ApiService,
    private actionSheetCtrl: ActionSheetController,
    private ss: StoreService,
    private modelCtrl: PopoverController,
    private route: ActivatedRoute,
    private store: StoreService,
    private router: Router,
    private alertCtrl: AlertController,
    // private platform:
  ) {
    this.translate.use(getLang());
    this.onPageLoad();

  }

  onPageLoad() {
    this.ss.currentUser.subscribe(user => {
      let u = getUser();

      this.email = u.email;
      this.phone = u.phone;
      this.user = u;
      // this.password = u.password;
      if (u.phone)
        if (u.phone.split("-").length > 1) {
          this.userPhoneNumber = u.phone.split("-")[1];
          // console.log(this.userPhoneNumber)
          this.selectedCountry.country_id = u.country_id;
          this.selectedCountry.phonecode = u.phone.split("-")[0];
        }
    });




    // console.log("loaded",u.phone.split("-").length);

    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.message) {
        this.message = params.message;
      }
    });

  }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back();
  }
  async ionViewDidEnter() {
    // console.log(getUser());
    if (!getUser()) {
      logout();
      return;
    }
    if (getUser() == null) {
      logout();
      return;
    }
    console.log(getUser());
    if (getUser().type == 'local') {
      logout();
      return;
    }
    if (getUser().type) {
      if (getUser().type != 'local') {
        var response = await this.api.getRequest(getUserByIdApi + "/" + getUser().user_id);
        if (response) {
          setUser(response);
          this.ss.changeUser(response);
        }
      }
    }
    console.log("ionViewDidEnter");
    console.log(fire.auth());
    // ApplicationVe
    // let auth = getAuth();
    const { Device } = Plugins;
    let device = await Device.getInfo();
    if (device.platform != 'ios') {
      let recaptchaVerifier = new fire.auth.RecaptchaVerifier('sign-in-button',
        {
          'size': 'invisible',
          'type': 'recaptcha'
        });
      if (!this.recaptchaVerifier) {
        recaptchaVerifier.verify().then(() => {

          console.log("recaptchaVerifier");
          console.log(recaptchaVerifier);
          this.recaptchaVerifier = recaptchaVerifier
        }).catch(err => {

          console.log({
            'size': 'invisible',
            'type': 'recaptcha'
          }, err);
        })
      } else {
        console.log("recaptchaVerifie2");
        try {
          recaptchaVerifier.clear();
        } catch (e) {
          console.log(e);
        }
      }
    }
    console.log("ionViewDidEnter2");

  }
  // async profileImage() {
  //   this.actionSheetCtrl.create({
  //     header: "Want to take picture",
  //     buttons: [{
  //       text: 'Camera',
  //       icon: 'camera',
  //       role: 'button',
  //       handler: () => {
  //         this.takeImage();
  //       }

  //     }, {
  //       text: 'Cancel',
  //       role: 'cancel',
  //       handler: () => {
  //       }
  //     }
  //     ]
  //   }).then(res => {
  //     res.present();
  //   });
  // }
  async takeImage() {
    const image = await Camera.getPhoto({
      quality: 20,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    var imageUrl = image.base64String;
    this.uploadImage(imageUrl);
    // console.log(imageUrl);    
  }
  async uploadImage(base64) {
    var payload = {
      user_id: this.user.user_id,
      user_image: base64
    };
    this.util.showProgressDialog();
    let response = await this.api.postRequest(payload, uploadProfilePicApi);
    this.util.hideProgressDialog();
    if (response) {
      setUser(response);
      this.user = getUser();
      this.ss.changeUser(this.user);
    }
  }
  // async verify(){

  //   return true;
  // }
  async signInWithEmailCode(email) {
    this.util.showProgressDialog();
    let payload = {
      "email": email,
      "user_id": this.user.user_id
    }
    var response = await this.api.postRequest(payload, sendMailOtpApi);
    this.util.hideProgressDialog();
    if (response) {
      // this.user.email = email;
      console.log(response);
      this.emailCode = response.otp_code.toString();
      return true;
    }
    return false;
  }
  async editProfile() {
    console.log(this.user);
    if (!this.user) {
      this.util.showToast(await this.translate.get('Cannot update! User not found').toPromise());
      return;
    }
    if (this.user.name.length < 1) {
      this.util.showToast(await this.translate.get('Invalid Name').toPromise());
      return;
    }
    if (this.user.email.length < 1) {
      this.util.showToast(await this.translate.get('Invalid email').toPromise());
      return;
    }
    if (this.user.address.length < 1) {
      this.util.showToast(await this.translate.get('Invalid Address').toPromise());
      return;
    }
    console.log(this.userPhoneNumber);
    if (!this.userPhoneNumber) {
      this.util.showToast(await this.translate.get('Invalid Phone').toPromise());
      return;
    }
    if (this.userPhoneNumber.toString().length < 1) {
      this.util.showToast(await this.translate.get('Invalid Phone').toPromise());
      return;
    }
    if (this.userPhoneNumber.toString().length < 8) {
      this.util.showToast(await this.translate.get('Invalid Phone (Atleast 8 charecters allowed)').toPromise());
      return;
    }
    // console.log(this.user.password);
    if (this.user.password.length < 1 && this.password.length < 1) {
      this.util.showToast(await this.translate.get('Invalid Password, Password is required').toPromise());
      return;
    }

    var a = false;
    let phoneNumber = this.selectedCountry.phonecode + "-" + this.userPhoneNumber;
    var needVerification = false;
    if ((this.user.email != this.email) || ((this.user.is_email_verified != "Yes") && (this.user.is_fb_verified != "Yes"))) {
      needVerification = true;
      a = await this.signInWithEmailCode(this.user.email);
      if (!a) {
        return;
      }
    }
    let isPhoneVerificationNeeded = false;
    if (((phoneNumber != this.phone) || (this.user.is_phone_verified != "Yes"))) {
      needVerification = true;
      isPhoneVerificationNeeded = true;
      this.signinWithPhone();
    }
    console.log(needVerification && this.emailCode.length > 0);
    if (!isPhoneVerificationNeeded && needVerification && this.emailCode.toString().length > 0) {
      this.openVerificationScreen();
    }

    if (!needVerification) {
      this.updateProfile();
    }


  }
  async updateProfile() {
    var payload = {
      email: this.user.email,
      password: this.password,
      address: this.user.address,
      name: this.user.name,
      phone: this.selectedCountry.phonecode + "-" + this.userPhoneNumber,
      type: this.user.type,
      user_id: this.user.user_id,
      country_id: this.selectedCountry.country_id,
      docUrl: this.docUrl
    };
    console.log(payload);
    this.util.showProgressDialog();
    var response = await this.api.postRequest(payload, updateProfileApi);
    this.util.hideProgressDialog();
    if (response) {
      // console.log(response);
      setUser(response);
      this.user = getUser();
      this.ss.changeUser(this.user);
      // this.util.showToast(await this.translate.get('Success').toPromise());
    }
  }
  // VERFITY PHONE
  async getCountry() {
    return;
    const modal = await this.modelCtrl.create({
      component: CountriesPage,
      // swipeToClose: true,
      // size: {w}
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
        // this.selectedCountry = {
        //   "country_id": 178,
        //   "phonecode": 974,
        // };
      }
    });
    await modal.present();
  }
  async signinWithPhone() {
    // this.fireAuth.verifyPhoneNumber()
    const { Device } = Plugins;
    let device = await Device.getInfo();
    console.log(device);
    if (device.platform == 'ios') {
      console.log('========+++> Verify');
      cfaSignInPhone("+" + this.selectedCountry.phonecode + this.userPhoneNumber).subscribe(
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
      }, (error) => {
        console.log(error)
        this.util.showToast("Cannot verify right now please try again later");
        return;
      });
      // cfaSignInPhoneOnCodeReceived().subscribe(
      //   (event: { verificationId: string, verificationCode: string }) => {
      //     console.log("cfaSignInPhoneOnCodeReceived",`${event.verificationId}:${event.verificationCode}`);

      //   })

    } else {
      fire.auth().signInWithPhoneNumber("+" + this.selectedCountry.phonecode + this.userPhoneNumber, this.recaptchaVerifier).then(
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
  async openVerificationScreen() {
    console.log("show verification screen popover");
    // this.modelCtrl.dismiss();
    // this.util.showProgressDialog();
    await this.modelCtrl.create({
      component: OtpPage,
      componentProps: {
        res: this.confirmResult,
        emailCode: this.emailCode
      },
      cssClass: ['otp-pop']

    }).then(modal => {
      // this.util.hideProgressDialog();
      modal.onDidDismiss().then(async (dataReturned) => {
        console.log(dataReturned);
        if (dataReturned.data) {
          this.util.showToast("Verifing");
          let needUpdate = false;
          if (dataReturned.data.email == true) {
            needUpdate = true;
            await this.emailVerified();
            // VEIRIFY EMAIL
          }
          if (dataReturned.data.phone == true) {
            await this.phoneVerified();
            needUpdate = true;
          }
          if (needUpdate) {
            this.updateProfile();
          }
        } else {
          this.util.showToast("Your phone number is not verified");
          if (this.user.user_id) {
            setUser(this.user);
            this.ss.changeUser(this.user);
            this.navCtrl.navigateForward('/home');
          }
        }
      });
      modal.present().then(res => {

      }).catch(e => {
        console.log("present error", e)
      });
    }).catch(e => {
      console.log(e);
    });



  }
  async emailVerified() {
    var user_id = this.user.user_id;
    let payload = {
      user_id: user_id,
      email: this.user.email,
      code: convertToBase64('1213')
    }
    this.util.showProgressDialog('Verifing email');
    var response = await this.api.postRequest(payload, verifyEmail);
    this.util.hideProgressDialog();
    // console.log("emaik", response);
    if (response) {
      this.util.showToast(response.req_message);
      // setUser(response);
      // this.ss.changeUser(response);
      // this.navCtrl.navigateForward('/home');
    }
    return true;
  }
  async phoneVerified() {
    var user_id = this.user.user_id;
    this.util.showProgressDialog('Verifing phone');
    var response = await this.api.getRequest(verifyPhone + "/" + user_id + "/" + (this.selectedCountry.phonecode + "-" + this.userPhoneNumber));
    this.util.hideProgressDialog();
    if (response) {
      this.util.showDynamicToast(response.req_message, 4000, 'top');
      // setUser(response);
      // this.ss.changeUser(response);
      // this.navCtrl.navigateForward('/home');
    }
    return true;
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
          // this.store.dispatch(removeUser());
          logout();
          this.ss.changeUser({});
          this.navCtrl.navigateForward('/login');
          // console.log(generateLocalUser());
          // setUser(generateLocalUser());
          generateLocalUser();
          // this.ionViewDidEnter();
        }
      }]
    }).then(res => res.present())

  }
  // END PHONE VERIFICATION
  async selectFile() {
    console.log("here");
    document.getElementById('cv-input-field').click();
  }
  async upload() {
    let formData = new FormData();
    formData.append('file', this.cvFile);
    formData.append('id', this.user.user_id);

    // console.log(formData.get('name'));
    console.log(formData.get('file'));
    this.util.showProgressDialog("Uploading Document");
    var response2 = await this.api.postMultipartRequest(formData, uploadDocumentApi);
    this.util.hideProgressDialog();
    if (response2) {
      this.docUrl = response2.url;
      this.user.company_doc_url = this.docUrl;
    }
  }
  async uploadDocument(ev) {
    try {
      if (ev.target.files.length > 0) {
        this.cvFile = ev.target.files[0];
        this.upload();
      } else {
        this.util.showToast("no file selected");
      }
    } catch (e) {
      console.log(e);
      this.util.showToast("Unfortunate error");
    }
  }
  refresh() {
    window.location.reload();
  }

  async goToPayment() {
    const alert = await this.alertCtrl.create({
      header: 'Select subscription',
      backdropDismiss: false,
      buttons: [{
        text: 'Ok',
        handler: (alertData) => {
          console.log(alertData);
          if (alertData) {
            if (alertData.length > 0)
              this.router.navigate(['payment'], {
                queryParams: {
                  sub_type: alertData,
                }
              });
          }
        }
      }],
      inputs: [
        {
          label: await this.translate.get('Annual').toPromise(),
          type: 'radio',
          value: 'annual',
        },
        {
          label: await this.translate.get('Sami Annual').toPromise(),
          type: 'radio',
          value: 'sami_annual'
        }
      ]
    });

    await alert.present();


  }

}
