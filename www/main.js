(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



const routes = [
    {
        path: 'home',
        loadChildren: () => { console.log('home here'); return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_menu_menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./menu/menu.module */ 8462)).then(m => m.MenuPageModule); }
        // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 9483)).then(m => m.TabsPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_firebase_config_ts"), __webpack_require__.e("default-src_app_otp_otp_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 72759)).then(m => m.SignupPageModule)
    },
    {
        path: 'home-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 28245)).then(m => m.HomePageModule)
    },
    {
        path: 'worker-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_worker-detail_worker-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./worker-detail/worker-detail.module */ 68344)).then(m => m.WorkerDetailPageModule)
    },
    {
        path: 'add-worker',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_add-worker_add-worker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-worker/add-worker.module */ 74589)).then(m => m.AddWorkerPageModule)
    },
    {
        path: 'edit-account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_firebase_config_ts"), __webpack_require__.e("default-src_app_otp_otp_module_ts"), __webpack_require__.e("default-node_modules_capacitor-firebase-auth_dist_esm_index_js-src_app_countries_countries_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_edit-account_edit-account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-account/edit-account.module */ 79268)).then(m => m.EditAccountPageModule)
    },
    {
        path: 'account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 87942)).then(m => m.AccountPageModule)
    },
    {
        path: 'setting',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_setting_setting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./setting/setting.module */ 39726)).then(m => m.SettingPageModule)
    },
    {
        path: 'complain-center',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_complain-center_complain-center_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./complain-center/complain-center.module */ 84317)).then(m => m.ComplainCenterPageModule)
    },
    {
        path: 'favourit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_favourit_favourit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./favourit/favourit.module */ 21937)).then(m => m.FavouritPageModule)
    },
    {
        path: 'advance-filter',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_advance-filter_advance-filter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./advance-filter/advance-filter.module */ 51874)).then(m => m.AdvanceFilterPageModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_firebase_config_ts"), __webpack_require__.e("default-src_app_otp_otp_module_ts"), __webpack_require__.e("default-node_modules_capacitor-firebase-auth_dist_esm_index_js-src_app_countries_countries_page_ts"), __webpack_require__.e("src_app_reset-password_reset-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reset-password/reset-password.module */ 27485)).then(m => m.ResetPasswordPageModule)
    },
    {
        path: 'check-email',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_check-email_check-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./check-email/check-email.module */ 59631)).then(m => m.CheckEmailPageModule)
    },
    {
        path: 'new-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_new-password_new-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./new-password/new-password.module */ 99253)).then(m => m.NewPasswordPageModule)
    },
    {
        path: 'otp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_firebase_config_ts"), __webpack_require__.e("default-src_app_otp_otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./otp/otp.module */ 28883)).then(m => m.OtpPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_fatora-checkout_fatora-checkout_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payment/payment.module */ 15052)).then(m => m.PaymentPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_firebase_config_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 69549)).then(m => m.LoginPageModule)
    },
    {
        path: 'edit-worker',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_edit-worker_edit-worker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-worker/edit-worker.module */ 19423)).then(m => m.EditWorkerPageModule)
    },
    {
        path: 'worker',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_worker_worker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./worker/worker.module */ 62557)).then(m => m.WorkerPageModule)
    },
    {
        path: 'my-ads',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_my-ads_my-ads_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./my-ads/my-ads.module */ 16392)).then(m => m.MyAdsPageModule)
    },
    {
        path: 'worker-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_worker-list_worker-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./worker-list/worker-list.module */ 92862)).then(m => m.WorkerListPageModule)
    },
    {
        path: 'card-payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_card-payment_card-payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./card-payment/card-payment.module */ 1796)).then(m => m.CardPaymentPageModule)
    },
    {
        path: 'paypal-checkout',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_paypal-checkout_paypal-checkout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./paypal-checkout/paypal-checkout.module */ 14451)).then(m => m.PaypalCheckoutPageModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_menu_menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./menu/menu.module */ 8462)).then(m => m.MenuPageModule)
    },
    {
        path: 'countries',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_countries_countries_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./countries/countries.module */ 27353)).then(m => m.CountriesPageModule)
    },
    {
        path: 'fatora-checkout',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_fatora-checkout_fatora-checkout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fatora-checkout/fatora-checkout.module */ 93017)).then(m => m.FatoraCheckoutPageModule)
    },
    {
        path: 'about-us',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_about-us_about-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./about-us/about-us.module */ 95290)).then(m => m.AboutUsPageModule)
    },
    {
        path: 'company-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_company-list_company-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./company-list/company-list.module */ 5381)).then(m => m.CompanyListPageModule)
    },
    {
        path: 'comapny-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_comapny-detail_comapny-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./comapny-detail/comapny-detail.module */ 85076)).then(m => m.ComapnyDetailPageModule)
    },
    {
        path: 'reservation',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_reservation_reservation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reservation/reservation.module */ 42373)).then(m => m.ReservationPageModule)
    },
    {
        path: 'notification-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_notification-list_notification-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notification-list/notification-list.module */ 25250)).then(m => m.NotificationListPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 30836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 2960);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/status-bar */ 54515);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/session.helper */ 13086);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ 14940);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/api_url.hepler */ 69941);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/api.service */ 67118);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/store.service */ 99652);








// import { Plugins } from 'protractor/built/plugins';


const { Keyboard } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Plugins;




// import {setStatusBarStyleLight, showStatusBar} from './services/constrant.helper'
let AppComponent = class AppComponent {
    constructor(router, platform, api, ss) {
        this.router = router;
        this.platform = platform;
        this.api = api;
        this.ss = ss;
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
                        window.addEventListener("keyboardDidShow", function (e) {
                            console.log("show");
                            // console.log(e);
                            const height = jquery__WEBPACK_IMPORTED_MODULE_5__(document).height() - e.keyboardHeight;
                            // console.log(height);
                            jquery__WEBPACK_IMPORTED_MODULE_5__('body').animate({ 'height': height + 'px' }, 100);
                            // console.log( document.
                            //   activeElement);
                            setTimeout(function () {
                                let total = 0;
                                let container = null;
                                console.log(document.
                                    activeElement);
                                const percent = (jquery__WEBPACK_IMPORTED_MODULE_5__(document.activeElement).offset().top / jquery__WEBPACK_IMPORTED_MODULE_5__(document.body).height()) * 100;
                                document.
                                    activeElement.
                                    scrollIntoView({ behavior: 'smooth' });
                                // window.scrollBy(0, 30);
                            }, 100);
                        });
                        window.addEventListener("keyboardDidHide", function (e) {
                            console.log("hide");
                            const height = jquery__WEBPACK_IMPORTED_MODULE_5__(document).height();
                            console.log(height);
                            jquery__WEBPACK_IMPORTED_MODULE_5__('body').animate({ 'height': height + 'px' }, 100);
                        });
                        window.addEventListener("keyboardWillShow", function (e) {
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
                        window.addEventListener("keyboardWillHide", function (e) {
                            // console.log("window", e);
                            // console.log(e);
                            // console.log("keyboard Hide");
                            // $('body').animate({ 'marginTop': 0 + 'px' }, 100);
                        });
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
        });
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.isNativePlatform()) {
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({ overlay: true, });
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setStyle({
                style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.Style.Default,
            });
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.getInfo();
            _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.show();
        }
        this.checkUser();
    }
    checkUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_4__.isLogin)());
            if (!(0,_services_session_helper__WEBPACK_IMPORTED_MODULE_4__.isLogin)()) {
                this.router.navigate(['login']);
            }
            else {
                if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_4__.getUser)().type != 'local') {
                    var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_6__.getUserByIdApi + "/" + (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_4__.getUser)().user_id);
                    console.log("user_response", response);
                    if (response) {
                        (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_4__.setUser)(response);
                        this.ss.changeUser(response);
                    }
                    else {
                        (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_4__.logout)();
                        this.router.navigate(['login']);
                    }
                }
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_8__.StoreService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-root',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ 82003);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _store_test_test_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/test/test.reducer */ 93402);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var _store_test_test_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/test/test.effect */ 67779);
/* harmony import */ var _store_user_user_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/user/user.reducer */ 51033);
/* harmony import */ var _services_global_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/global.provider */ 52582);
/* harmony import */ var _mjpipes_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mjpipes.pipe */ 19753);
/* harmony import */ var _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/google-plus/ngx */ 21014);
/* harmony import */ var _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/facebook/ngx */ 99103);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/keyboard/ngx */ 71239);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);

















