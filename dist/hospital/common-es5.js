function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/"./src/app/frontDeskOfficer/front-desk-officer.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/frontDeskOfficer/front-desk-officer.service.ts ***!
    \****************************************************************/
  /*! exports provided: FrontDeskOfficerService */
  /***/
  function srcAppFrontDeskOfficerFrontDeskOfficerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FrontDeskOfficerService", function () {
      return FrontDeskOfficerService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var FrontDeskOfficerService = /*#__PURE__*/function () {
      function FrontDeskOfficerService(httpClient) {
        _classCallCheck(this, FrontDeskOfficerService);
        this.httpClient = httpClient;
      }
      _createClass(FrontDeskOfficerService, [{
        key: "post",
        value: function post(frontDeskOfficer) {
          return this.httpClient.post('api/fdo', frontDeskOfficer);
        }
      }, {
        key: "get",
        value: function get() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var active = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.httpClient.get("api/fdos?page=".concat(page, "&limit=").concat(limit, "&active=").concat(active));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.httpClient.get("api/fdo/".concat(id));
        }
      }, {
        key: "update",
        value: function update(id, value) {
          return this.httpClient.put("api/fdo/".concat(id), value);
        }
      }, {
        key: "getFDOsList",
        value: function getFDOsList() {
          return this.httpClient.get("api/fdo/getFDOList");
        }
      }]);
      return FrontDeskOfficerService;
    }();
    FrontDeskOfficerService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function FrontDeskOfficerService_Factory() {
        return new FrontDeskOfficerService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      },
      token: FrontDeskOfficerService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/lab-attendant/lab-attendant.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/lab-attendant/lab-attendant.service.ts ***!
    \********************************************************/
  /*! exports provided: LabAttendantService */
  /***/
  function srcAppLabAttendantLabAttendantServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LabAttendantService", function () {
      return LabAttendantService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var LabAttendantService = /*#__PURE__*/function () {
      function LabAttendantService(httpClient) {
        _classCallCheck(this, LabAttendantService);
        this.httpClient = httpClient;
      }
      _createClass(LabAttendantService, [{
        key: "post",
        value: function post(labAttendant) {
          return this.httpClient.post('api/labAttendant', labAttendant);
        }
      }, {
        key: "get",
        value: function get() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var active = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.httpClient.get("api/labAttendants?page=".concat(page, "&limit=").concat(limit, "&active=").concat(active));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.httpClient.get("api/labAttendant/".concat(id));
        }
      }, {
        key: "upate",
        value: function upate(id, value) {
          return this.httpClient.put("api/labAttendant/".concat(id), value);
        }
      }, {
        key: "getList",
        value: function getList() {
          return this.httpClient.get("api/labAttendantList");
        }
      }]);
      return LabAttendantService;
    }();
    LabAttendantService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function LabAttendantService_Factory() {
        return new LabAttendantService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      },
      token: LabAttendantService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/payment/payment.service.ts":
  /*!********************************************!*\
    !*** ./src/app/payment/payment.service.ts ***!
    \********************************************/
  /*! exports provided: PaymentService */
  /***/
  function srcAppPaymentPaymentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PaymentService", function () {
      return PaymentService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var PaymentService = /*#__PURE__*/function () {
      function PaymentService(httpClient) {
        _classCallCheck(this, PaymentService);
        this.httpClient = httpClient;
        this.tempDoctor = null;
        this.tempPatient = null;
      }
      _createClass(PaymentService, [{
        key: "post",
        value: function post(payment) {
          return this.httpClient.post("api/billing/create", payment);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var fromDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var toDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          return this.httpClient.get("api/billing/get?page=".concat(page, "&limit=").concat(limit, "&fromDate=").concat(fromDate, "&toDate=").concat(toDate));
        }
      }, {
        key: "outstanding",
        value: function outstanding() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var fromDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var toDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          return this.httpClient.get("api/billing/outstanding?page=".concat(page, "&limit=").concat(limit, "&fromDate=").concat(fromDate, "&toDate=").concat(toDate));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          console.log(id);
          return this.httpClient.get("api/billing/".concat(id));
        }
      }, {
        key: "getByPatient",
        value: function getByPatient(id) {
          var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
          return this.httpClient.get("api/billing/patient/".concat(id, "?page=").concat(page, "&limit=").concat(limit));
        }
      }, {
        key: "saveCheckout",
        value: function saveCheckout(p, d) {
          this.tempDoctor = d;
          this.tempPatient = p;
        }
      }, {
        key: "getPatient",
        get: function get() {
          return this.tempPatient;
        }
      }, {
        key: "getDoctor",
        get: function get() {
          return this.tempDoctor;
        }
      }]);
      return PaymentService;
    }();
    PaymentService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function PaymentService_Factory() {
        return new PaymentService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      },
      token: PaymentService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/pharmacy/pharmacy.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/pharmacy/pharmacy.service.ts ***!
    \**********************************************/
  /*! exports provided: PharmacyService */
  /***/
  function srcAppPharmacyPharmacyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PharmacyService", function () {
      return PharmacyService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var PharmacyService = /*#__PURE__*/function () {
      function PharmacyService(httpClient) {
        _classCallCheck(this, PharmacyService);
        this.httpClient = httpClient;
      }
      _createClass(PharmacyService, [{
        key: "post",
        value: function post(pharmacy) {
          return this.httpClient.post('api/pharmacy', pharmacy);
        }
      }, {
        key: "get",
        value: function get() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var active = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.httpClient.get("api/pharmacies?page=".concat(page, "&limit=").concat(limit, "&active=").concat(active));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.httpClient.get("api/pharmacy/".concat(id));
        }
      }, {
        key: "update",
        value: function update(id, value) {
          return this.httpClient.put("api/pharmacy/".concat(id), value);
        }
      }, {
        key: "getPrescriptions",
        value: function getPrescriptions() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return this.httpClient.get("api/pharmacy/getPrescriptions?date=".concat(date, "&page=").concat(page, "&limit=").concat(limit));
        }
      }, {
        key: "getPrescription",
        value: function getPrescription(id) {
          return this.httpClient.get("api/pharmacy/getPrescription/".concat(id));
        }
      }, {
        key: "getPharmacyList",
        value: function getPharmacyList() {
          return this.httpClient.get("api/phrmacyList/");
        }
      }, {
        key: "updatePrescriptionStatus",
        value: function updatePrescriptionStatus(id) {
          return this.httpClient.put("api/pharmacy/updatePrescription/".concat(id), {});
        }
      }]);
      return PharmacyService;
    }();
    PharmacyService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function PharmacyService_Factory() {
        return new PharmacyService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      },
      token: PharmacyService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/shared/pagination/pagination.component.css.shim.ngstyle.js":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/pagination/pagination.component.css.shim.ngstyle.js ***!
    \****************************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppSharedPaginationPaginationComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */
    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyJ9 */"];

    /***/
  },

  /***/"./src/app/shared/pagination/pagination.component.ngfactory.js":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/pagination/pagination.component.ngfactory.js ***!
    \*********************************************************************/
  /*! exports provided: RenderType_PaginationComponent, View_PaginationComponent_0, View_PaginationComponent_Host_0, PaginationComponentNgFactory */
  /***/
  function srcAppSharedPaginationPaginationComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_PaginationComponent", function () {
      return RenderType_PaginationComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_PaginationComponent_0", function () {
      return View_PaginationComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_PaginationComponent_Host_0", function () {
      return View_PaginationComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PaginationComponentNgFactory", function () {
      return PaginationComponentNgFactory;
    });
    /* harmony import */
    var _pagination_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./pagination.component.css.shim.ngstyle */"./src/app/shared/pagination/pagination.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */"./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _pagination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./pagination.component */"./src/app/shared/pagination/pagination.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_PaginationComponent = [_pagination_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_PaginationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PaginationComponent,
      data: {}
    });
    function View_PaginationComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "ngb-pagination", [["role", "navigation"]], null, [[null, "pageChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("pageChange" === en) {
          var pd_0 = (_co.page = $event) !== false;
          ad = pd_0 && ad;
        }
        if ("pageChange" === en) {
          var pd_1 = _co.pageChange($event) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgbPagination_0"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgbPagination"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 573440, null, 6, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPagination"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPaginationConfig"]], {
        collectionSize: [0, "collectionSize"],
        page: [1, "page"],
        pageSize: [2, "pageSize"]
      }, {
        pageChange: "pageChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        tplEllipsis: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        tplFirst: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        tplLast: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        tplNext: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        tplNumber: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        tplPrevious: 0
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.totalDocs;
        var currVal_1 = _co.page;
        var currVal_2 = _co.limit;
        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
      }, null);
    }
    function View_PaginationComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [["class", "d-flex justify-content-between p-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PaginationComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 17, "select", [["class", "custom-select"], ["name", "pageSize"], ["style", "width: auto"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "ngModelChange"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("change" === en) {
          var pd_2 = _co.limitChange() !== false;
          ad = pd_2 && ad;
        }
        if ("ngModelChange" === en) {
          var pd_3 = (_co.limit = $event) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], {
        ngValue: [0, "ngValue"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        ngValue: [0, "ngValue"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["10 per page"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], {
        ngValue: [0, "ngValue"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        ngValue: [0, "ngValue"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["20 per page"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], {
        ngValue: [0, "ngValue"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        ngValue: [0, "ngValue"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["25 per page"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.totalDocs > _co.limit;
        _ck(_v, 2, 0, currVal_0);
        var currVal_8 = "pageSize";
        var currVal_9 = _co.limit;
        _ck(_v, 6, 0, currVal_8, currVal_9);
        var currVal_10 = 10;
        _ck(_v, 10, 0, currVal_10);
        var currVal_11 = 10;
        _ck(_v, 11, 0, currVal_11);
        var currVal_12 = 20;
        _ck(_v, 14, 0, currVal_12);
        var currVal_13 = 20;
        _ck(_v, 15, 0, currVal_13);
        var currVal_14 = 25;
        _ck(_v, 18, 0, currVal_14);
        var currVal_15 = 25;
        _ck(_v, 19, 0, currVal_15);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassUntouched;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassTouched;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPristine;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassDirty;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassValid;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassInvalid;
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ngClassPending;
        _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
      });
    }
    function View_PaginationComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-pagination", [], null, null, null, View_PaginationComponent_0, RenderType_PaginationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var PaginationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-pagination", _pagination_component__WEBPACK_IMPORTED_MODULE_6__["PaginationComponent"], View_PaginationComponent_Host_0, {
      page: "page",
      limit: "limit",
      totalDocs: "totalDocs"
    }, {
      onPageChange: "onPageChange"
    }, []);

    /***/
  },

  /***/"./src/app/shared/pagination/pagination.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/pagination/pagination.component.ts ***!
    \***********************************************************/
  /*! exports provided: PaginationComponent */
  /***/
  function srcAppSharedPaginationPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
      return PaginationComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var PaginationComponent = /*#__PURE__*/function () {
      function PaginationComponent() {
        _classCallCheck(this, PaginationComponent);
        this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      _createClass(PaginationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pageChange",
        value: function pageChange(page) {
          this.page = page;
          this.onPageChange.emit({
            page: this.page,
            limit: this.limit
          });
        }
      }, {
        key: "limitChange",
        value: function limitChange() {
          this.onPageChange.emit({
            page: this.page,
            limit: this.limit
          });
        }
      }]);
      return PaginationComponent;
    }();
    /***/
  },
  /***/"./src/app/shared/pipes/age.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/pipes/age.pipe.ts ***!
    \******************************************/
  /*! exports provided: AgePipe */
  /***/
  function srcAppSharedPipesAgePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AgePipe", function () {
      return AgePipe;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! moment */"./node_modules/moment/moment.js");
    /* harmony import */
    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    var AgePipe = /*#__PURE__*/function () {
      function AgePipe() {
        _classCallCheck(this, AgePipe);
      }
      _createClass(AgePipe, [{
        key: "transform",
        value: function transform(value) {
          var today = moment__WEBPACK_IMPORTED_MODULE_1__();
          var birthdate = moment__WEBPACK_IMPORTED_MODULE_1__(value);
          var years = today.diff(birthdate, 'years');
          var html = years + " yr ";
          html += today.subtract(years, 'years').diff(birthdate, 'months') + " mo";
          return html;
        }
      }]);
      return AgePipe;
    }();
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map