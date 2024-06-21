"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 28484:
/*!*********************************************!*\
  !*** ./src/app/countries/countries.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesPage": () => (/* binding */ CountriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_countries_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./countries.page.html */ 37784);
/* harmony import */ var _countries_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries.page.scss */ 15259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);







let CountriesPage = class CountriesPage {
    constructor(api, modalCtrl, popoverCtrl, navParams) {
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.countries = [];
        this.allCounties = [];
        this.selectedCountry = {
        // country_id: 0
        };
        this.isLoading = false;
    }
    ngOnInit() {
        this.getPageData();
    }
    goBack() {
        this.popoverCtrl.dismiss();
        // try{
        //   this.modalCtrl.dismiss();
        // }catch(e){
        // }
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getCountiesApi);
            this.isLoading = false;
            console.log(response);
            if (response) {
                if (!this.selectedCountry.country_id) {
                    let id = this.navParams.data.country.country_id;
                    if (id) {
                        let sCountry = response.filter((e) => {
                            return id == e.country_id;
                        });
                        const index = response.findIndex(e => {
                            if (id == e.country_id) {
                                return true;
                            }
                            return false;
                        });
                        console.log(index);
                        sCountry['index'] = index;
                        console.log(sCountry);
                        if (sCountry.length > 0) {
                            this.selectedCountry = sCountry[0];
                            this.scrollTo(sCountry.index);
                        }
                        console.log(this.selectedCountry);
                    }
                }
                this.countries = response;
                this.allCounties = response;
            }
        });
    }
    selectCountry(c, i) {
        c['index'] = i;
        console.log(c);
        this.selectedCountry = c;
        if (this.selectedCountry) {
            // try{
            // this.modalCtrl.dismiss({country:this.selectedCountry});
            // this.modalCtrl.dismiss();
            // }catch(e){
            this.popoverCtrl.dismiss({ country: this.selectedCountry });
            // }
        }
    }
    scrollTo(index) {
        setTimeout(() => {
            // console.log("index",index);
            let arr = this.list.nativeElement.children;
            // console.log("arr",arr.length);
            let item = arr[index];
            item.scrollIntoView();
            // console.log("item",item);
        }, 500);
    }
};
CountriesPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams }
];
CountriesPage.propDecorators = {
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },] }]
};
CountriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-countries',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_countries_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_countries_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CountriesPage);



/***/ }),

/***/ 61471:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 98085);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 72759:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 61471);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 98085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _otp_otp_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../otp/otp.module */ 28883);









let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _otp_otp_module__WEBPACK_IMPORTED_MODULE_2__.OtpPageModule,
        ],
        // providers:[OtpPage],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 98085:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signup.page.html */ 76497);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 55145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/store.service */ 99652);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/google-plus/ngx */ 21014);
/* harmony import */ var _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/facebook/ngx */ 99103);
/* harmony import */ var _countries_countries_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../countries/countries.page */ 28484);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _services_firebase_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/firebase.config */ 90879);



















