"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_complain-center_complain-center_module_ts"],{

/***/ 16136:
/*!*******************************************************************!*\
  !*** ./src/app/complain-center/complain-center-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplainCenterPageRoutingModule": () => (/* binding */ ComplainCenterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _complain_center_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complain-center.page */ 29976);




const routes = [
    {
        path: '',
        component: _complain_center_page__WEBPACK_IMPORTED_MODULE_0__.ComplainCenterPage
    }
];
let ComplainCenterPageRoutingModule = class ComplainCenterPageRoutingModule {
};
ComplainCenterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComplainCenterPageRoutingModule);



/***/ }),

/***/ 84317:
/*!***********************************************************!*\
  !*** ./src/app/complain-center/complain-center.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplainCenterPageModule": () => (/* binding */ ComplainCenterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _complain_center_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./complain-center-routing.module */ 16136);
/* harmony import */ var _complain_center_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complain-center.page */ 29976);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let ComplainCenterPageModule = class ComplainCenterPageModule {
};
ComplainCenterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _complain_center_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComplainCenterPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        ],
        declarations: [_complain_center_page__WEBPACK_IMPORTED_MODULE_1__.ComplainCenterPage]
    })
], ComplainCenterPageModule);



/***/ }),

/***/ 29976:
/*!*********************************************************!*\
  !*** ./src/app/complain-center/complain-center.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComplainCenterPage": () => (/* binding */ ComplainCenterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complain_center_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./complain-center.page.html */ 41503);
/* harmony import */ var _complain_center_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complain-center.page.scss */ 81057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 94219);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utils.service */ 44516);












let ComplainCenterPage = class ComplainCenterPage {
    constructor(router, navCtrl, translate, api, util) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.api = api;
        this.util = util;
        this.selectedType = 'comp';
        this.isLoading = false;
        this.deptList = [];
        this.formData = {};
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.departmentApi);
            this.isLoading = false;
            this.deptList = response;
            if (response) {
                console.log(response);
                this.deptList = response;
            }
        });
    }
    ngOnInit() {
        this.getPageData();
    }
    goBack() {
        this.navCtrl.back();
    }
    changeType(type) {
        this.selectedType = type;
    }
    send() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.formData.dept_id) {
                this.util.showToast("Please select a department");
                return;
            }
            if (!this.formData.message) {
                this.util.showToast("Please message field cannot be empty");
                return;
            }
            if (this.formData.message.length < 10) {
                this.util.showToast('Message length must be greater then 10');
                return;
            }
            if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().type != 'local')
                this.formData.user_id = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id;
            else
                this.formData.user_id = (yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getId()).uuid;
            this.formData.type = this.selectedType == "comp" ? "Complain" : "Suggestion";
            this.util.showProgressDialog();
            var response = yield this.api.postRequest(this.formData, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.addComplainApi);
            this.util.hideProgressDialog();
            if (response) {
                console.log(response);
                this.navCtrl.back();
            }
        });
    }
};
ComplainCenterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService }
];
ComplainCenterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-complain-center',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_complain_center_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_complain_center_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComplainCenterPage);



/***/ }),

/***/ 41503:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/complain-center/complain-center.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n\n<ion-content>\n  <div class=\"top-container\">\n    <ion-row>\n      <ion-col size=\"9\">\n        <h1 class=\"heading m0\">{{\"Complaints and suggestions\" | translate}} </h1>\n      </ion-col>\n      <ion-col size=\"3\" class=\"d-flex ion-align-items-center\">\n        <img src=\"assets/images/edit-setting.png\" width=\"40px\" height=\"40px\" alt=\"\">\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row>\n    <ion-col size=\"12\" class=\"d-flex ion-justify-content-center mt10\">\n      <div class=\"comp-type-container\">\n        <div (click)=\"changeType('sugg')\"\n          [ngClass]=\"selectedType == 'sugg'?'comp-item-container-active':'comp-item-container'\" class=\"touch-opacity\">\n          <ion-label class=\"individual-label\">\n            {{\"Suggestions\" | translate}}\n          </ion-label>\n        </div>\n        <div (click)=\"changeType('comp')\"\n          [ngClass]=\"selectedType == 'comp'?'comp-item-container-active':'comp-item-container'\" class=\"touch-opacity\">\n          {{\"Complaint\" | translate}}\n        </div>\n      </div>\n    </ion-col>\n    <ion-col>\n      <p class=\"m0 cblack desc\">{{\"We are happy to have suggestions that you have to help us develop the application, if you have a complaint, please click on the complaint button\" | translate}}</p>\n    </ion-col>\n    <ion-col size=\"12\" class=\"d-flex justify-content-center align-items-center\" *ngIf=\"isLoading\">\n      <ion-spinner name=\"\"></ion-spinner>\n    </ion-col>\n    <ion-col size=\"12\" *ngIf=\"!isLoading\">\n      <div class=\"form-container\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label>{{\"Department\" | translate}}</ion-label>\n            <ion-select [(ngModel)]=\"formData.dept_id\" placeholder=\"{{'Choose Department' | translate}}\">\n              <ion-select-option *ngFor=\"let item of deptList\" value=\"{{item.dept_id}}\">{{item.dept_name}}</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-label>{{'Message' | translate}}</ion-label>\n            <ion-textarea [(ngModel)]=\"formData.message\" class=\"other\" placeholder=\"{{'Write your message here......' | translate}}\"></ion-textarea>\n          </ion-col>\n          <ion-col size=\"12\">\n            <!-- <ion-label>Message</ion-label> -->\n            <ion-button (click)=\"send()\" class=\"btn-send\" color=\"none\">{{'Send' | translate}}</ion-button>\n          </ion-col>\n\n        </ion-row>  \n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>");

