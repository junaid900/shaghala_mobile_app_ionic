"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_menu_menu_module_ts"],{

/***/ 51093:
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageRoutingModule": () => (/* binding */ MenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_user_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user/auth.guard */ 17501);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 40348);





const routes = [
    {
        path: 'menu',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage,
        children: [{
                path: 'first',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tabs/tabs.module */ 9483)).then(e => e.TabsPageModule),
                canActivate: [_services_user_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
            }],
    },
    {
        path: '',
        redirectTo: 'menu/first',
        pathMatch: 'full',
        canActivate: [_services_user_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
    // !getUser().type ?
    //   {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    //   }
    //   : getUser().type == '' ? {
    //     path: '',
    //     redirectTo: 'menu/first',
    //     pathMatch: 'full'
    //   } : {
    //     path: '',
    //     redirectTo: 'edit-account',
    //     pathMatch: 'full'
    //   }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ 8462:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPageModule": () => (/* binding */ MenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 51093);
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page */ 40348);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let MenuPageModule = class MenuPageModule {
};
MenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_1__.MenuPage]
    })
], MenuPageModule);



/***/ }),

/***/ 40348:
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./menu.page.html */ 16271);
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.page.scss */ 70743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_global_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/global.provider */ 52582);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/store.service */ 99652);
/* harmony import */ var _store_user_user_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/user/user.action */ 96481);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/share */ 65114);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/utils.service */ 44516);


















let MenuPage = class MenuPage {
    constructor(router, store, navCtrl, translate, globalProvider, platform, ss, menu, api, util) {
        this.router = router;
        this.store = store;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.globalProvider = globalProvider;
        this.platform = platform;
        this.ss = ss;
        this.menu = menu;
        this.api = api;
        this.util = util;
        this.appUrl = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_2__.baseUrl;
        this.checkLogin = false;
        this.isSettingLoading = false;
        this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_6__.getUser)();
    }
    ngOnInit() {
        this.ss.currentUser.subscribe(user => {
            this.user = user;
        });
    }
    checkAccount() {
        // console.log("here");
        // if(getUser().admin_status){
        //   console.log("here4");
        //   if(getUser().admin_status != "Active"){
        //     console.log("here5");
        //     var navParams =  {
        //       queryParams:{
        //         from: "menu",
        //       }
        //     }
        //     this.navCtrl.navigateBack(['edit-account'],navParams);
        //   }
        // }  
    }
    ionViewDidEnter() {
        this.checkAccount();
        this.getSettings();
        console.log("menu enter");
        // this.user = getUser();
        this.translate.use((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)());
        if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_6__.isLogin)()) {
            this.platform.resume.subscribe(() => {
                console.log("here");
            });
            this.checkLogin = true;
            this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_6__.getUser)();
        }
        else {
        }
    }
    getSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.isSettingLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_2__.appSettingApi);
            this.isSettingLoading = false;
            if (response) {
                this.settings = response;
            }
            console.log(response);
        });
    }
    goToProfile() {
        this.router.navigate(['account']);
        this.menu.close();
    }
    goToSetting() {
        this.router.navigate(['setting']);
        this.menu.close();
    }
    goToComplainCenter() {
        this.router.navigate(['complain-center']);
        this.menu.close();
    }
    goToAboutUs() {
        this.router.navigate(['about-us']);
    }
    goToReservations() {
        this.router.navigate(['reservation']);
        this.menu.close();
    }
    logout() {
        new _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController().create({
            header: "Warning!",
            message: "Do you want to logout?",
            buttons: [{
                    text: "No",
                    handler: () => {
                    }
                }, {
                    text: "Yes",
                    handler: () => {
                        this.store.dispatch((0,_store_user_user_action__WEBPACK_IMPORTED_MODULE_8__.removeUser)());
                        (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_6__.logout)();
                        this.ss.changeUser({});
                        this.navCtrl.navigateForward('/login');
                        // console.log(generateLocalUser());
                        // setUser(generateLocalUser());
                        (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_3__.generateLocalUser)();
                        this.ionViewDidEnter();
                    }
                }]
        }).then(res => res.present());
    }
    goToLogin() {
        this.router.navigate(['login']);
    }
    shareApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.settings.share_text) {
                this.util.showToast("Cannot get url to share try next time");
                this.getSettings();
                return;
            }
            let url = '';
            if (this.platform.is('android')) {
                url = this.settings.android_app_url;
            }
            else if (this.platform.is('ios')) {
                url = this.settings.ios_app_url;
            }
            console.log(url);
            if (url.length < 1) {
                this.util.showToast("Cannot get url");
                return;
            }
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_9__.Share.share({
                title: 'Share Shkalah App',
                text: this.settings.share_text,
                url: url,
                dialogTitle: 'Share with people',
            });
        });
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService },
    { type: _services_global_provider__WEBPACK_IMPORTED_MODULE_4__.GlobalProvider },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_7__.StoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.MenuController },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_10__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_11__.UtilsService }
];
MenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-menu',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuPage);



/***/ }),

/***/ 17501:
/*!*********************************************!*\
  !*** ./src/app/services/user/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _session_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session.helper */ 13086);