// import {GooglePlus} from 'cordova'





function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http, './assets/local/', '.json');
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _mjpipes_pipe__WEBPACK_IMPORTED_MODULE_6__.MjpipesPipe],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot({}), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
                },
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreModule.forRoot({
                tests: _store_test_test_reducer__WEBPACK_IMPORTED_MODULE_2__.testReducers,
                users: _store_user_user_reducer__WEBPACK_IMPORTED_MODULE_4__.userReducer,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsModule.forRoot([
                _store_test_test_effect__WEBPACK_IMPORTED_MODULE_3__.TestEffect,
            ]),
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicRouteStrategy }, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient,
            _services_global_provider__WEBPACK_IMPORTED_MODULE_5__.GlobalProvider, _awesome_cordova_plugins_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__.GooglePlus, _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__.Facebook, _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__.CallNumber, _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__.Keyboard, _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__.InAppBrowser],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 13275:
/*!***************************************!*\
  !*** ./src/app/helpers/url.helper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl),
/* harmony export */   "apiUrl": () => (/* binding */ apiUrl),
/* harmony export */   "getProductsUrl": () => (/* binding */ getProductsUrl)
/* harmony export */ });
const baseUrl = "https://themilkcompany.pk/";
const apiUrl = baseUrl + "api/";
const getProductsUrl = apiUrl + "products/get";


