"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 62359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 60955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 69549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 62359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 60955);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
        // providers:[Facebook]
    })
], LoginPageModule);



/***/ }),

/***/ 60955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 99403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/facebook/ngx */ 99103);
/* harmony import */ var _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/google-plus/ngx */ 21014);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/store.service */ 99652);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _store_user_user_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/user/user.action */ 96481);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _services_firebase_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/firebase.config */ 90879);




















let LoginPage = class LoginPage {
    constructor(router, api, util, store, translate, ss, platform, google, fb
    // private keyboard: Keyboard
    ) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.store = store;
        this.translate = translate;
        this.ss = ss;
        this.platform = platform;
        this.google = google;
        this.fb = fb;
        this.username = '';
        this.password = '';
        this.lang = false;
        this.showAppleSignIn = false;
        this.translate.use((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_7__.getLang)());
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            if ((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_7__.getLang)() == 'en') {
                console.log("here");
                this.lang = false;
            }
            else {
                console.log("here2");
                this.lang = true;
            }
            console.log((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_7__.getLang)(), this.lang);
            const { Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__.Plugins;
            let device = yield Device.getInfo();
            this.showAppleSignIn = device.platform === 'ios';
        });
    }
    goToSignup() {
        this.router.navigate(['signup']);
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
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
            let response = yield this.api.postRequest(payload, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_5__.loginApi);
            this.util.hideProgressDialog();
            console.log(response);
            if (response) {
                console.log(response);
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.setUser)(response);
                this.store.dispatch((0,_store_user_user_action__WEBPACK_IMPORTED_MODULE_11__.addUser)({ content: (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.getUser)() }));
                if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.isLogin)()) {
                    this.ss.changeUser((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.getUser)());
                    this.router.navigate(['home']);
                }
            }
        });
    }
    changeLang(ev) {
        console.log(ev);
        if (ev) {
            (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_7__.setLanguage)('ar');
        }
        else {
            (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_7__.setLanguage)('en');
        }
        location.reload();
    }
    signupWithFB() {
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
            console.log('Logged into Facebook!', res);
            this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                let userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data’][‘url'], username: profile['name'], id: profile['id'] };
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
        const { SignInWithApple } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__.Plugins;
        SignInWithApple.Authorize()
            .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            console.log(res);
            if (res.response && res.response.identityToken) {
                // this.user = res.response;
                console.log("apple response", res);
                if (res.response.email)
                    this.username = res.response.email;
                this.loginByType('gmail', res.response.email, res.response.identityToken);
            }
            else {
                this.util.showToast("Cannot signin with apple with this account right now. try again.");
                // this.presentAlert();
            }
        }))
            .catch((response) => {
            this.util.showToast("Cannot signin with apple with this account right now. try again.");
            console.log(response);
            // this.presentAlert();
        });
    }
    signupWithGoogle() {
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
                this.loginByType('gmail', response.email, response.userId);
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
                    this.loginByType('gmail', success.user.email, success.user.uid);
                }
            }).catch(err => {
                console.log(err.message, 'error in google login');
            });
        }
    }
    loginByType(type, email, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            let payload = {
                type: type,
                id: id,
                email: email,
            };
            this.util.showProgressDialog();
            let response = yield this.api.postRequest(payload, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_5__.loginByTyprApi);
            this.util.hideProgressDialog();
            console.log("type", response);
            if (response) {
                console.log("response");
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.setUser)(response);
                this.store.dispatch((0,_store_user_user_action__WEBPACK_IMPORTED_MODULE_11__.addUser)({ content: (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.getUser)() }));
                if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.isLogin)()) {
                    console.log("response2");
                    this.ss.changeUser((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.getUser)());
                    this.router.navigate(['home']);
                }
            }
        });
    }
    skip() {
        (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_6__.generateLocalUser)();
        this.ss.changeUser((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.getUser)());
        this.router.navigate(['home']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_10__.UtilsService },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_16__.Store },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_9__.StoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.Platform },
    { type: _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__.GooglePlus },
    { type: _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__.Facebook }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: 'app-login',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 99403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-row class=\"header\"></ion-row>\n\n<ion-content>\n  <!-- <div>\n  </div> -->\n  <div class=\"login-root\">\n    <div class=\"top-layout\">\n      <div class=\"app-bar-content\">\n        <div class=\"btn-skip\" (click)=\"skip()\">{{\"Skip\" | translate}}</div>\n        <div class=\"toggle-container\">\n          <ion-toggle [(ngModel)]=\"lang\" (ngModelChange)=\"changeLang($event)\">\n          </ion-toggle>\n        </div>\n\n      </div>\n      <div class=\"heading\">\n        <div class=\"welcome\">\n          <h2>{{\"WELCOME!\" | translate}}</h2>\n        </div>\n        <div class=\"app-heading\">\n          <h1>{{\"Shaghala\" | translate}}</h1>\n        </div>\n      </div>\n      <div class=\"logo-container\">\n        <div class=\"logo-img\">\n          <img src=\"assets/images/app_login_logo.png\" alt=\"Shkalah\">\n        </div>\n      </div>\n    </div>\n    <div class=\"bottom-layout\">\n      <div class=\"login-form-container\">\n        <div class=\"input-container\">\n          <ion-input [(ngModel)]=\"username\" placeholder=\"{{'Email' | translate}}\"></ion-input>\n        </div>\n        <div class=\"input-container\">\n          <ion-input type=\"password\" [(ngModel)]=\"password\" placeholder=\"{{'Password' | translate}}\"></ion-input>\n        </div>\n        <div class=\"btn-container\">\n          <ion-button size=\"small\" (click)=\"login()\" color=\"none\">{{\"Log In\" | translate}}</ion-button>\n        </div>\n      </div>\n      <div class=\"signup-with-container mt6 d-flex justify-content-center align-items-center\">\n        <img class=\"mr10 login-icon-img\" width=\"44px\" src=\"assets/images/facebook.png\" alt=\"\" (click)=\"signupWithFB()\">\n        <img width=\"44px\" class=\"mt2 mr8 login-icon-img\" src=\"assets/images/email.png\" (click)=\"signupWithGoogle()\" alt=\"\">\n        <img width=\"44px\" *ngIf=\"showAppleSignIn\"  class=\"mt2 login-icon-img\" src=\"assets/images/apple.png\" style=\"margin-left: 4px;\" (click)=\"signupWithApple()\" alt=\"\">\n      </div>\n      <div class=\"fs-container\">\n        <div class=\"forget-password-container\">\n          <ion-label class=\"txt-forget-password\" routerLink=\"/reset-password\">{{\"Forgot Password?\" | translate}}</ion-label>\n        </div>\n        <div class=\"new-signup-container\">\n          <ion-label class=\"txt-new-signup\">\n            {{\"Don't have account?\" | translate}} <span class=\"txt-signup\" (click)=\"goToSignup()\">{{\"Sign Up\" | translate}}</span>\n          </ion-label>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</ion-content>");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = ".login-root {\n  background: #ffffff;\n  height: 100%;\n}\n\nion-content {\n  --background: #ffffff;\n}\n\n.top-layout {\n  background: linear-gradient(180deg, #7f132a 40%, #c90269 100%);\n}\n\n.top-layout .app-bar-content {\n  display: flex;\n  align-items: center;\n  padding: 20px 10px 0px 10px;\n  justify-content: space-between;\n}\n\n.top-layout .app-bar-content .btn-skip {\n  color: black;\n  background-color: #eec626;\n  font-size: 12px;\n  border-radius: 6px;\n  padding: 2px 8px 2px 8px;\n}\n\n.top-layout .app-bar-content .toggle-container {\n  border-radius: 20px;\n  box-shadow: 2px 3px 6px #000000b8;\n  height: 18px;\n}\n\n.top-layout .app-bar-content ion-toggle {\n  width: 46px;\n  padding: 0px;\n  position: relative;\n  color: black;\n  font-size: 15px;\n  height: 20px;\n  line-height: 31px;\n  zoom: 0.9;\n  --handle-box-shadow: 0px;\n  --handle-spacing: 3px;\n  --handle-height: 14px;\n  --handle-width: 14px;\n  --background: #ffffff;\n  --background-checked: #ffffff;\n  --handle-background: #8dc63f;\n  --handle-background-checked: #8dc63f;\n}\n\n.top-layout .app-bar-content ion-toggle[aria-checked=false]::after {\n  position: absolute;\n  content: \"Arb\";\n  font-size: 12px;\n  top: -6px;\n  right: 5px;\n}\n\n.top-layout .app-bar-content ion-toggle[aria-checked=true]::after {\n  position: absolute;\n  font-size: 12px;\n  content: \"Eng\";\n  top: -6px;\n  left: 5px;\n}\n\n.top-layout .heading {\n  text-align: center;\n  margin-top: 40px;\n}\n\n.top-layout .heading .welcome h2 {\n  margin-bottom: 0px;\n  color: #ffffff;\n}\n\n.top-layout .heading .app-heading h1 {\n  font-size: 38px;\n  margin-top: 4px;\n  font-family: \"Montserrat Bold\";\n  color: #ffffff;\n}\n\n.top-layout .logo-container {\n  text-align: center;\n  line-height: 0px;\n  padding: 0px;\n  margin: 0px;\n  position: relative;\n  bottom: -20px;\n}\n\n.top-layout .logo-container .logo-img img {\n  margin-top: -10px;\n  width: 60%;\n}\n\n.bottom-layout {\n  margin-top: 40px;\n}\n\n.bottom-layout .login-form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bottom-layout .login-form-container .input-container {\n  width: 70%;\n  margin-bottom: 10px;\n}\n\n.bottom-layout .login-form-container .input-container ion-input {\n  color: black;\n  text-align: center;\n  font-size: 14px;\n  border: #6c7480 solid;\n  border-width: 1px;\n  border-radius: 4px;\n  --padding-start: 10px;\n}\n\n.bottom-layout .login-form-container .btn-container ion-button {\n  margin-top: 10px;\n  background: linear-gradient(180deg, #7f132a 40%, #c90269 100%);\n  margin: 0px;\n  --border-radius: 4px;\n  border-radius: 4px;\n  box-shadow: 0;\n}\n\n.bottom-layout .fs-container {\n  margin-top: 30px;\n}\n\n.bottom-layout .fs-container .forget-password-container {\n  color: #019ad6;\n  font-size: 14px;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.bottom-layout .fs-container .forget-password-container ion-label {\n  font-family: \"Roboto Light\";\n}\n\n.bottom-layout .fs-container .new-signup-container {\n  color: black;\n  text-align: center;\n  font-size: 14px;\n  margin-top: 4px;\n}\n\n.bottom-layout .fs-container .new-signup-container .txt-signup {\n  color: #019ad6;\n  text-decoration: underline;\n  font-family: \"Roboto Light\";\n}\n\n.bottom-layout .fs-container .new-signup-container ion-label {\n  font-family: \"Roboto Light\";\n}\n\n.login-icon-img {\n  padding: 7px;\n  border-radius: 10px;\n  opacity: 0.8;\n  background-color: #d4d4d4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7QUFFSjs7QUFBQTtFQUNJLDhEQUFBO0FBR0o7O0FBRkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBSVI7O0FBRlE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUlaOztBQUZRO0VBQ0ksbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7QUFJWjs7QUFEUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFFQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FBQVo7O0FBSVk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGaEI7O0FBT1k7RUFDSSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFOaEI7O0FBVUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBUlI7O0FBU1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFQWjs7QUFTUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBUFo7O0FBVUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFSUjs7QUFZWTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQVZoQjs7QUFrQkE7RUFDSSxnQkFBQTtBQWZKOztBQWdCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBZFI7O0FBZ0JRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBZFo7O0FBZVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFiaEI7O0FBZ0JRO0VBQ0ksZ0JBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWRaOztBQWlCSTtFQUNJLGdCQUFBO0FBZlI7O0FBZ0JRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBZFo7O0FBZVk7RUFDSSwyQkFBQTtBQWJoQjs7QUFnQlE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQWRaOztBQWVZO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFiaEI7O0FBZ0JZO0VBQ0ksMkJBQUE7QUFkaEI7O0FBbUJBO0VBRUksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBakJKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1yb290IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4udG9wLWxheW91dCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzdmMTMyYSA0MCUsIHJnYmEoMjAxLCAyLCAxMDUsIDEpIDEwMCUpO1xuICAgIC5hcHAtYmFyLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAuYnRuLXNraXAge1xuICAgICAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWM2MjY7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4IDJweCA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvZ2dsZS1jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAzcHggNnB4ICMwMDAwMDBiODtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi10b2dnbGUge1xuICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG5cbiAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzFweDtcbiAgICAgICAgICAgIHpvb206IDAuOTtcblxuICAgICAgICAgICAgLS1oYW5kbGUtYm94LXNoYWRvdzogMHB4O1xuICAgICAgICAgICAgLS1oYW5kbGUtc3BhY2luZzogM3B4O1xuICAgICAgICAgICAgLS1oYW5kbGUtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgLS1oYW5kbGUtd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQ6ICM4ZGM2M2Y7XG4gICAgICAgICAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4ZGM2M2Y7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdG9nZ2xlW2FyaWEtY2hlY2tlZD1cImZhbHNlXCJdIHtcbiAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJBcmJcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tdG9nZ2xlW2FyaWEtY2hlY2tlZD1cInRydWVcIl0ge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkVuZ1wiO1xuICAgICAgICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhlYWRpbmcge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIC53ZWxjb21lIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5hcHAtaGVhZGluZyBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0IEJvbGRcIjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206IC0yMHB4O1xuXG4gICAgICAgIC8vIGJvcmRlci13aWR0aDogMjBweDtcbiAgICAgICAgLmxvZ28taW1nIHtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAtMTtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6ICNmZmZmZmYgc29saWQ7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmJvdHRvbS1sYXlvdXQge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgLmxvZ2luLWZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6ICM2Yzc0ODAgc29saWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYnRuLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjN2YxMzJhIDQwJSwgcmdiYSgyMDEsIDIsIDEwNSwgMSkgMTAwJSk7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZnMtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgLmZvcmdldC1wYXNzd29yZC1jb250YWluZXIge1xuICAgICAgICAgICAgY29sb3I6ICMwMTlhZDY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5ldy1zaWdudXAtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgICAgIC50eHQtc2lnbnVwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxOWFkNjtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTGlnaHRcIjtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTGlnaHRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5sb2dpbi1pY29uLWltZ3tcbiAgICAvLyBib3JkZXI6IHNvbGlkIDFweCByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map