let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        console.log(route, state);
        console.log("check admin status");
        console.log((0,_session_helper__WEBPACK_IMPORTED_MODULE_0__.getUser)());
        if ((0,_session_helper__WEBPACK_IMPORTED_MODULE_0__.getUser)().is_phone_verified) {
            console.log("status received");
            if ((0,_session_helper__WEBPACK_IMPORTED_MODULE_0__.getUser)().is_phone_verified != "Yes") {
                console.log("status not verified");
                this.router.navigate(['edit-account'], { queryParams: { message: "Please fill out your information.\n Phone verification Required*" } });
            }
            else {
                console.log("status verified");
                //     if (getUser().type == 'Company') {
                //       if (getUser().is_subscribed) {
                //         return true;
                //       } else {
                //         this.router.navigate(['payment'], { queryParams: { message: "Subscription required to start" } });
                //       }
                //     } else {
                //       return true;
                //     }
                //   }
                // } else {
                console.log('next');
                return true;
                // }
            }
        }
        else {
            return true;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 16271:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/menu/menu.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-split-pane contentId=\"main\">\n  <ion-menu contentId=\"main\">\n    <!-- <ion-header>\n    </ion-header> -->\n    <ion-row class=\"header\">\n\n    </ion-row>\n    <ion-content>\n      <div class=\"ion-text-center mt10 pt10\">\n        <img style=\"border: rgb(0, 0, 0) solid;border-radius:100px; object-fit: contain;\" width=\"100px\" height=\"100px\"\n          src=\"{{appUrl + user.user_image}}\" onerror=\"this.src='assets/images/account_profile.png'\" alt=\"\">\n        <h5 class=\"m0 p0 cblack\">{{user.name?user.name:\"Shkalah User\"}}</h5>\n      </div>\n      <ion-list>\n\n        <ion-item button *ngIf=\"user.type != 'local' && checkLogin\" (click)=\"goToProfile()\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>\n            {{\"Profile\" | translate}}\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"goToSetting()\">\n          <ion-icon name=\"cog\"></ion-icon>\n\n          <ion-label>\n            {{\"Setting\" | translate}}\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"goToComplainCenter()\">\n          <ion-icon name=\"briefcase\"></ion-icon>\n\n          <ion-label>\n            {{\"Complaints and Suggestions\" | translate}}\n          </ion-label>\n        </ion-item>\n\n        <ion-item button (click)=\"goToReservations()\" *ngIf=\"user.type == 'Individual'\">\n          <ion-icon name=\"stopwatch\"></ion-icon>\n\n          <ion-label>\n            {{\"My Reservations\" | translate}}\n          </ion-label>\n        </ion-item>\n\n        <ion-item button *ngIf=\"user.type != 'local' && checkLogin\" (click)=\"logout()\">\n          <ion-icon name=\"log-out\"></ion-icon>\n\n          <ion-label>\n            {{\"Logout\" | translate}}\n          </ion-label>\n        </ion-item>\n        <ion-item button *ngIf=\"user.type == 'local' || !checkLogin\" (click)=\"goToLogin()\">\n          <ion-icon name=\"log-in\"></ion-icon>\n\n          <ion-label>\n            {{\"Login\" | translate}}\n          </ion-label>\n        </ion-item>\n        <ion-item button (click)=\"shareApp()\">\n          <ion-icon name=\"share-social\"></ion-icon>\n          <ion-label>\n            {{\"ShareApp\" | translate}}\n          </ion-label>\n        </ion-item>\n\n        <ion-item  class=\"mb10\" button (click)=\"goToAboutUs()\">\n          <ion-icon name=\"information-circle\"></ion-icon>\n\n          <ion-label>\n            {{\"About Us\" | translate}}\n          </ion-label>\n        </ion-item>\n\n      </ion-list>\n      <div class=\"w100 ion-text-center mt10\">\n        <img style=\"width: 200px;\" src=\"assets/images/app_login_logo.png\" />\n      </div>\n\n      <!-- <ion-list>\n        <ion-menu-toggle autoHide=\"false\" routerDirection=\"root\">\n\n        </ion-menu-toggle>\n      </ion-list>\n      <ion-item>\n        Logout\n      </ion-item> -->\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\" main></ion-router-outlet>\n\n</ion-split-pane>");

/***/ }),

/***/ 70743:
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-list {\n  background: #ffffff;\n}\nion-list ion-item {\n  --background:#ffffff;\n  color: #2c2c2c;\n}\nion-list ion-item > button:hover {\n  --background:#ffffff;\n  color: #2c2c2c;\n}\nion-icon {\n  font-size: 18px;\n  margin-right: 10px;\n  color: #2c2c2c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjtBQUFJO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0FBRVI7QUFBSTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtBQUVSO0FBSUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBREoiLCJmaWxlIjoibWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAgICAgICBjb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xuICAgIH1cbiAgICBpb24taXRlbSA+IGJ1dHRvbjpob3ZlcntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAgIGNvbG9yOiByZ2IoNDQsIDQ0LCA0NCk7XG4gICAgfVxufVxuLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MTYpO1xuLy8gfVxuaW9uLWljb257XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjb2xvcjogcmdiKDQ0LCA0NCwgNDQpO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_menu_menu_module_ts.js.map