/***/ }),

/***/ 19753:
/*!*********************************!*\
  !*** ./src/app/mjpipes.pipe.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MjpipesPipe": () => (/* binding */ MjpipesPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let MjpipesPipe = class MjpipesPipe {
    transform(value, ...args) {
        return null;
    }
    json(data) {
        try {
            return JSON.stringify(data);
        }
        catch (e) {
            return "{}";
        }
    }
};
MjpipesPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'mjpipes'
    })
], MjpipesPipe);



/***/ }),

/***/ 67118:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 44516);




let ApiService = class ApiService {
    constructor(http, util) {
        this.http = http;
        this.util = util;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
            // .set('Basic', `${environment.authToken}`)
        };
    }
    getRequest(url, type = "simple") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let data = (yield this.http.get(url, this.header).toPromise());
                // console.log("api="+url, data);
                if (data) {
                    if (data.status < 1 || data.status > 9) {
                        // console.log(data.stats,"return null");
                        this.util.showToast(data.message);
                        return null;
                    }
                    else {
                        data.response['req_status'] = data.status;
                        data.response['req_message'] = data.message;
                        return data.response || {};
                    }
                }
            }
            catch (e) {
                if (type == 'simple')
                    this.util.showToast("Unfortunate Error");
                return null;
            }
        });
    }
    postRequest(payload, url, showToast = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let data = (yield this.http.post(url, payload, this.header).toPromise());
                // console.log("api", data);
                if (data) {
                    if (data.status < 1 || data.status > 9) {
                        this.util.showToast(data.message, 4000);
                        return null;
                    }
                    else {
                        if (showToast) {
                            this.util.showToast(data.message);
                        }
                        data.response['req_status'] = data.status;
                        data.response['req_message'] = data.message;
                        return data.response || {};
                    }
                }
            }
            catch (e) {
                console.log("error", e);
                this.util.showToast("Unfortunate Error");
                return null;
            }
        });
    }
    simplePostRequest(payload, url, headers = null, showToast = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let header = this.header;
                if (headers) {
                    header = headers;
                }
                let data = (yield this.http.post(url, payload, header).toPromise());
                return data;
            }
            catch (e) {
                console.log("error", e);
                this.util.showToast("Unfortunate Error");
                return null;
            }
        });
    }
    postMultipartRequest(payload, url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let header = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
                    .set('Accept', 'application/json')
                // .set('Basic', `${environment.authToken}`)
            };
            try {
                // this.http.post(url,payload,header);
                let data = (yield this.http.post(url, payload).toPromise());
                // console.log("api", data);
                if (data) {
                    if (data.status < 1 || data.status > 9) {
                        this.util.showToast(data.message);
                        return null;
                    }
                    else {
                        return data.response || {};
                    }
                }
            }
            catch (e) {
                console.log("error", e);
                return null;
            }
        });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ 69941:
/*!********************************************!*\
  !*** ./src/app/services/api_url.hepler.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl),
/* harmony export */   "apiUrl": () => (/* binding */ apiUrl),
/* harmony export */   "loginApi": () => (/* binding */ loginApi),
/* harmony export */   "loginByTyprApi": () => (/* binding */ loginByTyprApi),
/* harmony export */   "sendMailOtpApi": () => (/* binding */ sendMailOtpApi),
/* harmony export */   "appSettingApi": () => (/* binding */ appSettingApi),
/* harmony export */   "rechargeStripeApi": () => (/* binding */ rechargeStripeApi),
/* harmony export */   "rechargePaypaleApi": () => (/* binding */ rechargePaypaleApi),
/* harmony export */   "rechargeFitoraApi": () => (/* binding */ rechargeFitoraApi),
/* harmony export */   "signupApi": () => (/* binding */ signupApi),
/* harmony export */   "resetPassword": () => (/* binding */ resetPassword),
/* harmony export */   "resetPasswordSave": () => (/* binding */ resetPasswordSave),
/* harmony export */   "verifyPhone": () => (/* binding */ verifyPhone),
/* harmony export */   "verifyEmail": () => (/* binding */ verifyEmail),
/* harmony export */   "getCountiesApi": () => (/* binding */ getCountiesApi),
/* harmony export */   "getTypes": () => (/* binding */ getTypes),
/* harmony export */   "updateProfileApi": () => (/* binding */ updateProfileApi),
/* harmony export */   "uploadProfilePicApi": () => (/* binding */ uploadProfilePicApi),
/* harmony export */   "getCompaniesApi": () => (/* binding */ getCompaniesApi),
/* harmony export */   "getWorkerPageApi": () => (/* binding */ getWorkerPageApi),
/* harmony export */   "addWorkerApi": () => (/* binding */ addWorkerApi),
/* harmony export */   "updateWorkerApi": () => (/* binding */ updateWorkerApi),
/* harmony export */   "uploadCVWorkerApi": () => (/* binding */ uploadCVWorkerApi),
/* harmony export */   "uploadDocumentApi": () => (/* binding */ uploadDocumentApi),
/* harmony export */   "profileSliderApi": () => (/* binding */ profileSliderApi),
/* harmony export */   "getUserByIdApi": () => (/* binding */ getUserByIdApi),
/* harmony export */   "homeSliderApi": () => (/* binding */ homeSliderApi),
/* harmony export */   "departmentApi": () => (/* binding */ departmentApi),
/* harmony export */   "homeIndiWorkerApi": () => (/* binding */ homeIndiWorkerApi),
/* harmony export */   "homeCompanyWorkerApi": () => (/* binding */ homeCompanyWorkerApi),
/* harmony export */   "addComplainApi": () => (/* binding */ addComplainApi),
/* harmony export */   "addFavApi": () => (/* binding */ addFavApi),
/* harmony export */   "favCompanyApi": () => (/* binding */ favCompanyApi),
/* harmony export */   "favIndApi": () => (/* binding */ favIndApi),
/* harmony export */   "workerApi": () => (/* binding */ workerApi),
/* harmony export */   "deleteWorkerApi": () => (/* binding */ deleteWorkerApi),
/* harmony export */   "getWorkerByUserApi": () => (/* binding */ getWorkerByUserApi),
/* harmony export */   "workerDetailApi": () => (/* binding */ workerDetailApi),
/* harmony export */   "getWorkerByAdvType": () => (/* binding */ getWorkerByAdvType),
/* harmony export */   "getWorkerByCompany": () => (/* binding */ getWorkerByCompany),
/* harmony export */   "getFilterWorkerApi": () => (/* binding */ getFilterWorkerApi),
/* harmony export */   "checkResetvationApi": () => (/* binding */ checkResetvationApi),
/* harmony export */   "addReservationFatora": () => (/* binding */ addReservationFatora),
/* harmony export */   "addReservationPaypal": () => (/* binding */ addReservationPaypal),
/* harmony export */   "getUserReservation": () => (/* binding */ getUserReservation),
/* harmony export */   "getUserNotification": () => (/* binding */ getUserNotification),
/* harmony export */   "getNotificationCount": () => (/* binding */ getNotificationCount),
/* harmony export */   "readNotificationApi": () => (/* binding */ readNotificationApi)
/* harmony export */ });
// export const baseUrl = "https://shaghala.raselny.net/";
const baseUrl = "https://shkalah.mjcoders.ml/";
const apiUrl = baseUrl + "api/";
// APIS URL;
const loginApi = apiUrl + "general/signin";
const loginByTyprApi = apiUrl + "general/signinByType";
const sendMailOtpApi = apiUrl + "general/sendMailOtp";
const appSettingApi = apiUrl + "general/get_setting";
const rechargeStripeApi = apiUrl + "general/recharge_stripe";
const rechargePaypaleApi = apiUrl + "general/recharge_paypal";
const rechargeFitoraApi = apiUrl + "general/recharge_fatora";
const signupApi = apiUrl + "general/signup";
const resetPassword = apiUrl + "general/reset_password/check";
const resetPasswordSave = apiUrl + "general/reset_password";
const verifyPhone = apiUrl + "general/verify";
const verifyEmail = apiUrl + "general/verifyEmail";
const getCountiesApi = apiUrl + "general/get_countries";
const getTypes = apiUrl + "general/getTypes";
const updateProfileApi = apiUrl + "profile/edit";
const uploadProfilePicApi = apiUrl + "profile/upload_image";
const getCompaniesApi = apiUrl + "profile/get_companies";
const getWorkerPageApi = apiUrl + "worker/get_info";
const addWorkerApi = apiUrl + "worker/add";
const updateWorkerApi = apiUrl + "worker/edit";
const uploadCVWorkerApi = apiUrl + "worker/uploadCv";
const uploadDocumentApi = apiUrl + "general/uploadDoc";
const profileSliderApi = apiUrl + "profile/profile_slider";
const getUserByIdApi = apiUrl + "profile/checkUser";
const homeSliderApi = apiUrl + "slider/home_slider";
const departmentApi = apiUrl + "complain/dept";
const homeIndiWorkerApi = apiUrl + "home/Indi_worker";
const homeCompanyWorkerApi = apiUrl + "home/comp_worker";
const addComplainApi = apiUrl + "complain/add";
const addFavApi = apiUrl + "favourite/add";
// favourite/company_worker
const favCompanyApi = apiUrl + "favourite/company_worker";
const favIndApi = apiUrl + "favourite/ind_worker";
const workerApi = apiUrl + "worker/get_all_workers";
const deleteWorkerApi = apiUrl + "worker/delete";
const getWorkerByUserApi = apiUrl + "worker/get_worker_by_user";
const workerDetailApi = apiUrl + "worker/details";
const getWorkerByAdvType = apiUrl + "worker/get_by_adv_type";
const getWorkerByCompany = apiUrl + "worker/get_by_company";
const getFilterWorkerApi = apiUrl + "worker/filter";
const checkResetvationApi = apiUrl + "reservation/check_reservation";
const addReservationFatora = apiUrl + "reservation/fatora_add";
const addReservationPaypal = apiUrl + "reservation/paypal_add";
const getUserReservation = apiUrl + "reservation/get_by_user";
const getUserNotification = apiUrl + "notification/get";
const getNotificationCount = apiUrl + "notification/get_notification_count";
const readNotificationApi = apiUrl + "notification/read_notification";
// read_notification
// worker/details