/***/ }),

/***/ 81057:
/*!***********************************************************!*\
  !*** ./src/app/complain-center/complain-center.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".top-container {\n  background: #7F132A;\n  padding-top: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n}\n\n.heading {\n  color: white;\n  font-family: \"MyriadPro Bold\";\n}\n\n.desc {\n  font-size: 12px;\n  padding: 4px 14px 4px 14px;\n  text-align: center;\n}\n\n.form-container {\n  font-size: 12px;\n  color: #7f132a;\n  padding: 0px 28px 0px 28px;\n}\n\n.form-container ion-input {\n  color: #6C7480;\n  background-color: #F1F2F2;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container ion-select {\n  color: #6C7480;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n  background-color: #F1F2F2;\n}\n\n.form-container ion-select ion-label {\n  flex: none !important;\n}\n\n.form-container .other {\n  color: #6C7480;\n  background-color: #F1F2F2;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.comp-type-container {\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: 80px;\n  background: #E6E7E8;\n  border-radius: 12px;\n}\n\n.comp-type-container .comp-item-container {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 16px;\n  text-align: center;\n  margin: auto;\n  color: #7F132A;\n}\n\n.comp-type-container .comp-item-container-active {\n  width: 50%;\n  padding: 3px 0px 3px 0px;\n  font-size: 14px;\n  height: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #7F132A;\n  color: white;\n  border-radius: 12px;\n}\n\nion-select::part(icon) {\n  align-content: flex-start;\n}\n\n.btn-send {\n  margin-top: 20px;\n  background: #7F132A;\n  width: 100%;\n  height: 30px;\n  font-family: \"Poppins Black\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsYWluLWNlbnRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBSUo7O0FBSEk7RUFDSSxjQUFBO0VBR0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFHUjs7QUFESTtFQUNJLGNBQUE7RUFHQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNSOztBQUNRO0VBRUkscUJBQUE7QUFDWjs7QUFFSTtFQUNJLGNBQUE7RUFFQSx5QkFBQTtFQUdBLGVBQUE7RUFDQSxlQUFBO0FBSFI7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFNSTtFQUNJLFVBQUE7RUFFQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBTFI7O0FBT0k7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUxSOztBQVFBO0VBQ0kseUJBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBTEoiLCJmaWxlIjoiY29tcGxhaW4tY2VudGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQ6ICM3RjEzMkE7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uaGVhZGluZ3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvIEJvbGRcIjtcbn1cbi5kZXNje1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiA0cHggMTRweCA0cHggMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybS1jb250YWluZXJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjN2YxMzJhO1xuICAgIHBhZGRpbmc6IDBweCAyOHB4IDBweCAyOHB4O1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgY29sb3I6ICM2Qzc0ODA7XG4gICAgICAgIC8vIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkYyO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICBpb24tc2VsZWN0e1xuICAgICAgICBjb2xvcjogIzZDNzQ4MDtcbiAgICAgICAgLy8gYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYyRjI7XG5cbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgLXdlYmtpdC1mbGV4OiBub25lIWltcG9ydGFudDsgXG4gICAgICAgICAgICBmbGV4OiBub25lIWltcG9ydGFudDsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgLm90aGVye1xuICAgICAgICBjb2xvcjogIzZDNzQ4MDtcbiAgICAgICAgLy8gYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMkYyO1xuXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIC8vIGhlaWdodDogMzBweDtcbiAgICB9XG59XG4uY29tcC10eXBlLWNvbnRhaW5lcntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTZFN0U4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgLy8gbWFyZ2luOiAyMHB4IDBweCAxMHB4IDEwcHg7XG4gICAgLmNvbXAtaXRlbS1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIC8vIGhlaWdodDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogM3B4IDBweCAzcHggMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBjb2xvcjojN0YxMzJBO1xuICAgIH1cbiAgICAuY29tcC1pdGVtLWNvbnRhaW5lci1hY3RpdmV7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3RjEzMkE7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB9XG59XG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIFxufVxuLmJ0bi1zZW5ke1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzdGMTMyQTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBCbGFja1wiO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_complain-center_complain-center_module_ts.js.map