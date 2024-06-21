"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_fatora-checkout_fatora-checkout_module_ts"],{

/***/ 38723:
/*!*******************************************************************!*\
  !*** ./src/app/fatora-checkout/fatora-checkout-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FatoraCheckoutPageRoutingModule": () => (/* binding */ FatoraCheckoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _fatora_checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fatora-checkout.page */ 12398);




const routes = [
    {
        path: '',
        component: _fatora_checkout_page__WEBPACK_IMPORTED_MODULE_0__.FatoraCheckoutPage
    }
];
let FatoraCheckoutPageRoutingModule = class FatoraCheckoutPageRoutingModule {
};
FatoraCheckoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FatoraCheckoutPageRoutingModule);



/***/ }),

/***/ 93017:
/*!***********************************************************!*\
  !*** ./src/app/fatora-checkout/fatora-checkout.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FatoraCheckoutPageModule": () => (/* binding */ FatoraCheckoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _fatora_checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fatora-checkout-routing.module */ 38723);
/* harmony import */ var _fatora_checkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fatora-checkout.page */ 12398);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let FatoraCheckoutPageModule = class FatoraCheckoutPageModule {
};
FatoraCheckoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fatora_checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.FatoraCheckoutPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_fatora_checkout_page__WEBPACK_IMPORTED_MODULE_1__.FatoraCheckoutPage]
    })
], FatoraCheckoutPageModule);



/***/ }),

/***/ 12398:
/*!*********************************************************!*\
  !*** ./src/app/fatora-checkout/fatora-checkout.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FatoraCheckoutPage": () => (/* binding */ FatoraCheckoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fatora_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./fatora-checkout.page.html */ 84001);
/* harmony import */ var _fatora_checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fatora-checkout.page.scss */ 68188);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 51590);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 80838);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utils.service */ 44516);










