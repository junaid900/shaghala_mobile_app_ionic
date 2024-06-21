"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 52559:
/*!*********************************************!*\
  !*** ./src/app/store/user/user.selector.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatedUser": () => (/* binding */ StatedUser),
/* harmony export */   "selectUser": () => (/* binding */ selectUser)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

const StatedUser = (state) => (state.user);
const selectUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(StatedUser, (state) => {
    return state.user;
});


/***/ }),

/***/ 85257:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 43278);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 94265)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 28245)).then(m => m.HomePageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_worker_worker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../worker/worker.module */ 62557)).then(m => m.WorkerPageModule)
            },
            {
                path: 'tab4',
                data: { type: 'company' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_worker_worker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../worker/worker.module */ 62557)).then(m => m.WorkerPageModule)
                // loadChildren: () => import('../company-list/company-list.module').then(m => m.CompanyListPageModule)
            },
            {
                path: 'tab5',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_notification-list_notification-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../notification-list/notification-list.module */ 25250)).then(m => m.NotificationListPageModule)
            },
            {
                path: '',
                redirectTo: 'tabs/tab2',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab2',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 9483:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 85257);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 43278);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 43278:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 8711);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 68758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 89407);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/store.service */ 99652);
/* harmony import */ var _store_user_user_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/user/user.selector */ 52559);














let TabsPage = class TabsPage {
    constructor(store, router, api, storeService, alertCtrl, translate) {
        this.store = store;
        this.router = router;
        this.api = api;
        this.storeService = storeService;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        // storage:Storage;
        this.user = this.store.select(_store_user_user_selector__WEBPACK_IMPORTED_MODULE_7__.selectUser);
        this.subDialog = false;
        this.getData();
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.storeService.initStore();
            // this.showDialog();
        });
    }
    ionViewDidEnter() {
        let user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)();
        if (!user.type) {
            (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.generateLocalUser)();
        }
        if (user.type != 'local') {
            this.checkUser(user);
            this.setNotificationInterval();
        }
    }
    ionViewDidLeave() {
        // this.interval.cancel()
        if (this.interval)
            clearInterval(this.interval);
    }
    setNotificationInterval() {
        this.interval = setInterval(() => {
            console.log("here");
            if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)())
                if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().type != 'local')
                    this.startNotification();
        }, 5000);
    }
    ngOnInit() {
        this.storeService.currentUser.subscribe(user => {
            console.log("Store User", user);
            if (user.type == "Company") {
                if (user.is_subscribed) {
                    this.hideDialog();
                }
                else {
                    this.showDialog();
                }
            }
        });
    }
    checkUser(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log("checkUser", user);
            user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)();
            if (user.is_subscribed) {
                this.hideDialog();
            }
            var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getUserByIdApi + "/" + user.user_id);
            console.log('tabs');
            console.log(response);
            console.log("user_response", response);
            if (response) {
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.setUser)(response);
                this.storeService.changeUser(response);
                if (response.type == "Company") {
                    if (response.is_subscribed) {
                        this.hideDialog();
                    }
                    else {
                        this.showDialog();
                    }
                }
            }
            else {
                console.log("session expired");
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.logout)();
                (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.generateLocalUser)();
                this.router.navigate(['login']);
                this.hideDialog();
                this.storeService.changeUser({});
            }
        });
    }
    showDialog() {
        this.subDialog = true;
    }
    hideDialog() {
        this.subDialog = false;
    }
    goToPayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // async goToPayment(){
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
            // }
            // this.router.navigate(['payment']);
        });
    }
    startNotification() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getNotificationCount + "/" + (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id, "notification");
            // console.log("notify_response", response);
            if (response) {
                this.notifications = response.count;
            }
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_6__.StoreService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-tabs',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 8711:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tabs/tabs.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n  <div class=\"payment-overlay\" *ngIf=\"subDialog\">\n    <ion-row class=\"payment-overlay-row\">\n      <ion-col size=\"12\">\n        <h3 class=\"p0 m0\">Warning!</h3>\n      </ion-col>\n      <ion-col size=\"12\" class=\"pt0\">\n        <p class=\"p0 m0\">Subscribe to publish your ads.</p>\n      </ion-col>\n      <ion-col>\n        <ion-button size=\"small\" (click)=\"hideDialog()\">\n          Close\n        </ion-button>\n        <ion-button size=\"small\" (click)=\"goToPayment()\">\n          Subscribe\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- Tabs -->\n  <ion-tab-bar slot=\"bottom\" style=\"--background: #7F132A;height: 60px;\">\n\n    <ion-tab-button tab=\"tab2\">\n      <img style=\"color: white;\" src=\"assets/images/home.png\" alt=\"\" />\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab1\">\n      <img src=\"assets/images/favourite.png\" alt=\"\">\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <img src=\"assets/images/people_2.png\" style=\"height: 38px;\" alt=\"\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab4\">\n      <img src=\"assets/images/company.png\" style=\"height: 34px;\" alt=\"\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab5\">\n      <div>\n        <div class=\"notification-count\" *ngIf=\"notifications > 0\">{{notifications}}</div>\n        <img src=\"assets/images/notification.png\" style=\"height: 34px;\" alt=\"\">\n      </div>\n    </ion-tab-button>\n    <!-- <ion-tab-button tab=\"tab4\">\n      <img src=\"assets/images/menu_2.png\" alt=\"\">\n    </ion-tab-button> -->\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ 68758:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-tab-button img {\n  height: 30px;\n  color: #707070;\n  filter: brightness(0) invert(1);\n}\n\n.payment-overlay {\n  position: absolute;\n  width: 100%;\n}\n\n.payment-overlay-row {\n  margin-top: 50px;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-radius: 10px;\n  background: #c5193ec0;\n  color: white;\n}\n\n.notification-count {\n  width: 20px;\n  background-color: #fe0037;\n  border-radius: 100px;\n  padding-top: 2px;\n  color: white;\n  font-size: 10px;\n  height: 20px;\n  font-weight: bolder;\n  position: absolute;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNHO0VBQ0ssWUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQUFSOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJ1dHRvbiB7XG4gICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICBmaWx0ZXI6ICBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbiAgICAgICAgLy8gZmlsdGVyOiBkcm9wLXNoYWRvd1xuICAgIH1cbn0gXG4ucGF5bWVudC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG59XG4ucGF5bWVudC1vdmVybGF5LXJvd3tcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNjNTE5M2VjMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5ub3RpZmljYXRpb24tY291bnR7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlMDAzNztcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map