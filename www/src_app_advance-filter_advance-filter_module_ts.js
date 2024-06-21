"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_advance-filter_advance-filter_module_ts"],{

/***/ 6065:
/*!*****************************************************************!*\
  !*** ./src/app/advance-filter/advance-filter-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvanceFilterPageRoutingModule": () => (/* binding */ AdvanceFilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _advance_filter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advance-filter.page */ 33816);




const routes = [
    {
        path: '',
        component: _advance_filter_page__WEBPACK_IMPORTED_MODULE_0__.AdvanceFilterPage
    }
];
let AdvanceFilterPageRoutingModule = class AdvanceFilterPageRoutingModule {
};
AdvanceFilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdvanceFilterPageRoutingModule);



/***/ }),

/***/ 51874:
/*!*********************************************************!*\
  !*** ./src/app/advance-filter/advance-filter.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvanceFilterPageModule": () => (/* binding */ AdvanceFilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _advance_filter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advance-filter-routing.module */ 6065);
/* harmony import */ var _advance_filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advance-filter.page */ 33816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let AdvanceFilterPageModule = class AdvanceFilterPageModule {
};
AdvanceFilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _advance_filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvanceFilterPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_advance_filter_page__WEBPACK_IMPORTED_MODULE_1__.AdvanceFilterPage]
    })
], AdvanceFilterPageModule);



/***/ }),

/***/ 33816:
/*!*******************************************************!*\
  !*** ./src/app/advance-filter/advance-filter.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvanceFilterPage": () => (/* binding */ AdvanceFilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_advance_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./advance-filter.page.html */ 17514);
/* harmony import */ var _advance_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advance-filter.page.scss */ 17888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);









let AdvanceFilterPage = class AdvanceFilterPage {
    constructor(navCtrl, router, api, translate) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.api = api;
        this.translate = translate;
        this.isLoading = false;
        this.pageData = {};
        this.formData = {};
        this.getPageData();
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getWorkerPageApi);
            this.isLoading = false;
            if (response) {
                this.pageData = response;
                console.log(this.pageData);
            }
        });
    }
    ionViewDidEnter() {
    }
    counter(i) {
        return new Array(i);
    }
    apply() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.formData);
            let navigationExtras = {
                queryParams: {
                    type: "adv-filter",
                    payload: JSON.stringify(this.formData)
                }
            };
            this.router.navigate(['worker-list'], navigationExtras);
        });
    }
};
AdvanceFilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
AdvanceFilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-advance-filter',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_advance_filter_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_advance_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdvanceFilterPage);



/***/ }),

