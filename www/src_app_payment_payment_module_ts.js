"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payment_payment_module_ts"],{

/***/ 117:
/*!********************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/stripe/__ivy_ngcc__/ngx/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stripe": () => (/* binding */ Stripe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 14662);




var Stripe = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Stripe, _super);
    function Stripe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stripe.prototype.setPublishableKey = function (publishableKey) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setPublishableKey", {}, arguments); };
    Stripe.prototype.createCardToken = function (params) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "createCardToken", {}, arguments); };
    Stripe.prototype.createBankAccountToken = function (params) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "createBankAccountToken", {}, arguments); };
    Stripe.prototype.validateCardNumber = function (cardNumber) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "validateCardNumber", {}, arguments); };
    Stripe.prototype.validateCVC = function (cvc) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "validateCVC", {}, arguments); };
    Stripe.prototype.validateExpiryDate = function (expMonth, expYear) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "validateExpiryDate", {}, arguments); };
    Stripe.prototype.getCardType = function (cardNumber) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getCardType", {}, arguments); };
    Stripe.pluginName = "Stripe";
    Stripe.plugin = "cordova-plugin-stripe";
    Stripe.pluginRef = "cordova.plugins.stripe";
    Stripe.repo = "https://github.com/zyramedia/cordova-plugin-stripe";
    Stripe.platforms = ["Android", "Browser", "iOS"];
Stripe.ɵfac = /*@__PURE__*/ function () { var ɵStripe_BaseFactory; return function Stripe_Factory(t) { return (ɵStripe_BaseFactory || (ɵStripe_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Stripe)))(t || Stripe); }; }();
Stripe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Stripe, factory: function (t) { return Stripe.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Stripe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return Stripe;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));




/***/ }),

/***/ 40109:
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _card_payment_card_payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card-payment/card-payment.page */ 4975);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 52905);





const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
        providers: [_card_payment_card_payment_page__WEBPACK_IMPORTED_MODULE_0__.CardPaymentPage]
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ 15052:
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 40109);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 52905);
/* harmony import */ var _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/stripe/ngx */ 117);
/* harmony import */ var _fatora_checkout_fatora_checkout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fatora-checkout/fatora-checkout.module */ 93017);









let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule,
            _fatora_checkout_fatora_checkout_module__WEBPACK_IMPORTED_MODULE_3__.FatoraCheckoutPageModule
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage],
        providers: [_awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__.Stripe]
    })
], PaymentPageModule);



/***/ }),

/***/ 52905:
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./payment.page.html */ 45654);
/* harmony import */ var _payment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss */ 93898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/stripe/ngx */ 117);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _card_payment_card_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card-payment/card-payment.page */ 4975);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/utils.service */ 44516);
/* harmony import */ var _paypal_checkout_paypal_checkout_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../paypal-checkout/paypal-checkout.page */ 78710);
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/store.service */ 99652);
/* harmony import */ var _fatora_checkout_fatora_checkout_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fatora-checkout/fatora-checkout.page */ 12398);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);
















