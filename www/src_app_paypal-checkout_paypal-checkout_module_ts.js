"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_paypal-checkout_paypal-checkout_module_ts"],{

/***/ 13608:
/*!*******************************************************************!*\
  !*** ./src/app/paypal-checkout/paypal-checkout-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaypalCheckoutPageRoutingModule": () => (/* binding */ PaypalCheckoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _paypal_checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypal-checkout.page */ 78710);




const routes = [
    {
        path: '',
        component: _paypal_checkout_page__WEBPACK_IMPORTED_MODULE_0__.PaypalCheckoutPage
    }
];
let PaypalCheckoutPageRoutingModule = class PaypalCheckoutPageRoutingModule {
};
PaypalCheckoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaypalCheckoutPageRoutingModule);



/***/ }),

/***/ 14451:
/*!***********************************************************!*\
  !*** ./src/app/paypal-checkout/paypal-checkout.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaypalCheckoutPageModule": () => (/* binding */ PaypalCheckoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _paypal_checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypal-checkout-routing.module */ 13608);
/* harmony import */ var _paypal_checkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paypal-checkout.page */ 78710);







let PaypalCheckoutPageModule = class PaypalCheckoutPageModule {
};
PaypalCheckoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _paypal_checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaypalCheckoutPageRoutingModule
        ],
        declarations: [_paypal_checkout_page__WEBPACK_IMPORTED_MODULE_1__.PaypalCheckoutPage]
    })
], PaypalCheckoutPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_paypal-checkout_paypal-checkout_module_ts.js.map