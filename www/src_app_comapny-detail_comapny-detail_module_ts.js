"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_comapny-detail_comapny-detail_module_ts"],{

/***/ 33994:
/*!*****************************************************************!*\
  !*** ./src/app/comapny-detail/comapny-detail-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComapnyDetailPageRoutingModule": () => (/* binding */ ComapnyDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _comapny_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comapny-detail.page */ 47369);




const routes = [
    {
        path: '',
        component: _comapny_detail_page__WEBPACK_IMPORTED_MODULE_0__.ComapnyDetailPage
    }
];
let ComapnyDetailPageRoutingModule = class ComapnyDetailPageRoutingModule {
};
ComapnyDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComapnyDetailPageRoutingModule);



/***/ }),

/***/ 85076:
/*!*********************************************************!*\
  !*** ./src/app/comapny-detail/comapny-detail.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComapnyDetailPageModule": () => (/* binding */ ComapnyDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _comapny_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comapny-detail-routing.module */ 33994);
/* harmony import */ var _comapny_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comapny-detail.page */ 47369);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/component.module */ 87721);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let ComapnyDetailPageModule = class ComapnyDetailPageModule {
};
ComapnyDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _comapny_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComapnyDetailPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ],
        declarations: [_comapny_detail_page__WEBPACK_IMPORTED_MODULE_1__.ComapnyDetailPage]
    })
], ComapnyDetailPageModule);



/***/ }),

/***/ 47369:
/*!*******************************************************!*\
  !*** ./src/app/comapny-detail/comapny-detail.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComapnyDetailPage": () => (/* binding */ ComapnyDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comapny_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./comapny-detail.page.html */ 21773);
/* harmony import */ var _comapny_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comapny-detail.page.scss */ 26064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/share */ 65114);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/utils.service */ 44516);














let ComapnyDetailPage = class ComapnyDetailPage {
    constructor(navCtrl, route, util, api, router, platform, callNumber) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.util = util;
        this.api = api;
        this.router = router;
        this.platform = platform;
        this.callNumber = callNumber;
        this.company = {};
        this.isLoading = false;
        this.list = [];
        this.appUrl = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_5__.baseUrl;
        this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.getUser)();
        this.settings = {};
        this.route.queryParams.subscribe(params => {
            try {
                // console.log(params);
                this.company = JSON.parse(params.comapny);
                console.log(this.company);
                this.getPageData(this.company.user_id);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // this.isSettingLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_5__.appSettingApi);
            // this.isSettingLoading = false;
            if (response) {
                this.settings = response;
            }
            console.log(response);
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    ngOnInit() {
        this.getSettings();
    }
    getPageData(company_id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            // let id = await getUserId();
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_5__.getWorkerByCompany + '/' + company_id + '?lang=' + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_7__.getLang)() + '&id=' + (yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_6__.getUserId)()));
            this.isLoading = false;
            console.log(response);
            if (response) {
                this.list = response;
            }
            else {
                this.util.showToast("No worker found");
            }
        });
    }
    addToFav(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let id = yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_6__.getUserId)();
            this.util.showProgressDialog();
            let response = yield this.api.postRequest({
                worker_id: item.worker_id,
                reference: id
            }, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_5__.addFavApi, true);
            this.util.hideProgressDialog();
            console.log(response);
            if (response) {
                item.fav = item.fav == 1 ? 0 : 1;
                // this.getPageData();
            }
        });
    }
    goToWorkerDetail(item) {
        let navExtras = {
            queryParams: { worker: JSON.stringify(item) }
        };
        this.router.navigate(['worker-detail'], navExtras);
    }
    numberCall() {
        // console.log(this.worker.phone);
        this.callNumber.callNumber(this.company.phone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    shareApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_3__.Share.share({
                title: 'Share Shkalah App',
                text: this.settings.share_text,
                url: url,
                dialogTitle: 'Share with people',
            });
        });
    }
};
ComapnyDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_9__.UtilsService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__.CallNumber }
];
ComapnyDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-comapny-detail',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comapny_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_comapny_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComapnyDetailPage);



/***/ }),