let PaymentPage = class PaymentPage {
    constructor(router, navCtrl, stripe, api, popoverController, util, ss, iab, route) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.stripe = stripe;
        this.api = api;
        this.popoverController = popoverController;
        this.util = util;
        this.ss = ss;
        this.iab = iab;
        this.route = route;
        this.key = "pk_test_51JGiMjSJDwx14nOS8E1z0uJf4g7fbE3zRJzfJV4QdathgMVmEIOTuB4Ffd1PTtvKeVrvqDxLjpjmpdmWHkzF0w7l00nGDM4sQ0";
        this.secretKey = "sk_test_51JGiMjSJDwx14nOSzChGOF6Bf0UqtjEVZG1whQppIm4eEcYpQV8MGpKRFw5kS9FhVB4Zw8H7TSvWTANoQhd3Bkd600SJ61abO9";
        this.paymentAmount = '3.33';
        this.currency = 'INR';
        this.currencyIcon = '₹';
        this.isSettingLoading = false;
        this.type = "Company";
        this.reservation = {};
        this.subType = "annual";
        if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().type == "Company") {
            this.type = "Company";
        }
        else if ((0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().type == "Individual") {
            this.type = "Individual";
        }
        else {
            this.type = "None";
        }
        this.route.queryParams.subscribe(res => {
            console.log(res);
            if (res.type) {
                if (res.type == "Reservation") {
                    this.type = "Reservation";
                    this.reservation = JSON.parse(res.reservation);
                }
            }
            if (res.sub_type) {
                this.subType = res.sub_type;
            }
        });
    }
    ngOnInit() {
        // this.stripe.setPublishableKey(this.key);
        this.pageData();
    }
    goBack() {
        this.navCtrl.back();
    }
    pageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.isSettingLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.appSettingApi);
            this.isSettingLoading = false;
            if (response) {
                this.settings = response;
            }
            console.log(response);
        });
    }
    toPayPal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.settings) {
                this.util.showToast("Cannot get settings try again later");
                return;
            }
            let popover = yield this.popoverController.create({
                component: _paypal_checkout_paypal_checkout_page__WEBPACK_IMPORTED_MODULE_8__.PaypalCheckoutPage,
                swipeToClose: true,
                componentProps: { settings: this.settings, type: this.type }
            });
            popover.onDidDismiss().then(res => {
                console.log(res);
                if (res.data) {
                    console.log(res.data);
                    if (res.data.type == "Reservation") {
                        this.makeReservatopmPayment(res.data.details, 'paypal');
                    }
                    else {
                        this.makePaypalPayment(res.data.details, res.data.type);
                    }
                    // let ccard = res.data.card;
                    // console.log(res.data.id);
                    // this.makePayment(res.data.id);
                }
            }).catch(err => console.log(err));
            popover.present();
        });
    }
    toStripe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.settings) {
                this.util.showToast("Cannot get settings try again later");
                return;
            }
            let popover = yield this.popoverController.create({
                component: _card_payment_card_payment_page__WEBPACK_IMPORTED_MODULE_6__.CardPaymentPage,
                swipeToClose: true,
                componentProps: this.settings
            });
            popover.onDidDismiss().then(res => {
                console.log(res);
                if (res.data) {
                    let ccard = res.data.card;
                    console.log(res.data.id);
                    this.makePayment(res.data.id);
                }
            }).catch(err => console.log(err));
            popover.present();
            // let card = {
            //   number: '4242424242424242',
            //   expMonth: 12,
            //   expYear: 2022,
            //   cvc: '220'
            // }
            // this.stripe.createCardToken(res.data.id)
            // .then(token => {
            //   console.log(token.id);
            //   this.makePayment(token);
            // })
            // .catch(error => {
            //   console.error(error);
            //   this.util.showToast(error.message);
            // });
        });
    }
    makePayment(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // if (!getUser().user_id) {
            //   this.util.showToast("User not found");
            //   return;
            // }
            // console.log({
            //   token: token,
            //   user: getUser().user_id
            // });
            // this.util.showProgressDialog('Recharging...');
            // var response = await this.api.postRequest({
            //   token: token,
            //   user: getUser().user_id
            // }, rechargeStripeApi);
            // this.util.hideProgressDialog();
            // console.log(response)
            // if (response) {
            //   this.navCtrl.back();
            //   this.getUserData();
            //   new AlertController().create({
            //     header: "Success!",
            //     message: response.req_message,
            //     buttons: [
            //       {
            //         text: "Dismiss"
            //       }
            //     ]
            //   }).then(res => res.present());
            //   console.log(response)
            // }
        });
    }
    makePaypalPayment(data, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!(0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id) {
                this.util.showToast("User not found");
                return;
            }
            console.log({
                token: data,
                user: (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id
            });
            let url = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.rechargePaypaleApi;
            let amount = this.settings.sub_amount;
            if (type == "Individual") {
                url = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.rechargePaypaleApi + "/" + type;
                let amount = this.settings.individual_amount;
            }
            this.util.showProgressDialog('Recharging...');
            var response = yield this.api.postRequest({
                token: data.payer.payer_id,
                tr_id: data.id,
                amount: amount,
                user: (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id
            }, url);
            this.util.hideProgressDialog();
            console.log(response);
            if (response) {
                // if(type == "Individual"){
                //   this.router.navigate(['add-worker']);
                // }else{
                this.navCtrl.back();
                // }
                this.getUserData();
                new _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController().create({
                    header: "Success!",
                    message: response.req_message,
                    buttons: [
                        {
                            text: "Dismiss"
                        }
                    ]
                }).then(res => res.present());
                console.log(response);
            }
        });
    }
    makeReservatopmPayment(data, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!(0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id) {
                this.util.showToast("User not found");
                return;
            }
            console.log({
                token: data,
                user: (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id
            });
            this.util.showProgressDialog('Recharging...');
            var url = '';
            let token = '';
            let tr_id = '';
            if (type == "paypal") {
                tr_id = data.id;
                token = data.payer.payer_id;
                url = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.addReservationPaypal;
            }
            else if (type == "fatora") {
                token = data.order_id;
                tr_id = data.transaction_id;
                url = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.addReservationFatora;
            }
            var response = yield this.api.postRequest({
                token: token,
                tr_id: tr_id,
                amount: this.settings.individual_reservation_amount,
                user: (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id,
                worker_id: this.reservation.worker_id,
            }, url);
            this.util.hideProgressDialog();
            console.log(response);
            if (response) {
                this.getUserData();
                new _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController().create({
                    header: "Success!",
                    message: response.req_message,
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: "Go To Home",
                            handler: () => {
                                window.location.href = '/menu/first';
                            }
                        }
                    ]
                }).then(res => res.present());
                console.log(response);
            }
        });
    }
    getUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.getUserByIdApi + "/" + (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id);
            console.log("payment", response);
            if (response) {
                (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.setUser)(response);
                this.ss.changeUser(response);
            }
        });
    }
    toFatora() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // this.openPaymentBrwserWithURL('https://www.google.com');
            let popover = yield this.popoverController.create({
                component: _fatora_checkout_fatora_checkout_page__WEBPACK_IMPORTED_MODULE_10__.FatoraCheckoutPage,
                swipeToClose: true,
                componentProps: { settings: this.settings, type: this.type, sub_type: this.subType }
            });
            popover.onDidDismiss().then(res => {
                console.log("res", res);
                if (res.data) {
                    // res.data.
                    console.log(res.data);
                    if (res.data.type == "Reservation") {
                        this.makeReservatopmPayment(res.data.details, 'fatora');
                    }
                    else {
                        this.makeFatoraPayment(res.data.details, res.data.type);
                    }
                }
            }).catch(err => console.log(err));
            popover.present();
        });
    }
    makeFatoraPayment(data, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!(0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id) {
                this.util.showToast("User not found");
                return;
            }
            console.log({
                token: data,
                user: (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id
            });
            let url = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.rechargeFitoraApi;
            let amount = this.settings.sub_amount;
            if (type == "Individual") {
                url = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.rechargeFitoraApi + "/" + type;
                amount = this.settings.individual_amount;
            }
            let oId = '';
            if (data.order_id) {
                oId = data.order_id;
            }
            this.util.showProgressDialog('Recharging...');
            var response = yield this.api.postRequest({
                token: oId,
                tr_id: data.transaction_id,
                amount: amount,
                sub_type: this.subType,
                user: (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_5__.getUser)().user_id
            }, url);
            this.util.hideProgressDialog();
            console.log(response);
            if (response) {
                this.navCtrl.back();
                this.getUserData();
                new _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController().create({
                    header: "Success!",
                    message: response.req_message,
                    buttons: [
                        {
                            text: "Dismiss"
                        }
                    ]
                }).then(res => res.present());
                console.log(response);
            }
        });
    }
    openPaymentBrwserWithURL(URL) {
        //here we prepare browser
        // this.paymentBrowser = this.iab.create(encodeURI(URL), '_blank', 'location=yes');
        // //here we listen if load is stop that mean the page is successfully loaded so we will display
        // //the broswer for the users
        // try {
        //   this.paymentBrowser.on('loadstop').subscribe((ev) => {
        //     this.paymentBrowser.show();
        //   });
        // } catch (e) {
        //   console.log('loadstop', e);
        // }
        // try {
        //   this.paymentBrowser.on('loaderror').subscribe((error) => {
        //     this.paymentBrowser.close();
        //   });
        // } catch (e) {
        //   console.log('loaderror', e);
        // }
        // //here we listen if loading url make error or something so we can close the browser
        // try {
        //   this.paymentBrowser.on('loadstart').subscribe((event) => {
        //     var URLString = event["url"];
        //     console.log(URLString);
        //     //if we found on the link (Pay/SuccessPay) that mean user pay successfully
        //     //if we found on the link (Pay/CancelCreditCard) that mean user cancel the payment
        //     if (URLString.includes("Pay/SuccessPay")) {
        //       this.paymentBrowser.close();
        //     } else if (URLString.includes("Pay/CancelCreditCard")) {
        //       this.paymentBrowser.close();
        //     }
        //   });
        // } catch (e) {
        //   console.log('loadstart', e);
        // }
        //here we listen to the changes of the borwser current link
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController },
    { type: _awesome_cordova_plugins_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__.Stripe },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService },
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_9__.StoreService },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__.InAppBrowser },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-payment',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payment_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentPage);



