"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_setting_setting_module_ts"],{

/***/ 84694:
/*!***************************************************!*\
  !*** ./src/app/setting/setting-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageRoutingModule": () => (/* binding */ SettingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.page */ 75760);




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_0__.SettingPage
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ 39726:
/*!*******************************************!*\
  !*** ./src/app/setting/setting.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageModule": () => (/* binding */ SettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-routing.module */ 84694);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page */ 75760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let SettingPageModule = class SettingPageModule {
};
SettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_1__.SettingPage]
    })
], SettingPageModule);



/***/ }),

/***/ 75760:
/*!*****************************************!*\
  !*** ./src/app/setting/setting.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPage": () => (/* binding */ SettingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_setting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./setting.page.html */ 64395);
/* harmony import */ var _setting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page.scss */ 56593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local.helper */ 75009);








let SettingPage = class SettingPage {
    constructor(router, navCtrl, translate) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.selectedType = 'en';
        this.translate.use((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_2__.getLang)());
        if ((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_2__.getLang)() == "ar") {
            this.selectedType = 'ar';
        }
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    changeType(type) {
        this.selectedType = type;
        if (type == 'en') {
            (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_2__.setLanguage)('en');
        }
        else {
            (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_2__.setLanguage)('ar');
        }
        location.reload();
    }
};
SettingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
SettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-setting',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_setting_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_setting_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingPage);



/***/ }),

/***/ 64395:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/setting/setting.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n\n<ion-content>\n  <div class=\"top-container\">\n    <ion-row>\n      <ion-col size=\"9\">\n        <h1 class=\"heading m0\">{{\"Settings\" | translate}}</h1>\n      </ion-col>\n      <ion-col size=\"3\" class=\"d-flex ion-align-items-center\">\n        <img src=\"assets/images/main-setting.png\" width=\"40px\" height=\"40px\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <ion-label class=\"choose-lang\">{{\"Choose Language\" | translate}}</ion-label>\n    </ion-col>\n    <ion-col size=\"12\" class=\"d-flex ion-justify-content-center align-items-center\">\n      <div class=\"comp-type-container\">\n        <div (click)=\"changeType('en')\"\n          [ngClass]=\"selectedType == 'en'?'comp-item-container-active':'comp-item-container'\" \n          class=\"touch-opacity\">\n          <ion-label class=\"individual-label\">\n            English\n          </ion-label>\n        </div>\n        <div (click)=\"changeType('ar')\"\n          [ngClass]=\"selectedType == 'ar'?'comp-item-container-active':'comp-item-container'\" class=\"touch-opacity\">\n          العربية\n        </div>\n      </div>\n    </ion-col>\n    <!-- <ion-col>\n      <p class=\"m0 cblack desc\">We are happy to have suggestions that you have to help us develop the application, if\n        you have a complaint, please click on the complaint button</p>\n    </ion-col> -->\n    <ion-col size=\"12\">\n      <div class=\"form-container\">\n        <ion-row>\n          <!-- <ion-col size=\"12\">\n            <ion-label>Email address</ion-label>\n            <ion-select placeholder=\"Choose Department\">\n              <ion-select-option>Select </ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-label>Message</ion-label>\n            <ion-textarea class=\"other\" placeholder=\"Write your message here......\"></ion-textarea>\n          </ion-col> -->\n          <ion-col size=\"12\">\n            <!-- <ion-label>Message</ion-label> -->\n            <!-- <ion-button class=\"btn-send\" color=\"none\">Login</ion-button> -->\n          </ion-col>\n\n        </ion-row>  \n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>");

/***/ }),

