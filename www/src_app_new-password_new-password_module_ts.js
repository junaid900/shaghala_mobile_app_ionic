"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_new-password_new-password_module_ts"],{

/***/ 92328:
/*!*************************************************************!*\
  !*** ./src/app/new-password/new-password-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPasswordPageRoutingModule": () => (/* binding */ NewPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _new_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-password.page */ 9954);




const routes = [
    {
        path: '',
        component: _new_password_page__WEBPACK_IMPORTED_MODULE_0__.NewPasswordPage
    }
];
let NewPasswordPageRoutingModule = class NewPasswordPageRoutingModule {
};
NewPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewPasswordPageRoutingModule);



/***/ }),

/***/ 99253:
/*!*****************************************************!*\
  !*** ./src/app/new-password/new-password.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPasswordPageModule": () => (/* binding */ NewPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _new_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-password-routing.module */ 92328);
/* harmony import */ var _new_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-password.page */ 9954);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let NewPasswordPageModule = class NewPasswordPageModule {
};
NewPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewPasswordPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_new_password_page__WEBPACK_IMPORTED_MODULE_1__.NewPasswordPage]
    })
], NewPasswordPageModule);



/***/ }),

/***/ 9954:
/*!***************************************************!*\
  !*** ./src/app/new-password/new-password.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPasswordPage": () => (/* binding */ NewPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-password.page.html */ 12360);
/* harmony import */ var _new_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-password.page.scss */ 6234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utils.service */ 44516);











let NewPasswordPage = class NewPasswordPage {
    constructor(router, navCtrl, route, util, api, translation) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.util = util;
        this.api = api;
        this.translation = translation;
        this.data = {};
        this.error = false;
        this.password = '';
        this.confirmPassword = '';
        this.route.queryParams.subscribe(res => {
            console.log(res);
            if (res.data) {
                try {
                    this.data = JSON.parse((0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.convertFromBase64)(res.data));
                    console.log(this.data);
                }
                catch (e) {
                    console.log(e);
                    this.error = true;
                }
            }
        });
    }
    resetPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.data.user_id) {
                this.util.showToast("Invalid request");
                return;
            }
            if (this.password.length < 8) {
                this.util.showToast("Phone number length cannot be less then 8");
                return;
            }
            if (this.password != this.confirmPassword) {
                this.util.showToast("confirm password don't match");
                return;
            }
            this.util.showProgressDialog();
            var payload = {
                user_id: this.data.user_id,
                password: this.password
            };
            var response = yield this.api.postRequest(payload, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.resetPasswordSave);
            this.util.hideProgressDialog();
            if (response) {
                this.util.showToast(response.req_message);
                console.log(response);
                this.router.navigate(['login']);
                // this.userResponse= response;
                // this.signinWithPhone();
            }
        });
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
NewPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_5__.UtilsService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService }
];
NewPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-new-password',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_password_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_password_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewPasswordPage);



/***/ }),

