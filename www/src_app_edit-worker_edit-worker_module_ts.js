"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-worker_edit-worker_module_ts"],{

/***/ 8782:
/*!***********************************************************!*\
  !*** ./src/app/edit-worker/edit-worker-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditWorkerPageRoutingModule": () => (/* binding */ EditWorkerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _edit_worker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-worker.page */ 72617);




const routes = [
    {
        path: '',
        component: _edit_worker_page__WEBPACK_IMPORTED_MODULE_0__.EditWorkerPage
    }
];
let EditWorkerPageRoutingModule = class EditWorkerPageRoutingModule {
};
EditWorkerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditWorkerPageRoutingModule);



/***/ }),

/***/ 19423:
/*!***************************************************!*\
  !*** ./src/app/edit-worker/edit-worker.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditWorkerPageModule": () => (/* binding */ EditWorkerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _edit_worker_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-worker-routing.module */ 8782);
/* harmony import */ var _edit_worker_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-worker.page */ 72617);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 90466);








let EditWorkerPageModule = class EditWorkerPageModule {
};
EditWorkerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_worker_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditWorkerPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            // MjpipesPipe,
        ],
        declarations: [_edit_worker_page__WEBPACK_IMPORTED_MODULE_1__.EditWorkerPage]
    })
], EditWorkerPageModule);



/***/ }),

/***/ 72617:
/*!*************************************************!*\
  !*** ./src/app/edit-worker/edit-worker.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditWorkerPage": () => (/* binding */ EditWorkerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_worker_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-worker.page.html */ 13561);
/* harmony import */ var _edit_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-worker.page.scss */ 25570);
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