let SignupPage = class SignupPage {
    // private google: GooglePlus
    // private firebaseAuth:any = FirebaseAuthentication;
    constructor(router, api, util, navCtrl, translate, ss, modelCtrl, platform, google, fb) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.ss = ss;
        this.modelCtrl = modelCtrl;
        this.platform = platform;
        this.google = google;
        this.fb = fb;
        this.selectedType = '';
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.phoneNumber = '';
        this.loginType = 'Normal';
        this.lang = false;
        // auth = getAuth();
        this.phone = "+923043372285";
        this.code = "+974";
        this.googleId = '';
        this.facebookId = '';
        this.acTypes = [];
        this.selectedCountry = {
            "country_id": 178,
            "phonecode": 974,
            "name": "Qatar",
        };
        // selectedCountry: any = {
        //   "country_id": 166,
        //   "phonecode": 92,
        //   "name" : "Qatar",
        // }
        this.showAppleSignIn = false;
        this.accountTypeError = false;
        this.translate.use((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)());
        this.getPageData();
        // this.fireAuth.setC
    }
    sendOtp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            // this.angularAuth.signInWithPhoneNumber(
            //   "+923043372285",
            // )
        });
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            this.util.showProgressDialog('Please wait', true);
            var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getTypes);
            console.log(response);
            this.util.hideProgressDialog();
            if (response) {
                this.acTypes = response;
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if ((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)() == 'en') {
                this.lang == false;
            }
            else {
                this.lang = true;
            }
            const { Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__.Plugins;
            let device = yield Device.getInfo();
            this.showAppleSignIn = device.platform === 'ios';
            // this.windowRef.recaptchaVerifier.render().then((widgetId) => {
            //   console.log(widgetId);
            //   this.windowRef.recaptchaWidgetId = widgetId;
            // });
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
        });
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
    getCountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modelCtrl.create({
                component: _countries_countries_page__WEBPACK_IMPORTED_MODULE_11__.CountriesPage,
                componentProps: {
                    country: this.selectedCountry
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log(dataReturned);
                if (dataReturned.data !== null && dataReturned.data != undefined) {
                    // this.util.showToast("Verifing");
                    if (dataReturned.data.country) {
                        console.log(dataReturned.data.country);
                        this.selectedCountry = dataReturned.data.country;
                    }
                }
                else {
                    // this.util.showToast("No country selected");
                    this.selectedCountry = {
                        "country_id": 178,
                        "phonecode": 974,
                    };
                }
            });
            yield modal.present();
        });
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
    signup(signupType = "normal") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
                    this.util.showToast("Password doesn't match");
                    return;
                }
            }
            if (!this.selectedAccountTypeId) {
                this.accountTypeError = true;
                return;
            }
            if (this.selectedAccountTypeId.length < 1) {
                this.accountTypeError = true;
                return;
            }
            var type = "Individual";
            if (this.selectedType == "indiv") {
                type = "Individual";
            }
            else {
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
            this.util.showProgressDialog('Please Wait', true);
            var response = yield this.api.postRequest(payload, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.signupApi);
            this.util.hideProgressDialog();
            if (response) {
                this.util.showToast(response.req_message);
                this.user = response;
                // if (!this.recaptchaVerifier) {
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_6__.setUser)(response);
                this.ss.changeUser((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_6__.getUser)());
                this.navCtrl.navigateForward('/edit-account', {
                    queryParams: {
                        message: "Fill out required information. "
                    }
                });
                // } else {
                //   this.signinWithPhone();
                // }
            }
        });
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
        const { SignInWithApple } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__.Plugins;
        SignInWithApple.Authorize()
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
            }
            else {
                this.util.showToast("Cannot signup with apple with this account right now. try again.");
                // this.presentAlert();
            }
        }))
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
        }
        else {
            type = "Company";
        }
        let params;
        if (this.platform.is('capacitor')) {
            if (this.platform.is('android')) {
                params = {
                    webClientId: '102537792344-3pk67efcu22r9jr5p600clnmd4hb9flq.apps.googleusercontent.com',
                    offline: true
                };
            }
            else {
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
        }
        else {
            console.log('else...');
            _services_firebase_config__WEBPACK_IMPORTED_MODULE_13__.fire.auth().signInWithPopup(new _services_firebase_config__WEBPACK_IMPORTED_MODULE_13__.fire.auth.GoogleAuthProvider()).then(success => {
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
        }
        else {
            type = "Company";
        }
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
            console.log('Logged into Facebook!', res);
            this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                let userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data’][‘url'], username: profile['name'], id: profile['id'] };
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
            (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.setLanguage)('ar');
        }
        else {
            (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.setLanguage)('en');
        }
        location.reload();
    }
    skip() {
        (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.generateLocalUser)();
        this.ss.changeUser((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_6__.getUser)());
        this.router.navigate(['home']);
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NavController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_7__.StoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform },
    { type: _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__.GooglePlus },
    { type: _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__.Facebook }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-signup',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 37784:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/countries/countries.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header\"></ion-row>\n<ion-row style=\"background: #7f132a;\" class=\"d-flex justify-content-center align-items-center\">\n  <ion-col size=\"1\" >\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n  </ion-col>\n  <ion-col>\n    <ion-title class=\"p0 cwhite\">Select Country</ion-title>\n  </ion-col>\n</ion-row>\n<ion-content>\n \n  <div class=\"w100 h100\" *ngIf=\"isLoading\">\n    <app-loading></app-loading>\n  </div>\n  <ion-list>\n    <ion-item button *ngFor=\"let item of countries; let i = index\" (click)=\"selectCountry(item,i)\">\n      <ion-label>\n        (+{{item.phonecode}}) - {{item.name}}\n      </ion-label>\n      <ion-icon *ngIf=\"selectedCountry.country_id == item.country_id\" class=\"check-icon\" name=\"checkmark-done-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ 76497:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/signup/signup.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-row class=\"header\"></ion-row>\n\n<ion-content>\n  <!-- <div id=\"sign-in-button\" style=\"display: none;\" ></div> -->\n  <!-- <div>\n  </div> -->\n  <div class=\"login-root\">\n    <div class=\"top-layout\">\n      <div class=\"app-bar-content\">\n        <div class=\"btn-skip\" (click)=\"skip()\">{{'Skip' | translate}}</div>\n        <div class=\"welcome\">\n          <h2>{{\"Shaghala\" | translate}}</h2>\n        </div>\n        <div class=\"toggle-container\">\n          <ion-toggle [(ngModel)]=\"lang\" (ngModelChange)=\"changeLang($event)\">\n\n          </ion-toggle>\n        </div>\n\n      </div>\n      <div class=\"heading\">\n        <div class=\"app-heading\">\n          <h1>{{\"Sign up\" | translate}}</h1>\n        </div>\n      </div>\n    </div>\n    <div class=\"bottom-layout\">\n      <div class=\"signup-form-container\">\n        <div class=\"input-container\">\n          <ion-input placeholder=\"{{'Your Name' | translate}}\" [(ngModel)]=\"name\"></ion-input>\n        </div>\n        <div class=\"input-container\">\n          <ion-input type=\"email\" placeholder=\"{{'Email' | translate}}\" [(ngModel)]=\"email\"></ion-input>\n        </div>\n        <div class=\"number-container\">\n          <!-- (click)=\"getCountry()\" -->\n          <div class=\"input-number-label-container \" >\n            <ion-label class=\"input-number-label\">{{selectedCountry.phonecode}}</ion-label>\n          </div>\n          <div class=\"input-number-container\">\n            <ion-input class=\"input-number\" type=\"tel\" placeholder=\"{{'Mobile' | translate}} #\"\n              [(ngModel)]=\"phoneNumber\"></ion-input>\n          </div>\n        </div>\n        <div class=\"input-container\">\n          <ion-input type=\"password\" placeholder=\"{{'Password' | translate}}\" [(ngModel)]=\"password\"></ion-input>\n        </div>\n        <div class=\"input-container\" style=\"margin-bottom:10px;\">\n          <ion-input type=\"password\" placeholder=\"{{'Confirm Password' | translate}}\" [(ngModel)]=\"confirmPassword\">\n          </ion-input>\n        </div>\n        <div class=\"txt-password-hint-container\">\n          <p class=\"password-hint\">\n            {{\"Use 6 characters with a mix of letters, numbers & symbols.\"| translate}}\n          </p>\n        </div>\n        <!-- <div>\n        </div> -->\n        <!-- <ion-label class=\"p0 m0\" style=\"width: 100%;;text-align:left;color: red; font-size: 14px;margin-top:4px\">Select Account Type</ion-label> -->\n\n        <div class=\"account-type-container\">\n          <div (click)=\"changeType('indiv')\"\n            [ngClass]=\"selectedType == 'indiv'?'account-item-container-active':'account-item-container'\"\n            class=\"touch-opacity\">\n            <ion-label class=\"individual-label\">\n              {{'INDIVIDUAL'| translate}}\n            </ion-label>\n          </div>\n          <div (click)=\"changeType('comp')\"\n            [ngClass]=\"selectedType == 'comp'?'account-item-container-active':'account-item-container'\"\n            class=\"touch-opacity\">\n            {{'COMPANY'| translate}}\n          </div>\n        </div>\n        <ion-row class=\"w100 pt4 justify-content-center\">\n          <!-- <ion-col size=\"1.5\"></ion-col> -->\n          <ion-col size=\"8.5\">\n            <!-- <ion-label>{{\"Account Type\" | translate}}</ion-label> -->\n            <ion-select *ngIf=\"selectedType.length > 0\" [(ngModel)]=\"selectedAccountTypeId\"\n              placeholder=\"(choose account type)\">\n              <ng-container *ngFor=\"let cont of acTypes\">\n                <ion-select-option\n                  *ngIf=\"selectedType == 'comp' && (cont.type_category == 'Company' || cont.type_category == 'Both')\"\n                  value=\"{{cont.type_id}}\">{{cont.type_name}}\n                </ion-select-option>\n                <ion-select-option\n                  *ngIf=\"selectedType == 'indiv' && (cont.type_category == 'Individual' || cont.type_category == 'Both')\"\n                  value=\"{{cont.type_id}}\">{{cont.type_name}}\n                </ion-select-option>\n              </ng-container>\n\n              <!-- <ion-select-option>UAE</ion-select-option> -->\n            </ion-select>\n            <ion-select *ngIf=\"selectedType.length < 1\" [(ngModel)]=\"selectedAccountTypeId\"\n              placeholder='{{\"Please select Individual Or Company\" | translate}}'>\n              <ion-select-option *ngIf=\"selectedType != 'comp' && selectedType != 'indiv'\">\n                {{\"Please select account category\" | translate}}\n              </ion-select-option>\n              <!-- <ion-select-option>UAE</ion-select-option> -->\n            </ion-select>\n            <span \n            *ngIf=\"accountTypeError\"\n            style=\"color:red\">{{\"Please select account type of Individual and Company\" | translate}}</span>\n            <!-- <ion-input placeholder=\"(number) kg\"></ion-input> -->\n          </ion-col>\n        </ion-row>\n        <div class=\"signup-hint-container cblack mt6\">\n          <p class=\"roboto-light text-center m0 f14 p0 mt6  signin-hint\">\n            {{'or signup with'| translate}}\n          </p>\n        </div>\n        <div class=\"signup-with-container mt6 d-flex justify-content-center align-items-center\">\n          <img class=\"mr10 login-icon-img\" width=\"44px\" src=\"assets/images/facebook.png\" alt=\"\"\n            (click)=\"signupWithFB()\">\n          <img width=\"44px\" class=\"mt2 mr10 login-icon-img\" src=\"assets/images/email.png\" (click)=\"signupWithGoogle()\"\n            alt=\"\">\n          <img width=\"46px\" *ngIf=\"showAppleSignIn\" height=\"46px\" class=\"mt2 login-icon-img\"\n            src=\"assets/images/apple.png\" style=\"margin-left: 4px;\" (click)=\"signupWithApple()\" alt=\"\">\n\n        </div>\n        <div class=\"signup-container mt6 d-flex align-items-center w70 justify-content-space-between\">\n          <div class=\"btn-container\">\n            <ion-button size=\"small\" color=\"none\" (click)=\"signup()\">{{'Sign up'| translate}}</ion-button>\n          </div>\n          <div class=\"\">\n            <p class=\"cblack\">{{'or' | translate}}</p>\n          </div>\n          <div class=\"btn-outline cblack \">\n            <ion-button (click)=\"skip()\" size=\"small\" fill=\"outline\" class=\"cblack m0 p0\" color=\"none\">{{'Cancel' |\n              translate}}</ion-button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"cblack roboto-light text-center f14 mt2 mb10\">\n        <div class=\"new-signup-container\">\n          <ion-label class=\"txt-new-signup\">\n            {{'Already have account?'| translate}} <span class=\"txt-signup touch-opacity\" (click)=\"goToLogin()\">\n              {{'LogIn'| translate}}\n            </span>\n          </ion-label>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</ion-content>");

/***/ }),

