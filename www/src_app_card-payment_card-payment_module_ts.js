"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_card-payment_card-payment_module_ts"],{

/***/ 48486:
/*!*************************************************************!*\
  !*** ./src/app/card-payment/card-payment-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPaymentPageRoutingModule": () => (/* binding */ CardPaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _card_payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-payment.page */ 4975);




const routes = [
    {
        path: '',
        component: _card_payment_page__WEBPACK_IMPORTED_MODULE_0__.CardPaymentPage
    }
];
let CardPaymentPageRoutingModule = class CardPaymentPageRoutingModule {
};
CardPaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CardPaymentPageRoutingModule);



/***/ }),

/***/ 1796:
/*!*****************************************************!*\
  !*** ./src/app/card-payment/card-payment.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardPaymentPageModule": () => (/* binding */ CardPaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _card_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-payment-routing.module */ 48486);
/* harmony import */ var _card_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-payment.page */ 4975);







let CardPaymentPageModule = class CardPaymentPageModule {
};
CardPaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _card_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.CardPaymentPageRoutingModule
        ],
        declarations: [_card_payment_page__WEBPACK_IMPORTED_MODULE_1__.CardPaymentPage]
    })
], CardPaymentPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_card-payment_card-payment_module_ts.js.map