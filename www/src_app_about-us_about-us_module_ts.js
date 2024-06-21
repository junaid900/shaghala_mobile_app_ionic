"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_about-us_about-us_module_ts"],{

/***/ 35925:
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageRoutingModule": () => (/* binding */ AboutUsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 71536);




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ 95290:
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageModule": () => (/* binding */ AboutUsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us-routing.module */ 35925);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page */ 71536);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/component.module */ 87721);









let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutUsPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_1__.AboutUsPage]
    })
], AboutUsPageModule);



/***/ }),

/***/ 71536:
/*!*******************************************!*\
  !*** ./src/app/about-us/about-us.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPage": () => (/* binding */ AboutUsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about-us.page.html */ 10153);
/* harmony import */ var _about_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page.scss */ 84762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/browser */ 39337);









let AboutUsPage = class AboutUsPage {
    constructor(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.isLoading = false;
        this.settings = {};
        this.lang = (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_4__.getLang)();
    }
    ngOnInit() {
        this.getPageData();
    }
    goBack() {
        this.navCtrl.back();
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.appSettingApi);
            this.isLoading = false;
            if (response) {
                this.settings = response;
            }
            console.log(response);
        });
    }
    openBrowser(link) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__.Browser.open({ url: link });
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
};
AboutUsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
AboutUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-about-us',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_us_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_about_us_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutUsPage);



/***/ }),

/***/ 10153:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/about-us/about-us.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <ion-title>\n        {{\"About Us\" | translate}}\n    </ion-title>\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n<ion-content>\n  \n  <div class=\"logo-container\">\n    <div class=\"logo-img text-center pt10\">\n      <img src=\"assets/images/app_login_logo.png\" alt=\"Shkalah\" width=\"40%\">\n    </div>\n  </div>\n  <div class=\"pr10 pl10 m0  cblack\">\n    <h2 class=\"m0 pt4\">{{\"Terms And Conditions\"| translate}}</h2>\n    <p class=\"m0 cblack\"  *ngIf=\"lang == 'ar'\">{{settings['terms_ch_description']}}</p>\n    <p class=\"m0 cblack\" *ngIf=\"lang != 'ar'\">{{settings['terms_en_description']}}</p>\n  </div>\n  <div class=\"hr\"></div>\n  <div class=\"pr10 pl10 m0 cblack\">\n    <h2 class=\"m0 pt4\">{{\"Privacy\"|translate}}</h2>\n    <p class=\"m0\"  *ngIf=\"lang == 'ar'\">{{settings['privacy_ch_description']}}</p>\n    <p class=\"m0\"  *ngIf=\"lang != 'ar'\">{{settings['privacy_en_description']}}</p>\n  </div>\n  <div class=\"hr\"></div>\n\n  <div>\n    <ion-row>\n      <ion-col size=\"12\">\n        <h4 class=\"m0 pt10 cblack\">{{\"Contact Details\" | translate}}</h4>\n      </ion-col>\n      <ion-col>\n        <ion-row class=\" cblack\">\n          <ion-col size=\"4\" class=\"p0 pl10  cblack\">\n            <ion-label>\n              {{\"Email\" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"p0 d-flex align-items-center\">\n            <ion-label>\n              {{settings.email}}\n            </ion-label>  \n          </ion-col>\n          <ion-col size=\"4\" class=\"p0 pl10\">\n            <ion-label>\n              {{\"Phone\" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"p0 d-flex align-items-center\">\n            <ion-label>\n              {{settings.phone}}\n            </ion-label>  \n          </ion-col>\n          <ion-col size=\"12\" class=\"p0 hr\"></ion-col>\n\n          <ion-col size=\"12\" class=\"p0 pl10\">\n            <ion-label>\n              {{\"Address\" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"p0 pl4\">\n            <address class=\"pl10\">\n              \"{{settings.address}}\"\n            </address>  \n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"text-center\">\n        <ion-row>\n          <ion-col></ion-col>\n          <ion-col *ngIf=\"isValidHttpUrl(settings.tiktok)\" (click)=\"openBrowser(settings.tiktok)\">\n            <img src=\"assets/images/tik-tok.png\" alt=\"facebook\" width=\"30px\" >\n          </ion-col>\n          <ion-col *ngIf=\"isValidHttpUrl(settings.linkdin)\" (click)=\"openBrowser(settings.linkdin)\">\n            <img src=\"assets/images/linkedin.png\" alt=\"linkdin\" width=\"30px\" >\n          </ion-col>\n          <ion-col *ngIf=\"isValidHttpUrl(settings.instagram)\"  (click)=\"openBrowser(settings.instagram)\">\n            <img src=\"assets/images/instagram.png\" alt=\"instagram\" width=\"30px\" >\n          </ion-col>\n          <ion-col *ngIf=\"isValidHttpUrl(settings.facebook)\" (click)=\"openBrowser(settings.facebook)\">\n            <img src=\"assets/images/facebook.png\" alt=\"facebook\" width=\"30px\" >\n          </ion-col>\n          \n          <ion-col *ngIf=\"isValidHttpUrl(settings.twitter)\" (click)=\"openBrowser(settings.twitter)\">\n            <img src=\"assets/images/twitter.png\" alt=\"twitter\" width=\"30px\" >\n          </ion-col>\n          \n        \n         \n          <ion-col></ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n  <!-- <div class=\"hr\"></div> -->\n\n \n    \n</ion-content>");

/***/ }),

/***/ 84762:
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".top-container {\n  background: #7F132A;\n  padding: 10px;\n}\n\n.account-content {\n  padding: 30px 30px 0px 30px;\n}\n\n.txt-complete {\n  color: #EEC626;\n}\n\n.txt-name {\n  color: white;\n}\n\n.ac-item {\n  border-bottom: #231F20 solid;\n  border-width: 1px;\n  padding-top: 10px;\n}\n\n.ac-item-title {\n  font-family: \"Poppins SemiBold\";\n  font-size: 16px;\n  color: #7F132A;\n}\n\n.ac-item-detail {\n  font-size: 12px;\n  color: #231F20;\n  padding-left: 20px;\n  font-family: \"Poppins SemiBold\";\n}\n\n.ac-item-desc {\n  font-size: 8px;\n  color: #231F20;\n  padding-left: 20px;\n  font-family: \"Poppins SemiBold\";\n}\n\n.slider {\n  height: 100px;\n  width: 80%;\n}\n\n.slider img {\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksMkJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBTUo7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0FBT0o7O0FBTkk7RUFDSSxpQkFBQTtBQVFSIiwiZmlsZSI6ImFib3V0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQ6ICM3RjEzMkE7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5hY2NvdW50LWNvbnRlbnR7XG4gICAgcGFkZGluZzogMzBweCAzMHB4IDBweCAzMHB4O1xufVxuLnR4dC1jb21wbGV0ZXtcbiAgICBjb2xvcjogI0VFQzYyNjtcbn1cbi50eHQtbmFtZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYWMtaXRlbXtcbiAgICBib3JkZXItYm90dG9tOiAjMjMxRjIwIHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmFjLWl0ZW0tdGl0bGV7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBTZW1pQm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzdGMTMyQTtcblxufVxuLmFjLWl0ZW0tZGV0YWlse1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzIzMUYyMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBTZW1pQm9sZFwiO1xuXG59XG4uYWMtaXRlbS1kZXNje1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGNvbG9yOiAjMjMxRjIwO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIFNlbWlCb2xkXCI7XG59XG4uc2xpZGVye1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBpbWd7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_about-us_about-us_module_ts.js.map