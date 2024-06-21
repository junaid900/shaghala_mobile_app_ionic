"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_my-ads_my-ads_module_ts"],{

/***/ 57989:
/*!*************************************************!*\
  !*** ./src/app/my-ads/my-ads-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAdsPageRoutingModule": () => (/* binding */ MyAdsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _my_ads_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-ads.page */ 28225);




const routes = [
    {
        path: '',
        component: _my_ads_page__WEBPACK_IMPORTED_MODULE_0__.MyAdsPage
    }
];
let MyAdsPageRoutingModule = class MyAdsPageRoutingModule {
};
MyAdsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyAdsPageRoutingModule);



/***/ }),

/***/ 16392:
/*!*****************************************!*\
  !*** ./src/app/my-ads/my-ads.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAdsPageModule": () => (/* binding */ MyAdsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _my_ads_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-ads-routing.module */ 57989);
/* harmony import */ var _my_ads_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-ads.page */ 28225);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/component.module */ 87721);









let MyAdsPageModule = class MyAdsPageModule {
};
MyAdsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _my_ads_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyAdsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
        ],
        declarations: [_my_ads_page__WEBPACK_IMPORTED_MODULE_1__.MyAdsPage]
    })
], MyAdsPageModule);



/***/ }),

/***/ 28225:
/*!***************************************!*\
  !*** ./src/app/my-ads/my-ads.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAdsPage": () => (/* binding */ MyAdsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_ads_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./my-ads.page.html */ 87117);
/* harmony import */ var _my_ads_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-ads.page.scss */ 55646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utils.service */ 44516);












let MyAdsPage = class MyAdsPage {
    constructor(router, navCtrl, route, api, util, translate, platform, alertCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.api = api;
        this.util = util;
        this.translate = translate;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
        this.list = [];
        this.appUrl = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.baseUrl;
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this.platform.backButton.subscribeWithPriority(10, () => {
                this.navCtrl.back();
            });
            this.getPageData();
        });
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let id = yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)();
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getWorkerByUserApi + '/' + id + '?lang=' + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)() + '&id=' + (yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)()));
            this.isLoading = false;
            console.log(response);
            if (response) {
                this.list = response;
            }
            else {
                this.util.showToast("No data found");
            }
        });
    }
    addToFav(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let id = yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)();
            this.util.showProgressDialog();
            let response = yield this.api.postRequest({
                worker_id: item.worker_id,
                reference: id
            }, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.addFavApi, true);
            this.util.hideProgressDialog();
            console.log(response);
            if (response) {
                item.fav = item.fav == 1 ? 0 : 1;
                // this.getPageData();
            }
        });
    }
    ngOnInit() {
        this.getPageData();
    }
    goBack() {
        this.navCtrl.back();
    }
    goToWorkerDetail(item) {
        let navExtras = {
            queryParams: { worker: JSON.stringify(item) }
        };
        new _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController().create({
            buttons: [{
                    handler: () => {
                        this.router.navigate(['worker-detail'], navExtras);
                    },
                    text: "View",
                    role: 'view'
                }, {
                    handler: () => {
                        // this.util.showToast("Comming soon");
                        this.goToEditWorker(item);
                    },
                    text: "Edit",
                }, {
                    handler: () => {
                        this.deleteWorker(item);
                        // this.util.showToast("Comming soon");
                    },
                    text: "Delete",
                }, {
                    handler: () => {
                        // this.util.showToast("Comming soon");
                    },
                    text: "Cancel",
                    role: "cancel"
                }],
        }).then(res => {
            res.present();
        });
    }
    deleteWorker(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.alertCtrl.create({
                header: "Warning!",
                message: "Are you sure?",
                buttons: [{
                        text: "OK",
                        role: "OK",
                        handler: () => {
                            this.delete(item);
                        }
                    }, {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => {
                        }
                    }]
            }).then(res => {
                res.present();
            });
        });
    }
    delete(worker) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // let id = await getUserId();
            this.util.showProgressDialog("Deleting worker");
            let response = yield this.api.postRequest({
                worker_id: worker.worker_id,
            }, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.deleteWorkerApi + "/" + worker.worker_id, true);
            this.util.hideProgressDialog();
            if (response) {
                this.getPageData();
            }
        });
    }
    goToEditWorker(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(item);
            let navExtras = {
                queryParams: {
                    worker: JSON.stringify(item)
                }
            };
            this.router.navigate(['edit-worker'], navExtras);
        });
    }
};
MyAdsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
MyAdsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-my-ads',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_my_ads_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_ads_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyAdsPage);



