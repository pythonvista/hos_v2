(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./src/app/frontDeskOfficer/front-desk-officer.service.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/frontDeskOfficer/front-desk-officer.service.ts ***!
          \****************************************************************/
        /*! exports provided: FrontDeskOfficerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontDeskOfficerService", function () { return FrontDeskOfficerService; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var FrontDeskOfficerService = /** @class */ (function () {
                function FrontDeskOfficerService(httpClient) {
                    this.httpClient = httpClient;
                }
                FrontDeskOfficerService.prototype.post = function (frontDeskOfficer) {
                    return this.httpClient.post('api/fdo', frontDeskOfficer);
                };
                FrontDeskOfficerService.prototype.get = function (page, limit, active) {
                    if (page === void 0) { page = 0; }
                    if (limit === void 0) { limit = 10; }
                    if (active === void 0) { active = true; }
                    return this.httpClient.get("api/fdos?page=" + page + "&limit=" + limit + "&active=" + active);
                };
                FrontDeskOfficerService.prototype.getById = function (id) {
                    return this.httpClient.get("api/fdo/" + id);
                };
                FrontDeskOfficerService.prototype.update = function (id, value) {
                    return this.httpClient.put("api/fdo/" + id, value);
                };
                FrontDeskOfficerService.prototype.getFDOsList = function () {
                    return this.httpClient.get("api/fdo/getFDOList");
                };
                return FrontDeskOfficerService;
            }());
            FrontDeskOfficerService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function FrontDeskOfficerService_Factory() { return new FrontDeskOfficerService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: FrontDeskOfficerService, providedIn: "root" });
            /***/ 
        }),
        /***/ "./src/app/lab-attendant/lab-attendant.service.ts": 
        /*!********************************************************!*\
          !*** ./src/app/lab-attendant/lab-attendant.service.ts ***!
          \********************************************************/
        /*! exports provided: LabAttendantService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabAttendantService", function () { return LabAttendantService; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var LabAttendantService = /** @class */ (function () {
                function LabAttendantService(httpClient) {
                    this.httpClient = httpClient;
                }
                LabAttendantService.prototype.post = function (labAttendant) {
                    return this.httpClient.post('api/labAttendant', labAttendant);
                };
                LabAttendantService.prototype.get = function (page, limit, active) {
                    if (page === void 0) { page = 0; }
                    if (limit === void 0) { limit = 10; }
                    if (active === void 0) { active = true; }
                    return this.httpClient.get("api/labAttendants?page=" + page + "&limit=" + limit + "&active=" + active);
                };
                LabAttendantService.prototype.getById = function (id) {
                    return this.httpClient.get("api/labAttendant/" + id);
                };
                LabAttendantService.prototype.upate = function (id, value) {
                    return this.httpClient.put("api/labAttendant/" + id, value);
                };
                LabAttendantService.prototype.getList = function () {
                    return this.httpClient.get("api/labAttendantList");
                };
                return LabAttendantService;
            }());
            LabAttendantService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function LabAttendantService_Factory() { return new LabAttendantService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: LabAttendantService, providedIn: "root" });
            /***/ 
        }),
        /***/ "./src/app/payment/payment.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/payment/payment.service.ts ***!
          \********************************************/
        /*! exports provided: PaymentService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function () { return PaymentService; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PaymentService = /** @class */ (function () {
                function PaymentService(httpClient) {
                    this.httpClient = httpClient;
                    this.tempDoctor = null;
                    this.tempPatient = null;
                }
                PaymentService.prototype.post = function (payment) {
                    return this.httpClient.post("api/billing/create", payment);
                };
                PaymentService.prototype.getAll = function (page, limit, fromDate, toDate) {
                    if (page === void 0) { page = 0; }
                    if (limit === void 0) { limit = 10; }
                    if (fromDate === void 0) { fromDate = null; }
                    if (toDate === void 0) { toDate = null; }
                    return this.httpClient.get("api/billing/get?page=" + page + "&limit=" + limit + "&fromDate=" + fromDate + "&toDate=" + toDate);
                };
                PaymentService.prototype.outstanding = function (page, limit, fromDate, toDate) {
                    if (page === void 0) { page = 0; }
                    if (limit === void 0) { limit = 10; }
                    if (fromDate === void 0) { fromDate = null; }
                    if (toDate === void 0) { toDate = null; }
                    return this.httpClient.get("api/billing/outstanding?page=" + page + "&limit=" + limit + "&fromDate=" + fromDate + "&toDate=" + toDate);
                };
                PaymentService.prototype.getById = function (id) {
                    console.log(id);
                    return this.httpClient.get("api/billing/" + id);
                };
                PaymentService.prototype.getByPatient = function (id, page, limit) {
                    if (page === void 0) { page = 0; }
                    if (limit === void 0) { limit = 10; }
                    return this.httpClient.get("api/billing/patient/" + id + "?page=" + page + "&limit=" + limit);
                };
                PaymentService.prototype.saveCheckout = function (p, d) {
                    this.tempDoctor = d;
                    this.tempPatient = p;
                };
                Object.defineProperty(PaymentService.prototype, "getPatient", {
                    get: function () {
                        return this.tempPatient;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PaymentService.prototype, "getDoctor", {
                    get: function () {
                        return this.tempDoctor;
                    },
                    enumerable: true,
                    configurable: true
                });
                return PaymentService;
            }());
            PaymentService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function PaymentService_Factory() { return new PaymentService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: PaymentService, providedIn: "root" });
            /***/ 
        }),
        /***/ "./src/app/pharmacy/pharmacy.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/pharmacy/pharmacy.service.ts ***!
          \**********************************************/
        /*! exports provided: PharmacyService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyService", function () { return PharmacyService; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PharmacyService = /** @class */ (function () {
                function PharmacyService(httpClient) {
                    this.httpClient = httpClient;
                }
                PharmacyService.prototype.post = function (pharmacy) {
                    return this.httpClient.post('api/pharmacy', pharmacy);
                };
                PharmacyService.prototype.get = function (page, limit, active) {
                    if (page === void 0) { page = 0; }
                    if (limit === void 0) { limit = 10; }
                    if (active === void 0) { active = true; }
                    return this.httpClient.get("api/pharmacies?page=" + page + "&limit=" + limit + "&active=" + active);
                };
                PharmacyService.prototype.getById = function (id) {
                    return this.httpClient.get("api/pharmacy/" + id);
                };
                PharmacyService.prototype.update = function (id, value) {
                    return this.httpClient.put("api/pharmacy/" + id, value);
                };
                PharmacyService.prototype.getPrescriptions = function (page, limit, date) {
                    if (page === void 0) { page = 0; }
                    if (limit === void 0) { limit = 10; }
                    if (date === void 0) { date = null; }
                    return this.httpClient.get("api/pharmacy/getPrescriptions?date=" + date + "&page=" + page + "&limit=" + limit);
                };
                PharmacyService.prototype.getPrescription = function (id) {
                    return this.httpClient.get("api/pharmacy/getPrescription/" + id);
                };
                PharmacyService.prototype.getPharmacyList = function () {
                    return this.httpClient.get("api/phrmacyList/");
                };
                PharmacyService.prototype.updatePrescriptionStatus = function (id) {
                    return this.httpClient.put("api/pharmacy/updatePrescription/" + id, {});
                };
                return PharmacyService;
            }());
            PharmacyService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function PharmacyService_Factory() { return new PharmacyService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: PharmacyService, providedIn: "root" });
            /***/ 
        }),
        /***/ "./src/app/shared/pipes/age.pipe.ts": 
        /*!******************************************!*\
          !*** ./src/app/shared/pipes/age.pipe.ts ***!
          \******************************************/
        /*! exports provided: AgePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgePipe", function () { return AgePipe; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
            var AgePipe = /** @class */ (function () {
                function AgePipe() {
                }
                AgePipe.prototype.transform = function (value) {
                    var today = moment__WEBPACK_IMPORTED_MODULE_1__();
                    var birthdate = moment__WEBPACK_IMPORTED_MODULE_1__(value);
                    var years = today.diff(birthdate, 'years');
                    var html = years + " yr ";
                    html += today.subtract(years, 'years').diff(birthdate, 'months') + " mo";
                    return html;
                };
                return AgePipe;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map