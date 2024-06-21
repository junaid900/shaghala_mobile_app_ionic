"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_favourit_favourit_module_ts"],{

/***/ 93918:
/*!*****************************************************!*\
  !*** ./src/app/favourit/favourit-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritPageRoutingModule": () => (/* binding */ FavouritPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _favourit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourit.page */ 14661);




const routes = [
    {
        path: '',
        component: _favourit_page__WEBPACK_IMPORTED_MODULE_0__.FavouritPage
    }
];
let FavouritPageRoutingModule = class FavouritPageRoutingModule {
};
FavouritPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavouritPageRoutingModule);



/***/ }),

/***/ 21937:
/*!*********************************************!*\
  !*** ./src/app/favourit/favourit.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritPageModule": () => (/* binding */ FavouritPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _favourit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourit-routing.module */ 93918);
/* harmony import */ var _favourit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourit.page */ 14661);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/component.module */ 87721);









let FavouritPageModule = class FavouritPageModule {
};
FavouritPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _favourit_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouritPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
        ],
        declarations: [
            _favourit_page__WEBPACK_IMPORTED_MODULE_1__.FavouritPage,
        ],
    })
], FavouritPageModule);



/***/ }),

/***/ 14661:
/*!*******************************************!*\
  !*** ./src/app/favourit/favourit.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritPage": () => (/* binding */ FavouritPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./favourit.page.html */ 96419);
/* harmony import */ var _favourit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourit.page.scss */ 18331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utils.service */ 44516);












let FavouritPage = class FavouritPage {
    constructor(router, navCtrl, route, api, util, translate, menu) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.api = api;
        this.util = util;
        this.translate = translate;
        this.menu = menu;
        this.isLoading = false;
        this.list = [];
        this.appUrl = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.baseUrl;
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params.type == 'worker') {
                this.getIndWorkerData();
            }
            else {
                this.getCompanyWorkerData();
            }
        });
    }
    getCompanyWorkerData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let id = yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)();
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.favCompanyApi + "/" + id + '?lang=' + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)());
            this.isLoading = false;
            if (response) {
                this.list = response;
            }
            else {
                this.util.showToast("No data found");
            }
        });
    }
    getIndWorkerData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let id = yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)();
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.favIndApi + "/" + id + '?lang=' + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)());
            this.isLoading = false;
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
                // item.fav = item.fav == 1? 0 :1;
                this.getCompanyWorkerData();
            }
        });
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    goToWorkerDetail(item) {
        let navExtras = {
            queryParams: { worker: JSON.stringify(item) }
        };
        this.router.navigate(['worker-detail'], navExtras);
    }
};
FavouritPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController }
];
FavouritPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-favourit',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_favourit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_favourit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FavouritPage);



/***/ }),

/***/ 96419:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/favourit/favourit.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <ion-title>\n      {{\"Workers\" | translate}}\n    </ion-title>\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <ion-icon name=\"filter\" routerLink=\"/advance-filter\"></ion-icon> -->\n  </ion-col>\n</ion-row>\n\n<ion-content>\n  <app-empty-layout *ngIf=\"!isLoading && list.length < 1\"></app-empty-layout>\n  <app-loading *ngIf=\"isLoading\" ></app-loading>\n\n  <div>\n    <ion-row class=\"mt10 ion-justify-content-center\">\n      <ion-col size=\"5.6\" *ngFor=\"let item of list\">\n        <div class=\"emp-item cblack  d-flex flex-direction-column\">\n          <!-- <ion-icon name=\"heart\" class=\"fav-icon\"></ion-icon> -->\n          <!-- <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n            width=\"30px\" alt=\"\"> -->\n          <img (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\" width=\"30px\" alt=\"\">\n          <img (click)=\"goToWorkerDetail(item)\" src=\"{{appUrl + item.image}}\" alt=\"\" class=\"worker-img\">\n          <ion-row class=\"info-container\" (click)=\"goToWorkerDetail(item)\">\n            <ion-col>\n              <h6 class=\"MyriadPro-Bold cblack m0 ion-text-center w100\">{{item.lang_name}}</h6>\n              <div class=\"emp-info\">\n                <ion-label class=\"MyriadPro-Regular\">{{item.en_religion}}</ion-label>\n                <p class=\"m0 p0 MyriadPro-Regular\">{{item.place_of_living}} | {{item.age}} {{\"years old\" | translate}}\n                </p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 18331:
/*!*********************************************!*\
  !*** ./src/app/favourit/favourit.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: white;\n}\n\n.header {\n  background: #7f132a;\n  color: white;\n}\n\n.top-container {\n  background-color: #7f132a;\n  height: 50px;\n}\n\n.home-page {\n  position: relative;\n  top: -50px;\n}\n\n.emp-item img {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.info-container {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #E6E7E8;\n}\n\n.emp-info {\n  color: #58595B;\n  font-size: 12px;\n}\n\n.fav-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding-top: 10px;\n  padding-right: 10px;\n  color: white;\n  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));\n  font-size: 20px;\n}\n\n.worker-img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBSUo7O0FBREk7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBSVI7O0FBQUE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUdBLFlBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJSiIsImZpbGUiOiJmYXZvdXJpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM3ZjEzMmE7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnRvcC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZjEzMmE7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLmhvbWUtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTUwcHg7XG59XG4uZW1wLWl0ZW17XG4gICAgaW1ne1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICB9XG59XG5cbi5pbmZvLWNvbnRhaW5lcntcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU3RTg7XG59XG4uZW1wLWluZm97XG4gICAgY29sb3I6ICM1ODU5NUI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZhdi1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA1cHggMnB4IHJnYigwIDAgMCAvIDAuNCkpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi53b3JrZXItaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2JjYmVjMDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_favourit_favourit_module_ts.js.map