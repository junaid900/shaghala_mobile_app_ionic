"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_notification-list_notification-list_module_ts"],{

/***/ 96738:
/*!***********************************************************************!*\
  !*** ./src/app/notification-list/notification-list-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationListPageRoutingModule": () => (/* binding */ NotificationListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _notification_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-list.page */ 72972);




const routes = [
    {
        path: '',
        component: _notification_list_page__WEBPACK_IMPORTED_MODULE_0__.NotificationListPage
    }
];
let NotificationListPageRoutingModule = class NotificationListPageRoutingModule {
};
NotificationListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationListPageRoutingModule);



/***/ }),

/***/ 25250:
/*!***************************************************************!*\
  !*** ./src/app/notification-list/notification-list.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationListPageModule": () => (/* binding */ NotificationListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _notification_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-list-routing.module */ 96738);
/* harmony import */ var _notification_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-list.page */ 72972);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/component.module */ 87721);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 90466);









let NotificationListPageModule = class NotificationListPageModule {
};
NotificationListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _notification_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationListPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        ],
        declarations: [_notification_list_page__WEBPACK_IMPORTED_MODULE_1__.NotificationListPage]
    })
], NotificationListPageModule);



/***/ }),

/***/ 72972:
/*!*************************************************************!*\
  !*** ./src/app/notification-list/notification-list.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationListPage": () => (/* binding */ NotificationListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notification_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notification-list.page.html */ 73044);
/* harmony import */ var _notification_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-list.page.scss */ 44818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ 67118);
/* harmony import */ var _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api_url.hepler */ 69941);
/* harmony import */ var _services_session_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/session.helper */ 13086);








let NotificationListPage = class NotificationListPage {
    constructor(menu, api
    // private
    ) {
        this.menu = menu;
        this.api = api;
        this.isLoading = false;
        this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_4__.getUser)();
        this.notifications = [];
        this.getPageData();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_4__.getUser)();
        this.readNotification();
    }
    getPageData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            let response = yield this.api.postRequest({
                user_id: this.user.user_id
            }, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.getUserNotification);
            this.isLoading = false;
            if (response) {
                console.log("notification", response);
                this.notifications = response;
            }
        });
    }
    openMenu() {
        this.menu.open();
    }
    readNotification() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = (0,_services_session_helper__WEBPACK_IMPORTED_MODULE_4__.getUser)();
            let response = yield this.api.postRequest({
                user_id: this.user.user_id
            }, _services_api_url_hepler__WEBPACK_IMPORTED_MODULE_3__.readNotificationApi + "/" + this.user.user_id);
        });
    }
};
NotificationListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
NotificationListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-notification-list',
        template: _Volumes_Junaid_Programming_Ionic_Shkalah_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notification_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notification_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationListPage);



/***/ }),

/***/ 73044:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/notification-list/notification-list.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-row class=\"header pt6\">\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <img src=\"assets/images/menu.png\" alt=\"\" (click)=\"openMenu()\">\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"text-center m-auto\">\n    <!-- <img src=\"assets/images/back.png\" (click)=\"goBack()\" alt=\"\"> -->\n    <!-- <img src=\"assets/images/menu.png\" alt=\"\"> -->\n  </ion-col>\n  <ion-col size=\"7.5\" class=\"m-auto\">\n    <ion-title>\n      {{\"Notifications\" | translate}}\n    </ion-title>\n  </ion-col>\n  <ion-col size=\"1.5\" class=\"m-auto text-center\">\n    <!-- <ion-icon name=\"filter\" routerLink=\"/advance-filter\"></ion-icon> -->\n  </ion-col>\n</ion-row>\n\n<ion-content>\n  <app-empty-layout *ngIf=\"!isLoading && notifications.length < 1\"></app-empty-layout>\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n  <ion-row class=\"mt10 ion-justify-content-center\">\n    <ion-col size=\"12\" *ngFor=\"let item of notifications\">\n      <div class=\"emp-item cblack  d-flex flex-direction-column\">\n        <!-- <ion-icon name=\"heart\" class=\"fav-icon\"></ion-icon> -->\n        <!-- <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n          width=\"30px\" alt=\"\">\n        <img *ngIf=\"item.fav > 0\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\"\n          width=\"30px\" alt=\"\"> -->\n\n        <ion-row class=\"info-container list touch-opacity\">\n\n          <ion-col size=\"4\">\n            <img src=\"{{item.image}}\"\n              onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\" class=\"worker-img-list\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <h6 class=\"MyriadPro-Bold cblack m0 pt10 w100\">{{item.lang_name}}</h6>\n            <div class=\"emp-info\">\n              <!-- <ion-label class=\"MyriadPro-Regular\">{{\"Religion\" | translate}} : {{item.en_religion}}</ion-label> -->\n              <h5 class=\"m0 p0 MyriadPro-Regular\">{{item.notification_title}}\n              </h5>\n              <p class=\"m0 p0 MyriadPro-Regular\">{{item.description}}</p>\n              <p class=\"m0 p0 MyriadPro-Regular\">{{item.created_at}}</p>\n              <!-- {{item.age}} {{\"years old\" | translate}} -->\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n  </ion-row>\n  <!-- <div>\n    <ion-row class=\"mt10 ion-justify-content-center\">\n      \n      <ion-col size=\"5.6\" *ngFor=\"let item of list\">\n        <div class=\"emp-item cblack  d-flex flex-direction-column\">\n          <img *ngIf=\"item.fav != 1\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart.png\" class=\"fav-icon\"\n            width=\"30px\" alt=\"\">\n          <img *ngIf=\"item.fav > 0\" (click)=\"addToFav(item)\" src=\"assets/images/fav-heart-red.png\" class=\"fav-icon\"\n            width=\"30px\" alt=\"\">\n\n          <img (click)=\"goToWorkerDetail(item)\" src=\"{{appUrl + item.image}}\"\n            onerror=\"this.src = 'assets/images/image-placeholder.jpeg'\" alt=\"\" class=\"worker-img\">\n          <ion-row class=\"info-container\" (click)=\"goToWorkerDetail(item)\">\n            <ion-col>\n              <h6 class=\"MyriadPro-Bold cblack m0 ion-text-center w100\">{{item.lang_name}}</h6>\n              <div class=\"emp-info\">\n                <ion-label class=\"MyriadPro-Regular\">{{item.en_religion}}</ion-label>\n                <p class=\"m0 p0 MyriadPro-Regular\">{{item.place_of_living}} | {{item.age}} {{\"years old\" | translate}}\n                </p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </div> -->\n\n</ion-content>");