/***/ }),

/***/ 45654:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/payment/payment.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <ion-title>\n      Payment Method\n    </ion-title>\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n<ion-content>\n  <h3 class=\"heading\">Payment Transfer</h3>\n  <div *ngIf=\"isSettingLoading\" class=\"w100 h100 d-flex justify-content-center align-items-center\">\n    <ion-spinner color=\"primary\" name=\"dots\"></ion-spinner>\n  </div>\n  <div *ngIf=\"!isSettingLoading\">\n    <p class=\"p10 m0 cblack text-center\" *ngIf=\"type == 'Company' && subType == 'annual'\">{{settings.sub_amount}} {{\"QAR\"}} for annual subscription</p>\n    <p class=\"p10 m0 cblack text-center\" *ngIf=\"type == 'Company' && subType == 'sami_annual'\">{{settings.sami_sub_amount}} {{\"QAR\"}} for sami annual subscription</p>\n    <p class=\"p10 m0 cblack text-center\" *ngIf=\"type == 'Individual' && subType == 'annual'\">{{settings.individual_amount}} {{\"QAR\"}} for annual subscription</p>\n    <p class=\"p10 m0 cblack text-center\" *ngIf=\"type == 'Individual' && subType == 'sami_annual'\">{{settings.sami_individual_amount}} {{\"QAR\"}} for sami annual subscription</p>\n    <p class=\"p10 m0 cblack text-center\" *ngIf=\"type == 'Reservation'\">{{settings.individual_reservation_amount}} {{\"QAR\"}} for reservation</p>\n  </div>\n  <div class=\"payment\" *ngIf=\"!isSettingLoading\">\n    <!-- <div class=\"payment-item ion-activatable ripple-parent touch-opacity\" (click)=\"toStripe()\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"ion-align-items-center\">\n          <img src=\"assets/images/stripe.jpeg\" height=\"60px\" width=\"60px\" alt=\"\">\n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-text-start\">\n          <p class=\"ac-no m0\">**** **** **** 4978</p>\n          <p class=\"ac-no m0\">expires 10/24</p>\n        </ion-col>\n      </ion-row>\n      \n    </div> -->\n    <div class=\"mt10\"></div>\n    <!-- <div class=\"payment-item ion-activatable ripple-parent touch-opacity\" (click)=\"toPayPal()\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"ion-align-items-center\">\n          <img src=\"assets/images/paypal.jpeg\" height=\"50px\" width=\"80px\" alt=\"\">\n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-text-start\">\n          <p class=\"ac-no m0\">**** **** **** 4978</p>\n          <p class=\"ac-no m0\">expires 10/24</p>\n        </ion-col>\n      </ion-row>\n    </div> -->\n    <div class=\"mt10\"></div>\n    <div class=\"payment-item ion-activatable ripple-parent touch-opacity\" (click)=\"toFatora()\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"ion-align-items-center\">\n          <img src=\"assets/images/fatora-logo.png\" height=\"20px\" width=\"80px\" alt=\"\">\n        </ion-col>\n        <ion-col size=\"8\" class=\"ion-text-start\">\n          <p class=\"ac-no m0\">**** **** **** 4978</p>\n          <p class=\"ac-no m0\">expires 10/24</p>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-ripple-effect></ion-ripple-effect> -->\n    </div>\n    <!-- <div id=\"paypal-button-container\"></div> -->\n\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 93898:
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".heading {\n  color: #7F132A;\n  text-align: center;\n}\n\n.payment {\n  padding: 30px;\n}\n\n.payment ion-row ion-col {\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.ac-no {\n  font-size: 12px;\n  color: #6C7480;\n}\n\n.payment-item {\n  border-radius: 10px;\n  border: #6C7480 solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBQ0Esc0JBQUE7QUFDWjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0oiLCJmaWxlIjoicGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3tcbiAgICBjb2xvcjogIzdGMTMyQTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGF5bWVudHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGlvbi1yb3d7XG4gICAgICAgIGlvbi1jb2x7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5hYy1ub3tcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2Qzc0ODA7XG59XG4ucGF5bWVudC1pdGVte1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiM2Qzc0ODAgc29saWQ7XG4gICAgaW1ne1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_payment_payment_module_ts.js.map