let EditWorkerPage = class EditWorkerPage {
    constructor(navCtrl, route, translate, api, router, util) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.translate = translate;
        this.api = api;
        this.router = router;
        this.util = util;
        this.isLoading = false;
        this.pageData = {};
        this.formData = {};
        this.baseImage = '';
        this.user = {};
        this.worker = {};
        this.cvFile = null;
        this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_6__.getUser)();
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params.worker) {
                this.worker = JSON.parse(params.worker);
                console.log(this.worker);
                this.getPageData();
                this.getWorker();
            }
        });
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
            // return;
            this.isLoading = true;
            var response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.getWorkerPageApi);
            this.isLoading = false;
            if (response) {
                this.pageData = response;
                console.log(this.pageData);
            }
        });
    }
    getWorker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // this.isLoading = true;
            let response = yield this.api.getRequest(_services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.workerDetailApi + '/' + this.worker.worker_id + "?lang=" + (0,_services_local_helper__WEBPACK_IMPORTED_MODULE_5__.getLang)());
            // this.isLoading = false;
            if (response) {
                console.log(response);
                this.worker = response;
                this.baseImage = _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.baseUrl + this.worker.image;
                this.formData.no_of_childs = this.worker.no_of_childs;
                this.formData.en_name = this.worker.en_name;
                this.formData.ar_name = this.worker.ar_name;
                this.formData.phone = this.worker.phone;
                this.formData.en_religion = this.worker.en_religion;
                this.formData.arabic_level = this.worker.arabic_level;
                this.formData.age = this.worker.age;
                this.formData.is_married = this.worker.is_married;
                this.formData.experience = this.worker.experience;
                this.formData.edu_id = this.worker.edu_id;
                this.formData.skin_color = this.worker.skin_color;
                this.formData.height = this.worker.height;
                this.formData.weight = this.worker.weight;
                this.formData.place_of_birth_id = this.worker.place_of_birth_id;
                this.formData.advs_type = this.worker.advs_type;
                this.formData.user_id = this.worker.user_id;
                this.formData.place_of_living_id = this.worker.place_of_living_id;
                this.formData.remarks = this.worker.remarks;
                let skills = JSON.parse(this.worker.skill_id);
                this.worker.skill_id = [];
                skills.forEach(element => {
                    this.worker.skill_id.push(JSON.stringify(element));
                });
                this.formData.skill_id = this.worker.skill_id;
                this.formData.salary = this.worker.salary;
                console.log(this.formData);
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
            // return;
            console.log(this.formData);
            try {
                console.log(this.worker.worker_id);
                if (this.worker.worker_id) {
                    this.formData.worker_id = this.worker.worker_id;
                }
                if (!this.formData.worker_id) {
                    this.util.showToast("Cannot find worker");
                    return;
                }
                if (this.baseImage.length < 1) {
                    this.util.showToast("Please Select Some Image");
                    return;
                }
                var image = this.baseImage.split('base64,');
                if (image.length > 1) {
                    image = this.baseImage.split('base64,')[1];
                }
                else {
                    image = null;
                    // image = this.worker.image;
                }
                if (!this.formData.no_of_childs) {
                    this.formData.no_of_childs = 0;
                    this.formData.have_childs = "No";
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
                // if (!this.formData.en_name) {
                //   this.util.showToast("Invalid Name");
                //   return;
                // }
                // if (!this.formData.ar_name) {
                //   this.util.showToast("Invalid Arabic Name");
                //   return;
                // }
                // if (!this.formData.phone) {
                //   this.util.showToast("Invalid Phone");
                //   return;
                // }
                // if (!this.formData.en_religion) {
                //   this.util.showToast("Invalid Phone");
                //   return;
                // }
                // if (!this.formData.arabic_level) {
                //   this.util.showToast("Invalid Arabic Level");
                //   return;
                // }
                // if (!this.formData.age) {
                //   this.util.showToast("Invalid Age");
                //   return;
                // }
                // if (!this.formData.is_married) {
                //   this.util.showToast("MARRIED Not selected");
                //   return;
                // }
                // if (!this.formData.experience) {
                //   this.util.showToast("Invalid Experience");
                //   return;
                // }
                // if (!this.formData.edu_id) {
                //   this.util.showToast("Education Not selected");
                //   return;
                // }
                // if (!this.formData.skin_color) {
                //   this.util.showToast("Invalid Skin Color");
                //   return;
                // }
                // if (!this.formData.height) {
                //   this.util.showToast("Invalid Height");
                //   return;
                // }
                // if (!this.formData.weight) {
                //   this.util.showToast("Invalid Weight");
                //   return;
                // }
                // if (!this.formData.place_of_birth_id) {
                //   this.util.showToast("Please select place of birth");
                //   return;
                // }
                // if (!this.formData.advs_type) {
                //   this.util.showToast("Please select advertisment type");
                //   return;
                // }
                // if (!this.user.user_id) {
                //   this.util.showToast("Please select advertisment type");
                //   return;
                // }
                // if (this.cvFile == null) {
                //   this.util.showToast("Please select CV");
                //   return;
                // }
                this.formData.user_id = this.user.user_id;
                if (image) {
                    this.formData.image = image;
                }
                console.log(this.formData);
                this.util.showProgressDialog();
                var response = yield this.api.postRequest(this.formData, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.updateWorkerApi);
                this.util.hideProgressDialog();
                console.log(response);
                if (response) {
                    if (this.cvFile != null) {
                        let formData = new FormData();
                        formData.append('file', this.cvFile);
                        formData.append('id', response.worker_id);
                        // console.log(formData.get('name'));
                        console.log(formData.get('file'));
                        this.util.showProgressDialog("Uplaoding CV");
                        var response2 = yield this.api.postMultipartRequest(formData, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_4__.uploadCVWorkerApi);
                        this.util.hideProgressDialog();
                        if (response2) {
                        }
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
EditWorkerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService }
];
EditWorkerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-edit-worker',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_worker_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_worker_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditWorkerPage);



/***/ }),

/***/ 13561:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/edit-worker/edit-worker.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <!-- <ion-title>\n        Tab 2\n      </ion-title> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <img src=\"assets/images/setting.png\" alt=\"\"> -->\n  </ion-col>\n</ion-row>\n<ion-content>\n  <div *ngIf=\"isLoading\" class=\"d-flex ion-justify-content-center ion-align-items-center w100 h100\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"add_worker_page\" *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img style=\"border: black solid;border-radius: 100px; object-fit: contain;\" (click)=\"takeImage()\"\n          src=\"{{baseImage}}\" onerror=\"this.src='assets/images/add_worker_profile.png'\" width=\"100px\" height=\"100px\"\n          alt=\"\">\n      </ion-col>\n      <ion-col size=\"2\">\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row style=\"height:20%\">\n          <ion-col class=\"ion-text-center btn-upload-container\">\n            <ion-button (click)=\"selectCV()\" color=\"none\" class=\"btn-upload-cv cwhite\">\n              {{\"Upload CV\" | translate}}\n            </ion-button>\n            <input type=\"file\" id=\"cv-input-field\" accept=\"application/pdf\" hidden (change)=\"changeCV($event)\">\n            <p></p>\n            <div *ngIf=\"cvFile == null\">\n              <p class=\"m0\">{{\"ZIP OR PDF FILE\" | translate}}</p>\n              <p class=\"m0\">{{\"(SOME INSTRUCTIONS WILL BE WRITTEN)\" | translate}}</p>\n            </div>\n            <div *ngIf=\"cvFile != null\">\n              <p class=\"m0\">{{cvFile.name}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n    <div class=\"form-container\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-label>{{\"ADVERTISEMENT TYPE\" | translate}}</ion-label>\n          <!-- <ion-input (ionFocus)=\"focusInput($event)\" placeholder=\"{{'Admission or sponsorship transmission' | translate}}\"></ion-input> -->\n          <ion-select [(ngModel)]=\"formData.advs_type\"\n            placeholder=\"{{'Admission or sponsorship transmission' | translate}}\">\n            <ion-select-option value=\"admission\">{{\"Admission\" | translate}}</ion-select-option>\n            <ion-select-option value=\"sponsored\">{{\"Sponsorship transmission\" | translate}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"ENGLISH NAME\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.en_name\" placeholder=\"Jhon\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"ARABIC NAME\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.ar_name\" placeholder=\"Arabic\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"MOBILE NUMBER\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" type = 'number' [(ngModel)]=\"formData.phone\" placeholder=\"+44 558 257 68 005\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"SALARY\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" type=\"number\" [(ngModel)]=\"formData.salary\" placeholder=\"10000\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"RELIGION\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.en_religion\" placeholder=\"Select an option\">\n            <ion-select-option *ngFor=\"let item of pageData.religion\" value=\"{{item}}\">{{item}}</ion-select-option>\n          </ion-select>\n          <!-- <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.en_religion\" placeholder=\" Muslim - Christian - Other (write)\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"ARABIC LEVEL\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.arabic_level\" placeholder=\"Select an option\">\n            <ion-select-option value=\"Excellent\">{{\"Excellent\" | translate}}</ion-select-option>\n            <ion-select-option value=\"Moderate\">{{\"Moderate\" | translate}}</ion-select-option>\n            <ion-select-option value=\"No\">{{\"No \" | translate}}</ion-select-option>\n          </ion-select>\n          <!-- <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.arabic_level\" placeholder=\"(excellent-moderateweek-no)\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"AGE\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.age\" type=\"number\" placeholder=\"(number)\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"MARRIED\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.is_married\" placeholder=\"Select an option\">\n            <ion-select-option value=\"Yes\">{{\"Yes\" | translate}}</ion-select-option>\n            <ion-select-option value=\"No\">{{\"No\" | translate}}</ion-select-option>\n          </ion-select>\n          <!-- <ion-input (ionFocus)=\"focusInput($event)\" placeholder=\"Admission or sponsorship transmission\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"HAVE CHILDREN\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.no_of_childs\" type=\"number\" placeholder=\"(Number if Yes)\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"EXPERIENCE\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" type=\"number\" [(ngModel)]=\"formData.experience\" placeholder=\"(number) years\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"EDUCATION\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.edu_id\" placeholder=\"Select an option\">\n            <ion-select-option *ngFor=\"let edu of pageData.education\" value=\"{{edu.edu_id}}\">{{edu.en_degree}}\n            </ion-select-option>\n          </ion-select>\n          <!-- <ion-input (ionFocus)=\"focusInput($event)\" placeholder=\"Admission or sponsorship transmission\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"SKIN COLOR\"|translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" [(ngModel)]=\"formData.skin_color\" placeholder=\"(Text) Fair\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"TALL\" | translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" type = \"number\" [(ngModel)]=\"formData.height\" placeholder=\"(number) cm\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"WEIGHT\"| translate}}</ion-label>\n          <ion-input (ionFocus)=\"focusInput($event)\" type=\"number\" [(ngModel)]=\"formData.weight\" placeholder=\"(number) kg\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"PLACE OF BIRTH\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.place_of_birth_id\" placeholder=\"(choose country)\">\n            <ion-select-option *ngFor=\"let cont of pageData.countries\" value=\"{{cont.country_id}}\">{{cont.name}}\n              ({{cont.sortname}})</ion-select-option>\n            <!-- <ion-select-option>UAE</ion-select-option> -->\n          </ion-select>\n          <!-- <ion-input (ionFocus)=\"focusInput($event)\" placeholder=\"(number) kg\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"PLACE OF LIVING\" | translate}}</ion-label>\n          <ion-select [(ngModel)]=\"formData.place_of_living_id\" placeholder=\"(choose country)\">\n            <ion-select-option *ngFor=\"let cont of pageData.countries\" value=\"{{cont.country_id}}\">{{cont.name}}\n              ({{cont.sortname}})</ion-select-option>\n            <!-- <ion-select-option>UAE</ion-select-option> -->\n          </ion-select>\n          <!-- <ion-input (ionFocus)=\"focusInput($event)\" placeholder=\"(number) kg\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"WORKS CAN DO\" | translate}}</ion-label>\n          <ion-select multiple [(ngModel)]=\"formData.skill_id\" placeholder=\"(list to choose from)\">\n            <ion-select-option *ngFor=\"let item of pageData.skills\" value={{jsonData(item)}}>{{item.en_name}}</ion-select-option>\n          </ion-select>\n          <!-- <ion-input placeholder=\"(number) kg\"></ion-input> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-label>{{\"REMARKS\" | translate}}</ion-label>\n          <ion-textarea (ionFocus)=\"focusInput($event)\" class=\"input\" [(ngModel)]=\"formData.remarks\" placeholder=\"(Long Text)\"></ion-textarea>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button (click)=\"submit()\" class=\"submit-button\" color=\"none\">\n            <ion-label class=\"cwhite\">{{\"SAVE CHANGES\" | translate}}</ion-label>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n  </div>\n \n\n</ion-content>");

