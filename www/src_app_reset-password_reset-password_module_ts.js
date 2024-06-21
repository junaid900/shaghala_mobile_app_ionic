"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reset-password_reset-password_module_ts"],{

/***/ 81215:
/*!*****************************************************************!*\
  !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageRoutingModule": () => (/* binding */ ResetPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.page */ 87465);




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPage
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ 27485:
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPageModule": () => (/* binding */ ResetPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password-routing.module */ 81215);
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page */ 87465);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _otp_otp_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../otp/otp.module */ 28883);









let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _otp_otp_module__WEBPACK_IMPORTED_MODULE_2__.OtpPageModule,
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordPage],
        // providers:[OtpPage]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ 87465:
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordPage": () => (/* binding */ ResetPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reset-password.page.html */ 77078);
/* harmony import */ var _reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.page.scss */ 55830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/google-plus/ngx */ 21014);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _countries_countries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../countries/countries.page */ 28484);
/* harmony import */ var _otp_otp_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../otp/otp.page */ 27314);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/store.service */ 99652);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_firebase_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/firebase.config */ 90879);
/* harmony import */ var capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! capacitor-firebase-auth */ 30107);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/core */ 2960);


















let ResetPasswordPage = class ResetPasswordPage {
    constructor(router, api, util, navCtrl, translate, ss, modelCtrl, platform, google) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.ss = ss;
        this.modelCtrl = modelCtrl;
        this.platform = platform;
        this.google = google;
        this.phoneNumber = '';
        this.code = "+92";
        this.selectedCountry = {
            "country_id": 178,
            "phonecode": 974,
        };
        this.userResponse = {};
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            console.log("ionViewDidEnter");
            let recaptchaVerifier = new _services_firebase_config__WEBPACK_IMPORTED_MODULE_10__.fire.auth.RecaptchaVerifier('sign-in-button', { 'size': 'invisible' });
            if (!this.recaptchaVerifier) {
                recaptchaVerifier.verify().then(() => {
                    console.log("recaptchaVerifier");
                    this.recaptchaVerifier = recaptchaVerifier;
                }).catch(err => {
                    console.log(err);
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
            console.log("ionViewDidEnter2");
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    getCountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modelCtrl.create({
                component: _countries_countries_page__WEBPACK_IMPORTED_MODULE_3__.CountriesPage,
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
    openVerificationScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modelCtrl.create({
                component: _otp_otp_page__WEBPACK_IMPORTED_MODULE_4__.OtpPage,
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
                }
                else {
                    this.util.showToast("Your phone number is not verified try again");
                }
            });
            yield modal.present();
        });
    }
    resetPassword() {
        if (!this.userResponse.user_id) {
            this.util.showToast("We are sorry. cannot proceed your request right now try again later.");
            return;
        }
        var data = JSON.stringify(this.userResponse);
        let navigationExtras = {
            queryParams: {
                data: (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_9__.convertToBase64)(data),
            }
        };
        this.router.navigate(['new-password'], navigationExtras);
    }
    signinWithPhone() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            // this.fireAuth.verifyPhoneNumber()
            const { Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__.Plugins;
            let device = yield Device.getInfo();
            console.log(device);
            if (device.platform == 'ios') {
                console.log('========+++> Verify');
                (0,capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_11__.cfaSignInPhone)("+" + this.selectedCountry.phonecode + this.phoneNumber).subscribe(user => console.log("cfaSignInPhone", user.phoneNumber));
                (0,capacitor_firebase_auth__WEBPACK_IMPORTED_MODULE_11__.cfaSignInPhoneOnCodeSent)().subscribe((verificationId) => {
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
                });
                // cfaSignInPhoneOnCodeReceived().subscribe(
                //   (event: { verificationId: string, verificationCode: string }) => {
                //     console.log("cfaSignInPhoneOnCodeReceived",`${event.verificationId}:${event.verificationCode}`);
                //   })
            }
            else {
                _services_firebase_config__WEBPACK_IMPORTED_MODULE_10__.fire.auth().signInWithPhoneNumber("+" + this.selectedCountry.phonecode + this.phoneNumber, this.recaptchaVerifier).then(confirmResult => {
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
    verify() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
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
            var response = yield this.api.postRequest(payload, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__.resetPassword);
            this.util.hideProgressDialog();
            if (response) {
                this.util.showToast(response.req_message);
                console.log(response);
                this.userResponse = response;
                this.signinWithPhone();
            }
        });
    }
};
ResetPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_8__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_7__.StoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform },
    { type: _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus }
];
ResetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-reset-password',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reset_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reset_password_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResetPasswordPage);



/***/ }),

