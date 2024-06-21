"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_account_account_module_ts"],{

/***/ 58526:
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.page */ 27256);




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_0__.AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ 87942:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageModule": () => (/* binding */ AccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 58526);
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page */ 27256);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let AccountPageModule = class AccountPageModule {
};
AccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_1__.AccountPage]
    })
], AccountPageModule);



/***/ }),

/***/ 27256:
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./account.page.html */ 75888);
/* harmony import */ var _account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.page.scss */ 47404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/store.service */ 99652);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/utils.service */ 44516);













let AccountPage = class AccountPage {
    // appUrl:string = baseUrl;
    constructor(navCtrl, router, translate, api, util, ss, menu, platform, alertCtrl) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.translate = translate;
        this.api = api;
        this.util = util;
        this.ss = ss;
        this.menu = menu;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoplay: { delay: 1500 }
        };
        this.appUrl = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.baseUrl;
        this.profileSlides = [];
        this.isLoading = false;
        this.isSettingLoading = false;
        this.settings = {};
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.navCtrl.back();
        });
        this.translate.use((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_4__.getLang)());
        this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)();
    }
    ionViewDidEnter() {
        this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)();
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            //  https://shkalah.mjcoders.com/api/profile/profile_slider
            this.isLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.profileSliderApi);
            this.isLoading = false;
            if (response) {
                console.log(response);
                this.profileSlides = response;
            }
        });
    }
    ngOnInit() {
        this.getPageData();
        this.ss.currentUser.subscribe(res => {
            this.user = res;
        });
    }
    getSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // this.isSettingLoading = true;
            // let response = await this.api.getRequest(appSettingApi);
            // this.isSettingLoading = false;
            // if(response){
            //   this.settings = response;
            // }
            // console.log(response);
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    goToAddWorker() {
        if (this.user.type == "Individual") {
            if (this.user.ind_post_count > 0) {
                this.router.navigate(['add-worker']);
            }
            else {
                new _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController().create({
                    message: "You didn't subscribed? need subscription to post any ads",
                    header: "Subscription required!",
                    buttons: [{
                            text: "Cancel",
                            handler: () => {
                            }
                        }, {
                            text: "Subscribe",
                            handler: () => {
                                this.goToPayment();
                            }
                        }]
                }).then(res => res.present());
            }
            return;
        }
        if (this.user.is_subscribed) {
            this.router.navigate(['add-worker']);
        }
        else {
            new _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController().create({
                message: "You didn't subscribed? need subscription to post any ads",
                header: "Subscription required!",
                buttons: [{
                        text: "Cancel",
                        handler: () => {
                        }
                    }, {
                        text: "Subscribe",
                        handler: () => {
                            this.goToPayment();
                        }
                    }]
            }).then(res => res.present());
        }
    }
    goToPayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Select subscription.',
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
    getMyWorkers() {
        this.router.navigate(['my-ads']);
    }
    goToEditWorker() {
        this.router.navigate(['add-worker']);
    }
    goToEditProfile() {
        this.router.navigate(['edit-account']);
    }
    openMenu() {
        this.menu.open();
    }
};
AccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_6__.StoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController }
];
AccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-account',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_account_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_account_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountPage);



/***/ }),