/***/ 15259:
/*!***********************************************!*\
  !*** ./src/app/countries/countries.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".active {\n  --background: #d7d7d7;\n}\n\n.check-icon {\n  color: #2254fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKIiwiZmlsZSI6ImNvdW50cmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZle1xuICAgIC0tYmFja2dyb3VuZDogI2Q3ZDdkNztcbn1cbi5jaGVjay1pY29ue1xuICAgIGNvbG9yOiByZ2IoMzQsIDg0LCAyNTApO1xufSJdfQ== */";

/***/ }),

/***/ 55145:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = ".login-root {\n  background: #ffffff;\n  height: 100%;\n}\n\nion-content {\n  --background: #ffffff;\n}\n\n.top-layout {\n  background: linear-gradient(180deg, #7f132a 40%, #c90269 100%);\n}\n\n.top-layout .app-bar-content {\n  display: flex;\n  align-items: center;\n  padding: 20px 10px 0px 10px;\n  justify-content: space-between;\n}\n\n.top-layout .app-bar-content .btn-skip {\n  color: black;\n  background-color: #eec626;\n  font-size: 12px;\n  border-radius: 6px;\n  padding: 2px 8px 2px 8px;\n}\n\n.top-layout .app-bar-content .welcome h2 {\n  font-size: 30px;\n  color: #ffffff;\n}\n\n.top-layout .app-bar-content .toggle-container {\n  border-radius: 20px;\n  box-shadow: 2px 3px 6px #000000b8;\n  height: 18px;\n}\n\n.top-layout .app-bar-content ion-toggle {\n  width: 46px;\n  padding: 0px;\n  position: relative;\n  color: black;\n  font-size: 15px;\n  height: 20px;\n  line-height: 31px;\n  zoom: 0.9;\n  --handle-box-shadow: 0px;\n  --handle-spacing: 3px;\n  --handle-height: 14px;\n  --handle-width: 14px;\n  --background: #ffffff;\n  --background-checked: #ffffff;\n  --handle-background: #8dc63f;\n  --handle-background-checked: #8dc63f;\n}\n\n.top-layout .app-bar-content ion-toggle[aria-checked=false]::after {\n  position: absolute;\n  content: \"Arb\";\n  font-size: 12px;\n  top: -6px;\n  right: 5px;\n  font-style: italic;\n}\n\n.top-layout .app-bar-content ion-toggle[aria-checked=true]::after {\n  position: absolute;\n  font-size: 12px;\n  content: \"Eng\";\n  top: -6px;\n  font-style: italic;\n  left: 5px;\n}\n\n.top-layout .heading {\n  text-align: center;\n  margin-top: 10px;\n  padding-bottom: 10px;\n}\n\n.top-layout .heading .app-heading h1 {\n  font-size: 38px;\n  margin-top: 4px;\n  font-family: \"Montserrat Bold\";\n  color: #ffffff;\n}\n\n.bottom-layout {\n  margin-top: 40px;\n}\n\n.bottom-layout .signup-form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bottom-layout .signup-form-container .input-container {\n  width: 70%;\n  margin-bottom: 10px;\n  display: flex;\n  height: 40px;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n}\n\n.bottom-layout .signup-form-container .input-container ion-input {\n  color: black;\n  text-align: left;\n  font-size: 14px;\n  border: #6c7480 solid;\n  border-width: 1px;\n  border-radius: 4px;\n  --padding-start: 10px;\n}\n\n.bottom-layout .number-container {\n  width: 70%;\n  margin-bottom: 10px;\n  display: flex;\n  height: 40px;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  margin-left: -2px;\n}\n\n.bottom-layout .number-container ion-input {\n  color: black;\n  text-align: center;\n  font-size: 14px;\n  border: #6c7480 solid;\n  border-width: 1px;\n  border-radius: 4px;\n}\n\n.bottom-layout .number-container .input-number-label-container {\n  background-color: #6C7480;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  padding-right: 4px;\n  font-size: 14px;\n  width: 90px;\n  height: 96%;\n  position: relative;\n  z-index: 0;\n  right: -2px;\n  display: flex;\n  align-items: center;\n}\n\n.bottom-layout .number-container .input-number-label-container .input-number-label {\n  width: 100%;\n  text-align: center;\n  color: #ffffff;\n}\n\n.bottom-layout .number-container .input-number-container {\n  z-index: 999;\n  width: 140%;\n}\n\n.bottom-layout .number-container .input-number-container .input-number {\n  background-color: #ffffff;\n}\n\n.bottom-layout .txt-password-hint-container {\n  width: 70%;\n  color: black;\n}\n\n.bottom-layout .txt-password-hint-container .password-hint {\n  font-family: \"Roboto Light\";\n  font-size: 12px;\n  color: #00718C;\n  margin: 0px;\n  padding: 0px;\n  margin-left: 2px;\n}\n\n.bottom-layout .account-type-container {\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  width: 70%;\n  background: #7F132A;\n  border-radius: 30px;\n  margin-top: 10px;\n}\n\n.bottom-layout .account-type-container .account-item-container {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.bottom-layout .account-type-container .account-item-container-active {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 14px;\n  text-align: center;\n  background-color: #72BE52;\n  border-radius: 30px;\n}\n\n.bottom-layout .fs-container {\n  margin-top: 30px;\n}\n\n.bottom-layout .fs-container .forget-password-container {\n  color: #019ad6;\n  font-size: 14px;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.bottom-layout .fs-container .forget-password-container ion-label {\n  font-family: \"Roboto Light\";\n}\n\n.bottom-layout .fs-container .new-signup-container {\n  color: black;\n  text-align: center;\n  font-size: 14px;\n  margin-top: 4px;\n}\n\n.bottom-layout .fs-container .new-signup-container ion-label {\n  font-family: \"Roboto Light\";\n}\n\n.txt-signup {\n  color: #019ad6;\n  text-decoration: underline;\n  font-family: \"Roboto Light\";\n}\n\n.login-icon-img {\n  padding: 7px;\n  border-radius: 10px;\n  opacity: 0.8;\n  background-color: #d4d4d4;\n}\n\nion-select {\n  color: #6C7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,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QWlCWTtFQUNJLDJCQUFBO0FBZmhCOztBQWtCUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBaEJaOztBQWtCWTtFQUNJLDJCQUFBO0FBaEJoQjs7QUFxQkE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQWxCSjs7QUFvQkE7RUFFSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFsQko7O0FBb0JBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBakJKIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcm9vdCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLnRvcC1sYXlvdXQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM3ZjEzMmEgNDAlLCByZ2JhKDIwMSwgMiwgMTA1LCAxKSAxMDAlKTtcbiAgICAuYXBwLWJhci1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLmJ0bi1za2lwIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVjNjI2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMnB4IDhweCAycHggOHB4O1xuICAgICAgICB9XG4gICAgICAgIC53ZWxjb21lIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50b2dnbGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggM3B4IDZweCAjMDAwMDAwYjg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdG9nZ2xlIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuXG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XG4gICAgICAgICAgICB6b29tOiAwLjk7XG5cbiAgICAgICAgICAgIC0taGFuZGxlLWJveC1zaGFkb3c6IDBweDtcbiAgICAgICAgICAgIC0taGFuZGxlLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICAgIC0taGFuZGxlLWhlaWdodDogMTRweDtcbiAgICAgICAgICAgIC0taGFuZGxlLXdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjOGRjNjNmO1xuICAgICAgICAgICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjOGRjNjNmO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXRvZ2dsZVthcmlhLWNoZWNrZWQ9XCJmYWxzZVwiXSB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQXJiXCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi10b2dnbGVbYXJpYS1jaGVja2VkPVwidHJ1ZVwiXSB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkVuZ1wiO1xuICAgICAgICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkaW5nIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgICAgICAuYXBwLWhlYWRpbmcgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBCb2xkXCI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5ib3R0b20tbGF5b3V0IHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIC5zaWdudXAtZm9ybS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogIzZjNzQ4MCBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIC5udW1iZXItY29udGFpbmVye1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAjNmM3NDgwIHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LW51bWJlci1sYWJlbC1jb250YWluZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkM3NDgwO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDk2JTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICByaWdodDogLTJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLmlucHV0LW51bWJlci1sYWJlbHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgLmlucHV0LW51bWJlci1jb250YWluZXJ7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICB3aWR0aDogMTQwJTtcbiAgICAgICAgICAgIC5pbnB1dC1udW1iZXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudHh0LXBhc3N3b3JkLWhpbnQtY29udGFpbmVye1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIC5wYXNzd29yZC1oaW50e1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBMaWdodFwiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3MThDO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hY2NvdW50LXR5cGUtY29udGFpbmVye1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzdGMTMyQTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLmFjY291bnQtaXRlbS1jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDBweCAzcHggMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5hY2NvdW50LWl0ZW0tY29udGFpbmVyLWFjdGl2ZXtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMHB4IDNweCAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJCRTUyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFxuICAgXG4gICAgLmZzLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIC5mb3JnZXQtcGFzc3dvcmQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDE5YWQ2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBMaWdodFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uZXctc2lnbnVwLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4udHh0LXNpZ251cCB7XG4gICAgY29sb3I6ICMwMTlhZDY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG59XG4ubG9naW4taWNvbi1pbWd7XG4gICAgLy8gYm9yZGVyOiBzb2xpZCAxcHggcmdiKDE1MCwgMTUwLCAxNTApO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IC44O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XG59XG5pb24tc2VsZWN0e1xuICAgIGNvbG9yOiAjNkM3NDgwO1xuICAgIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map