/***/ 17514:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/advance-filter/advance-filter.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <!-- <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <img src=\"assets/images/setting.png\" alt=\"\">\n  </ion-col> -->\n</ion-row>\n\n<ion-content>\n  <div *ngIf=\"isLoading\" class=\"h100 d-flex justify-content-center align-items-center\">\n    <ion-spinner color=\"white\"></ion-spinner>\n  </div>\n  <div class=\"form-container\" *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"p0\">\n        <h1 class=\"heading p0\">{{\"ADVANCE SEARCH\" | translate}}</h1>\n      </ion-col>\n      <ion-col size=\"12\" class=\"p0\">\n        <p class=\"m0 cwhite head-desc\">{{\"Filter content to me selection more easier\" | translate}}</p>\n      </ion-col>\n      <ion-col size=\"12\" class=\"mt10\"></ion-col>\n      <ion-col size=\"12\">\n        <ion-label>{{\"Country\" | translate}}</ion-label>\n        <!-- <ion-input placeholder=\"KARINA BUYS\"></ion-input> -->\n        <ion-select placeholder=\"{{'Country' | translate}}\" [(ngModel)]=\"formData.country\">\n          <ion-select-option *ngFor=\"let item of pageData.countries\" value=\"{{item.country_id}}\">{{item.name}}\n          </ion-select-option>\n          <!-- <ion-select-option>Sudia</ion-select-option> -->\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>{{\"Age Range\" | translate}}</ion-label>\n        <!-- <ion-input placeholder=\"KARINA BUYS\"></ion-input> -->\n        <ion-select placeholder=\"eg: 10 to 20\" [(ngModel)]=\"formData.age\">\n          <ion-select-option *ngFor='let item of counter(10) ;let i = index'\n            value=\"{{(i + 1) * 10}} - {{((i+1) * 10)+10}}\">\n            {{(i + 1) * 10}} to {{((i+1) * 10)+10}}\n          </ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-label>{{\"Religion\" | translate}}</ion-label>\n        <!-- <ion-input placeholder=\"KARINA BUYS\"></ion-input> -->\n        <ion-select placeholder=\"{{'eg: Muslim' | translate}}\" [(ngModel)]=\"formData.religion\">\n          <ion-select-option *ngFor=\"let item of pageData.religion\" value=\"{{item}}\">{{item}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col size=\"5.6\" class=\"m0 p0\">\n            <ion-label>{{\"Salary\" | translate}}</ion-label>\n            <ion-select placeholder=\"{{'eg: From' | translate}}\" [(ngModel)]=\"formData.salaryFrom\">\n              <ion-select-option *ngFor='let item of counter(100) ;let i = index' value=\"{{(i + 1) * 1000}}\">\n                {{(i + 1) * 1000}}\n              </ion-select-option>\n\n            </ion-select>\n          </ion-col>\n          <ion-col size=\".8\"></ion-col>\n          <ion-col size=\"5.6\" class=\"m0 p0 ml4\">\n            <ion-label>{{\"To\" | translate}}</ion-label>\n            <ion-select placeholder=\"{{'eg: To' | translate}}\" [(ngModel)]=\"formData.salaryTo\">\n              <ion-select-option *ngFor='let item of counter(100) ;let i = index' value=\"{{(i + 1) * 1000}}\">\n                {{(i + 1) * 1000}}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <!-- <ion-col size=\"12\"> -->\n      <ion-col size=\"12\" class=\"p0\">\n        <h4 class=\"heading p0\">{{\"Sort\" | translate}}</h4>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col size=\"5.6\" class=\"m0 p0\">\n            <ion-label>{{\"Sort By\" | translate}}</ion-label>\n            <ion-select placeholder=\"{{'Sort By' | translate}}\" [(ngModel)]=\"formData.sort_by\">\n              <ion-select-option value=\"age\">\n                {{\"Age\"|translate}}\n              </ion-select-option>\n              <ion-select-option value=\"salary\">\n                {{\"Salary\"|translate}}\n              </ion-select-option>\n              <ion-select-option value=\"country_id\">\n                {{\"Place of living\" | translate}}\n              </ion-select-option>\n              <ion-select-option value=\"advs_type\">\n                {{\"Ad Type\" | translate}}\n              </ion-select-option>\n              <ion-select-option value=\"name\">\n                {{\"Worker Name\" | translate}}\n              </ion-select-option>\n              <ion-select-option value=\"created_at\">\n                {{\"New\" | translate}}\n              </ion-select-option>\n\n            </ion-select>\n          </ion-col>\n          <ion-col size=\".8\"></ion-col>\n          <ion-col size=\"5.6\" class=\"m0 p0 ml4\">\n            <ion-label>{{\"ASC/DESC\" | translate}}</ion-label>\n            <ion-select placeholder='{{\"eg: By Order\" | translate}}' [(ngModel)]=\"formData.sort_order\">\n              <ion-select-option value=\"asc\">\n                {{\"Ascending\" | translate}}\n              </ion-select-option>\n              <ion-select-option value=\"asc\">\n                {{\"Descending\" | translate}}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <!-- </ion-col> -->\n\n      <!-- <ion-col size=\"12\">\n        <p class=\"cblack\">Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non.</p>\n      </ion-col> -->\n      <ion-col size=\"12\" class=\"ion-text-center button-container\">\n        <ion-button (click)=\"apply()\" class=\"submit-button\" color=\"none\">\n          <ion-label>{{\"APPLY\" | translate}}</ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ 17888:
/*!*********************************************************!*\
  !*** ./src/app/advance-filter/advance-filter.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #7f132a;\n}\n\n.heading {\n  color: #EEC626;\n  margin-bottom: 0px;\n}\n\n.head-desc {\n  font-size: 12px;\n}\n\n.form-container {\n  font-size: 14px;\n  color: white;\n  padding: 0px 28px 0px 28px;\n}\n\n.form-container ion-input {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  background: white;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container ion-select {\n  color: #6c7480;\n  border-radius: 4px;\n  background: white;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container .other {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  background: white;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.button-container {\n  margin-top: 30px;\n}\n\n.submit-button {\n  background: white;\n  width: 100%;\n  margin: 0px;\n  --border-radius: 4px;\n  border-radius: 4px;\n  box-shadow: 0;\n  height: 28px;\n  color: #7f132a;\n}\n\n.submit-button ion-label {\n  font-family: \"Poppins Black\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFuY2UtZmlsdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFJSjs7QUFISTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFLUjs7QUFISTtFQUNJLGNBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSVI7O0FBRkk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFJUjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUhJO0VBQ0ksNEJBQUE7QUFLUiIsImZpbGUiOiJhZHZhbmNlLWZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjN2YxMzJhO1xufVxuLmhlYWRpbmd7XG4gICAgY29sb3I6ICNFRUM2MjY7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmhlYWQtZGVzY3tcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZm9ybS1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDI4cHggMHB4IDI4cHg7XG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgY29sb3I6ICM2Yzc0ODA7XG4gICAgICAgIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIGNvbG9yOiAjNmM3NDgwO1xuICAgICAgICAvLyBib3JkZXI6ICM3MDcwNzAgc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIC5vdGhlciB7XG4gICAgICAgIGNvbG9yOiAjNmM3NDgwO1xuICAgICAgICBib3JkZXI6ICM3MDcwNzAgc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAvLyBoZWlnaHQ6IDMwcHg7XG4gICAgfVxufVxuLmJ1dHRvbi1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgY29sb3I6ICM3ZjEzMmE7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIEJsYWNrXCI7XG4gICAgfVxuICAgIC8vIHdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_advance-filter_advance-filter_module_ts.js.map