/***/ 12360:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/new-password/new-password.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <img src=\"assets/images/setting.png\" alt=\"\">\n  </ion-col>\n</ion-row>\n\n<ion-content>\n  <div>\n\n  </div>\n  <div class=\"form-container\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"p0\">\n        <h1 class=\"heading p0 Poppins-SemiBold\">{{\"CREATE NEW PASSWORD\" | translate}}</h1>\n      </ion-col>\n      <ion-col size=\"12\" class=\"p0\">\n        <p class=\"m0 cwhite head-desc Poppins-SemiBold\">{{\"YOUR NEW PASSWORD MUST BE DIFFERENT FROM PREVIOUS USED PASSWORDS.\" | translate}}</p>\n      </ion-col>\n      <ion-col size=\"12\" class=\"p0 mt4\">\n        <h4 class=\"heading p0 Poppins-SemiBold\">{{\"USER DETAILS\" | translate}}</h4>\n      </ion-col>\n      <ion-col size=\"12\" class=\"p0\">\n        <p class=\"m0 cwhite head-desc Poppins-SemiBold\">{{data.name}}</p>\n      </ion-col>\n      <ion-col size=\"12\" class=\"p0\">\n        <p class=\"m0 cwhite head-desc Poppins-SemiBold\">{{data.email}}</p>\n      </ion-col>\n      <!-- <ion-col size=\"12\" class=\"mt10\"></ion-col> -->\n      <ion-col size=\"12\">\n        <ion-label>{{\"Password\" | translate}}</ion-label>\n        <ion-input [(ngModel)]=\"password\" type=\"password\" placeholder=\"********\"></ion-input> \n        <ion-label>{{\"Must be at least 8 characters\" | translate}}</ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>{{\"Confirm Password\" | translate}}</ion-label>\n        <ion-input [(ngModel)]=\"confirmPassword\" type=\"password\" placeholder=\"********\"></ion-input> \n        <ion-label>{{\"Both passwords must match\" | translate}}</ion-label>\n      </ion-col>\n      <!-- <ion-col size=\"12\">\n        <p class=\"cblack\">Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non.</p>\n      </ion-col> -->\n      <ion-col size=\"12\" class=\"ion-text-center button-container\">\n          <ion-button class=\"submit-button\" color=\"none\" (click)=\"resetPassword()\">\n            <ion-label>{{\"RESET PASSWORD\" | translate}}</ion-label>\n          </ion-button>\n      </ion-col>\n    </ion-row>\n    \n  </div>\n</ion-content>\n<ion-footer style=\"background-color: #7f132a;\">\n  <div class=\"ion-text-center\">\n    <img src=\"assets/images/app_login_logo.png\" class=\"mt10\" width=\"60%\" alt=\"\">\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ 6234:
/*!*****************************************************!*\
  !*** ./src/app/new-password/new-password.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #7f132a;\n}\n\n.heading {\n  color: #EEC626;\n  margin-bottom: 0px;\n}\n\n.head-desc {\n  font-size: 12px;\n}\n\n.form-container {\n  font-size: 14px;\n  color: white;\n  padding: 0px 28px 0px 28px;\n}\n\n.form-container ion-input {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  background: white;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container ion-select {\n  color: #6c7480;\n  border-radius: 4px;\n  background: white;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container .other {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  background: white;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.button-container {\n  margin-top: 30px;\n}\n\n.submit-button {\n  background: white;\n  width: 100%;\n  margin: 0px;\n  --border-radius: 4px;\n  border-radius: 4px;\n  box-shadow: 0;\n  height: 28px;\n  color: #7f132a;\n}\n\n.submit-button ion-label {\n  font-family: \"Poppins Black\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBSUo7O0FBSEk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS1I7O0FBSEk7RUFDSSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUlSOztBQUZJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSVI7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFJSjs7QUFISTtFQUNJLDRCQUFBO0FBS1IiLCJmaWxlIjoibmV3LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICM3ZjEzMmE7XG59XG4uaGVhZGluZ3tcbiAgICBjb2xvcjogI0VFQzYyNjtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uaGVhZC1kZXNje1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMjhweCAwcHggMjhweDtcbiAgICBpb24taW5wdXQge1xuICAgICAgICBjb2xvcjogIzZjNzQ4MDtcbiAgICAgICAgYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgY29sb3I6ICM2Yzc0ODA7XG4gICAgICAgIC8vIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLm90aGVyIHtcbiAgICAgICAgY29sb3I6ICM2Yzc0ODA7XG4gICAgICAgIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIC8vIGhlaWdodDogMzBweDtcbiAgICB9XG59XG4uYnV0dG9uLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnN1Ym1pdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwO1xuICAgIGhlaWdodDogMjhweDtcbiAgICBjb2xvcjogIzdmMTMyYTtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgQmxhY2tcIjtcbiAgICB9XG4gICAgLy8gd2lkdGg6IDEwMHB4O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_new-password_new-password_module_ts.js.map