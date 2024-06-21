"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-worker_add-worker_module_ts"],{

/***/ 36606:
/*!*********************************************************!*\
  !*** ./src/app/add-worker/add-worker-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddWorkerPageRoutingModule": () => (/* binding */ AddWorkerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _add_worker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-worker.page */ 51347);




const routes = [
    {
        path: '',
        component: _add_worker_page__WEBPACK_IMPORTED_MODULE_0__.AddWorkerPage
    }
];
let AddWorkerPageRoutingModule = class AddWorkerPageRoutingModule {
};
AddWorkerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddWorkerPageRoutingModule);



/***/ }),

/***/ 74589:
/*!*************************************************!*\
  !*** ./src/app/add-worker/add-worker.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddWorkerPageModule": () => (/* binding */ AddWorkerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _add_worker_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-worker-routing.module */ 36606);
/* harmony import */ var _add_worker_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-worker.page */ 51347);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let AddWorkerPageModule = class AddWorkerPageModule {
};
AddWorkerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_worker_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddWorkerPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_add_worker_page__WEBPACK_IMPORTED_MODULE_1__.AddWorkerPage]
    })
], AddWorkerPageModule);



/***/ }),

/***/ 51347:
/*!***********************************************!*\
  !*** ./src/app/add-worker/add-worker.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddWorkerPage": () => (/* binding */ AddWorkerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_worker_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-worker.page.html */ 61805);
/* harmony import */ var _add_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-worker.page.scss */ 35159);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 53201);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 90466);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_local_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local.helper */ 75009);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/session.helper */ 13086);
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/utils.service */ 44516);













