"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-account_edit-account_module_ts"],{

/***/ 5816:
/*!*************************************************************!*\
  !*** ./src/app/edit-account/edit-account-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAccountPageRoutingModule": () => (/* binding */ EditAccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _edit_account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-account.page */ 85425);




const routes = [
    {
        path: '',
        component: _edit_account_page__WEBPACK_IMPORTED_MODULE_0__.EditAccountPage
    }
];
let EditAccountPageRoutingModule = class EditAccountPageRoutingModule {
};
EditAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditAccountPageRoutingModule);



/***/ }),

/***/ 79268:
/*!*****************************************************!*\
  !*** ./src/app/edit-account/edit-account.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAccountPageModule": () => (/* binding */ EditAccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-account-routing.module */ 5816);
/* harmony import */ var _edit_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-account.page */ 85425);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _otp_otp_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../otp/otp.module */ 28883);









let EditAccountPageModule = class EditAccountPageModule {
};
EditAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _edit_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditAccountPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _otp_otp_module__WEBPACK_IMPORTED_MODULE_2__.OtpPageModule,
        ],
        declarations: [_edit_account_page__WEBPACK_IMPORTED_MODULE_1__.EditAccountPage]
    })
], EditAccountPageModule);



/***/ }),

/***/ 85425:
/*!***************************************************!*\
  !*** ./src/app/edit-account/edit-account.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAccountPage": () => (/* binding */ EditAccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-account.page.html */ 34190);
/* harmony import */ var _edit_account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-account.page.scss */ 48448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 53201);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _countries_countries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../countries/countries.page */ 28484);
/* harmony import */ var _otp_otp_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../otp/otp.page */ 27314);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/store.service */ 99652);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! capacitor-firebase-auth */ 30107);
/* harmony import */ var _services_firebase_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/firebase.config */ 90879);




