/***/ }),

/***/ 25570:
/*!***************************************************!*\
  !*** ./src/app/edit-worker/edit-worker.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".btn-upload-cv {\n  margin-top: 10px;\n  background: linear-gradient(280deg, #7f132a 40%, #c90269 100%);\n  margin: 0px;\n  --border-radius: 14px;\n  border-radius: 14px;\n  box-shadow: 0;\n  height: 38px;\n  font-size: 18px;\n  margin-top: 10px;\n  width: 100%;\n  font-family: \"Roboto Medium\";\n}\n\n.btn-upload-container {\n  margin-top: 14px;\n}\n\n.btn-upload-container p {\n  color: #7f132a;\n  font-size: 6px;\n}\n\n.form-container {\n  font-size: 14px;\n  color: #7f132a;\n  padding: 0px 28px 0px 28px;\n}\n\n.form-container .input {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n}\n\n.form-container ion-input {\n  color: #6c7480;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.form-container ion-select {\n  color: #9cb9e4;\n  border: #707070 solid;\n  border-radius: 4px;\n  font-size: 13px;\n  margin-top: 2px;\n  height: 30px;\n}\n\n.submit-button {\n  margin-top: 10px;\n  background: linear-gradient(180deg, #7f132a 40%, #c90269 100%);\n  margin: 0px;\n  --border-radius: 4px;\n  border-radius: 4px;\n  box-shadow: 0;\n  height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtd29ya2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsOERBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUFJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFFUjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFFSjs7QUFESTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFHUjs7QUFBSTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRVI7O0FBQUk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSw4REFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXdvcmtlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXVwbG9hZC1jdiB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGluZWFyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI4MGRlZywgIzdmMTMyYSA0MCUsIHJnYmEoMjAxLCAyLCAxMDUsIDEpIDEwMCUpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGJveC1zaGFkb3c6IDA7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNZWRpdW1cIjtcbn1cbi5idG4tdXBsb2FkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICM3ZjEzMmE7XG4gICAgICAgIGZvbnQtc2l6ZTogNnB4O1xuICAgIH1cbn1cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjN2YxMzJhO1xuICAgIHBhZGRpbmc6IDBweCAyOHB4IDBweCAyOHB4O1xuICAgIC5pbnB1dHtcbiAgICAgICAgY29sb3I6ICM2Yzc0ODA7XG4gICAgICAgIGJvcmRlcjogIzcwNzA3MCBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgLy8gaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICBpb24taW5wdXQge1xuICAgICAgICBjb2xvcjogIzZjNzQ4MDtcbiAgICAgICAgYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBjb2xvcjogIzljYjllNDtcbiAgICAgICAgYm9yZGVyOiAjNzA3MDcwIHNvbGlkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjN2YxMzJhIDQwJSwgcmdiYSgyMDEsIDIsIDEwNSwgMSkgMTAwJSk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDA7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIC8vIHdpZHRoOiAxMDBweDtcbn1cblxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-worker_edit-worker_module_ts.js.map