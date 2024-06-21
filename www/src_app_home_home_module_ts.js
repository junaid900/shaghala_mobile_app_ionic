"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 53949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 47464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 28245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 53949);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 47464);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/component.module */ 87721);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 47464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 12056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 60968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/device */ 94219);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/browser */ 39337);















let HomePage = class HomePage {
    constructor(router, navCtrl, api, util, menu, translate) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.menu = menu;
        this.translate = translate;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoplay: { delay: 2000 }
        };
        this.slideOpts1 = {
            initialSlide: 0,
            slidesPerView: 2.8,
            speed: 400
        };
        this.selectedType = 'indiv';
        this.appUrl = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.baseUrl;
        this.isSliderLoading = false;
        this.isIndLoading = false;
        this.isCompLoading = false;
        this.inCompanyLoading = false;
        this.homeSlides = [];
        this.indList = [];
        this.compList = [];
        this.filterQuery = '';
        this.selectedAdvType = '';
        this.showType = 'grid';
        this.isTypeLoading = false;
        this.typeList = [];
        this.lang = (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_4__.getLang)();
        translate.use((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_4__.getLang)());
        this.getTypesData();
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            //  https://shkalah.mjcoders.com/api/profile/profile_slider
            this.isSliderLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.homeSliderApi);
            this.isSliderLoading = false;
            if (response) {
                console.log(response);
                this.homeSlides = response;
            }
        });
    }
    changeAdvType(data) {
        this.selectedAdvType = data;
        this.changeType(this.selectedType);
    }
    goToWorkerList(ad_type, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
    getTypesData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.isTypeLoading = true;
            var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getTypes);
            console.log(response);
            this.isTypeLoading = false;
            if (response) {
                this.typeList = response;
            }
        });
    }
    getIndividualData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.isIndLoading = true;
            let response = yield this.api.postRequest({ lang: (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_4__.getLang)(), id: (yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_8__.getUserId)()), type: this.selectedAdvType }, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.homeIndiWorkerApi);
            this.isIndLoading = false;
            if (response) {
                console.log(response);
                this.indList = response;
            }
        });
    }
    getCompData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.isCompLoading = true;
            // , type: this.selectedAdvType 
            let response = yield this.api.postRequest({ lang: (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_4__.getLang)(), id: (yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_8__.getUserId)()) }, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.homeCompanyWorkerApi);
            this.isCompLoading = false;
            if (response) {
                this.compList = response;
            }
        });
    }
    ngOnInit() {
        this.getPageData();
        this.getIndividualData();
    }
    goBack() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        console.log("home enter");
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoplay: { delay: 2000 }
        };
    }
    changeType(type) {
        if (type == 'comp') {
            this.getCompData();
        }
        else {
            this.getIndividualData();
        }
        this.selectedType = type;
    }
    goToWorkerDetail(item) {
        let navExtras = {
            queryParams: {
                worker: JSON.stringify(item)
            }
        };
        this.router.navigate(['worker-detail'], navExtras);
    }
    addToFav(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let id;
            if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)().type == 'local')
                id = (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_6__.Device.getId()).uuid;
            else
                id = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_7__.getUser)().user_id;
            this.util.showProgressDialog();
            let response = yield this.api.postRequest({
                worker_id: item.worker_id,
                reference: id
            }, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.addFavApi, true);
            this.util.hideProgressDialog();
            console.log(response);
            if (response) {
                item.fav = item.fav == 1 ? 0 : 1;
            }
        });
    }
    goToSetting() {
        this.router.navigate(['setting']);
    }
    filter() {
        console.log(this.filterQuery);
        if (this.filterQuery.length < 1) {
            this.util.showToast("Cannot load data");
        }
        let navParams = {
            queryParams: {
                type: "query",
                query: this.filterQuery,
            }
        };
        this.router.navigate(['worker-list'], navParams);
    }
    goToType(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log("mType", type);
            // TYPE FROM WHERE DATA IS COMING
            let typeId = type.type_id;
            let _type = 'indiv';
            if (type.type_category == 'Both') {
                _type = 'both';
            }
            else if (type.type_category == 'Company') {
                _type = 'comp';
            }
            let title = (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_4__.getLang)() == 'ar' ? type.type_name_ar : type.type_name;
            console.log(type);
            let navParams = {
                queryParams: {
                    type: "ac_type",
                    ac_type: typeId,
                    title: title,
                    data_type: _type,
                }
            };
            this.router.navigate(['worker-list'], navParams);
        });
    }
    openMenu() {
        this.menu.open();
    }
    openBrowser(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (link)
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_9__.Browser.open({ url: link });
        });
    }
    isValidHttpUrl(string) {
        let url;
        try {
            url = new URL(string);
        }
        catch (_) {
            return false;
        }
        return (url.protocol === "http:" || url.protocol === "https:") && (url.href == string || url.origin == string);
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
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-home',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 12056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\" (click)=\"openMenu()\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <img (click)=\"goToSetting()\" src=\"assets/images/setting.png\" alt=\"\">\n  </ion-col>\n</ion-row>\n<ion-content>\n\n  <div class=\" top-container\">\n  </div>\n  <div class=\"home-page\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center p0\">\n        <img src=\"assets/images/home_app_logo.png\" width=\"200px\" alt=\"\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"slider-col\">\n        <div *ngIf=\"isSliderLoading\" class=\"d-flex justify-content-center ion-align-items-center w100\">\n          <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n        </div>\n        <ion-slides *ngIf=\"!isSliderLoading\" pager=\"true\" [options]=\"slideOpts\" class=\"cblack slider\">\n          <ion-slide *ngFor=\"let item of this.homeSlides\" (click)=\"openBrowser(item.hyperlink)\">\n            <img src=\"{{appUrl +  item.image}}\" alt=\"\">\n          </ion-slide>\n          <!-- <ion-slide>\n            <h1>Slide 2</h1>\n          </ion-slide>\n          <ion-slide>\n            <h1>Slide 3</h1>\n          </ion-slide> -->\n        </ion-slides>\n        <!-- </div> -->\n      </ion-col>\n    </ion-row>\n    <!--  -->\n    <ion-row>\n      <ion-col size=\"1\" class=\"d-flex justify-content-center align-items-center\">\n        <ion-icon style=\"font-size:26px;color: black;\" (click)=\"changeShowType()\" *ngIf=\"showType == 'list'\"\n          name=\"grid\"></ion-icon>\n        <ion-icon style=\"font-size:26px;color: black;\" (click)=\"changeShowType()\" *ngIf=\"showType == 'grid'\"\n          name=\"menu\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"d-flex search-container\">\n          <ion-input placeholder=\"{{'SEARCH BAR' | translate}}\" class=\"cblack search-input\" [(ngModel)]=\"filterQuery\">\n          </ion-input>\n          <ion-button color=\"none\" class=\"filter-button cblack\" (click)=\"filter()\">{{'Search'| translate}}</ion-button>\n        </div>\n      </ion-col>\n      <ion-col size=\"2\" class=\"d-flex justify-content-center align-items-center\">\n        <ion-icon style=\"font-size:26px;color: black;\" name=\"filter\" size=\"26\" routerLink=\"/advance-filter\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row> -->\n      <!-- <ion-col size=\"12\"> -->\n        <app-loading *ngIf=\"isTypeLoading && typeList.length < 1\" style=\"height:100px\"></app-loading>\n        <ion-slides [options]=\"slideOpts1\" class=\"type-slides\">\n          <ion-slide *ngFor=\"let item of typeList\" class=\"touch-opacity\">\n            <div (click)=\"goToType(item)\" class=\"ac-type-itm\">\n              <img src={{appUrl+item.image}} />\n              <p class=\"heading\">{{lang == 'ar'? item.type_name_ar : item.type_name}}</p>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      <!-- </ion-col> -->\n    <!-- </ion-row> -->\n    \n    <!-- <ion-row>\n      <ion-col size=\"6\" class=\"d-flex justify-content-center p0 m0\">\n        <ion-accordion-group class=\"ac-group\">\n          <ion-accordion value=\"sponsor\" class=\"ion-sponsor-accordion\">\n            <ion-item slot=\"header\" class=\"accordion-header text-center\">\n              <ion-label class=\"sonsorship-accord-label\">{{\"ADMISSION\"|translate}}</ion-label>\n            </ion-item>\n            <ion-list class=\"according-list p0\" slot=\"content\">\n              <ion-item (click)=\"goToWorkerList('admission','indvidual')\" class=\"ion-text-center\">\n                <ion-label>{{\"INDIVIDUAL ADS\" | translate}} </ion-label>\n              </ion-item>\n              <ion-item (click)=\"goToWorkerList('admission','company')\" class=\"ion-text-center\">\n                <ion-label>{{\"COMPANIES ADS\"|translate}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-accordion>\n        </ion-accordion-group>\n      </ion-col>\n      <ion-col size=\"6\" class=\"d-flex justify-content-center p0 m0\">\n        <ion-accordion-group class=\"ac-group\">\n          <ion-accordion value=\"sponsor\" class=\"ion-sponsor-accordion\">\n            <ion-item slot=\"header\" class=\"accordion-header text-center\">\n              <ion-label class=\"sonsorship-accord-label\">{{\"SPONSORSHIP TRANSMISSION\"|translate}}</ion-label>\n            </ion-item>\n            <ion-list class=\"according-list p0\" slot=\"content\">\n              <ion-item (click)=\"goToWorkerList('sponsored','indvidual')\" class=\"ion-text-center\">\n                <ion-label>{{\"INDIVIDUAL ADS\" | translate}} </ion-label>\n              </ion-item>\n              <ion-item (click)=\"goToWorkerList('sponsored','company')\" class=\"ion-text-center\">\n                <ion-label>{{\"COMPANIES ADS\"|translate}}</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-accordion>\n        </ion-accordion-group>\n      </ion-col>\n    </ion-row> -->\n   <!-- <ion-row>\n      <ion-col class=\"d-flex justify-content-center\">\n        <div class=\"advs-type-container\">\n          <div (click)=\"changeAdvType('admission')\"\n            [ngClass]=\"selectedAdvType == 'admission'?'advs-item-container-active':'advs-item-container'\"\n            class=\"touch-opacity\">\n            <ion-label class=\"admission-label myriadPro-semiboldIt\">\n              {{\"ADMISSION\"|translate}}\n            </ion-label>\n          </div>\n          <div (click)=\"changeAdvType('sponsored')\"\n            [ngClass]=\"selectedAdvType == 'sponsored'?'advs-item-container-active':'advs-item-container'\"\n            class=\"touch-opacity\">\n            <ion-label class=\"sponsor-label myriadPro-semiboldIt\">\n              {{\"SPONSORSHIP\" |translate}}\n            </ion-label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>-->\n    <ion-row>\n      <ion-col class=\"d-flex justify-content-center\">\n        <div class=\"account-type-container\">\n          <div (click)=\"changeType('indiv')\"\n            [ngClass]=\"selectedType == 'indiv'?'account-item-container-active':'account-item-container'\"\n            class=\"touch-opacity\">\n            <ion-label class=\"individual-label myriadPro-semiboldIt\">\n              {{\"INDIVIDUAL ADS\"|translate}}\n            </ion-label>\n          </div>\n          <div (click)=\"changeType('comp')\"\n            [ngClass]=\"selectedType == 'comp'?'account-item-container-active':'account-item-container'\"\n            class=\"touch-opacity\">\n            <ion-label class=\"myriadPro-semiboldIt\">\n              {{\"COMPANIES ADS\" |translate}}\n            </ion-label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      \n    </ion-row> -->\n    <div *ngIf=\"selectedType == 'indiv'\">\n      <!-- <div *ngIf=\"isIndLoading && indList.length < 1\" class=\"d-flex justify-content-center ion-align-items-center w100\">\n        <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n      </div> -->\n      <app-empty-layout *ngIf=\"!isIndLoading && indList.length < 1\" style=\"height:140px\"></app-empty-layout>\n      <app-loading *ngIf=\"isIndLoading && indList.length < 1\" style=\"height:100px\"></app-loading>\n      <ion-row class=\"mt10 ion-justify-content-center\" *ngIf=\"showType == 'grid'\">\n        <ion-col size=\"5.6\" *ngFor=\"let item of indList\">\n          <div class=\"emp-item cblack  d-flex flex-direction-column\">\n            <!-- <ion-icon name=\"heart\" class=\"fav-icon\"></ion-icon> -->\n            <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n              width=\"30px\" alt=\"\">\n            <img *ngIf=\"item.fav > 0\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\"\n              width=\"30px\" alt=\"\">\n            <img (click)=\"goToWorkerDetail(item)\" src=\"{{appUrl + item.image}}\" alt=\"\" class=\"worker-img\">\n            <ion-row class=\"info-container\" (click)=\"goToWorkerDetail(item)\">\n              <ion-col>\n                <h6 class=\"MyriadPro-Bold cblack m0 ion-text-center w100\">{{item.lang_name}}</h6>\n                <div class=\"emp-info\">\n                  <ion-label class=\"MyriadPro-Regular\">{{item.en_religion}}</ion-label>\n                  <p class=\"m0 p0 MyriadPro-Regular\">{{item.place_of_living}} | {{item.age}} {{\"years old\" | translate}}\n                  </p>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- SHOW LIST HERE -->\n      <ion-row class=\"mt10 ion-justify-content-center\" *ngIf=\"showType == 'list'\">\n        <ion-col size=\"12\" *ngFor=\"let item of indList\">\n          <div class=\"emp-item cblack  d-flex flex-direction-column\">\n            <!-- <ion-icon name=\"heart\" class=\"fav-icon\"></ion-icon> -->\n            <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n              width=\"30px\" alt=\"\">\n            <img *ngIf=\"item.fav > 0\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\"\n              width=\"30px\" alt=\"\">\n\n            <ion-row class=\"info-container list touch-opacity\">\n\n              <ion-col size=\"4\">\n                <img (click)=\"goToWorkerDetail(item)\" src=\"{{appUrl + item.image}}\"\n                  onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\" class=\"worker-img-list\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <h6 class=\"MyriadPro-Bold cblack m0 pt10 w100\">{{item.lang_name}}</h6>\n                <div class=\"emp-info\">\n                  <ion-label class=\"MyriadPro-Regular\">{{\"Religion\" | translate}} : {{item.en_religion}}</ion-label>\n                  <p class=\"m0 p0 MyriadPro-Regular\">{{\"Place of living\"}} : {{item.place_of_living}}\n                  </p>\n                  <p class=\"m0 p0 MyriadPro-Regular\">{{\"Age\"}} : {{item.age}} {{\"years old\" | translate}}\n                  </p>\n                  <!-- {{item.age}} {{\"years old\" | translate}} -->\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </div>\n    <div *ngIf=\"selectedType == 'comp'\">\n      <!-- <div *ngIf=\"isCompLoading && compList.length < 1\"\n        class=\"d-flex justify-content-center ion-align-items-center w100\">\n        <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n      </div> -->\n      <app-empty-layout *ngIf=\"!isCompLoading && compList.length < 1\" style=\"height:100px\"></app-empty-layout>\n      <app-loading *ngIf=\"isCompLoading && compList.length < 1\" style=\"height:100px\"></app-loading>\n      <ion-row class=\"mt10 ion-justify-content-center\" *ngIf=\"showType == 'grid'\">\n        <ion-col size=\"5.6\" *ngFor=\"let item of compList\">\n          <div class=\"emp-item cblack  d-flex flex-direction-column\">\n            <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n              width=\"30px\" alt=\"\">\n            <img *ngIf=\"item.fav > 0\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\"\n              width=\"30px\" alt=\"\">\n            <img (click)=\"goToWorkerDetail(item)\" src=\"{{appUrl + item.image}}\" alt=\"\" class=\"worker-img\">\n            <ion-row class=\"info-container\" (click)=\"goToWorkerDetail(item)\">\n              <ion-col>\n                <h6 class=\"MyriadPro-Bold cblack m0 ion-text-center w100\">{{item.lang_name}}</h6>\n                <div class=\"emp-info\">\n                  <ion-label class=\"MyriadPro-Regular\">{{item.en_religion}}</ion-label>\n                  <p class=\"m0 p0 MyriadPro-Regular\">{{item.place_of_living}} | {{item.age}} {{\"years old\"|translate}}\n                  </p>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!-- SHOW LIST HERE -->\n      <ion-row class=\"mt10 ion-justify-content-center\" *ngIf=\"showType == 'list'\">\n        <ion-col size=\"12\" *ngFor=\"let item of compList\">\n          <div class=\"emp-item cblack  d-flex flex-direction-column\">\n            <!-- <ion-icon name=\"heart\" class=\"fav-icon\"></ion-icon> -->\n            <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n              width=\"30px\" alt=\"\">\n            <img *ngIf=\"item.fav > 0\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\"\n              width=\"30px\" alt=\"\">\n\n            <ion-row class=\"info-container list touch-opacity\" (click)=\"goToWorkerDetail(item)\">\n\n              <ion-col size=\"4\">\n                <img src=\"{{appUrl + item.image}}\" onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\"\n                  class=\"worker-img-list\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <h6 class=\"MyriadPro-Bold cblack m0 pt10 w100\">{{item.lang_name}}</h6>\n                <div class=\"emp-info\">\n                  <ion-label class=\"MyriadPro-Regular\">{{\"Religion\" | translate}} : {{item.en_religion}}</ion-label>\n                  <p class=\"m0 p0 MyriadPro-Regular\">{{\"Place of living\"}} : {{item.place_of_living}}\n                  </p>\n                  <p class=\"m0 p0 MyriadPro-Regular\">{{\"Age\"}} : {{item.age}} {{\"years old\" | translate}}\n                  </p>\n                  <!-- {{item.age}} {{\"years old\" | translate}} -->\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ 60968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: white;\n}\n\n.header {\n  background: #7f132a;\n  color: white;\n}\n\n.top-container {\n  background-color: #7f132a;\n  height: 50px;\n}\n\n.home-page {\n  position: relative;\n  top: -50px;\n}\n\n.slider-col {\n  height: 120px;\n}\n\n.slider {\n  height: 100%;\n  width: 85%;\n  --bullet-background-active: #7f132a;\n}\n\n.slider img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n.worker-img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n}\n\n.ion-sponsor-accordion :first {\n  box-shadow: #5b5b5b 2px 2px;\n}\n\n.accordion-header {\n  --background: #7f132a;\n  --border-radius: 30px;\n  --min-height: 30px;\n  font-size: 14px;\n  box-shadow: 2px 3px 5px #5b5b5b;\n  color: white;\n}\n\n.accordion-header ion-icon {\n  color: white;\n}\n\n.ac-group {\n  width: 90%;\n}\n\n.according-list {\n  background: #E6E7E8;\n}\n\n.according-list ion-item {\n  --background: #E6E7E8;\n  color: #808285;\n  --border-color: white;\n  --min-height: 36px;\n  font-size: 14px;\n}\n\n.ion-sponsor-accordion {\n  border-radius: 28px !important;\n  background-color: #e6e7e8;\n  box-shadow: 2px 3px 5px #5b5b5b;\n}\n\n.search-container {\n  width: 100%;\n}\n\n.search-input {\n  border: #939598 solid;\n  border-radius: 50px;\n  --placeholder-color: #bcbec0;\n  padding-left: 20px !important;\n}\n\n.sonsorship-accord-label {\n  color: white !important;\n  font-family: \"Poppins Medium\";\n}\n\n.filter-button {\n  margin: 0px;\n  --border-radius: 50px;\n  border-radius: 50px;\n  --box-shadow: 0px 0px;\n  background-color: #707070;\n  color: white;\n  position: absolute;\n  right: -8px;\n  z-index: 2;\n  height: 42px;\n}\n\n.account-type-container {\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  width: 70%;\n  background: #ffffff;\n  border-radius: 30px;\n  margin-top: 10px;\n  box-shadow: 2px 2px;\n}\n\n.account-type-container .account-item-container {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.account-type-container .account-item-container-active {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 14px;\n  text-align: center;\n  background-color: #72BE52;\n  color: white;\n  border-radius: 30px;\n}\n\n.advs-type-container {\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  background: #ffffff;\n  border-radius: 30px;\n  margin-top: 10px;\n  margin-right: 10px;\n  margin-left: 10px;\n  box-shadow: 2px 2px;\n}\n\n.advs-type-container .advs-item-container {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 14px;\n  text-align: center;\n}\n\n.advs-type-container .advs-item-container ion-label {\n  padding: 0px 10px 0px 10px;\n}\n\n.advs-type-container .advs-item-container-active {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 14px;\n  text-align: center;\n  background-color: #7f132a;\n  color: white;\n  border-radius: 30px;\n}\n\n.advs-type-container .advs-item-container-active ion-label {\n  padding: 0px 10px 0px 10px;\n}\n\n.emp-item img {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.info-container {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #E6E7E8;\n}\n\n.emp-info {\n  color: #58595B;\n  font-size: 12px;\n}\n\n.fav-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding-top: 10px;\n  z-index: 999;\n  padding-right: 10px;\n  color: white;\n  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));\n  font-size: 20px;\n}\n\n.worker-img-list {\n  width: 100%;\n  height: 100px;\n  margin-top: 4px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n\n.type-slides {\n  margin: 10px;\n}\n\n.type-slides img {\n  height: 100px;\n  width: 223px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n\n.type-slides .ac-type-itm {\n  background-color: #e5e5e5;\n  border-radius: 10px;\n}\n\n.type-slides ion-slide {\n  padding-right: 4px;\n}\n\n.type-slides ion-slide .heading {\n  border-width: 2px;\n  font-size: 12px;\n  font-family: \"Montserrat Bold\";\n  color: black;\n  margin: 0px;\n  max-lines: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px 2px 0px 2px;\n  white-space: nowrap;\n  padding-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,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RUFDQSxZQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRVoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM3ZjEzMmE7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnRvcC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZjEzMmE7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLmhvbWUtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTUwcHg7XG59XG4uc2xpZGVyLWNvbCB7XG4gICAgLy8gIGhlaWdodDogMzAlO1xuICAgIGhlaWdodDogMTIwcHg7XG59XG4uc2xpZGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDg1JTtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogIzdmMTMyYTtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG59XG5cbi53b3JrZXItaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2JjYmVjMDtcbn1cbi5pb24tc3BvbnNvci1hY2NvcmRpb24gOmZpcnN0e1xuICAgIGJveC1zaGFkb3c6ICM1YjViNWIgMnB4IDJweDtcbn1cblxuLmFjY29yZGlvbi1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogIzdmMTMyYTtcbiAgICAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAtLW1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgYm94LXNoYWRvdzoycHggM3B4IDVweCAjNWI1YjViO1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIGlvbi1pY29ue1xuICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICB9XG59XG4uYWMtZ3JvdXB7XG4gICAgd2lkdGg6IDkwJTtcbn1cbi5hY2NvcmRpbmctbGlzdHtcbiAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTZFN0U4O1xuICAgIGlvbi1pdGVte1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNFNkU3RTg7XG4gICAgICAgIGNvbG9yOiAjODA4Mjg1O1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICAgIC0tbWluLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgfVxufVxuLmlvbi1zcG9uc29yLWFjY29yZGlvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU3ZTg7XG4gICAgYm94LXNoYWRvdzoycHggM3B4IDVweCAjNWI1YjViO1xuICAgIC8vIGlvbi1pdGVte3h3XG4gICAgLy8gaGVpZ2h0OiA0MHB4O1xufVxuLnNlYXJjaC1jb250YWluZXIge1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zZWFyY2gtaW5wdXQge1xuICAgIGJvcmRlcjogIzkzOTU5OCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiY2JlYzA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uc29uc29yc2hpcC1hY2NvcmQtbGFiZWx7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBNZWRpdW1cIjtcbn1cbi5maWx0ZXItYnV0dG9uIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtLWJveC1zaGFkb3c6IDBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtOHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgaGVpZ2h0OiA0MnB4O1xufVxuXG4uYWNjb3VudC10eXBlLWNvbnRhaW5lcntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDcwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4O1xuICAgIC5hY2NvdW50LWl0ZW0tY29udGFpbmVye1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBwYWRkaW5nOiAzcHggMHB4IDNweCAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYWNjb3VudC1pdGVtLWNvbnRhaW5lci1hY3RpdmV7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MkJFNTI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB9XG59XG4uYWR2cy10eXBlLWNvbnRhaW5lcntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHg7XG4gICAgLmFkdnMtaXRlbS1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZG1pc3Npb24tbGFiZWx7XG4gICAgICAgICAgICAvLyBmb250LXNpemU6IDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYWR2cy1pdGVtLWNvbnRhaW5lci1hY3RpdmV7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZjEzMmE7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uZW1wLWl0ZW17XG4gICAgaW1ne1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICB9XG59XG4uaW5mby1jb250YWluZXJ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFN0U4O1xufVxuLmVtcC1pbmZve1xuICAgIGNvbG9yOiAjNTg1OTVCO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mYXYtaWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDVweCAycHggcmdiKDAgMCAwIC8gMC40KSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLndvcmtlci1pbWctbGlzdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNiY2JlYzA7XG59IFxuLnR5cGUtc2xpZGVze1xuICAgIC8vIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGltZ3tcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDIyM3B4OztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5hYy10eXBlLWl0bXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgaW9uLXNsaWRle1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICAgIC8vIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAuaGVhZGluZ3tcbiAgICAgICAgICAgIC8vIGJvcmRlcjojN2YxMzJhIHNvbGlkO1xuICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQm9sZFwiO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgLy8gcGFkZGluZzogMTBweCA4cHggMTBweCA4cHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1heC1saW5lczogMTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAycHggMHB4IDJweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuXG4gICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4udHlwZS1zbGlkZXtcblxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map