/***/ }),

/***/ 69003:
/*!**********************************************!*\
  !*** ./src/app/services/constrant.helper.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateLocalUser": () => (/* binding */ generateLocalUser),
/* harmony export */   "getUserId": () => (/* binding */ getUserId),
/* harmony export */   "convertToBase64": () => (/* binding */ convertToBase64),
/* harmony export */   "convertFromBase64": () => (/* binding */ convertFromBase64)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/device */ 94219);
/* harmony import */ var _session_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session.helper */ 13086);



const generateLocalUser = () => {
    var data = { type: "local", session_id: "SESSIONID1218239137LOCALUSER" };
    (0,_session_helper__WEBPACK_IMPORTED_MODULE_1__.setUser)(data);
};
const getUserId = () => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function* () {
    let id = '';
    if ((0,_session_helper__WEBPACK_IMPORTED_MODULE_1__.getUser)().type == 'local') {
        id = (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_0__.Device.getId()).uuid;
    }
    else {
        id = (0,_session_helper__WEBPACK_IMPORTED_MODULE_1__.getUser)().user_id;
    }
    return id;
});
const SALT = "mjcoders.com(motor)";
const crypt = (text) => {
    const salt = SALT;
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return text
        .split("")
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join("");
};
const decrypt = (encoded) => {
    const salt = SALT;
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
};
function convertToBase64(str) {
    try {
        let encode = window.btoa(unescape(encodeURIComponent(crypt(str))));
        return encode;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}
function convertFromBase64(str) {
    try {
        let decode = decrypt(decodeURIComponent(escape(window.atob((str)))));
        return decode;
    }
    catch (e) {
        return null;
    }
}


/***/ }),