let AddWorkerPage = class AddWorkerPage {
    // scrollItems: number[] = new Array(1000);
    constructor(navCtrl, router, api, translate, util) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.api = api;
        this.translate = translate;
        this.util = util;
        this.isLoading = false;
        this.pageData = {};
        this.formData = {};
        this.baseImage = '';
        this.user = {};
        this.cvFile = null;
        translate.use((0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)());
        this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_6__.getUser)();
    }
    ngOnInit() {
        this.getPageData();
    }
    takeImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 20,
                allowEditing: true,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64
            });
            var imageUrl = image.base64String;
            this.baseImage = "data:image/gif;base64," + imageUrl;
            // this.uploadImage(imageUrl);
            // console.log(imageUrl);    
        });
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.getWorkerPageApi);
            this.isLoading = false;
            if (response) {
                this.pageData = response;
                console.log(this.pageData);
            }
        });
    }
    goBack() {
        this.navCtrl.back();
    }
    goToPayment() {
        this.router.navigate(['payment']);
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.formData);
            // console.log(/^[a-zA-Z ]+$/i.test(this.formData.en_name));
            // console.log(this.formData.en_name.match(/^[a-zA-Z]+$/i))
            try {
                if (this.baseImage.length < 1) {
                    this.util.showToast("Please select some image");
                    return;
                }
                var image = this.baseImage.split('base64,')[1];
                if (!this.formData.no_of_childs) {
                    this.formData.no_of_childs = 0;
                    this.formData.have_childs = "No";
                }
                if (!this.formData.en_name) {
                    this.util.showToast("Invalid name");
                    return;
                }
                if (!/^[a-zA-Z ]+$/.test(this.formData.en_name)) {
                    this.util.showToast("Only alphabet a-z are allowed in english name");
                    return;
                }
                if (!this.formData.ar_name) {
                    this.util.showToast("Invalid arabic name");
                    return;
                }
                if (/[0-9]/gm.test(this.formData.ar_name)) {
                    this.util.showToast("Only alphabet a-z are allowed in arabic name");
                    return;
                }
                if (!this.formData.phone) {
                    this.util.showToast("Invalid phone");
                    return;
                }
                // console.log(!/^[0-9\+]+/i.test(this.formData.phone));
                // console.log(this.formData.phone.match(/^[0-9\+]+/))
                if (!/^[0-9]+$/.test(this.formData.phone.toString())) {
                    this.util.showToast("Only alphabet 0-9 are allowed in phone");
                    return;
                }
                if (!this.formData.salary) {
                    this.util.showToast("Invalid salary");
                    return;
                }
                if (this.formData.salary < 1) {
                    this.util.showToast("Salary cannot be less then 1");
                    return;
                }
                if (!this.formData.en_religion) {
                    this.util.showToast("Invalid religion");
                    return;
                }
                if (!this.formData.arabic_level) {
                    this.util.showToast("Invalid arabic level");
                    return;
                }
                if (!this.formData.age) {
                    this.util.showToast("Invalid age");
                    return;
                }
                if (!/^[0-9]+$/.test(this.formData.age.toString())) {
                    this.util.showToast("Only alphabet 0-9 are allowed in age");
                    return;
                }
                if (!this.formData.is_married) {
                    this.util.showToast("Select if you are married or not");
                    return;
                }
                if (!this.formData.experience) {
                    this.util.showToast("Invalid experience");
                    return;
                }
                if (!this.formData.edu_id) {
                    this.util.showToast("Education not selected");
                    return;
                }
                if (!this.formData.skin_color) {
                    this.util.showToast("Invalid skin color");
                    return;
                }
                if (!this.formData.skill_id) {
                    this.util.showToast("Please select skill");
                    return;
                }
                if (this.formData.skill_id.length < 1) {
                    this.util.showToast("Please select at least one skill");
                    return;
                }
                let skills = [];
                for (let i = 0; i < this.formData.skill_id.length; i++) {
                    skills.push(JSON.parse(this.formData.skill_id[i]));
                }
                this.formData.skill_id = JSON.stringify(skills);
                if (!this.formData.height) {
                    this.util.showToast("Invalid height");
                    return;
                }
                if (!this.formData.weight) {
                    this.util.showToast("Invalid weight");
                    return;
                }
                if (!this.formData.place_of_birth_id) {
                    this.util.showToast("Please select place of birth");
                    return;
                }
                if (!this.formData.advs_type) {
                    this.util.showToast("Please select advertisment type");
                    return;
                }
                if (!this.formData.advs_type) {
                    this.util.showToast("Please select advertisment type");
                    return;
                }
                if (!this.user.user_id) {
                    this.util.showToast("Please select advertisment type");
                    return;
                }
                if (this.cvFile == null) {
                    this.util.showToast("Please select CV");
                    return;
                }
                this.formData.user_id = this.user.user_id;
                this.formData.image = image;
                this.util.showProgressDialog();
                var response = yield this.api.postRequest(this.formData, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.addWorkerApi);
                this.util.hideProgressDialog();
                console.log(response);
                if (response) {
                    // if (response.req_status == 4) {
                    // this.util.showToast(response.req_message);
                    // this.router.navigate(["payment"]);
                    // return;
                    // }
                    let formData = new FormData();
                    formData.append('file', this.cvFile);
                    formData.append('id', response.worker_id);
                    // console.log(formData.get('name'));
                    console.log(formData.get('file'));
                    this.util.showProgressDialog("Uploading CV");
                    var response2 = yield this.api.postMultipartRequest(formData, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.uploadCVWorkerApi);
                    this.util.hideProgressDialog();
                    if (response2) {
                    }
                    this.navCtrl.back();
                    console.log(response2);
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    selectCV() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log("here");
            document.getElementById('cv-input-field').click();
        });
    }
    changeCV(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(ev);
            try {
                if (ev.target.files.length > 0) {
                    this.cvFile = ev.target.files[0];
                    console.log(this.cvFile);
                }
                else {
                    this.util.showToast("no file selected");
                }
            }
            catch (e) {
                console.log(e);
                this.util.showToast("Unfortunate error");
            }
        });
    }
    focusInput(event) {
        setTimeout(() => {
            let total = 0;
            let container = null;
            const _rec = (obj) => {
                total += obj.offsetTop;
                const par = obj.offsetParent;
                if (par && par.localName !== 'ion-content') {
                    _rec(par);
                }
                else {
                    container = par;
                }
            };
            _rec(event.target);
            container.scrollToPoint(0, total - 50, 400);
        }, 300);
    }
    jsonData(data) {
        return JSON.stringify(data);
    }
};
AddWorkerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService }
];
AddWorkerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-add-worker',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_worker_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddWorkerPage);



/***/ }),