/***/ }),

/***/ 44818:
/*!***************************************************************!*\
  !*** ./src/app/notification-list/notification-list.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: white;\n}\n\n.header {\n  background: #7f132a;\n  color: white;\n}\n\n.top-container {\n  background-color: #7f132a;\n  height: 50px;\n}\n\n.home-page {\n  position: relative;\n  top: -50px;\n}\n\n.emp-item img {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  height: 60px;\n}\n\n.info-container {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #E6E7E8;\n}\n\n.info-container .list {\n  border-radius: 10px;\n}\n\n.emp-info {\n  color: #58595B;\n  font-size: 12px;\n}\n\n.fav-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding-top: 10px;\n  padding-right: 10px;\n  z-index: 999;\n  color: white;\n  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));\n  font-size: 20px;\n}\n\n.worker-img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n}\n\n.worker-img-list {\n  width: 100%;\n  height: 100px;\n  margin-top: 4px;\n  border-radius: 10px;\n  object-fit: contain;\n}\n\n.ion-sponsor-accordion :first {\n  box-shadow: #5b5b5b 2px 2px;\n}\n\n.accordion-header {\n  --background: #7f132a;\n  --border-radius: 30px;\n  --min-height: 30px;\n  font-size: 14px;\n  box-shadow: 2px 3px 5px #5b5b5b;\n  color: white;\n}\n\n.accordion-header ion-icon {\n  color: white;\n}\n\n.ac-group {\n  width: 90%;\n}\n\n.according-list {\n  background: #E6E7E8;\n}\n\n.according-list ion-item {\n  --background: #E6E7E8;\n  color: #808285;\n  --border-color: white;\n  --min-height: 36px;\n  font-size: 14px;\n}\n\n.ion-sponsor-accordion {\n  border-radius: 28px !important;\n  background-color: #e6e7e8;\n  box-shadow: 2px 3px 5px #5b5b5b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBSUo7O0FBREk7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQUlSOztBQUFBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBR0o7O0FBRkk7RUFDSSxtQkFBQTtBQUlSOztBQURBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUdBLFlBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFEQTtFQUNJLDJCQUFBO0FBSUo7O0FBREE7RUFDSSxxQkFBQTtFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBSUw7O0FBSEs7RUFDSSxZQUFBO0FBS1Q7O0FBRkE7RUFDSSxVQUFBO0FBS0o7O0FBSEE7RUFFSSxtQkFBQTtBQUtKOztBQUpJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFNUjs7QUFGQTtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQUtKIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogIzdmMTMyYTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4udG9wLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmMTMyYTtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4uaG9tZS1wYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNTBweDtcbn1cbi5lbXAtaXRlbXtcbiAgICBpbWd7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxufVxuXG4uaW5mby1jb250YWluZXJ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFN0U4O1xuICAgIC5saXN0e1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbn1cbi5lbXAtaW5mb3tcbiAgICBjb2xvcjogIzU4NTk1QjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZmF2LWljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA1cHggMnB4IHJnYigwIDAgMCAvIDAuNCkpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi53b3JrZXItaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2JjYmVjMDtcbn0gXG4ud29ya2VyLWltZy1saXN0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbi8vIGJhY2tncm91bmQtY29sb3I6ICNiY2JlYzA7XG59XG4uaW9uLXNwb25zb3ItYWNjb3JkaW9uIDpmaXJzdHtcbiAgICBib3gtc2hhZG93OiAjNWI1YjViIDJweCAycHg7XG59XG5cbi5hY2NvcmRpb24taGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICM3ZjEzMmE7XG4gICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgLS1taW4taGVpZ2h0OiAzMHB4O1xuICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIGJveC1zaGFkb3c6MnB4IDNweCA1cHggIzViNWI1YjtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBpb24taWNvbntcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgfVxufVxuLmFjLWdyb3Vwe1xuICAgIHdpZHRoOiA5MCU7XG59XG4uYWNjb3JkaW5nLWxpc3R7XG4gICAgLy8gcGFkZGluZy10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0U2RTdFODtcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRTZFN0U4O1xuICAgICAgICBjb2xvcjogIzgwODI4NTtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIH1cbn1cbi5pb24tc3BvbnNvci1hY2NvcmRpb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlN2U4O1xuICAgIGJveC1zaGFkb3c6MnB4IDNweCA1cHggIzViNWI1YjtcbiAgICAvLyBpb24taXRlbXt4d1xuICAgIC8vIGhlaWdodDogNDBweDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_notification-list_notification-list_module_ts.js.map