/***/ 52582:
/*!*********************************************!*\
  !*** ./src/app/services/global.provider.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalProvider": () => (/* binding */ GlobalProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let GlobalProvider = class GlobalProvider {
    constructor() {
        this.user = {};
        // this.user = data;
    }
    setData(user) {
        this.user = user;
    }
};
GlobalProvider.ctorParameters = () => [];
GlobalProvider = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], GlobalProvider);



/***/ }),

/***/ 13086:
/*!********************************************!*\
  !*** ./src/app/services/session.helper.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUser": () => (/* binding */ setUser),
/* harmony export */   "getUser": () => (/* binding */ getUser),
/* harmony export */   "isLogin": () => (/* binding */ isLogin),
/* harmony export */   "logout": () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _store_user_user_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/user/user.action */ 96481);
/* harmony import */ var _constrant_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constrant.helper */ 69003);


const USER = "USER";
const setUser = (data) => {
    var val = (0,_constrant_helper__WEBPACK_IMPORTED_MODULE_1__.convertToBase64)(JSON.stringify(data));
    let res = localStorage.setItem(USER, val);
    // new StoreService().changeUser(data);
    // addUser({content: data});
    return true;
};
const getUser = () => {
    try {
        var user = JSON.parse((0,_constrant_helper__WEBPACK_IMPORTED_MODULE_1__.convertFromBase64)(localStorage.getItem(USER)));
        if (user) {
            // new StoreService().changeUser(user);
            return user;
        }
        else {
            return null;
        }
    }
    catch (e) {
        return null;
    }
};
const isLogin = () => {
    try {
        var user = (0,_constrant_helper__WEBPACK_IMPORTED_MODULE_1__.convertFromBase64)(localStorage.getItem(USER));
        var userTkn = JSON.parse(user).session_id;
        if (!user && user.length < 1) {
            return false;
        }
        else {
            return true;
        }
    }
    catch (e) {
        return false;
    }
};
const logout = () => {
    try {
        localStorage.removeItem(USER);
        (0,_store_user_user_action__WEBPACK_IMPORTED_MODULE_0__.removeUser)();
        // new StoreService().changeUser({});
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
};


/***/ }),

/***/ 99652:
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreService": () => (/* binding */ StoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _session_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session.helper */ 13086);




let StoreService = class StoreService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject((0,_session_helper__WEBPACK_IMPORTED_MODULE_0__.getUser)());
        this.currentUser = this.messageSource.asObservable();
    }
    initStore() {
    }
    changeUser(user) {
        this.messageSource.next(user);
    }
};
StoreService.ctorParameters = () => [];
StoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], StoreService);



/***/ }),

/***/ 44516:
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 90466);




let UtilsService = class UtilsService {
    constructor(loadingController, toastController, translate) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.translate = translate;
    }
    translateLang() {
        // this.translate.onLangChange
    }
    showProgressDialog(message = 'Please wait', isDismissable = false) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: message,
                backdropDismiss: isDismissable,
            });
            this.loading.present();
        });
    }
    hideProgressDialog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loading) {
                this.loading.dismiss();
            }
        });
    }
    showDynamicToast(message, duration = 3000, pos = "bottom") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.toastController.create({
                message: message,
                duration: duration,
                color: "tertiary",
                icon: "information-circle",
                position: pos != 'top' ? 'bottom' : 'top',
                buttons: [
                    {
                        text: "close"
                    }
                ]
            }).then(res => {
                res.present();
            });
        });
    }
    showToast(message, duration = 3000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.toastController.create({
                message: message,
                duration: duration,
                color: "tertiary",
                icon: "information-circle",
                buttons: [
                    {
                        text: "close"
                    }
                ]
            }).then(res => {
                res.present();
            });
        });
    }
};
UtilsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService }
];
UtilsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UtilsService);



/***/ }),

/***/ 86307:
/*!********************************************!*\
  !*** ./src/app/store/test/test.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTest": () => (/* binding */ addTest),
/* harmony export */   "editTest": () => (/* binding */ editTest),
/* harmony export */   "deleteTest": () => (/* binding */ deleteTest),
/* harmony export */   "loadTest": () => (/* binding */ loadTest),
/* harmony export */   "onSuccessTest": () => (/* binding */ onSuccessTest),
/* harmony export */   "onErrorTest": () => (/* binding */ onErrorTest)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

