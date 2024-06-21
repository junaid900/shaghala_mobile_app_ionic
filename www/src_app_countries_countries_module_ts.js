"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_countries_countries_module_ts"],{

/***/ 51280:
/*!*******************************************************!*\
  !*** ./src/app/countries/countries-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesPageRoutingModule": () => (/* binding */ CountriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _countries_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries.page */ 28484);




const routes = [
    {
        path: '',
        component: _countries_page__WEBPACK_IMPORTED_MODULE_0__.CountriesPage
    }
];
let CountriesPageRoutingModule = class CountriesPageRoutingModule {
};
CountriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CountriesPageRoutingModule);



/***/ }),

/***/ 27353:
/*!***********************************************!*\
  !*** ./src/app/countries/countries.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesPageModule": () => (/* binding */ CountriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _countries_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countries-routing.module */ 51280);
/* harmony import */ var _countries_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries.page */ 28484);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/component.module */ 87721);








let CountriesPageModule = class CountriesPageModule {
};
CountriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _countries_routing_module__WEBPACK_IMPORTED_MODULE_0__.CountriesPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_countries_page__WEBPACK_IMPORTED_MODULE_1__.CountriesPage]
    })
], CountriesPageModule);



/***/ }),

/***/ 28484:
/*!*********************************************!*\
  !*** ./src/app/countries/countries.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesPage": () => (/* binding */ CountriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_countries_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./countries.page.html */ 37784);
/* harmony import */ var _countries_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countries.page.scss */ 15259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);







let CountriesPage = class CountriesPage {
    constructor(api, modalCtrl, popoverCtrl, navParams) {
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.countries = [];
        this.allCounties = [];
        this.selectedCountry = {
        // country_id: 0
        };
        this.isLoading = false;
    }
    ngOnInit() {
        this.getPageData();
    }
    goBack() {
        this.popoverCtrl.dismiss();
        // try{
        //   this.modalCtrl.dismiss();
        // }catch(e){
        // }
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getCountiesApi);
            this.isLoading = false;
            console.log(response);
            if (response) {
                if (!this.selectedCountry.country_id) {
                    let id = this.navParams.data.country.country_id;
                    if (id) {
                        let sCountry = response.filter((e) => {
                            return id == e.country_id;
                        });
                        const index = response.findIndex(e => {
                            if (id == e.country_id) {
                                return true;
                            }
                            return false;
                        });
                        console.log(index);
                        sCountry['index'] = index;
                        console.log(sCountry);
                        if (sCountry.length > 0) {
                            this.selectedCountry = sCountry[0];
                            this.scrollTo(sCountry.index);
                        }
                        console.log(this.selectedCountry);
                    }
                }
                this.countries = response;
                this.allCounties = response;
            }
        });
    }
    selectCountry(c, i) {
        c['index'] = i;
        console.log(c);
        this.selectedCountry = c;
        if (this.selectedCountry) {
            // try{
            // this.modalCtrl.dismiss({country:this.selectedCountry});
            // this.modalCtrl.dismiss();
            // }catch(e){
            this.popoverCtrl.dismiss({ country: this.selectedCountry });
            // }
        }
    }
    scrollTo(index) {
        setTimeout(() => {
            // console.log("index",index);
            let arr = this.list.nativeElement.children;
            // console.log("arr",arr.length);
            let item = arr[index];
            item.scrollIntoView();
            // console.log("item",item);
        }, 500);
    }
};
CountriesPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams }
];
CountriesPage.propDecorators = {
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },] }]
};
CountriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-countries',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_countries_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_countries_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CountriesPage);



/***/ }),

/***/ 37784:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/countries/countries.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header\"></ion-row>\n<ion-row style=\"background: #7f132a;\" class=\"d-flex justify-content-center align-items-center\">\n  <ion-col size=\"1\" >\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n  </ion-col>\n  <ion-col>\n    <ion-title class=\"p0 cwhite\">Select Country</ion-title>\n  </ion-col>\n</ion-row>\n<ion-content>\n \n  <div class=\"w100 h100\" *ngIf=\"isLoading\">\n    <app-loading></app-loading>\n  </div>\n  <ion-list>\n    <ion-item button *ngFor=\"let item of countries; let i = index\" (click)=\"selectCountry(item,i)\">\n      <ion-label>\n        (+{{item.phonecode}}) - {{item.name}}\n      </ion-label>\n      <ion-icon *ngIf=\"selectedCountry.country_id == item.country_id\" class=\"check-icon\" name=\"checkmark-done-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ 15259:
/*!***********************************************!*\
  !*** ./src/app/countries/countries.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = ".active {\n  --background: #d7d7d7;\n}\n\n.check-icon {\n  color: #2254fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKIiwiZmlsZSI6ImNvdW50cmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZle1xuICAgIC0tYmFja2dyb3VuZDogI2Q3ZDdkNztcbn1cbi5jaGVjay1pY29ue1xuICAgIGNvbG9yOiByZ2IoMzQsIDg0LCAyNTApO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_countries_countries_module_ts.js.map