let FatoraCheckoutPage = class FatoraCheckoutPage {
    constructor(modalCtrl, navParams, http, inAppBrowser, util) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.http = http;
        this.inAppBrowser = inAppBrowser;
        this.util = util;
        this.amount = "0";
        this.target = '_blank';
        this.params = '';
        this.formData = {};
        this.iabOptions = {
            location: "no",
            toolbar: "yes",
            hidden: "yes"
        };
        this.isLoading = false;
        this.type = '';
    }
    ngOnInit() {
        console.log(this.navParams.data);
        if (this.navParams.data) {
            let data = this.navParams.data;
            this.type = data.type;
            if (data.type == "Company" && data.sub_type == 'annual') {
                this.amount = data.settings.sub_amount;
            }
            else if (data.type == "Company" && data.sub_type == 'sami_annual') {
                this.amount = data.settings.sami_sub_amount;
            }
            else if (data.type == "Individual" && data.sub_type == 'annual') {
                this.amount = data.settings.individual_amount;
            }
            else if (data.type == "Individual" && data.sub_type == 'sami_annual') {
                this.amount = data.settings.sami_individual_amount;
            }
            else if (data.type == "Reservation") {
                this.amount = data.settings.individual_reservation_amount;
            }
        }
    }
    goBack() {
        this.modalCtrl.dismiss();
    }
    getPaymentLink() {
        let url = "https://api.fatora.io/v1/payments/checkout";
        let headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // 'api_key': 'E4B73FEE-F492-4607-A38D-852B0EBC91C9', // Test KEy
            // 'api_key': '5554c9f9-d014-4334-91b6-594404028d23', // Live key
            "api_key": '5554c9f9-d014-4334-91b6-594404028d23'
        };
        let data = {
            "amount": this.amount,
            "currency": "QAR",
            "order_id": this.generateId(),
            "client": {
                "name": this.formData.name,
                "phone": this.formData.phone,
                "email": this.formData.email
            },
            "language": "en",
            "success_url": "http://domain.com/payments/success",
            "failure_url": "http://domain.com/payments/failure",
            "save_token": true,
            "note": "some additional info"
        };
        return this.http.post(url, data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders(headersConfig) }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            return response;
        }, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
            console.log(err);
            return rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable["throw"](err);
        })));
    }
    generatePayment() {
        if (this.isLoading) {
            this.util.showToast("Please wait");
            return;
        }
        this.util.showProgressDialog("Please wait. Creating payment link");
        this.getPaymentLink().subscribe(data => {
            //success response back with result that contains the payment link 
            //so we will open it on InAppBrowser Plugin now
            this.util.hideProgressDialog();
            if (data.result) {
                console.log(data);
                this.openPaymentBrwserWithURL(data.result.checkout_url);
            }
        }, err => {
            this.util.hideProgressDialog();
            if (err.error) {
                this.util.showToast(err.error.description);
            }
            this.util.showToast("Cannot create payment link");
            console.log(err);
        });
    }
    generateId() {
        // create Date object for current location
        var d = new Date();
        var offset = 1;
        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        const d1 = new Date().getTime();
        return d1;
        // console.log(d1);
    }
    openPaymentBrwserWithURL(URL) {
        //here we prepare browser
        // this.isLoading = true;
        console.log(this.generateId());
        this.paymentBrowser = this.inAppBrowser.create(encodeURI(URL), this.target, this.iabOptions);
        //here we listen if load is stop that mean the page is successfully loaded so we will display
        //the broswer for the users
        try {
            this.paymentBrowser.on('loadstop').subscribe((ev) => {
                console.log("loadstop", ev);
                this.paymentBrowser.show();
            });
        }
        catch (e) {
            console.log('loadstop', e);
        }
        try {
            this.paymentBrowser.on('loaderror').subscribe((error) => {
                console.log("loaderror", error);
                this.paymentBrowser.close();
                this.isLoading = false;
            });
        }
        catch (e) {
            console.log('loaderror', e);
        }
        //here we listen if loading url make error or something so we can close the browser
        try {
            this.paymentBrowser.on('loadstart').subscribe((event) => {
                var URLString = event["url"];
                console.log("loadstart", URLString);
                //if we found on the link (Pay/SuccessPay) that mean user pay successfully
                //if we found on the link (Pay/CancelCreditCard) that mean user cancel the payment
                if (URLString.includes("payments/success")) {
                    this.isLoading = false;
                    let data = this.getQueryParams(URLString);
                    console.log(data);
                    this.params = JSON.stringify(this.getQueryParams(URLString));
                    this.util.showToast("Successful payment");
                    if (JSON.parse(this.params).transaction_id) {
                        if (JSON.parse(this.params).mode != 'test') {
                            // {details: details,type:this.type}
                            this.modalCtrl.dismiss({ details: JSON.parse(this.params), type: this.type });
                            // this.modalCtrl.dismiss(JSON.parse({details: this.params,type:this.type}));
                        }
                    }
                    this.paymentBrowser.close();
                }
                else if (URLString.includes("payments/failure")) {
                    this.isLoading = false;
                    let data = this.getQueryParams(URLString);
                    console.log(data);
                    this.util.showToast("Unsuccessful payment");
                    this.paymentBrowser.close();
                }
            });
        }
        catch (e) {
            console.log('loadstart', e);
        }
        //here we listen to the changes of the borwser current link
    }
    getQueryParams(url) {
        var result = {};
        var params = (url.split('?')[1] || '').split('&');
        for (var param in params) {
            if (params.hasOwnProperty(param)) {
                var paramParts = params[param].split('=');
                result[paramParts[0]] = decodeURIComponent(paramParts[1] || "");
            }
        }
        return result;
    }
};
FatoraCheckoutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavParams },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_3__.UtilsService }
];
FatoraCheckoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-fatora-checkout',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_fatora_checkout_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_fatora_checkout_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FatoraCheckoutPage);



/***/ }),

