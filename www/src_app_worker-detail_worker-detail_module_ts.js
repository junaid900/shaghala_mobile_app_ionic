"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_worker-detail_worker-detail_module_ts"],{

/***/ 35320:
/*!***************************************************************!*\
  !*** ./src/app/worker-detail/worker-detail-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerDetailPageRoutingModule": () => (/* binding */ WorkerDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _worker_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-detail.page */ 55591);




const routes = [
    {
        path: '',
        component: _worker_detail_page__WEBPACK_IMPORTED_MODULE_0__.WorkerDetailPage
    }
];
let WorkerDetailPageRoutingModule = class WorkerDetailPageRoutingModule {
};
WorkerDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkerDetailPageRoutingModule);



/***/ }),

/***/ 68344:
/*!*******************************************************!*\
  !*** ./src/app/worker-detail/worker-detail.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerDetailPageModule": () => (/* binding */ WorkerDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _worker_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker-detail-routing.module */ 35320);
/* harmony import */ var _worker_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-detail.page */ 55591);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let WorkerDetailPageModule = class WorkerDetailPageModule {
};
WorkerDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _worker_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkerDetailPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_worker_detail_page__WEBPACK_IMPORTED_MODULE_1__.WorkerDetailPage]
    })
], WorkerDetailPageModule);



/***/ }),

/***/ 55591:
/*!*****************************************************!*\
  !*** ./src/app/worker-detail/worker-detail.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerDetailPage": () => (/* binding */ WorkerDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_worker_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./worker-detail.page.html */ 42062);
/* harmony import */ var _worker_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker-detail.page.scss */ 17809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 53831);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/share */ 65114);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/session.helper */ 13086);














let WorkerDetailPage = class WorkerDetailPage {
    constructor(navCtrl, route, translate, api, util, platform, callNumber, router) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.translate = translate;
        this.api = api;
        this.util = util;
        this.platform = platform;
        this.callNumber = callNumber;
        this.router = router;
        this.worker = {};
        this.appUrl = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.baseUrl;
        this.isLoading = false;
        this.settings = {};
        this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_8__.getUser)();
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params.worker) {
                this.worker = JSON.parse(params.worker);
                console.log(this.worker);
                this.getPageData();
            }
        });
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.workerDetailApi + '/' + this.worker.worker_id + "?lang=" + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_4__.getLang)());
            this.isLoading = false;
            if (response) {
                console.log(response);
                this.worker = response;
                if (this.worker.skill_id.length > 0) {
                    let skills = JSON.parse(this.worker.skill_id);
                    console.log(skills);
                    let i = 0;
                    this.worker['skills'] = '';
                    if (skills instanceof Array) {
                        skills.forEach(element => {
                            if (i != 0)
                                this.worker.skills += ", ";
                            this.worker.skills += element[(0,_services_local_helper__WEBPACK_IMPORTED_MODULE_4__.getLang)() + "_name"];
                            i++;
                        });
                    }
                    console.log(this.worker);
                }
            }
        });
    }
    ngOnInit() {
        this.getSettings();
    }
    goBack() {
        this.navCtrl.back();
    }
    numberCall() {
        console.log(this.worker.phone);
        this.callNumber.callNumber(this.worker.phone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    getSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // this.isSettingLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.appSettingApi);
            // this.isSettingLoading = false;
            if (response) {
                this.settings = response;
            }
            console.log(response);
        });
    }
    shareApp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_7__.Share.share({
                title: 'Share Shkalah App',
                text: this.settings.share_text,
                url: url,
                dialogTitle: 'Share with people',
            });
        });
    }
    makeReservation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            new _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController().create({
                header: "Warning!",
                message: "You can reserve this cv for "
                    + this.settings['reservation_days'] +
                    " days in " + this.settings['individual_reservation_amount'] +
                    " QR. do you want to continue?",
                buttons: [{
                        text: "No",
                        handler: () => { }
                    }, {
                        text: "Yes",
                        handler: () => {
                            this.checkReservation();
                        }
                    }]
            }).then(res => res.present());
        });
    }
    checkReservation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let payload = {
                user: this.user.user_id,
                worker_id: this.worker.worker_id
            };
            this.util.showProgressDialog('Checking reservation');
            let response = yield this.api.postRequest(payload, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.checkResetvationApi);
            this.util.hideProgressDialog();
            // this.isSettingLoading = false;
            if (response) {
                console.log(response);
                this.reserve();
            }
        });
    }
    reserve() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['payment'], {
                queryParams: {
                    type: "Reservation",
                    message: "Need reservation",
                    reservation: JSON.stringify({
                        user_id: this.user.user_id,
                        worker_id: this.worker.worker_id,
                    })
                }
            });
        });
    }
};
WorkerDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__.CallNumber },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
WorkerDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-worker-detail',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_worker_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_worker_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WorkerDetailPage);