const addTest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Test Page] Add Test", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const editTest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Test Page] Add Test", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteTest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Test Page] Delete Test", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadTest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Test Page] Load Test");
const onSuccessTest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Test Page] On Test Success", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const onErrorTest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Test Page] On Test Error", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 67779:
/*!*******************************************!*\
  !*** ./src/app/store/test/test.effect.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestEffect": () => (/* binding */ TestEffect)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 52251);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _test_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.actions */ 86307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4126);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 67118);
/* harmony import */ var src_app_helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/url.helper */ 13275);









let TestEffect = class TestEffect {
    constructor(actions$, store, api) {
        this.actions$ = actions$;
        this.store = store;
        this.api = api;
        // loadTests = createEffect(
        //     this.actions$.pipe(
        //         ofType(loadTest),
        //         switchMap(()=>from())
        //     )
        // )
        this.loadTests$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_test_actions__WEBPACK_IMPORTED_MODULE_0__.loadTest), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.api.getRequest(src_app_helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__.getProductsUrl)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => {
            console.log(data);
            return (0,_test_actions__WEBPACK_IMPORTED_MODULE_0__.onSuccessTest)({ tests: data });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_test_actions__WEBPACK_IMPORTED_MODULE_0__.onErrorTest)(error)))))));
    }
};
TestEffect.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService }
];
TestEffect = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)()
], TestEffect);



/***/ }),

/***/ 93402:
/*!********************************************!*\
  !*** ./src/app/store/test/test.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initState": () => (/* binding */ initState),
/* harmony export */   "testReducers": () => (/* binding */ testReducers)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _test_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.actions */ 86307);


const initState = {
    tests: [],
    error: null,
    status: 'pending',
};
const testReducers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_test_actions__WEBPACK_IMPORTED_MODULE_0__.loadTest, (state) => (Object.assign(Object.assign({}, state), { status: 'loading' }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_test_actions__WEBPACK_IMPORTED_MODULE_0__.onSuccessTest, (state, { tests }) => (Object.assign(Object.assign({}, state), { tests: tests, error: null, status: 'success' }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_test_actions__WEBPACK_IMPORTED_MODULE_0__.onErrorTest, (state, { error }) => (Object.assign(Object.assign({}, state), { error: error }))));


/***/ }),

/***/ 96481:
/*!*******************************************!*\
  !*** ./src/app/store/user/user.action.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUser": () => (/* binding */ addUser),
/* harmony export */   "loadUser": () => (/* binding */ loadUser),
/* harmony export */   "removeUser": () => (/* binding */ removeUser)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

const addUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('ADD_USER', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('GET_USER');
const removeUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('REMOVE_USER');


/***/ }),

/***/ 51033:
/*!********************************************!*\
  !*** ./src/app/store/user/user.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userReducer": () => (/* binding */ userReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _user_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.action */ 96481);


const initState = {
    user: null,
};
const userReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_user_action__WEBPACK_IMPORTED_MODULE_0__.loadUser, (state) => (Object.assign({}, state))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_user_action__WEBPACK_IMPORTED_MODULE_0__.addUser, (state, { content }) => (Object.assign(Object.assign({}, state), { user: content }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_user_action__WEBPACK_IMPORTED_MODULE_0__.removeUser, (state) => (Object.assign(Object.assign({}, state), { user: null }))));


/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// export const environment = {
//   production: false
// };
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCv4tS-kB3raaOrJ1UBLIPD5mxZO0lyWIo",
        authDomain: "shkalah-6697c.firebaseapp.com",
        databaseURL: "https://shkalah-6697c-default-rtdb.firebaseio.com",
        projectId: "shkalah-6697c",
        storageBucket: "shkalah-6697c.appspot.com",
        messagingSenderId: "102537792344",
        appId: "1:102537792344:web:769e6c19c615cacf56732d",
        measurementId: "G-DTVJ38DJT1"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 42577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		83477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		67196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		38081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		75017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		69721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		99216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		96612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		42694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		22938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		51379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		97552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		37218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		97479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		71439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		76397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		12413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		39411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		99133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		79003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		96065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		86991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		82947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		25919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		20301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		43799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		12140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		86197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		41975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		58387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		98659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		26404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		85253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		92619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		82871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		17668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		55342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		86185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		97337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		25705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		87463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 30836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map