/***/ 84001:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/fatora-checkout/fatora-checkout.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <ion-title>\n      Fatora\n    </ion-title>\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n<ion-content>\n  <h3 class=\"heading\">Price: {{amount}} QAR</h3>\n  <!-- <form id=\"payment-form\"> -->\n  <div class=\"w100 ion-text-center mt10\">\n    <img src=\"assets/images/fatora-logo.png\" width=\"40%\" style=\"object-fit: contain;\" />\n\n  </div>\n  <div class=\"form-container\">\n    <ion-col size=\"12\">\n      <ion-label>{{\"Name\" | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"formData.name\" type=\"text\" placeholder=\"client\"></ion-input>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>{{\"Email\" | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"formData.email\" type=\"email\" placeholder=\"client@domain.com\"></ion-input>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-label>{{\"Phone\" | translate}}</ion-label>\n      <ion-input [(ngModel)]=\"formData.phone\" type=\"text\" placeholder=\"+97477777777\"></ion-input>\n    </ion-col>\n  </div>\n  <div class=\"payment p0\">\n    <!-- <div id=\"card-element\">\n    </div>\n    <div id=\"card-errors\" role=\"alert\"></div>\n    <p></p> -->\n    <div class=\"w100 d-flex justify-content-center\">\n      <button class=\"mt10\" style=\"height: 30px;width: 100px;\n        background-color: #419799; color: white; border-radius: 10px;\" (click)=\"generatePayment()\">Pay</button>\n    </div>\n  </div>\n  <!-- <div>\n    {{params}}\n  </div> -->\n  <!-- </form> -->\n\n</ion-content>");

/***/ }),

/***/ 68188:
/*!***********************************************************!*\
  !*** ./src/app/fatora-checkout/fatora-checkout.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".heading {\n  color: #419799;\n  text-align: center;\n}\n\n.payment ion-row ion-col {\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.ac-no {\n  font-size: 12px;\n  color: #6C7480;\n}\n\n.payment-item {\n  border-radius: 10px;\n  border: #6C7480 solid;\n}\n\n.submit-button {\n  margin-top: 10px;\n  background: linear-gradient(180deg, #7f132a 40%, #c90269 100%);\n  margin: 0px;\n  --border-radius: 4px;\n  border-radius: 4px;\n  box-shadow: 0;\n  height: 28px;\n}\n\n.form-container {\n  font-size: 14px;\n  color: #7f132a;\n  padding: 0px 28px 0px 28px;\n}\n\n.form-container .input {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.form-container ion-input {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container ion-select {\n  color: #9cb9e4;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdG9yYS1jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFJUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxzQkFBQTtBQUZaOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFISjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFPQTtFQUNJLGdCQUFBO0VBQ0EsOERBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBTEo7O0FBTUk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSlI7O0FBT0k7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUxSOztBQU9JO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFMUiIsImZpbGUiOiJmYXRvcmEtY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XG4gICAgY29sb3I6ICM0MTk3OTk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBheW1lbnR7XG4gICAgLy8gcGFkZGluZzogMzBweDtcbiAgICBpb24tcm93e1xuICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICB9XG59XG4uYWMtbm97XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNkM3NDgwO1xufVxuLnBheW1lbnQtaXRlbXtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjojNkM3NDgwIHNvbGlkO1xuICAgIGltZ3tcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cbn1cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM3ZjEzMmEgNDAlLCByZ2JhKDIwMSwgMiwgMTA1LCAxKSAxMDAlKTtcbiAgICBtYXJnaW46IDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgLy8gd2lkdGg6IDEwMHB4O1xufVxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM3ZjEzMmE7XG4gICAgcGFkZGluZzogMHB4IDI4cHggMHB4IDI4cHg7XG4gICAgLmlucHV0e1xuICAgICAgICBjb2xvcjogIzZjNzQ4MDtcbiAgICAgICAgYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAvLyBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIGNvbG9yOiAjNmM3NDgwO1xuICAgICAgICBib3JkZXI6ICM3MDcwNzAgc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIGNvbG9yOiAjOWNiOWU0O1xuICAgICAgICBib3JkZXI6ICM3MDcwNzAgc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_fatora-checkout_fatora-checkout_module_ts.js.map