/***/ }),

/***/ 42062:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/worker-detail/worker-detail.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n\n<ion-content>\n  <div class=\" top-container\">\n  </div>\n  <div class=\"worker-detail-page\">\n    <ion-row>\n      <ion-col size=\"4\" class=\"profile-col p0\">\n        <img class=\"profile-image\" src=\"{{appUrl + worker.image}}\"\n          onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\">\n      </ion-col>\n      <ion-col size=\"7\" class=\"p0 pl10 profile-head-container\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-row class=\"ion-justify-content-end btn-contact\">\n              <ion-col size=\"2\" class=\"contact-btn\" (click)=\"shareApp()\">\n                <!-- <ion-button size=\"small\"> -->\n                <img src=\"assets/images/share.png\" alt=\"\">\n                <!-- </ion-button> -->\n              </ion-col>\n              <ion-col size=\"1\"></ion-col>\n              <ion-col size=\"2\" *ngIf=\"user.type != 'local'\" class=\"contact-btn\" (click)=\"numberCall()\">\n                <!-- < size=\"small\" color=\"success\"> -->\n                <img src=\"assets/images/phone.png\" alt=\"\">\n                <!-- </ion-button> -->\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <h3 class=\"cwhite oneline-elipsize MyriadPro-Bold p0 m0\">{{worker.lang_name}}</h3>\n        <p class=\"p0 m0 cwhite MyriadPro-Regular oneline-elipsize\">{{worker.en_religion}}</p>\n        <p class=\"p0 m0 cwhite MyriadPro-Regular oneline-elipsize\">{{worker.place_of_living}}</p>\n      </ion-col>\n    </ion-row>\n    <div>\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"main-detail-container\">\n            <ion-row>\n              <ion-col>\n                <ion-label>{{\"Salary\" | translate}}</ion-label>\n                <p class=\"p0 m0\">{{worker.salary}}</p>\n              </ion-col>\n              <ion-col>\n                <ion-label>{{\"Age\" | translate}}</ion-label>\n                <p class=\"p0 m0\">{{worker.age}}</p>\n              </ion-col>\n              <ion-col>\n                <ion-label>{{\"Experience\" | translate}}</ion-label>\n                <p class=\"p0 m0\">2 {{\"Years\" | translate}}</p>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"isLoading\" class=\"d-flex justify-content-center align-items-center\">\n          <ion-spinner color=\"primary\">\n\n          </ion-spinner>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"!isLoading\">\n          <div>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{\"Social Status\" | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.is_married == 'Yes'? (\"Married\" | translate) : (\"Not Married\" |\n                  translate)}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{\"Children\" | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.no_of_childs}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{'Education' | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.lang_degree}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{\"Skin\" | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.skin_color}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{\"Type\" | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.type}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{\"Height\" | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.height}} cm</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{\"Weight\" | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.weight}} kg</ion-label>\n              </ion-col>\n            </ion-row>\n            <!-- <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">English</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.english_level}}</ion-label>\n              </ion-col>\n            </ion-row> -->\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{\"Arabic\" | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.arabic_level}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{\"Place of birth\" | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.place_of_birth}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{\"Place of living\" | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.place_of_living}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{\"Skills\" | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <p class=\"p0 m0 pt4 info-val\">{{worker.skills}}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{'Experience' | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <ion-label class=\"info-val\">{{worker.experience}} {{\"years\" | translate}}</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"info-item p0 m0\">\n              <ion-col class=\"ion-text-start\" size=\"4\">\n                <ion-label class=\"info-key\">{{'More details' | translate}}</ion-label>\n              </ion-col>\n              <ion-col class=\"ion-text-end\" size=\"8\">\n                <p class=\"p0 m0 info-val\">{{worker.remarks}}</p>\n              </ion-col>\n            </ion-row>\n\n          </div>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"worker.user_id != user.user_id && user.type != 'Company' && user.type != 'local' && worker.reserved_count < 1\" class=\"d-flex justify-content-center\">\n          <!-- <ion-button color=\"none\" (click)=\"makeReservation()\"  class=\"btn-send\">\n            {{\"Make Reservation\" | translate}}\n          </ion-button> -->\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ 17809:
/*!*******************************************************!*\
  !*** ./src/app/worker-detail/worker-detail.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".top-container {\n  background-color: #7f132a;\n  height: 120px;\n}\n\n.worker-detail-page {\n  position: relative;\n  top: -120px;\n  padding: 10px 10px 0px 10px;\n}\n\n.profile-image {\n  border-radius: 10px;\n  height: 130px;\n  width: 100%;\n  object-fit: cover;\n  border: #ffffff solid;\n  border-width: 4px;\n}\n\n.contact-btn {\n  width: 30px;\n  height: 30px;\n  background-color: #ffffff;\n  border-radius: 6px;\n  text-align: center;\n}\n\n.profile-head-container {\n  margin-top: -10px;\n}\n\n.main-detail-container ion-row {\n  padding: 10px;\n}\n\n.main-detail-container {\n  color: black;\n  background-color: #e6e7e8;\n  border-radius: 10px;\n}\n\n.main-detail-container ion-col {\n  padding: 0px;\n  text-align: center;\n  border-right: #7f132a solid;\n  border-width: 2px;\n  font-size: 14px;\n}\n\n.main-detail-container ion-col ion-label {\n  color: #7F132A;\n}\n\n.main-detail-container :last-child {\n  border-width: 0px;\n}\n\n.info-key {\n  font-size: 16px;\n  color: black;\n}\n\n.info-val {\n  color: #808285;\n  font-size: 16px;\n  font-family: \"Poppins Regular\";\n}\n\n.info-item {\n  border-bottom: #7f132a solid;\n  border-width: 1px;\n  font-family: \"Poppins Regular\";\n  padding-top: 10px;\n}\n\n.btn-send {\n  margin-top: 20px;\n  background: #7F132A;\n  height: 30px;\n  font-family: \"Poppins Black\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGQTtFQUVJLGlCQUFBO0FBSUo7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUhJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFLUjs7QUFKUTtFQUNJLGNBQUE7QUFNWjs7QUFEQTtFQUNJLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQU1KOztBQUpBO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsNEJBQUE7QUFLSiIsImZpbGUiOiJ3b3JrZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2YxMzJhO1xuICAgIGhlaWdodDogMTIwcHg7XG59XG4ud29ya2VyLWRldGFpbC1wYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTIwcHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuLnByb2ZpbGUtaW1hZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXI6ICNmZmZmZmYgc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XG59XG4uY29udGFjdC1idG4ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1oZWFkLWNvbnRhaW5lciB7XG4gICAgLy8gcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG5cbiAgICAvLyB6LWluZGV4OiA5OTtcbn1cbi5tYWluLWRldGFpbC1jb250YWluZXIgaW9uLXJvd3tcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW4tZGV0YWlsLWNvbnRhaW5lciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU3ZTg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yaWdodDogIzdmMTMyYSBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgY29sb3I6ICM3RjEzMkE7XG4gICAgICAgIH1cblxuICAgIH1cbn1cbi5tYWluLWRldGFpbC1jb250YWluZXIgOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xufVxuLmluZm8ta2V5e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uaW5mby12YWx7XG4gICAgY29sb3I6ICM4MDgyODU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgUmVndWxhclwiO1xufVxuLmluZm8taXRlbXtcbiAgICBib3JkZXItYm90dG9tOiAjN2YxMzJhIHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgUmVndWxhclwiO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnByb2ZpbGUtY29sIHtcbn1cbi5idG4tc2VuZHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICM3RjEzMkE7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgQmxhY2tcIjtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_worker-detail_worker-detail_module_ts.js.map