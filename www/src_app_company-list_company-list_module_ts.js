"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_company-list_company-list_module_ts"],{

/***/ 61095:
/*!*************************************************************!*\
  !*** ./src/app/company-list/company-list-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyListPageRoutingModule": () => (/* binding */ CompanyListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _company_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-list.page */ 34244);




const routes = [
    {
        path: '',
        component: _company_list_page__WEBPACK_IMPORTED_MODULE_0__.CompanyListPage
    }
];
let CompanyListPageRoutingModule = class CompanyListPageRoutingModule {
};
CompanyListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompanyListPageRoutingModule);



/***/ }),

/***/ 5381:
/*!*****************************************************!*\
  !*** ./src/app/company-list/company-list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyListPageModule": () => (/* binding */ CompanyListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _company_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-list-routing.module */ 61095);
/* harmony import */ var _company_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-list.page */ 34244);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/component.module */ 87721);








let CompanyListPageModule = class CompanyListPageModule {
};
CompanyListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _company_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompanyListPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_company_list_page__WEBPACK_IMPORTED_MODULE_1__.CompanyListPage]
    })
], CompanyListPageModule);



/***/ }),

/***/ 34244:
/*!***************************************************!*\
  !*** ./src/app/company-list/company-list.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyListPage": () => (/* binding */ CompanyListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_company_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./company-list.page.html */ 76077);
/* harmony import */ var _company_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-list.page.scss */ 81831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constrant.helper */ 69003);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utils.service */ 44516);












let CompanyListPage = class CompanyListPage {
    constructor(router, navCtrl, route, api, util, platform, translate, menu) {
        // this.getPageData();
        // this.platform.backButton.subscribeWithPriority(10,()=>{
        //   this.router.navigate(['menu/first/tabs/tab2']);
        // });
        this.router = router;
        this.navCtrl = navCtrl;
        this.route = route;
        this.api = api;
        this.util = util;
        this.platform = platform;
        this.translate = translate;
        this.menu = menu;
        this.isLoading = true;
        this.list = [];
        this.appUrl = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.baseUrl;
        this.lang = (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)();
        this.isQuery = false;
        this.selectedType = {};
    }
    getPageData(acTypeId = '0') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // this.isLoading = true;
            // let id = await getUserId();
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getCompaniesApi + '?ac_type=' + acTypeId +
                '&lang=' + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)() + '&id=' + (yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)()));
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
    ionViewDidEnter() {
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params.type) {
                if (params.type == 'ac_type') {
                    if (params.typeData) {
                        try {
                            this.selectedType = JSON.parse(params.typeData);
                        }
                        catch (e) { }
                    }
                    this.getPageData(params.ac_type);
                }
            }
        });
    }
    getFilter(filter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            console.log(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getFilterWorkerApi
                + '?lang=' + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)() + '&id=' + (yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)()), filter);
            let response = yield this.api.postRequest(filter, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getFilterWorkerApi
                + '?lang=' + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)() + '&id=' + (yield (0,_services_constrant_helper__WEBPACK_IMPORTED_MODULE_4__.getUserId)()));
            this.isLoading = false;
            console.log(response);
            if (response) {
                this.list = response;
            }
            else {
                // this.util.showToast("No data found");
            }
        });
    }
    goBack() {
        this.navCtrl.back();
        // this.router.navigate(['menu']);
    }
    goToWorkerDetail(item) {
        let navExtras = {
            queryParams: { comapny: JSON.stringify(item) }
        };
        this.router.navigate(['comapny-detail'], navExtras);
    }
    goToWorkerList(ad_type, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // this.navCtrl.pop().then(res=>{
            //   console.log(res);
            // });
            // let navExtras: NavigationOptions = {
            //   queryParams: {
            //     type: "advs_type",
            //     advs_type: ad_type,
            //     ac_type: type
            //   }
            // };
            // this.navCtrl.navigateForward('worker-list',navExtras);
            // let navExtras: NavigationExtras = {
            //   queryParams: {
            //     type: "advs_type",
            //     advs_type: ad_type,
            //     ac_type: type
            //   }
            // };
            // this.router.navigate(['worker-list'],navExtras);
        });
    }
    openMenu() {
        this.menu.open();
    }
};
CompanyListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController }
];
CompanyListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-company-list',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_company_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_company_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CompanyListPage);



/***/ }),

