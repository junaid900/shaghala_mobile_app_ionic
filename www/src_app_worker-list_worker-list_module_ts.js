"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_worker-list_worker-list_module_ts"],{

/***/ 54214:
/*!***********************************************************!*\
  !*** ./src/app/worker-list/worker-list-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerListPageRoutingModule": () => (/* binding */ WorkerListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _worker_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-list.page */ 41996);




const routes = [
    {
        path: '',
        component: _worker_list_page__WEBPACK_IMPORTED_MODULE_0__.WorkerListPage
    }
];
let WorkerListPageRoutingModule = class WorkerListPageRoutingModule {
};
WorkerListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkerListPageRoutingModule);



/***/ }),

/***/ 92862:
/*!***************************************************!*\
  !*** ./src/app/worker-list/worker-list.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerListPageModule": () => (/* binding */ WorkerListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _worker_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-list-routing.module */ 54214);
/* harmony import */ var _worker_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-list.page */ 41996);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/component.module */ 87721);









let WorkerListPageModule = class WorkerListPageModule {
};
WorkerListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _worker_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkerListPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_worker_list_page__WEBPACK_IMPORTED_MODULE_1__.WorkerListPage]
    })
], WorkerListPageModule);



/***/ }),

/***/ 41996:
/*!*************************************************!*\
  !*** ./src/app/worker-list/worker-list.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerListPage": () => (/* binding */ WorkerListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_worker_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./worker-list.page.html */ 75323);
/* harmony import */ var _worker_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-list.page.scss */ 881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utils.service */ 44516);












let WorkerListPage = class WorkerListPage {
    constructor(router, navCtrl, route, api, util, platform, translate) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.api = api;
        this.util = util;
        this.platform = platform;
        this.translate = translate;
        this.isLoading = true;
        this.list = [];
        this.appUrl = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.baseUrl;
        this.isQuery = false;
        this.showType = 'grid';
        this.selectedType = 'indiv';
        this.showAcType = true;
        this.title = "Workers";
        // this.getPageData();
        // this.platform.backButton.subscribeWithPriority(10,()=>{
        //   this.router.navigate(['menu/first']);
        // });
        this.title = 'Workers';
        this.getFilterPayload();
    }
    changeType(type) {
        this.selectedType = type;
        this.getFilterPayload('type');
    }
    getPageData(ac_type, advs_type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let id = yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)();
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getWorkerByAdvType + '/' + advs_type + '/' + ac_type + '?lang=' + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)() + '&id=' + (yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)()));
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
    }
    getFilterPayload(from = '') {
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params.type == "advs_type") {
                this.getPageData(params.ac_type, params.advs_type);
            }
            if (params.type == "query") {
                let payload = {
                    query: params.query
                };
                this.getFilter(payload);
                return;
            }
            if (params.type == "adv-filter") {
                let payload = JSON.parse(params.payload);
                this.getFilter(payload);
                return;
            }
            if (params.type == 'ac_type') {
                // CHECK TYPE (FROM WHERE THIS PAGE IS COMING); 
                if (params.data_type) {
                    let localType = this.selectedType;
                    // this.selectedType = 'indiv';
                    this.showAcType = true;
                    if (params.data_type == 'comp') {
                        this.selectedType = 'comp';
                        this.showAcType = false;
                    }
                    else if (params.data_type == 'both') {
                        this.selectedType = 'indiv';
                        this.showAcType = true;
                    }
                    else if (params.data_type == 'indiv') {
                        this.selectedType = 'comp';
                        this.showAcType = false;
                    }
                    if (from == 'type') {
                        this.selectedType = localType;
                    }
                    if (params.title) {
                        if (params.title.length > 0) {
                            this.title = params.title;
                        }
                        else {
                            this.title = "Workers";
                        }
                    }
                }
                let payload = {
                    ac_type: params.ac_type
                };
                this.getFilter(payload);
                return;
            }
        });
    }
    ionViewDidEnter() {
        console.log("view enter");
    }
    getFilter(filter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            console.log(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getFilterWorkerApi
                + '?lang=' + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)() + '&id=' + (yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)()), filter);
            let response = yield this.api.postRequest(Object.assign({ type: this.selectedType }, filter), _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getFilterWorkerApi
                + '?lang=' + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)() + '&id=' + (yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)()));
            this.isLoading = false;
            console.log(response);
            if (response) {
                this.list = response;
            }
            else {
                this.list = [];
                // this.util.showToast("No data found");
            }
        });
    }
    goBack() {
        this.navCtrl.back();
        // this.router.navigate(['menu/first']);
    }
    goToWorkerDetail(item) {
        let navExtras = {
            queryParams: { worker: JSON.stringify(item) }
        };
        this.router.navigate(['worker-detail'], navExtras);
    }
    goToWorkerList(ad_type, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let navExtras = {
                queryParams: {
                    type: "advs_type",
                    advs_type: ad_type,
                    ac_type: type
                }
            };
            this.router.navigate(['worker-list'], navExtras);
        });
    }
    changeShowType() {
        if (this.showType == 'grid') {
            this.showType = 'list';
        }
        else {
            this.showType = 'grid';
        }
    }
};
WorkerListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService }
];
WorkerListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-worker-list',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_worker_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_worker_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WorkerListPage);