// import { error } from 'console';
// import { PopoverController } from '@ionic/angular';
let EditAccountPage = class EditAccountPage {
    constructor(navCtrl, util, translate, api, actionSheetCtrl, ss, modelCtrl, route, store, router, alertCtrl) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.translate = translate;
        this.api = api;
        this.actionSheetCtrl = actionSheetCtrl;
        this.ss = ss;
        this.modelCtrl = modelCtrl;
        this.route = route;
        this.store = store;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.password = "";
        this.appUrl = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__.baseUrl;
        this.email = '';
        this.phone = '';
        this.selectedCountry = {
            "country_id": 178,
            "phonecode": 974,
            // "phonecode": 92,
            "name": "Qatar",
        };
        this.message = '';
        this.userPhoneNumber = '';
        this.emailCode = '';
        this.isPassword = false;
        this.cvFile = null;
        this.docUrl = '';
        this.translate.use((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_11__.getLang)());
        this.onPageLoad();
    }
    onPageLoad() {
        this.ss.currentUser.subscribe(user => {
            let u = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)();
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
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(getUser());
            if (!(0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)()) {
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.logout)();
                return;
            }
            if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)() == null) {
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.logout)();
                return;
            }
            console.log((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)());
            if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)().type == 'local') {
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.logout)();
                return;
            }
            if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)().type) {
                if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)().type != 'local') {
                    var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__.getUserByIdApi + "/" + (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)().user_id);
                    if (response) {
                        (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.setUser)(response);
                        this.ss.changeUser(response);
                    }
                }
            }
            console.log("ionViewDidEnter");
            console.log(_services_firebase_config__WEBPACK_IMPORTED_MODULE_14__.fire.auth());
            // ApplicationVe
            // let auth = getAuth();
            const { Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__.Plugins;
            let device = yield Device.getInfo();
            if (device.platform != 'ios') {
                let recaptchaVerifier = new _services_firebase_config__WEBPACK_IMPORTED_MODULE_14__.fire.auth.RecaptchaVerifier('sign-in-button', {
                    'size': 'invisible',
                    'type': 'recaptcha'
                });
                if (!this.recaptchaVerifier) {
                    recaptchaVerifier.verify().then(() => {
                        console.log("recaptchaVerifier");
                        console.log(recaptchaVerifier);
                        this.recaptchaVerifier = recaptchaVerifier;
                    }).catch(err => {
                        console.log({
                            'size': 'invisible',
                            'type': 'recaptcha'
                        }, err);
                    });
                }
                else {
                    console.log("recaptchaVerifie2");
                    try {
                        recaptchaVerifier.clear();
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }
            console.log("ionViewDidEnter2");
        });
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
    takeImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 20,
                allowEditing: true,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64
            });
            var imageUrl = image.base64String;
            this.uploadImage(imageUrl);
            // console.log(imageUrl);    
        });
    }
    uploadImage(base64) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            var payload = {
                user_id: this.user.user_id,
                user_image: base64
            };
            this.util.showProgressDialog();
            let response = yield this.api.postRequest(payload, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__.uploadProfilePicApi);
            this.util.hideProgressDialog();
            if (response) {
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.setUser)(response);
                this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)();
                this.ss.changeUser(this.user);
            }
        });
    }
    // async verify(){
    //   return true;
    // }
    signInWithEmailCode(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.util.showProgressDialog();
            let payload = {
                "email": email,
                "user_id": this.user.user_id
            };
            var response = yield this.api.postRequest(payload, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__.sendMailOtpApi);
            this.util.hideProgressDialog();
            if (response) {
                // this.user.email = email;
                console.log(response);
                this.emailCode = response.otp_code.toString();
                return true;
            }
            return false;
        });
    }
    editProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.user);
            if (!this.user) {
                this.util.showToast(yield this.translate.get('Cannot update! User not found').toPromise());
                return;
            }
            if (this.user.name.length < 1) {
                this.util.showToast(yield this.translate.get('Invalid Name').toPromise());
                return;
            }
            if (this.user.email.length < 1) {
                this.util.showToast(yield this.translate.get('Invalid email').toPromise());
                return;
            }
            if (this.user.address.length < 1) {
                this.util.showToast(yield this.translate.get('Invalid Address').toPromise());
                return;
            }
            console.log(this.userPhoneNumber);
            if (!this.userPhoneNumber) {
                this.util.showToast(yield this.translate.get('Invalid Phone').toPromise());
                return;
            }
            if (this.userPhoneNumber.toString().length < 1) {
                this.util.showToast(yield this.translate.get('Invalid Phone').toPromise());
                return;
            }
            if (this.userPhoneNumber.toString().length < 8) {
                this.util.showToast(yield this.translate.get('Invalid Phone (Atleast 8 charecters allowed)').toPromise());
                return;
            }
            // console.log(this.user.password);
            if (this.user.password.length < 1 && this.password.length < 1) {
                this.util.showToast(yield this.translate.get('Invalid Password, Password is required').toPromise());
                return;
            }
            var a = false;
            let phoneNumber = this.selectedCountry.phonecode + "-" + this.userPhoneNumber;
            var needVerification = false;
            if ((this.user.email != this.email) || ((this.user.is_email_verified != "Yes") && (this.user.is_fb_verified != "Yes"))) {
                needVerification = true;
                a = yield this.signInWithEmailCode(this.user.email);
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
        });
    }
    updateProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
            var response = yield this.api.postRequest(payload, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__.updateProfileApi);
            this.util.hideProgressDialog();
            if (response) {
                // console.log(response);
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.setUser)(response);
                this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)();
                this.ss.changeUser(this.user);
                // this.util.showToast(await this.translate.get('Success').toPromise());
            }
        });
    }
    // VERFITY PHONE
    getCountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            return;
            const modal = yield this.modelCtrl.create({
                component: _countries_countries_page__WEBPACK_IMPORTED_MODULE_3__.CountriesPage,
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
                        console.log(dataReturned.data.country);
                        this.selectedCountry = dataReturned.data.country;
                    }
                }
                else {
                    // this.util.showToast("No country selected");
                    // this.selectedCountry = {
                    //   "country_id": 178,
                    //   "phonecode": 974,
                    // };
                }
            });
            yield modal.present();
        });
    }
    signinWithPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            // this.fireAuth.verifyPhoneNumber()
            const { Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__.Plugins;
            let device = yield Device.getInfo();
            console.log(device);
            if (device.platform == 'ios') {
                console.log('========+++> Verify');
                (0,capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_13__.cfaSignInPhone)("+" + this.selectedCountry.phonecode + this.userPhoneNumber).subscribe(user => console.log("cfaSignInPhone", user.phoneNumber));
                (0,capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_13__.cfaSignInPhoneOnCodeSent)().subscribe((verificationId) => {
                    console.log("cfaSignInPhoneOnCodeSent", verificationId);
                    console.log("cfaSignInPhoneOnCodeSent", verificationId.length > 0);
                    if (verificationId.length > 0) {
                        this.confirmResult = verificationId;
                        console.log(this.confirmResult);
                        setTimeout(() => {
                            this.openVerificationScreen();
                        }, 400);
                    }
                    else {
                        this.util.showToast("Cannot verify");
                    }
                }, (error) => {
                    console.log(error);
                    this.util.showToast("Cannot verify right now please try again later");
                    return;
                });
                // cfaSignInPhoneOnCodeReceived().subscribe(
                //   (event: { verificationId: string, verificationCode: string }) => {
                //     console.log("cfaSignInPhoneOnCodeReceived",`${event.verificationId}:${event.verificationCode}`);
                //   })
            }
            else {
                _services_firebase_config__WEBPACK_IMPORTED_MODULE_14__.fire.auth().signInWithPhoneNumber("+" + this.selectedCountry.phonecode + this.userPhoneNumber, this.recaptchaVerifier).then(confirmResult => {
                    console.log(confirmResult);
                    this.confirmResult = confirmResult;
                    this.openVerificationScreen();
                }).catch(er => {
                    console.log(er);
                    this.util.showToast('Cannot verify this phone number please try again next time');
                });
            }
        });
    }
    openVerificationScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            console.log("show verification screen popover");
            // this.modelCtrl.dismiss();
            // this.util.showProgressDialog();
            yield this.modelCtrl.create({
                component: _otp_otp_page__WEBPACK_IMPORTED_MODULE_4__.OtpPage,
                componentProps: {
                    res: this.confirmResult,
                    emailCode: this.emailCode
                },
                cssClass: ['otp-pop']
            }).then(modal => {
                // this.util.hideProgressDialog();
                modal.onDidDismiss().then((dataReturned) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(dataReturned);
                    if (dataReturned.data) {
                        this.util.showToast("Verifing");
                        let needUpdate = false;
                        if (dataReturned.data.email == true) {
                            needUpdate = true;
                            yield this.emailVerified();
                            // VEIRIFY EMAIL
                        }
                        if (dataReturned.data.phone == true) {
                            yield this.phoneVerified();
                            needUpdate = true;
                        }
                        if (needUpdate) {
                            this.updateProfile();
                        }
                    }
                    else {
                        this.util.showToast("Your phone number is not verified");
                        if (this.user.user_id) {
                            (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.setUser)(this.user);
                            this.ss.changeUser(this.user);
                            this.navCtrl.navigateForward('/home');
                        }
                    }
                }));
                modal.present().then(res => {
                }).catch(e => {
                    console.log("present error", e);
                });
            }).catch(e => {
                console.log(e);
            });
        });
    }
    emailVerified() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            var user_id = this.user.user_id;
            let payload = {
                user_id: user_id,
                email: this.user.email,
                code: (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_10__.convertToBase64)('1213')
            };
            this.util.showProgressDialog('Verifing email');
            var response = yield this.api.postRequest(payload, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__.verifyEmail);
            this.util.hideProgressDialog();
            // console.log("emaik", response);
            if (response) {
                this.util.showToast(response.req_message);
                // setUser(response);
                // this.ss.changeUser(response);
                // this.navCtrl.navigateForward('/home');
            }
            return true;
        });
    }
    phoneVerified() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            var user_id = this.user.user_id;
            this.util.showProgressDialog('Verifing phone');
            var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__.verifyPhone + "/" + user_id + "/" + (this.selectedCountry.phonecode + "-" + this.userPhoneNumber));
            this.util.hideProgressDialog();
            if (response) {
                this.util.showDynamicToast(response.req_message, 4000, 'top');
                // setUser(response);
                // this.ss.changeUser(response);
                // this.navCtrl.navigateForward('/home');
            }
            return true;
        });
    }
    logout() {
        new _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController().create({
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
                        (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.logout)();
                        this.ss.changeUser({});
                        this.navCtrl.navigateForward('/login');
                        // console.log(generateLocalUser());
                        // setUser(generateLocalUser());
                        (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_10__.generateLocalUser)();
                        // this.ionViewDidEnter();
                    }
                }]
        }).then(res => res.present());
    }
    // END PHONE VERIFICATION
    selectFile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            console.log("here");
            document.getElementById('cv-input-field').click();
        });
    }
    upload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append('file', this.cvFile);
            formData.append('id', this.user.user_id);
            // console.log(formData.get('name'));
            console.log(formData.get('file'));
            this.util.showProgressDialog("Uploading Document");
            var response2 = yield this.api.postMultipartRequest(formData, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__.uploadDocumentApi);
            this.util.hideProgressDialog();
            if (response2) {
                this.docUrl = response2.url;
                this.user.company_doc_url = this.docUrl;
            }
        });
    }
    uploadDocument(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (ev.target.files.length > 0) {
                    this.cvFile = ev.target.files[0];
                    this.upload();
                }
                else {
                    this.util.showToast("no file selected");
                }
            }
            catch (e) {
                console.log(e);
                this.util.showToast("Unfortunate error");
            }
        });
    }
    refresh() {
        window.location.reload();
    }
    goToPayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
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
                        label: yield this.translate.get('Annual').toPromise(),
                        type: 'radio',
                        value: 'annual',
                    },
                    {
                        label: yield this.translate.get('Sami Annual').toPromise(),
                        type: 'radio',
                        value: 'sami_annual'
                    }
                ]
            });
            yield alert.present();
        });
    }
};
EditAccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NavController },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_9__.UtilsService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ActionSheetController },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_8__.StoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_8__.StoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController }
];
EditAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-edit-account',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_account_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_account_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditAccountPage);



