"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_check-email_check-email_module_ts"],{

/***/ 60645:
/*!***********************************************************!*\
  !*** ./src/app/check-email/check-email-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckEmailPageRoutingModule": () => (/* binding */ CheckEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _check_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-email.page */ 84583);




const routes = [
    {
        path: '',
        component: _check_email_page__WEBPACK_IMPORTED_MODULE_0__.CheckEmailPage
    }
];
let CheckEmailPageRoutingModule = class CheckEmailPageRoutingModule {
};
CheckEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckEmailPageRoutingModule);



/***/ }),

/***/ 59631:
/*!***************************************************!*\
  !*** ./src/app/check-email/check-email.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckEmailPageModule": () => (/* binding */ CheckEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _check_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-email-routing.module */ 60645);
/* harmony import */ var _check_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-email.page */ 84583);







let CheckEmailPageModule = class CheckEmailPageModule {
};
CheckEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _check_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckEmailPageRoutingModule
        ],
        declarations: [_check_email_page__WEBPACK_IMPORTED_MODULE_1__.CheckEmailPage]
    })
], CheckEmailPageModule);



/***/ }),

/***/ 84583:
/*!*************************************************!*\
  !*** ./src/app/check-email/check-email.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckEmailPage": () => (/* binding */ CheckEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_check_email_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./check-email.page.html */ 41652);
/* harmony import */ var _check_email_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-email.page.scss */ 49982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 78099);





let CheckEmailPage = class CheckEmailPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
CheckEmailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
CheckEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-check-email',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_check_email_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_check_email_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckEmailPage);



/***/ }),

/***/ 41652:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/check-email/check-email.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <img src=\"assets/images/setting.png\" alt=\"\">\n  </ion-col>\n</ion-row>\n\n<ion-content>\n  <div>\n\n  </div>\n  <div class=\"form-container\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"p0\">\n        <h1 class=\"heading p0 Poppins-SemiBold\">CHECK YOUR MAIL</h1>\n      </ion-col>\n      <ion-col size=\"12\" class=\"p0\">\n        <p class=\"m0 cwhite head-desc Poppins-SemiBold\">WE HAVE SENT A PASSWORD RECOVER INSTRUCTIONS TO YOUR EMAIL.</p>\n      </ion-col>\n      <!-- <ion-col size=\"12\">\n        <p class=\"cblack\">Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non.</p>\n      </ion-col> -->\n      <ion-col size=\"12\" class=\"ion-text-center button-container\">\n        <ion-button class=\"submit-button\" color=\"none\">\n          <ion-label>SEND INSTRUCTIONS</ion-label>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center button-container mt0\">\n        <ion-button class=\"submit-button m0\" color=\"none\" routerLink=\"/otp\">\n          <ion-label>Verify</ion-label>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-label>Skip, I'll confirm later</ion-label>\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <div class=\"ion-text-center\">\n    <img src=\"assets/images/app_login_logo.png\" class=\"mt10\" width=\"60%\" alt=\"\">\n  </div>\n</ion-footer>");

/***/ }),

/***/ 49982:
/*!***************************************************!*\
  !*** ./src/app/check-email/check-email.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #7f132a;\n}\n\nion-footer {\n  background: #7f132a;\n}\n\n.heading {\n  color: #EEC626;\n  margin-bottom: 0px;\n}\n\n.head-desc {\n  font-size: 12px;\n}\n\n.form-container {\n  font-size: 14px;\n  color: white;\n  padding: 0px 28px 0px 28px;\n}\n\n.form-container ion-input {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  background: white;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container ion-select {\n  color: #6c7480;\n  border-radius: 4px;\n  background: white;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container .other {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  background: white;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.button-container {\n  margin-top: 30px;\n}\n\n.submit-button {\n  background: white;\n  width: 100%;\n  margin: 0px;\n  --border-radius: 4px;\n  border-radius: 4px;\n  box-shadow: 0;\n  height: 28px;\n  color: #7f132a;\n}\n\n.submit-button ion-label {\n  font-family: \"Poppins Black\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLWVtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBS0o7O0FBSkk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBTVI7O0FBSkk7RUFDSSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUtSOztBQUhJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBS1I7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFLSjs7QUFKSTtFQUNJLDRCQUFBO0FBTVIiLCJmaWxlIjoiY2hlY2stZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogIzdmMTMyYTtcbn1cbmlvbi1mb290ZXJ7XG4gICAgYmFja2dyb3VuZDogIzdmMTMyYTtcbn1cbi5oZWFkaW5ne1xuICAgIGNvbG9yOiAjRUVDNjI2O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5oZWFkLWRlc2N7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAyOHB4IDBweCAyOHB4O1xuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGNvbG9yOiAjNmM3NDgwO1xuICAgICAgICBib3JkZXI6ICM3MDcwNzAgc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBjb2xvcjogIzZjNzQ4MDtcbiAgICAgICAgLy8gYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAub3RoZXIge1xuICAgICAgICBjb2xvcjogIzZjNzQ4MDtcbiAgICAgICAgYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgLy8gaGVpZ2h0OiAzMHB4O1xuICAgIH1cbn1cbi5idXR0b24tY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uc3VibWl0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDA7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGNvbG9yOiAjN2YxMzJhO1xuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBCbGFja1wiO1xuICAgIH1cbiAgICAvLyB3aWR0aDogMTAwcHg7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_check-email_check-email_module_ts.js.map