/***/ }),

/***/ 87117:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/my-ads/my-ads.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <ion-title>\n      {{\"MY Ads\" | translate}}\n    </ion-title>\n  </ion-col>\n  <!-- <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <ion-icon name=\"filter\" routerLink=\"/advance-filter\"></ion-icon>\n  </ion-col> -->\n</ion-row>\n\n<ion-content>\n  <app-empty-layout *ngIf=\"!isLoading && list.length < 1\"></app-empty-layout>\n  <app-loading *ngIf=\"isLoading\" ></app-loading>\n  <div>\n    <ion-row class=\"mt10 ion-justify-content-center\">\n      <ion-col size=\"5.6\" *ngFor=\"let item of list\">\n        <div class=\"emp-item cblack  d-flex flex-direction-column\">\n          <div class=\"fav-icon\">\n            <ion-label class=\"status-label\" [ngStyle]='item.admin_status == \"Active\"?{\"background-color\":\"green\"}:{\"background-color\":\"red\"}'>{{item.admin_status == \"Inactive\"?\"Pending\":item.admin_status == 'Active'?\"Live\":\"Rejected\"}}</ion-label>\n          </div>\n          <!-- <ion-icon name=\"heart\" class=\"fav-icon\"></ion-icon> -->\n          <!-- <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n            width=\"30px\" alt=\"\">\n          <img *ngIf=\"item.fav > 0\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\"\n            width=\"30px\" alt=\"\"> -->\n            \n          <img (click)=\"goToWorkerDetail(item)\" src=\"{{appUrl + item.image}}\" onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\" class=\"worker-img\">\n          <ion-row class=\"info-container\" (click)=\"goToWorkerDetail(item)\">\n            <ion-col>\n              <h6 class=\"MyriadPro-Bold cblack m0 ion-text-center w100\">{{item.lang_name}}</h6>\n              <div class=\"emp-info\">\n                <ion-label class=\"MyriadPro-Regular\">{{item.en_religion}}</ion-label>\n                <p class=\"m0 p0 MyriadPro-Regular\">{{item.place_of_living}} | {{item.age}} {{\"years old\" | translate}}\n                </p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n      \n    </ion-row>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 55646:
/*!*****************************************!*\
  !*** ./src/app/my-ads/my-ads.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: white;\n}\n\n.header {\n  background: #7f132a;\n  color: white;\n}\n\n.top-container {\n  background-color: #7f132a;\n  height: 50px;\n}\n\n.home-page {\n  position: relative;\n  top: -50px;\n}\n\n.emp-item img {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.info-container {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #E6E7E8;\n}\n\n.emp-info {\n  color: #58595B;\n  font-size: 12px;\n}\n\n.fav-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding-top: 4px;\n  padding-right: 14px;\n  color: white;\n  font-size: 20px;\n}\n\n.worker-img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n}\n\n.status-label {\n  font-size: 10px;\n  padding: 0px 4px 0px 4px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUlKOztBQURJO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtBQUlSOztBQUFBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFHQSxZQUFBO0VBRUEsZUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFHSiIsImZpbGUiOiJteS1hZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjN2YxMzJhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50b3AtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2YxMzJhO1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5ob21lLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC01MHB4O1xufVxuLmVtcC1pdGVte1xuICAgIGltZ3tcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgfVxufVxuXG4uaW5mby1jb250YWluZXJ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFN0U4O1xufVxuLmVtcC1pbmZve1xuICAgIGNvbG9yOiAjNTg1OTVCO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mYXYtaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA1cHggMnB4IHJnYigwIDAgMCAvIDAuNCkpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi53b3JrZXItaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2JjYmVjMDtcbn1cbi5zdGF0dXMtbGFiZWx7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDBweCA0cHggMHB4IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_my-ads_my-ads_module_ts.js.map