/***/ 21773:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/comapny-detail/comapny-detail.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n\n<ion-content>\n  <div class=\" top-container\">\n  </div>\n  <div class=\"worker-detail-page\">\n    <ion-row>\n      <ion-col size=\"4\" class=\"profile-col p0\">\n        <img class=\"profile-image\" src=\"{{appUrl + company.user_image}}\"\n          onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"7\" class=\"p0 pl10 profile-head-container\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-end btn-contact\">\n              <ion-col size=\"2\" class=\"contact-btn\" (click)=\"shareApp()\">\n                <!-- <ion-button size=\"small\"> -->\n                <img src=\"assets/images/share.png\" alt=\"\">\n                <!-- </ion-button> -->\n              </ion-col>\n              <ion-col size=\"1\"></ion-col>\n              <ion-col size=\"2\" *ngIf=\"user.type != 'local'\" class=\"contact-btn\" (click)=\"numberCall()\">\n                <img src=\"assets/images/phone.png\" alt=\"\">\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <h3 class=\"cwhite oneline-elipsize MyriadPro-Bold p0 m0\">{{company.name}}</h3>\n        <p class=\"p0 m0 cwhite MyriadPro-Regular oneline-elipsize\">{{company.address}}</p>\n        <!-- <p class=\"p0 m0 cwhite MyriadPro-Regular oneline-elipsize\">{{worker.place_of_living}}</p> -->\n      </ion-col>\n    </ion-row>\n    <div>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"main-detail-container\">\n            <ion-row>\n              <ion-col>\n                <ion-label>{{\"Status\" | translate}}</ion-label>\n                <p class=\"p0 m0\" style=\"color: green;\">{{company.admin_status == 'Active' ? 'Verified':'Not Verified'}}</p>\n              </ion-col>\n              <ion-col *ngIf=\"user.type != 'local'\">\n                <ion-label>{{\"Phone\" | translate}}</ion-label>\n                <p class=\"p0 m0\">+{{company.phone.replace(\"-\",'')}}</p>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <h2 class=\"cblack\">\n            {{\"Workers\" | translate}}\n          </h2>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"5.6\" *ngFor=\"let item of list\">\n              <div class=\"emp-item cblack  d-flex flex-direction-column\">\n                <!-- <ion-icon name=\"heart\" class=\"fav-icon\"></ion-icon> -->\n                <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n                  width=\"30px\" alt=\"\">\n                <img *ngIf=\"item.fav > 0\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\"\n                  width=\"30px\" alt=\"\">\n      \n                <img (click)=\"goToWorkerDetail(item)\" src=\"{{appUrl + item.image}}\"\n                  onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\" class=\"worker-img\">\n                <ion-row class=\"info-container\" (click)=\"goToWorkerDetail(item)\">\n                  <ion-col>\n                    <h6 class=\"MyriadPro-Bold cblack m0 ion-text-center w100\">{{item.lang_name}}</h6>\n                    <div class=\"emp-info\">\n                      <ion-label class=\"MyriadPro-Regular\">{{item.en_religion}}</ion-label>\n                      <p class=\"m0 p0 MyriadPro-Regular\">{{item.place_of_living}} | {{item.age}} {{\"years old\" | translate}}\n                      </p>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ 26064:
/*!*********************************************************!*\
  !*** ./src/app/comapny-detail/comapny-detail.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".top-container {\n  background-color: #7f132a;\n  height: 120px;\n}\n\n.worker-detail-page {\n  position: relative;\n  top: -100px;\n  padding: 10px 10px 0px 10px;\n}\n\n.profile-image {\n  border-radius: 10px;\n  height: 100px;\n  width: 100%;\n  object-fit: cover;\n  border: #ffffff solid;\n  border-width: 4px;\n}\n\n.contact-btn {\n  width: 30px;\n  height: 30px;\n  background-color: #ffffff;\n  border-radius: 6px;\n  text-align: center;\n}\n\n.profile-head-container {\n  margin-top: -10px;\n}\n\n.main-detail-container ion-row {\n  padding: 10px;\n}\n\n.main-detail-container {\n  color: black;\n  background-color: #e6e7e8;\n  border-radius: 10px;\n}\n\n.main-detail-container ion-col {\n  padding: 0px;\n  text-align: center;\n  border-right: #7f132a solid;\n  border-width: 2px;\n  font-size: 14px;\n}\n\n.main-detail-container ion-col ion-label {\n  color: #7F132A;\n}\n\n.main-detail-container :last-child {\n  border-width: 0px;\n}\n\n.info-key {\n  font-size: 16px;\n  color: black;\n}\n\n.info-val {\n  color: #808285;\n  font-size: 16px;\n  font-family: \"Poppins Regular\";\n}\n\n.info-item {\n  border-bottom: #7f132a solid;\n  border-width: 1px;\n  font-family: \"Poppins Regular\";\n  padding-top: 10px;\n}\n\n.emp-item img {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.info-container {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #E6E7E8;\n}\n\n.emp-info {\n  color: #58595B;\n  font-size: 12px;\n}\n\n.fav-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding-top: 10px;\n  padding-right: 10px;\n  color: white;\n  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));\n  font-size: 20px;\n}\n\n.worker-img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWFwbnktZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFFSSxpQkFBQTtBQUlKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFISTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBS1I7O0FBSlE7RUFDSSxjQUFBO0FBTVo7O0FBREE7RUFDSSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFNSjs7QUFKQTtFQUNJLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBRkk7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0FBS1I7O0FBREE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUdBLFlBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFLSiIsImZpbGUiOiJjb21hcG55LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmMTMyYTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xufVxuLndvcmtlci1kZXRhaWwtcGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTEwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbn1cbi5wcm9maWxlLWltYWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyOiAjZmZmZmZmIHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogNHB4O1xufVxuLmNvbnRhY3QtYnRuIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaGVhZC1jb250YWluZXIge1xuICAgIC8vIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuXG4gICAgLy8gei1pbmRleDogOTk7XG59XG4ubWFpbi1kZXRhaWwtY29udGFpbmVyIGlvbi1yb3d7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluLWRldGFpbC1jb250YWluZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlN2U4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmlnaHQ6ICM3ZjEzMmEgc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGlvbi1sYWJlbHtcbiAgICAgICAgICAgIGNvbG9yOiAjN0YxMzJBO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4ubWFpbi1kZXRhaWwtY29udGFpbmVyIDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbn1cbi5pbmZvLWtleXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmluZm8tdmFse1xuICAgIGNvbG9yOiAjODA4Mjg1O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIFJlZ3VsYXJcIjtcbn1cbi5pbmZvLWl0ZW17XG4gICAgYm9yZGVyLWJvdHRvbTogIzdmMTMyYSBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIFJlZ3VsYXJcIjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wcm9maWxlLWNvbCB7XG59XG4uZW1wLWl0ZW17XG4gICAgaW1ne1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICB9XG59XG5cbi5pbmZvLWNvbnRhaW5lcntcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU3RTg7XG59XG4uZW1wLWluZm97XG4gICAgY29sb3I6ICM1ODU5NUI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZhdi1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA1cHggMnB4IHJnYigwIDAgMCAvIDAuNCkpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi53b3JrZXItaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2JjYmVjMDtcbn0gIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_comapny-detail_comapny-detail_module_ts.js.map