/***/ }),

/***/ 75323:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/worker-list/worker-list.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n  </ion-col>\n  <ion-col size=\"9\" class=\"m-auto\">\n    <ion-title>\n      {{title | translate}}\n    </ion-title>\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <ion-icon (click)=\"changeShowType()\" style=\"font-size: 20px;\" *ngIf=\"showType == 'list'\" name=\"grid\"></ion-icon>\n    <ion-icon (click)=\"changeShowType()\" style=\"font-size: 20px;\" *ngIf=\"showType == 'grid'\" name=\"menu\"></ion-icon>\n    <!-- <ion-icon name=\"filter\" routerLink=\"/advance-filter\"></ion-icon> -->\n  </ion-col>\n</ion-row>\n\n<ion-content>\n\n  <div>\n    <!-- <ion-row class=\"mt10\">\n      <ion-col size=\"6\" class=\"d-flex justify-content-center p0 m0\">\n        <ion-accordion-group class=\"ac-group\">\n          <ion-accordion value=\"sponsor\" class=\"ion-sponsor-accordion\">\n            <ion-item slot=\"header\" class=\"accordion-header text-center\">\n              <ion-label class=\"sonsorship-accord-label\">{{\"ADMISSION\"|translate}}</ion-label>\n            </ion-item>\n            <ion-list class=\"according-list p0\" slot=\"content\">\n              <ion-item (click)=\"goToWorkerList('admission','indvidual')\" class=\"ion-text-center\">\n                <ion-label>{{\"INDIVIDUAL ADS\" | translate}} </ion-label>\n              </ion-item>\n              <ion-item (click)=\"goToWorkerList('admission','company')\" class=\"ion-text-center\">\n                <ion-label>{{\"COMPANIES ADS\"|translate}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-accordion>\n        </ion-accordion-group>\n      </ion-col>\n      <ion-col size=\"6\" class=\"d-flex justify-content-center p0 m0\">\n        <ion-accordion-group class=\"ac-group\">\n          <ion-accordion value=\"sponsor\" class=\"ion-sponsor-accordion\">\n            <ion-item slot=\"header\" class=\"accordion-header text-center\">\n              <ion-label class=\"sonsorship-accord-label\">{{\"SPONSORSHIP\"|translate}}</ion-label>\n            </ion-item>\n            <ion-list class=\"according-list p0\" slot=\"content\">\n              <ion-item (click)=\"goToWorkerList('sponsored','indvidual')\" class=\"ion-text-center\">\n                <ion-label>{{\"INDIVIDUAL ADS\" | translate}} </ion-label>\n              </ion-item>\n              <ion-item (click)=\"goToWorkerList('sponsored','company')\" class=\"ion-text-center\">\n                <ion-label>{{\"COMPANIES ADS\"|translate}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-accordion>\n        </ion-accordion-group>\n      </ion-col>\n    </ion-row> -->\n    <ion-row *ngIf=\"showAcType\">\n      <ion-col class=\"d-flex justify-content-center\">\n        <div class=\"account-type-container\">\n          <div (click)=\"changeType('indiv')\"\n            [ngClass]=\"selectedType == 'indiv'?'account-item-container-active':'account-item-container'\"\n            class=\"touch-opacity\">\n            <ion-label class=\"individual-label myriadPro-semiboldIt\">\n              {{\"INDIVIDUAL ADS\"|translate}}\n            </ion-label>\n          </div>\n          <div (click)=\"changeType('comp')\"\n            [ngClass]=\"selectedType == 'comp'?'account-item-container-active':'account-item-container'\"\n            class=\"touch-opacity\">\n            <ion-label class=\"myriadPro-semiboldIt\">\n              {{\"COMPANIES ADS\" |translate}}\n            </ion-label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <app-empty-layout style=\"width: 100%;\" *ngIf=\"!isLoading && list.length < 1\"></app-empty-layout>\n    <app-loading *ngIf=\"isLoading\"></app-loading>\n    <ion-row class=\"mt10 ion-justify-content-center\" *ngIf=\"showType == 'grid'\">\n      <ion-col size=\"5.6\" *ngFor=\"let item of list\">\n        <div class=\"emp-item cblack  d-flex flex-direction-column\">\n          <!-- <ion-icon name=\"heart\" class=\"fav-icon\"></ion-icon> -->\n          <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n            width=\"30px\" alt=\"\">\n          <img *ngIf=\"item.fav > 0\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\"\n            width=\"30px\" alt=\"\">\n\n          <img (click)=\"goToWorkerDetail(item)\" src=\"{{appUrl + item.image}}\"\n            onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\" class=\"worker-img\">\n          <ion-row class=\"info-container\" (click)=\"goToWorkerDetail(item)\">\n            <ion-col>\n              <h6 class=\"MyriadPro-Bold cblack m0 ion-text-center w100\">{{item.lang_name}}</h6>\n              <div class=\"emp-info\">\n                <ion-label class=\"MyriadPro-Regular\">{{item.en_religion}}</ion-label>\n                <p class=\"m0 p0 MyriadPro-Regular\">{{item.place_of_living}} | {{item.age}} {{\"years old\" | translate}}\n                </p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"mt10 ion-justify-content-center\" *ngIf=\"showType == 'list'\">\n      <ion-col size=\"12\" *ngFor=\"let item of list\">\n        <div class=\"emp-item cblack  d-flex flex-direction-column\">\n          <!-- <ion-icon name=\"heart\" class=\"fav-icon\"></ion-icon> -->\n          <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n            width=\"30px\" alt=\"\">\n          <img *ngIf=\"item.fav > 0\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\"\n            width=\"30px\" alt=\"\">\n\n          <ion-row class=\"info-container list touch-opacity\">\n\n            <ion-col size=\"4\">\n              <img (click)=\"goToWorkerDetail(item)\" src=\"{{appUrl + item.image}}\"\n                onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\" class=\"worker-img-list\">\n            </ion-col>\n            <ion-col size=\"8\">\n              <h6 class=\"MyriadPro-Bold cblack m0 pt10 w100\">{{item.lang_name}}</h6>\n              <div class=\"emp-info\">\n                <ion-label class=\"MyriadPro-Regular\">{{\"Religion\" | translate}} : {{item.en_religion}}</ion-label>\n                <p class=\"m0 p0 MyriadPro-Regular\">{{\"Place of living\"}} : {{item.place_of_living}}\n                </p>\n                <p class=\"m0 p0 MyriadPro-Regular\">{{\"Age\"}} : {{item.age}} {{\"years old\" | translate}}\n                </p>\n                <!-- {{item.age}} {{\"years old\" | translate}} -->\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 881:
/*!***************************************************!*\
  !*** ./src/app/worker-list/worker-list.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: white;\n}\n\n.header {\n  background: #7f132a;\n  color: white;\n}\n\n.top-container {\n  background-color: #7f132a;\n  height: 50px;\n}\n\n.home-page {\n  position: relative;\n  top: -50px;\n}\n\n.emp-item img {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.info-container {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #E6E7E8;\n}\n\n.info-container .list {\n  border-radius: 10px;\n}\n\n.emp-info {\n  color: #58595B;\n  font-size: 12px;\n}\n\n.fav-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding-top: 10px;\n  padding-right: 10px;\n  z-index: 999;\n  color: white;\n  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));\n  font-size: 20px;\n}\n\n.worker-img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n}\n\n.worker-img-list {\n  width: 100%;\n  height: 100px;\n  margin-top: 4px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n\n.ion-sponsor-accordion :first {\n  box-shadow: #5b5b5b 2px 2px;\n}\n\n.accordion-header {\n  --background: #7f132a;\n  --border-radius: 30px;\n  --min-height: 30px;\n  font-size: 14px;\n  box-shadow: 2px 3px 5px #5b5b5b;\n  color: white;\n}\n\n.accordion-header ion-icon {\n  color: white;\n}\n\n.ac-group {\n  width: 90%;\n}\n\n.according-list {\n  background: #E6E7E8;\n}\n\n.according-list ion-item {\n  --background: #E6E7E8;\n  color: #808285;\n  --border-color: white;\n  --min-height: 36px;\n  font-size: 14px;\n}\n\n.ion-sponsor-accordion {\n  border-radius: 28px !important;\n  background-color: #e6e7e8;\n  box-shadow: 2px 3px 5px #5b5b5b;\n}\n\n.account-type-container {\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  width: 70%;\n  background: #ffffff;\n  border-radius: 30px;\n  margin-top: 10px;\n  box-shadow: 2px 2px;\n}\n\n.account-type-container .account-item-container {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.account-type-container .account-item-container-active {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 14px;\n  text-align: center;\n  background-color: #72BE52;\n  color: white;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBSUo7O0FBREk7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBSVI7O0FBQUE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUFHSjs7QUFGSTtFQUNJLG1CQUFBO0FBSVI7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBR0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksMkJBQUE7QUFJSjs7QUFEQTtFQUNJLHFCQUFBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFJTDs7QUFISztFQUNJLFlBQUE7QUFLVDs7QUFGQTtFQUNJLFVBQUE7QUFLSjs7QUFIQTtFQUVJLG1CQUFBO0FBS0o7O0FBSkk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU1SOztBQUZBO0VBQ0ksOEJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FBS0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBSEk7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFLUjs7QUFISTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBS1IiLCJmaWxlIjoid29ya2VyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjN2YxMzJhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50b3AtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2YxMzJhO1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5ob21lLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC01MHB4O1xufVxuLmVtcC1pdGVte1xuICAgIGltZ3tcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgfVxufVxuXG4uaW5mby1jb250YWluZXJ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFN0U4O1xuICAgIC5saXN0e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn1cbi5lbXAtaW5mb3tcbiAgICBjb2xvcjogIzU4NTk1QjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZmF2LWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA1cHggMnB4IHJnYigwIDAgMCAvIDAuNCkpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi53b3JrZXItaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2JjYmVjMDtcbn0gXG4ud29ya2VyLWltZy1saXN0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2JjYmVjMDtcbn0gXG4uaW9uLXNwb25zb3ItYWNjb3JkaW9uIDpmaXJzdHtcbiAgICBib3gtc2hhZG93OiAjNWI1YjViIDJweCAycHg7XG59XG5cbi5hY2NvcmRpb24taGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM3ZjEzMmE7XG4gICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgLS1taW4taGVpZ2h0OiAzMHB4O1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIGJveC1zaGFkb3c6MnB4IDNweCA1cHggIzViNWI1YjtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBpb24taWNvbntcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgfVxufVxuLmFjLWdyb3Vwe1xuICAgIHdpZHRoOiA5MCU7XG59XG4uYWNjb3JkaW5nLWxpc3R7XG4gICAgLy8gcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0U2RTdFODtcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRTZFN0U4O1xuICAgICAgICBjb2xvcjogIzgwODI4NTtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIH1cbn1cbi5pb24tc3BvbnNvci1hY2NvcmRpb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlN2U4O1xuICAgIGJveC1zaGFkb3c6MnB4IDNweCA1cHggIzViNWI1YjtcbiAgICAvLyBpb24taXRlbXt4d1xuICAgIC8vIGhlaWdodDogNDBweDtcbn1cbi5hY2NvdW50LXR5cGUtY29udGFpbmVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHg7XG4gICAgLmFjY291bnQtaXRlbS1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hY2NvdW50LWl0ZW0tY29udGFpbmVyLWFjdGl2ZXtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZzogM3B4IDBweCAzcHggMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcyQkU1MjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_worker-list_worker-list_module_ts.js.map