/***/ 56593:
/*!*******************************************!*\
  !*** ./src/app/setting/setting.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".top-container {\n  background: #7F132A;\n  padding-top: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n}\n\n.heading {\n  color: white;\n  font-family: \"MyriadPro Bold\";\n}\n\n.desc {\n  font-size: 12px;\n  padding: 4px 14px 4px 14px;\n  text-align: center;\n}\n\n.form-container {\n  font-size: 12px;\n  color: #7f132a;\n  padding: 0px 28px 0px 28px;\n}\n\n.form-container ion-input {\n  color: #6C7480;\n  background-color: #F1F2F2;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container ion-select {\n  color: #6C7480;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n  background-color: #F1F2F2;\n}\n\n.form-container ion-select ion-label {\n  flex: none !important;\n}\n\n.form-container .other {\n  color: #6C7480;\n  background-color: #F1F2F2;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.comp-type-container {\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: 80px;\n  background: #E6E7E8;\n  border-radius: 12px;\n}\n\n.comp-type-container .comp-item-container {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 16px;\n  text-align: center;\n  margin: auto;\n  color: #7F132A;\n}\n\n.comp-type-container .comp-item-container-active {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 14px;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #7F132A;\n  color: white;\n  border-radius: 12px;\n}\n\nion-select::part(icon) {\n  align-content: flex-start;\n}\n\n.btn-send {\n  margin-top: 20px;\n  background: #7F132A;\n  width: 100%;\n  height: 30px;\n  font-family: \"Poppins Black\";\n}\n\n.choose-lang {\n  color: black;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQUlKOztBQUhJO0VBQ0ksY0FBQTtFQUdBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBR1I7O0FBREk7RUFDSSxjQUFBO0VBR0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDUjs7QUFDUTtFQUVJLHFCQUFBO0FBQ1o7O0FBRUk7RUFDSSxjQUFBO0VBRUEseUJBQUE7RUFHQSxlQUFBO0VBQ0EsZUFBQTtBQUhSOztBQVFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBT0k7RUFDSSxVQUFBO0VBRUEsd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQU5SOztBQVFJO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFOUjs7QUFTQTtFQUNJLHlCQUFBO0FBTko7O0FBU0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQU5KOztBQVFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFMSiIsImZpbGUiOiJzZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQ6ICM3RjEzMkE7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uaGVhZGluZ3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvIEJvbGRcIjtcbn1cbi5kZXNje1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA0cHggMTRweCA0cHggMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybS1jb250YWluZXJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjN2YxMzJhO1xuICAgIHBhZGRpbmc6IDBweCAyOHB4IDBweCAyOHB4O1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgY29sb3I6ICM2Qzc0ODA7XG4gICAgICAgIC8vIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkYyO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICBpb24tc2VsZWN0e1xuICAgICAgICBjb2xvcjogIzZDNzQ4MDtcbiAgICAgICAgLy8gYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjI7XG5cbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgLXdlYmtpdC1mbGV4OiBub25lIWltcG9ydGFudDsgXG4gICAgICAgICAgICBmbGV4OiBub25lIWltcG9ydGFudDsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgLm90aGVye1xuICAgICAgICBjb2xvcjogIzZDNzQ4MDtcbiAgICAgICAgLy8gYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkYyO1xuXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIC8vIGhlaWdodDogMzBweDtcbiAgICB9XG59XG5cbi5jb21wLXR5cGUtY29udGFpbmVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJhY2tncm91bmQ6ICNFNkU3RTg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAvLyBtYXJnaW46IDIwcHggMHB4IDEwcHggMTBweDtcbiAgICAuY29tcC1pdGVtLWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAzcHggMHB4IDNweCAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGNvbG9yOiM3RjEzMkE7XG4gICAgfVxuICAgIC5jb21wLWl0ZW0tY29udGFpbmVyLWFjdGl2ZXtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZzogM3B4IDBweCAzcHggMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdGMTMyQTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIH1cbn1cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgXG59XG4uYnRuLXNlbmR7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjN0YxMzJBO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIEJsYWNrXCI7XG59XG4uY2hvb3NlLWxhbmd7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_setting_setting_module_ts.js.map