/***/ 77078:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/reset-password/reset-password.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <img src=\"assets/images/setting.png\" alt=\"\">\n  </ion-col>\n</ion-row>\n\n<ion-content>\n  <div id=\"sign-in-button\" style=\"display: none;\" ></div>\n\n  <div class=\"form-container\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"p0\">\n        <h1 class=\"heading p0 Poppins-SemiBold\">{{\"RESET PASSWORD\" | translate}}</h1>\n      </ion-col>\n      <ion-col size=\"12\" class=\"p0\">\n        <p class=\"m0 cwhite head-desc\">{{\"ENTER THE EMAIL ASSOICATED WITH YOUR ACCOUNT AND WE’LL SEND AN EMAIL WITH INSTRUCTIONS TO RESET YOUR PASSWORD.\" | translate}}</p>\n      </ion-col>\n      <ion-col size=\"12\" class=\"mt10\"></ion-col>\n      <ion-col size=\"12\">\n        <div class=\"number-container\">\n          <div class=\"input-number-label-container touch-opacity\" (click)=\"getCountry()\">\n            <ion-label class=\"input-number-label\">{{selectedCountry.phonecode}}</ion-label>\n          </div>\n          <div class=\"input-number-container\">\n            <ion-input class=\"input-number\" type=\"tel\" placeholder=\"{{'Mobile' | translate}} #\"\n              [(ngModel)]=\"phoneNumber\"></ion-input>\n          </div>\n        </div>\n      </ion-col>\n      \n      <!-- <ion-col size=\"12\">\n        <p class=\"cblack\">Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non.</p>\n      </ion-col> -->\n      <ion-col size=\"12\" class=\"ion-text-center button-container\">\n          <ion-button class=\"submit-button\" color=\"none\" (click)=\"verify()\">\n            <ion-label>{{\"Verify\" | translate}}</ion-label>\n          </ion-button>\n      </ion-col>\n    </ion-row>\n    \n  </div>\n</ion-content>\n<ion-footer style=\"background-color: #7f132a;\">\n  <div class=\"ion-text-center\">\n    <img src=\"assets/images/app_login_logo.png\" class=\"mt10\" width=\"60%\" alt=\"\">\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 55830:
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #7f132a;\n}\n\n.heading {\n  color: #EEC626;\n  margin-bottom: 0px;\n}\n\n.head-desc {\n  font-size: 12px;\n}\n\n.form-container {\n  font-size: 14px;\n  color: white;\n  padding: 0px 28px 0px 28px;\n}\n\n.form-container .other {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  background: white;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.button-container {\n  margin-top: 30px;\n}\n\n.submit-button {\n  background: white;\n  width: 100%;\n  margin: 0px;\n  --border-radius: 4px;\n  border-radius: 4px;\n  box-shadow: 0;\n  height: 28px;\n  color: #7f132a;\n}\n\n.submit-button ion-label {\n  font-family: \"Poppins Black\";\n}\n\n.number-container {\n  margin-bottom: 10px;\n  display: flex;\n  height: 40px;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  margin-left: -2px;\n}\n\n.number-container ion-input {\n  color: black;\n  text-align: center;\n  font-size: 14px;\n  border: #6c7480 solid;\n  border-width: 1px;\n}\n\n.number-container .input-number-label-container {\n  background-color: #6C7480;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  padding-right: 4px;\n  font-size: 14px;\n  width: 90px;\n  height: 96%;\n  position: relative;\n  z-index: 0;\n  right: -2px;\n  display: flex;\n  align-items: center;\n}\n\n.number-container .input-number-label-container .input-number-label {\n  width: 100%;\n  text-align: center;\n  color: #ffffff;\n}\n\n.number-container .input-number-container {\n  z-index: 999;\n  width: 140%;\n}\n\n.number-container .input-number-container .input-number {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFJSjs7QUFlSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWJSOztBQWlCQTtFQUNJLGdCQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFiSjs7QUFjSTtFQUNJLDRCQUFBO0FBWlI7O0FBZ0JBO0VBRUksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZEo7O0FBZUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQWJSOztBQWdCSTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWRSOztBQWVRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWJaOztBQWlCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBZlI7O0FBZ0JRO0VBQ0kseUJBQUE7QUFkWiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjN2YxMzJhO1xufVxuLmhlYWRpbmd7XG4gICAgY29sb3I6ICNFRUM2MjY7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmhlYWQtZGVzY3tcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZm9ybS1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDI4cHggMHB4IDI4cHg7XG4gICAgLy8gaW9uLWlucHV0IHtcbiAgICAvLyAgICAgY29sb3I6ICM2Yzc0ODA7XG4gICAgLy8gICAgIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAvLyAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC8vICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgLy8gICAgIGhlaWdodDogMzBweDtcbiAgICAvLyB9XG4gICAgLy8gaW9uLXNlbGVjdCB7XG4gICAgLy8gICAgIGNvbG9yOiAjNmM3NDgwO1xuICAgIC8vICAgICAvLyBib3JkZXI6ICM3MDcwNzAgc29saWQ7XG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAvLyAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIC8vICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLy8gfVxuICAgIC5vdGhlciB7XG4gICAgICAgIGNvbG9yOiAjNmM3NDgwO1xuICAgICAgICBib3JkZXI6ICM3MDcwNzAgc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAvLyBoZWlnaHQ6IDMwcHg7XG4gICAgfVxufVxuLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICM3ZjEzMmE7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIEJsYWNrXCI7XG4gICAgfVxuICAgIC8vIHdpZHRoOiAxMDBweDtcbn1cbi5udW1iZXItY29udGFpbmVye1xuICAgIC8vIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcbiAgICBpb24taW5wdXQge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3JkZXI6ICM2Yzc0ODAgc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgIC5pbnB1dC1udW1iZXItbGFiZWwtY29udGFpbmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkM3NDgwO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDk2JTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICByaWdodDogLTJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmlucHV0LW51bWJlci1sYWJlbHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAuaW5wdXQtbnVtYmVyLWNvbnRhaW5lcntcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICB3aWR0aDogMTQwJTtcbiAgICAgICAgLmlucHV0LW51bWJlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgICAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgfVxufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_reset-password_reset-password_module_ts.js.map