/***/ 61805:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/add-worker/add-worker.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <!-- <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n  </ion-col> -->\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n<ion-content>\n  <div *ngIf=\"isLoading\" class=\"d-flex ion-justify-content-center ion-align-items-center w100 h100\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"add_worker_page\" *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img style=\"border: black solid;border-radius: 100px; object-fit: contain;\" (click)=\"takeImage()\"\n          src=\"{{baseImage}}\" onerror=\"this.src='assets/images/add_worker_profile.png'\" width=\"100px\" height=\"100px\"\n          alt=\"\">\n      </ion-col>\n      <ion-col size=\"2\">\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row style=\"height:20%\">\n          <ion-col class=\"ion-text-center btn-upload-container\">\n            <ion-button (click)=\"selectCV()\" color=\"none\" class=\"btn-upload-cv cwhite\">\n              {{\"Upload CV\" | translate}}\n            </ion-button>\n            <input type=\"file\" id=\"cv-input-field\" accept=\"application/pdf\" hidden (change)=\"changeCV($event)\">\n            <p></p>\n            <div *ngIf=\"cvFile == null\">\n              <p class=\"m0\">{{\"ZIP OR PDF FILE\" | translate}}</p>\n              <p class=\"m0\">{{\"(SOME INSTRUCTIONS WILL BE WRITTEN)\" | translate}}</p>\n            </div>\n            <div *ngIf=\"cvFile != null\">\n              <p class=\"m0\">{{cvFile.name}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n    <div class=\"form-container\">\n    <!-- <ion-virtual-scroll> -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>{{\"ADVERTISEMENT TYPE\" | translate}}</ion-label>\n          <!-- <ion-input placeholder=\"{{'Admission or sponsorship transmission' | translate}}\"></ion-input> -->\n          <ion-select [(ngModel)]=\"formData.advs_type\"\n            placeholder=\"{{'Admission or sponsorship transmission' | translate}}\">\n            <ion-select-option value=\"admission\">{{\"Admission\" | translate}}</ion-select-option>\n            <ion-select-option value=\"sponsored\">{{\"Sponsorship transmission\" | translate}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"ENGLISH NAME\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.en_name\" placeholder=\"Jhon\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"ARABIC NAME\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.ar_name\" placeholder=\"Arabic\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"MOBILE NUMBER\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" type = 'number' [(ngModel)]=\"formData.phone\" placeholder=\"+44 558 257 68 005\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"SALARY\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" type=\"number\" [(ngModel)]=\"formData.salary\" placeholder=\"10000\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"RELIGION\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.en_religion\" placeholder=\"Select an option\">\n            <ion-select-option *ngFor=\"let item of pageData.religion\" value=\"{{item}}\">{{item}}</ion-select-option>\n          </ion-select>\n          <!-- <ion-input [(ngModel)]=\"formData.en_religion\" placeholder=\" Muslim - Christian - Other (write)\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"ARABIC LEVEL\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.arabic_level\" placeholder=\"Select an option\">\n            <ion-select-option value=\"Excellent\">{{\"Excellent\" | translate}}</ion-select-option>\n            <ion-select-option value=\"Moderate\">{{\"Moderate\" | translate}}</ion-select-option>\n            <ion-select-option value=\"No\">{{\"No \" | translate}}</ion-select-option>\n          </ion-select>\n          <!-- <ion-input [(ngModel)]=\"formData.arabic_level\" placeholder=\"(excellent-moderateweek-no)\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"AGE\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.age\" type=\"number\" placeholder=\"(number)\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"MARRIED\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.is_married\" placeholder=\"Select an option\">\n            <ion-select-option value=\"Yes\">{{\"Yes\" | translate}}</ion-select-option>\n            <ion-select-option value=\"No\">{{\"No\" | translate}}</ion-select-option>\n          </ion-select>\n          <!-- <ion-input placeholder=\"Admission or sponsorship transmission\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"HAVE CHILDREN\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.no_of_childs\" type=\"number\" placeholder=\"(Number if Yes)\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"EXPERIENCE\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" type=\"number\" [(ngModel)]=\"formData.experience\" placeholder=\"(number) years\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"EDUCATION\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.edu_id\" placeholder=\"Select an option\">\n            <ion-select-option *ngFor=\"let edu of pageData.education\" value=\"{{edu.edu_id}}\">{{edu.en_degree}}\n            </ion-select-option>\n          </ion-select>\n          <!-- <ion-input placeholder=\"Admission or sponsorship transmission\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"SKIN COLOR\"|translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.skin_color\" placeholder=\"(Text) Fair\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"TALL\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" type = \"number\" [(ngModel)]=\"formData.height\" placeholder=\"(number) cm\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"WEIGHT\"| translate}}</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"formData.weight\" placeholder=\"(number) kg\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"PLACE OF BIRTH\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.place_of_birth_id\" placeholder=\"(choose country)\">\n            <ion-select-option *ngFor=\"let cont of pageData.countries\" value=\"{{cont.country_id}}\">{{cont.name}}\n              ({{cont.sortname}})</ion-select-option>\n            <!-- <ion-select-option>UAE</ion-select-option> -->\n          </ion-select>\n          <!-- <ion-input placeholder=\"(number) kg\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"PLACE OF LIVING\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.place_of_living_id\" placeholder=\"(choose country)\">\n            <ion-select-option *ngFor=\"let cont of pageData.countries\" value=\"{{cont.country_id}}\">{{cont.name}}\n              ({{cont.sortname}})</ion-select-option>\n            <!-- <ion-select-option>UAE</ion-select-option> -->\n          </ion-select>\n          <!-- <ion-input placeholder=\"(number) kg\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"WORKS CAN DO\" | translate}}</ion-label>\n          <ion-select multiple [(ngModel)]=\"formData.skill_id\" placeholder=\"(list to choose from)\">\n            <ion-select-option *ngFor=\"let item of pageData.skills\" value={{jsonData(item)}}>{{item.en_name}}</ion-select-option>\n          </ion-select>\n          <!-- <ion-input placeholder=\"(number) kg\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"REMARKS\" | translate}}</ion-label>\n          <ion-textarea (ionFocus)=\"focusInput($event)\" class=\"input\" [(ngModel)]=\"formData.remarks\" placeholder=\"(Long Text)\"></ion-textarea>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button (click)=\"submit()\" class=\"submit-button\" color=\"none\">\n            <ion-label class=\"cwhite\">{{\"SAVE CHANGES\" | translate}}</ion-label>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    <!-- </ion-virtual-scroll> -->\n    </div>\n\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 35159:
/*!*************************************************!*\
  !*** ./src/app/add-worker/add-worker.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".btn-upload-cv {\n  margin-top: 10px;\n  background: linear-gradient(280deg, #7f132a 40%, #c90269 100%);\n  margin: 0px;\n  --border-radius: 14px;\n  border-radius: 14px;\n  box-shadow: 0;\n  height: 38px;\n  font-size: 18px;\n  margin-top: 10px;\n  width: 100%;\n  font-family: \"Roboto Medium\";\n}\n\n.btn-upload-container {\n  margin-top: 14px;\n}\n\n.btn-upload-container p {\n  color: #7f132a;\n  font-size: 6px;\n}\n\n.form-container {\n  font-size: 14px;\n  color: #7f132a;\n  padding: 0px 28px 0px 28px;\n}\n\n.form-container .input {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.form-container ion-input {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container ion-select {\n  color: #9cb9e4;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.submit-button {\n  margin-top: 10px;\n  background: linear-gradient(180deg, #7f132a 40%, #c90269 100%);\n  margin: 0px;\n  --border-radius: 4px;\n  border-radius: 4px;\n  box-shadow: 0;\n  height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC13b3JrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQUk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUVSOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQUVKOztBQURJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUdSOztBQUFJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFFUjs7QUFBSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRVI7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImFkZC13b3JrZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi11cGxvYWQtY3Yge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGxpbmVhcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyODBkZWcsICM3ZjEzMmEgNDAlLCByZ2JhKDIwMSwgMiwgMTA1LCAxKSAxMDAlKTtcbiAgICBtYXJnaW46IDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBib3gtc2hhZG93OiAwO1xuICAgIGhlaWdodDogMzhweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTWVkaXVtXCI7XG59XG4uYnRuLXVwbG9hZC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjN2YxMzJhO1xuICAgICAgICBmb250LXNpemU6IDZweDtcbiAgICB9XG59XG4uZm9ybS1jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzdmMTMyYTtcbiAgICBwYWRkaW5nOiAwcHggMjhweCAwcHggMjhweDtcbiAgICAuaW5wdXR7XG4gICAgICAgIGNvbG9yOiAjNmM3NDgwO1xuICAgICAgICBib3JkZXI6ICM3MDcwNzAgc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgIC8vIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgY29sb3I6ICM2Yzc0ODA7XG4gICAgICAgIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgY29sb3I6ICM5Y2I5ZTQ7XG4gICAgICAgIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzdmMTMyYSA0MCUsIHJnYmEoMjAxLCAyLCAxMDUsIDEpIDEwMCUpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwO1xuICAgIGhlaWdodDogMjhweDtcbiAgICAvLyB3aWR0aDogMTAwcHg7XG59XG5cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_add-worker_add-worker_module_ts.js.map