/***/ }),

/***/ 34190:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/edit-account/edit-account.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"6.0\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"2.3\" class=\"m-auto text-center \">\n    <ion-label *ngIf=\"message.length > 0\" (click)=\"refresh()\">\n      <p style=\"color:white\">{{\"Refresh\" | translate}}</p>\n    </ion-label>\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"2.2\" class=\"m-auto text-center \">\n    <ion-label *ngIf=\"message.length > 0\" (click)=\"logout()\">\n      <p style=\"color:white\">{{\"Logout\" | translate}}</p>\n    </ion-label>\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n<ion-content>\n  <div id=\"sign-in-button\" style=\"display: none;\"></div>\n  <div class=\"add_worker_page\">\n    <ion-row class=\"mt6\">\n      <ion-col size=\"12\" *ngIf=\"message.length > 0\" style=\"color:red; font-weight:bold;font-size:14px\">\n        {{\"Note\" | translate}}: {{message | translate}}\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"message.length > 0 && user.comments\" style=\"color:red; font-weight:bold;font-size:14px\">\n        <div *ngIf=\"user.comments.length > 0\">\n          {{\"Admin Remarks\" | translate}}: {{user.comments}}\n        </div>\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"message.length > 0\" style=\"border-bottom: 1px solid grey;\">\n        <!-- <hr> -->\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-row *ngIf=\"user.type == 'Company'\">\n          <ion-col>\n            <div *ngIf=\"!user.is_subscribed\" class=\"d-flex align-items-center\" style=\"justify-content: space-between;\">\n              <ion-label style=\"font-size: 14px;color: red;\">Subscription required*</ion-label>\n              <ion-button (click)=\"goToPayment()\" color=\"none\" class=\"btn-subscribe cwhite mt0\">\n                {{\"Subscribe\" | translate}}\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"message.length > 0\" style=\"border-bottom: 1px solid grey;\" class=\"p0\"></ion-col>\n      <ion-col size=\".5\">\n\n      </ion-col>\n      <ion-col size=\"4\">\n        <img style=\"border: black solid;border-radius: 100px; object-fit: contain;\" src=\"{{appUrl+user.user_image}}\"\n          onerror=\"this.src = 'assets/images/add_worker_profile.png'\" (click)=\"takeImage()\" width=\"100px\" height=\"100px\"\n          alt=\"\">\n      </ion-col>\n      <ion-col size=\"1.5\">\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row style=\"height:20%\">\n          <ion-col class=\"ion-text-center btn-upload-container\">\n            <div *ngIf=\"user.type == 'Company'\">\n              <ion-button color=\"none\" class=\"btn-upload-cv cwhite\">\n                {{\"COMPANY\" | translate}}\n              </ion-button>\n              <ion-button (click)=\"selectFile()\" color=\"none\" class=\"btn-doc cwhite\">\n                {{\"Add DOCUMENT\" | translate}}\n              </ion-button>\n              <p *ngIf=\"cvFile\" class=\"m0 p0\" style=\"color: red;margin-top: 4px;\">{{cvFile.name}}</p>\n            </div>\n\n            <input *ngIf=\"user.type == 'Company'\" type=\"file\" id=\"cv-input-field\" accept=\"application/pdf\" hidden\n              (change)=\"uploadDocument($event)\">\n\n            <ion-button *ngIf=\"user.type != 'Company'\" color=\"none\" class=\"btn-ind cwhite\">\n              {{\"INDIVIDUAL\" | translate}}\n            </ion-button>\n\n            <!-- <ion-button (click)=\"uploadDocument()\" *ngIf=\"user.type == 'Company'\" color=\"none\"\n              class=\"btn-upload-cv cwhite\">\n              {{\"Upload Document\" | translate}}\n            </ion-button> -->\n            <!-- <p></p>\n            <p class=\"m0\">ZIP OR PDF FILE</p>\n            <p class=\"m0\">(SOME INSTRUCTIONS WILL BE WRITTEN)</p> -->\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n    <div class=\"form-container\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label *ngIf=\"user.type != 'Company'\">{{\"YOUR NAME\"|translate}}</ion-label>\n          <ion-label *ngIf=\"user.type == 'Company'\">{{\"COMPANY NAME\"|translate}}</ion-label>\n          <ion-input placeholder=\"KARINA BUYS\" [(ngModel)]=\"user.name\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"EMAIL\"|translate}}</ion-label>\n          <ion-input type=\"\" placeholder=\"karina_buys@email.com\" [(ngModel)]=\"user.email\"></ion-input>\n        </ion-col>\n        <!-- <ion-col size=\"12\">\n          <ion-label>MOBILE NUMBER</ion-label>\n          <ion-input placeholder=\"00 123 456\"  [(ngModel)]=\"user.phone\"></ion-input>\n        </ion-col> -->\n        <!-- <ion-col size=\"12\">\n          <ion-label>{{\"SALARY\" | translate}}</ion-label>\n          <ion-input placeholder=\"10000\"></ion-input>\n        </ion-col> -->\n        <ion-col size=\"12\">\n          <ion-label>{{\"PASSWORD\" | translate}}</ion-label>\n          <ion-input type=\"password\" placeholder=\"**********\" [(ngModel)]=\"password\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"PHONE NUMBER\" | translate}}</ion-label>\n          <div class=\"number-container d-flex align-items-center\">\n            <div class=\"input-number-label-container\" (click)=\"getCountry()\">\n              <ion-label class=\"input-number-label\">{{selectedCountry.phonecode}}</ion-label>\n            </div>\n            <ion-input type=\"number\" placeholder=\"558 257 68 005\" [(ngModel)]=\"userPhoneNumber\"></ion-input>\n          </div>\n          <!-- <div>\n\n          </div> -->\n        </ion-col>\n        \n        <ion-col size=\"12\">\n          <ion-label>{{\"YOUR ADDRESS\" | translate}}</ion-label>\n          <ion-textarea [(ngModel)]=\"user.address\" class=\"other\"\n            placeholder=\"Lorem ipsum 22nd street, Tincidunt ut laoreet 5N 27T - Lorem Ipsum\"></ion-textarea>\n        </ion-col>\n        <ion-col size=\"12\">\n          <!-- <p class=\"cblack\">Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non.</p> -->\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button class=\"submit-button\" (click)=\"editProfile()\" color=\"none\">\n            <ion-label class=\"cwhite\">{{\"SAVE CHANGES\" | translate}}</ion-label>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"12\" class=\"mt4\" *ngIf=\"user.is_subscribed\">\n          <ion-label>Subscription Expiry: </ion-label>\n          <ion-label>{{user.sub_exp_date}}</ion-label>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"user.type == 'Individual' && user.ind_post_count > 0\">\n          <ion-label>Subscribed?: </ion-label>\n          <ion-label>{{user.ind_post_count > 0 ? \"Yes\" : \"No\"}}</ion-label>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-grid fixed class=\"mt4\">\n            <ion-row>\n              <ion-col size=\"6\" class=\"mt-4\" *ngIf=\"user.is_email_verified == 'Yes'\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <img src=\"assets/images/google.png\" alt=\"\" width=\"30px\" height=\"30px\">\n                  <span style=\"padding-left: 6px; font-size: 16px;\"> Verified</span>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\" class=\"mt-4\" *ngIf=\"user.is_fb_verified == 'Yes'\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <img src=\"assets/images/facebook-color.png\" alt=\"\" width=\"30px\" height=\"30px\">\n                  <span style=\"padding-left: 6px; font-size: 16px;\"> Verified</span>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\" *ngIf=\"user.is_phone_verified == 'Yes'\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                  <img src=\"assets/images/phone.png\" alt=\"\" width=\"30px\" height=\"30px\">\n                  <span style=\"padding-left: 6px; font-size: 16px;\"> Verified</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n      <div>\n        <!-- <ion-item> -->\n\n        <!-- </ion-item> -->\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 48448:
/*!*****************************************************!*\
  !*** ./src/app/edit-account/edit-account.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".btn-upload-cv {\n  margin-top: 10px;\n  background: #72BE52;\n  margin: 0px;\n  --border-radius: 14px;\n  border-radius: 14px;\n  box-shadow: 0;\n  height: 28px;\n  font-size: 14px;\n  margin-top: 10px;\n  width: 130px;\n  font-family: \"Roboto Medium\";\n}\n\n.btn-ind {\n  margin-top: 10px;\n  background: #7F132A;\n  margin: 0px;\n  --border-radius: 14px;\n  border-radius: 14px;\n  box-shadow: 0;\n  height: 28px;\n  font-size: 14px;\n  margin-top: 10px;\n  width: 130px;\n  font-family: \"Roboto Medium\";\n}\n\n.btn-doc {\n  margin-top: 10px;\n  background: #7F132A;\n  margin: 0px;\n  --border-radius: 14px;\n  border-radius: 14px;\n  box-shadow: 0;\n  height: 28px;\n  font-size: 14px;\n  margin-top: 10px;\n  font-family: \"Roboto Medium\";\n}\n\n.btn-subscribe {\n  margin-top: 10px;\n  background: #f40035;\n  margin: 0px;\n  --border-radius: 14px;\n  border-radius: 14px;\n  box-shadow: 0;\n  height: 28px;\n  font-size: 14px;\n  margin-top: 10px;\n  font-family: \"Roboto Medium\";\n}\n\n.btn-upload-container {\n  margin-top: 14px;\n}\n\n.btn-upload-container p {\n  color: #7F132A;\n  font-size: 6px;\n}\n\n.form-container {\n  font-size: 14px;\n  color: #7f132a;\n  padding: 0px 28px 0px 28px;\n}\n\n.form-container ion-input {\n  color: #6C7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container ion-select {\n  color: #6C7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container .other {\n  color: #6C7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.submit-button {\n  margin-top: 10px;\n  background: linear-gradient(180deg, #7f132a 40%, #c90269 100%);\n  margin: 0px;\n  --border-radius: 4px;\n  border-radius: 4px;\n  box-shadow: 0;\n  height: 28px;\n}\n\n.number-container {\n  background: #6C7480;\n}\n\n.number-container ion-input {\n  background: white;\n  margin: 0px;\n}\n\n.input-number-label-container {\n  background-color: #6C7480;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  padding-right: 4px;\n  font-size: 14px;\n  width: 66px;\n  height: 29px;\n  /* align-items: center; */\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsNEJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsNEJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBREk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUdSOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQUdKOztBQUZJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFJUjs7QUFGSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSVI7O0FBRkk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSVI7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUFBO0VBQ0ksbUJBQUE7QUFHSjs7QUFGSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQUlSOztBQURBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSUoiLCJmaWxlIjoiZWRpdC1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tdXBsb2FkLWN2e1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGxpbmVhcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICM3MkJFNTI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgYm94LXNoYWRvdzogMDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNZWRpdW1cIjtcbn1cbi5idG4taW5ke1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzdGMTMyQTtcbiAgICBtYXJnaW46IDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBib3gtc2hhZG93OiAwO1xuICAgIGhlaWdodDogMjhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIE1lZGl1bVwiO1xufVxuLmJ0bi1kb2N7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjN0YxMzJBO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGJveC1zaGFkb3c6IDA7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC8vIHdpZHRoOiAxMzBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTWVkaXVtXCI7XG59XG4uYnRuLXN1YnNjcmliZXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmNDAwMzU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgYm94LXNoYWRvdzogMDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLy8gd2lkdGg6IDEzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNZWRpdW1cIjtcbn1cbi5idG4tdXBsb2FkLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIHB7XG4gICAgICAgIGNvbG9yOiAjN0YxMzJBO1xuICAgICAgICBmb250LXNpemU6IDZweDtcbiAgICB9XG59XG4uZm9ybS1jb250YWluZXJ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjN2YxMzJhO1xuICAgIHBhZGRpbmc6IDBweCAyOHB4IDBweCAyOHB4O1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgY29sb3I6ICM2Qzc0ODA7XG4gICAgICAgIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICBpb24tc2VsZWN0e1xuICAgICAgICBjb2xvcjogIzZDNzQ4MDtcbiAgICAgICAgYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIC5vdGhlcntcbiAgICAgICAgY29sb3I6ICM2Qzc0ODA7XG4gICAgICAgIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgLy8gaGVpZ2h0OiAzMHB4O1xuICAgIH1cbn1cbi5zdWJtaXQtYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzdmMTMyYSA0MCUsIHJnYmEoMjAxLCAyLCAxMDUsIDEpIDEwMCUpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwO1xuICAgIGhlaWdodDogMjhweDtcbiAgICAvLyB3aWR0aDogMTAwcHg7XG59XG4ubnVtYmVyLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOiAjNkM3NDgwO1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbn1cbi5pbnB1dC1udW1iZXItbGFiZWwtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Qzc0ODA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiA2NnB4O1xuICAgIGhlaWdodDogMjlweDtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-account_edit-account_module_ts.js.map