/***/ 75888:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/account/account.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n\n<ion-content>\n  <div class=\"top-container\">\n    <ion-row class=\" ion-align-content-end\">\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        <img style=\"border: white solid;border-radius:100px; object-fit: contain;\" width=\"100px\" height=\"100px\"\n          src=\"{{appUrl + user.user_image}}\" onerror=\"this.src='assets/images/account_profile.png'\" alt=\"\">\n      </ion-col>\n      <ion-col size=\".5\">\n      </ion-col>\n      <ion-col size=\"7.5\" class=\"mt10\">\n        <p class=\"p0 m0 txt-complete\">{{\"Welcome\" | translate}}</p>\n        <h2 class=\"p0 m0 txt-name Poppins-SemiBold oneline-elipsize\">{{user.name}}</h2>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"account-content cblack\">\n    <ion-row class=\"ac-item\" (click)=\"goToEditProfile()\">\n      <ion-col size=\"2\">\n        <img src=\"assets/images/account-edit-user.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"9\">\n        <p class=\"m0 ac-item-title\">{{\"MY PROFILE\"|translate}}</p>\n        <p class=\"m0 ac-item-detail\">{{\"EDIT ALL PROFILE DETAILS\" | translate}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ac-item\" (click)=\"getMyWorkers()\">\n      <ion-col size=\"2\">\n        <img src=\"assets/images/account-edit-worker.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"9\">\n        <p class=\"m0 ac-item-title\">{{\"MY ADS\"|translate}}</p>\n        <p class=\"m0 ac-item-detail\">{{\"VIEW ALL PREVIOUS ADDED ADDS\"|translate}}</p>\n        <p class=\"m0 ac-item-desc\">{{\"(CAN EDIT - CAN DELETE)\"| translate}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ac-item\" (click)=\"goToAddWorker()\">\n      <ion-col size=\"2\">\n        <img src=\"assets/images/account-add-worker.png\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"9\">\n        <p class=\"m0 ac-item-title\">{{\"ADD NEW ADS\"|translate}}</p>\n        <p class=\"m0 ac-item-detail\">{{\"ADD NEW ADS (FOR INDIVIDUAL ACCOUNTCAN ADD ONLY ONE ADVERTISEMENT ANDEDIT IT, BUT FOR COMPANY)\" | translate}}</p>\n        <p class=\"m0 ac-item-desc\">{{\"(PAID ACCOUNT) CAN ADD NOT LIITED ADDS)\"|translate}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n<ion-footer class=\"cwhite bgwhite\">\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"slider\" *ngIf=\"!isLoading\">\n        <ion-slide *ngFor=\"let item of profileSlides\">\n          <ion-row>\n            <ion-col size=\"12\">\n              <img\n                src=\"{{appUrl + item.image}}\">\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"12\" class=\"ion-text-center\" *ngIf=\"isLoading\">\n      <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n    </ion-col>\n    <!-- <ion-col size=\"12\">\n      <ion-row>\n        <ion-col class=\"d-flex ion-align-items-center ion-justify-content-end\">\n          <img src=\"assets/icon/facebook.png\" alt=\"\">\n        </ion-col>\n        <ion-col class=\"d-flex ion-align-items-center ion-justify-content-start\">\n          <img src=\"assets/icon/mail.png\" alt=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-col> -->\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ 47404:
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".top-container {\n  background: #7F132A;\n  padding: 10px;\n}\n\n.account-content {\n  padding: 30px 30px 0px 30px;\n}\n\n.txt-complete {\n  color: #EEC626;\n}\n\n.txt-name {\n  color: white;\n}\n\n.ac-item {\n  border-bottom: #231F20 solid;\n  border-width: 1px;\n  padding-top: 10px;\n}\n\n.ac-item-title {\n  font-family: \"Poppins SemiBold\";\n  font-size: 16px;\n  color: #7F132A;\n}\n\n.ac-item-detail {\n  font-size: 12px;\n  color: #231F20;\n  padding-left: 20px;\n  font-family: \"Poppins SemiBold\";\n}\n\n.ac-item-desc {\n  font-size: 8px;\n  color: #231F20;\n  padding-left: 20px;\n  font-family: \"Poppins SemiBold\";\n}\n\n.slider {\n  height: 100px;\n  width: 80%;\n}\n\n.slider img {\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSwyQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFNSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQU1KOztBQUpBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFPSjs7QUFOSTtFQUNJLGlCQUFBO0FBUVIiLCJmaWxlIjoiYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOiAjN0YxMzJBO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uYWNjb3VudC1jb250ZW50e1xuICAgIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcbn1cbi50eHQtY29tcGxldGV7XG4gICAgY29sb3I6ICNFRUM2MjY7XG59XG4udHh0LW5hbWV7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmFjLWl0ZW17XG4gICAgYm9yZGVyLWJvdHRvbTogIzIzMUYyMCBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5hYy1pdGVtLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgU2VtaUJvbGRcIjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM3RjEzMkE7XG5cbn1cbi5hYy1pdGVtLWRldGFpbHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMyMzFGMjA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgU2VtaUJvbGRcIjtcblxufVxuLmFjLWl0ZW0tZGVzY3tcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogIzIzMUYyMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBTZW1pQm9sZFwiO1xufVxuLnNsaWRlcntcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaW1ne1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_account_account_module_ts.js.map