/***/ 76077:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/company-list/company-list.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\" (click)=\"openMenu()\"> -->\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n  </ion-col>\n  <ion-col size=\"9\" class=\"m-auto\">\n    <ion-title *ngIf=\"!selectedType.type_name\">\n      {{\"Companies\" | translate}}\n    </ion-title>\n    <ion-title *ngIf=\"selectedType.type_name\">\n      {{lang == 'ar'? selectedType.type_name_ar :selectedType.type_name}}\n    </ion-title>\n  </ion-col>\n  <!-- <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <ion-icon name=\"filter\" routerLink=\"/advance-filter\"></ion-icon>\n  </ion-col> -->\n</ion-row>\n\n<ion-content>\n\n  <div>\n\n    <app-empty-layout style=\"width: 100%;\" *ngIf=\"!isLoading && list.length < 1\"></app-empty-layout>\n    <app-loading *ngIf=\"isLoading\"></app-loading>\n    <ion-row class=\"mt10 ion-justify-content-center\">\n      <ion-col size=\"12\" *ngFor=\"let item of list\" (click)=\"goToWorkerDetail(item)\" class=\"touch-opacity\">\n        <div class=\"emp-item cblack  d-flex flex-direction-column\">\n          <ion-row class=\"info-container\">\n            <ion-col size=\"4\">\n              <img src=\"{{appUrl + item.user_image}}\" onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\"\n                height=\"90px\" class=\"worker-img\">\n            </ion-col>\n            <ion-col size=\"8\">\n              <ion-row>\n                <ion-col>\n                  <h6 class=\"MyriadPro-Bold cblack m0 w100\">{{item.name}}</h6>\n                  <div class=\"emp-info\">\n                    <!-- <ion-label class=\"MyriadPro-Regular\">{{item.en_religion}}</ion-label> -->\n                    <p class=\"m0 p0 MyriadPro-Regular\">{{item.email}}\n                    </p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 81831:
/*!*****************************************************!*\
  !*** ./src/app/company-list/company-list.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: white;\n}\n\n.header {\n  background: #7f132a;\n  color: white;\n}\n\n.top-container {\n  background-color: #7f132a;\n  height: 50px;\n}\n\n.home-page {\n  position: relative;\n  top: -50px;\n}\n\n.emp-item img {\n  border-radius: 10px;\n  margin-top: 4px;\n}\n\n.info-container {\n  border-radius: 10px;\n  background-color: #E6E7E8;\n}\n\n.emp-info {\n  color: #58595B;\n  font-size: 12px;\n}\n\n.fav-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding-top: 10px;\n  padding-right: 10px;\n  color: white;\n  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));\n  font-size: 20px;\n}\n\n.worker-img {\n  width: 100%;\n  height: 53px;\n  object-fit: cover;\n}\n\n.ion-sponsor-accordion :first {\n  box-shadow: #5b5b5b 2px 2px;\n}\n\n.accordion-header {\n  --background: #7f132a;\n  --border-radius: 30px;\n  --min-height: 30px;\n  font-size: 14px;\n  box-shadow: 2px 3px 5px #5b5b5b;\n  color: white;\n}\n\n.accordion-header ion-icon {\n  color: white;\n}\n\n.ac-group {\n  width: 90%;\n}\n\n.according-list {\n  background: #E6E7E8;\n}\n\n.according-list ion-item {\n  --background: #E6E7E8;\n  color: #808285;\n  --border-color: white;\n  --min-height: 36px;\n  font-size: 14px;\n}\n\n.ion-sponsor-accordion {\n  border-radius: 28px !important;\n  background-color: #e6e7e8;\n  box-shadow: 2px 3px 5px #5b5b5b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhbnktbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUlKOztBQURJO0VBR0ksbUJBQUE7RUFDQSxlQUFBO0FBRVI7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFHQSxZQUFBO0VBQ0EsbURBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUNMOztBQUFLO0VBQ0ksWUFBQTtBQUVUOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUFBO0VBRUksbUJBQUE7QUFFSjs7QUFESTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBR1I7O0FBQ0E7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUFFSiIsImZpbGUiOiJjb21wYW55LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjN2YxMzJhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi50b3AtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2YxMzJhO1xuICAgIGhlaWdodDogNTBweDtcbn1cbi5ob21lLXBhZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC01MHB4O1xufVxuLmVtcC1pdGVte1xuICAgIGltZ3tcbiAgICAgICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC8vIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG59XG5cbi5pbmZvLWNvbnRhaW5lcntcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU3RTg7XG4gICAgLy8gaGVpZ2h0OiAzMDBweDtcbn1cbi5lbXAtaW5mb3tcbiAgICBjb2xvcjogIzU4NTk1QjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZmF2LWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiA2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDVweCAycHggcmdiKDAgMCAwIC8gMC40KSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLndvcmtlci1pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNiY2JlYzA7XG59IFxuLmlvbi1zcG9uc29yLWFjY29yZGlvbiA6Zmlyc3R7XG4gICAgYm94LXNoYWRvdzogIzViNWI1YiAycHggMnB4O1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjN2YxMzJhO1xuICAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgIC0tbWluLWhlaWdodDogMzBweDtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICBib3gtc2hhZG93OjJweCAzcHggNXB4ICM1YjViNWI7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgaW9uLWljb257XG4gICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgIH1cbn1cbi5hYy1ncm91cHtcbiAgICB3aWR0aDogOTAlO1xufVxuLmFjY29yZGluZy1saXN0e1xuICAgIC8vIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNFNkU3RTg7XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tYmFja2dyb3VuZDogI0U2RTdFODtcbiAgICAgICAgY29sb3I6ICM4MDgyODU7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLS1taW4taGVpZ2h0OiAzNnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICB9XG59XG4uaW9uLXNwb25zb3ItYWNjb3JkaW9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTdlODtcbiAgICBib3gtc2hhZG93OjJweCAzcHggNXB4ICM1YjViNWI7XG4gICAgLy8gaW9uLWl0ZW17eHdcbiAgICAvLyBoZWlnaHQ6IDQwcHg7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_company-list_company-list_module_ts.js.map