(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/frontDeskOfficer/front-desk-officer.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/frontDeskOfficer/front-desk-officer.service.ts ***!
  \****************************************************************/
/*! exports provided: FrontDeskOfficerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontDeskOfficerService", function() { return FrontDeskOfficerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


class FrontDeskOfficerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    post(frontDeskOfficer) {
        return this.httpClient.post('api/fdo', frontDeskOfficer);
    }
    get(page = 0, limit = 10, active = true) {
        return this.httpClient.get(`api/fdos?page=${page}&limit=${limit}&active=${active}`);
    }
    getById(id) {
        return this.httpClient.get(`api/fdo/${id}`);
    }
    update(id, value) {
        return this.httpClient.put(`api/fdo/${id}`, value);
    }
    getFDOsList() {
        return this.httpClient.get(`api/fdo/getFDOList`);
    }
}
FrontDeskOfficerService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function FrontDeskOfficerService_Factory() { return new FrontDeskOfficerService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: FrontDeskOfficerService, providedIn: "root" });


/***/ }),

/***/ "./src/app/lab-attendant/lab-attendant.service.ts":
/*!********************************************************!*\
  !*** ./src/app/lab-attendant/lab-attendant.service.ts ***!
  \********************************************************/
/*! exports provided: LabAttendantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabAttendantService", function() { return LabAttendantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


class LabAttendantService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    post(labAttendant) {
        return this.httpClient.post('api/labAttendant', labAttendant);
    }
    get(page = 0, limit = 10, active = true) {
        return this.httpClient.get(`api/labAttendants?page=${page}&limit=${limit}&active=${active}`);
    }
    getById(id) {
        return this.httpClient.get(`api/labAttendant/${id}`);
    }
    upate(id, value) {
        return this.httpClient.put(`api/labAttendant/${id}`, value);
    }
    getList() {
        return this.httpClient.get(`api/labAttendantList`);
    }
}
LabAttendantService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function LabAttendantService_Factory() { return new LabAttendantService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: LabAttendantService, providedIn: "root" });


/***/ }),

/***/ "./src/app/payment/payment.service.ts":
/*!********************************************!*\
  !*** ./src/app/payment/payment.service.ts ***!
  \********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


class PaymentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.tempDoctor = null;
        this.tempPatient = null;
    }
    post(payment) {
        return this.httpClient.post(`api/billing/create`, payment);
    }
    getAll(page = 0, limit = 10, fromDate = null, toDate = null) {
        return this.httpClient.get(`api/billing/get?page=${page}&limit=${limit}&fromDate=${fromDate}&toDate=${toDate}`);
    }
    outstanding(page = 0, limit = 10, fromDate = null, toDate = null) {
        return this.httpClient.get(`api/billing/outstanding?page=${page}&limit=${limit}&fromDate=${fromDate}&toDate=${toDate}`);
    }
    getById(id) {
        console.log(id);
        return this.httpClient.get(`api/billing/${id}`);
    }
    getByPatient(id, page = 0, limit = 10) {
        return this.httpClient.get(`api/billing/patient/${id}?page=${page}&limit=${limit}`);
    }
    saveCheckout(p, d) {
        this.tempDoctor = d;
        this.tempPatient = p;
    }
    get getPatient() {
        return this.tempPatient;
    }
    get getDoctor() {
        return this.tempDoctor;
    }
}
PaymentService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function PaymentService_Factory() { return new PaymentService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: PaymentService, providedIn: "root" });


/***/ }),

/***/ "./src/app/pharmacy/pharmacy.service.ts":
/*!**********************************************!*\
  !*** ./src/app/pharmacy/pharmacy.service.ts ***!
  \**********************************************/
/*! exports provided: PharmacyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyService", function() { return PharmacyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


class PharmacyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    post(pharmacy) {
        return this.httpClient.post('api/pharmacy', pharmacy);
    }
    get(page = 0, limit = 10, active = true) {
        return this.httpClient.get(`api/pharmacies?page=${page}&limit=${limit}&active=${active}`);
    }
    getById(id) {
        return this.httpClient.get(`api/pharmacy/${id}`);
    }
    update(id, value) {
        return this.httpClient.put(`api/pharmacy/${id}`, value);
    }
    getPrescriptions(page = 0, limit = 10, date = null) {
        return this.httpClient.get(`api/pharmacy/getPrescriptions?date=${date}&page=${page}&limit=${limit}`);
    }
    getPrescription(id) {
        return this.httpClient.get(`api/pharmacy/getPrescription/${id}`);
    }
    getPharmacyList() {
        return this.httpClient.get(`api/phrmacyList/`);
    }
    updatePrescriptionStatus(id) {
        return this.httpClient.put(`api/pharmacy/updatePrescription/${id}`, {});
    }
}
PharmacyService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function PharmacyService_Factory() { return new PharmacyService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: PharmacyService, providedIn: "root" });


/***/ }),

/***/ "./src/app/shared/pipes/age.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/pipes/age.pipe.ts ***!
  \******************************************/
/*! exports provided: AgePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgePipe", function() { return AgePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


class AgePipe {
    transform(value) {
        let today = moment__WEBPACK_IMPORTED_MODULE_1__();
        let birthdate = moment__WEBPACK_IMPORTED_MODULE_1__(value);
        let years = today.diff(birthdate, 'years');
        let html = years + " yr ";
        html += today.subtract(years, 'years').diff(birthdate, 'months') + " mo";
        return html;
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map