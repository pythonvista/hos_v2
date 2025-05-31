function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/chart.js/node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!************************************************************************!*\
    !*** ./node_modules/chart.js/node_modules/moment/locale sync ^\.\/.*$ ***!
    \************************************************************************/
  /*! no static exports found */
  /***/
  function node_modulesChartJsNode_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/chart.js/node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/chart.js/node_modules/moment/locale/af.js",
      "./ar": "./node_modules/chart.js/node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/chart.js/node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/chart.js/node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/chart.js/node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/chart.js/node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/chart.js/node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/chart.js/node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/chart.js/node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/chart.js/node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/chart.js/node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/chart.js/node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/chart.js/node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/chart.js/node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/chart.js/node_modules/moment/locale/ar.js",
      "./az": "./node_modules/chart.js/node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/chart.js/node_modules/moment/locale/az.js",
      "./be": "./node_modules/chart.js/node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/chart.js/node_modules/moment/locale/be.js",
      "./bg": "./node_modules/chart.js/node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/chart.js/node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/chart.js/node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/chart.js/node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/chart.js/node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/chart.js/node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/chart.js/node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/chart.js/node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/chart.js/node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/chart.js/node_modules/moment/locale/bo.js",
      "./br": "./node_modules/chart.js/node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/chart.js/node_modules/moment/locale/br.js",
      "./bs": "./node_modules/chart.js/node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/chart.js/node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/chart.js/node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/chart.js/node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/chart.js/node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/chart.js/node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/chart.js/node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/chart.js/node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/chart.js/node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/chart.js/node_modules/moment/locale/cy.js",
      "./da": "./node_modules/chart.js/node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/chart.js/node_modules/moment/locale/da.js",
      "./de": "./node_modules/chart.js/node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/chart.js/node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/chart.js/node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/chart.js/node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/chart.js/node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/chart.js/node_modules/moment/locale/de.js",
      "./dv": "./node_modules/chart.js/node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/chart.js/node_modules/moment/locale/dv.js",
      "./el": "./node_modules/chart.js/node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/chart.js/node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/chart.js/node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/chart.js/node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/chart.js/node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/chart.js/node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/chart.js/node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/chart.js/node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/chart.js/node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/chart.js/node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/chart.js/node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/chart.js/node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/chart.js/node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/chart.js/node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/chart.js/node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/chart.js/node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/chart.js/node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/chart.js/node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/chart.js/node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/chart.js/node_modules/moment/locale/eo.js",
      "./es": "./node_modules/chart.js/node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/chart.js/node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/chart.js/node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/chart.js/node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/chart.js/node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/chart.js/node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/chart.js/node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/chart.js/node_modules/moment/locale/es.js",
      "./et": "./node_modules/chart.js/node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/chart.js/node_modules/moment/locale/et.js",
      "./eu": "./node_modules/chart.js/node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/chart.js/node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/chart.js/node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/chart.js/node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/chart.js/node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/chart.js/node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/chart.js/node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/chart.js/node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/chart.js/node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/chart.js/node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/chart.js/node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/chart.js/node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/chart.js/node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/chart.js/node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/chart.js/node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/chart.js/node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/chart.js/node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/chart.js/node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/chart.js/node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/chart.js/node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/chart.js/node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/chart.js/node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/chart.js/node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/chart.js/node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/chart.js/node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/chart.js/node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/chart.js/node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/chart.js/node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/chart.js/node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/chart.js/node_modules/moment/locale/gu.js",
      "./he": "./node_modules/chart.js/node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/chart.js/node_modules/moment/locale/he.js",
      "./hi": "./node_modules/chart.js/node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/chart.js/node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/chart.js/node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/chart.js/node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/chart.js/node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/chart.js/node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/chart.js/node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/chart.js/node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/chart.js/node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/chart.js/node_modules/moment/locale/id.js",
      "./is": "./node_modules/chart.js/node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/chart.js/node_modules/moment/locale/is.js",
      "./it": "./node_modules/chart.js/node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/chart.js/node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/chart.js/node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/chart.js/node_modules/moment/locale/it.js",
      "./ja": "./node_modules/chart.js/node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/chart.js/node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/chart.js/node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/chart.js/node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/chart.js/node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/chart.js/node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/chart.js/node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/chart.js/node_modules/moment/locale/kk.js",
      "./km": "./node_modules/chart.js/node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/chart.js/node_modules/moment/locale/km.js",
      "./kn": "./node_modules/chart.js/node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/chart.js/node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/chart.js/node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/chart.js/node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/chart.js/node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/chart.js/node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/chart.js/node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/chart.js/node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/chart.js/node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/chart.js/node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/chart.js/node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/chart.js/node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/chart.js/node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/chart.js/node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/chart.js/node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/chart.js/node_modules/moment/locale/lv.js",
      "./me": "./node_modules/chart.js/node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/chart.js/node_modules/moment/locale/me.js",
      "./mi": "./node_modules/chart.js/node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/chart.js/node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/chart.js/node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/chart.js/node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/chart.js/node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/chart.js/node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/chart.js/node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/chart.js/node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/chart.js/node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/chart.js/node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/chart.js/node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/chart.js/node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/chart.js/node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/chart.js/node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/chart.js/node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/chart.js/node_modules/moment/locale/mt.js",
      "./my": "./node_modules/chart.js/node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/chart.js/node_modules/moment/locale/my.js",
      "./nb": "./node_modules/chart.js/node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/chart.js/node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/chart.js/node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/chart.js/node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/chart.js/node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/chart.js/node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/chart.js/node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/chart.js/node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/chart.js/node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/chart.js/node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/chart.js/node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/chart.js/node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/chart.js/node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/chart.js/node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/chart.js/node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/chart.js/node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/chart.js/node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/chart.js/node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/chart.js/node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/chart.js/node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/chart.js/node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/chart.js/node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/chart.js/node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/chart.js/node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/chart.js/node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/chart.js/node_modules/moment/locale/sd.js",
      "./se": "./node_modules/chart.js/node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/chart.js/node_modules/moment/locale/se.js",
      "./si": "./node_modules/chart.js/node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/chart.js/node_modules/moment/locale/si.js",
      "./sk": "./node_modules/chart.js/node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/chart.js/node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/chart.js/node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/chart.js/node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/chart.js/node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/chart.js/node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/chart.js/node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/chart.js/node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/chart.js/node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/chart.js/node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/chart.js/node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/chart.js/node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/chart.js/node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/chart.js/node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/chart.js/node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/chart.js/node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/chart.js/node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/chart.js/node_modules/moment/locale/ta.js",
      "./te": "./node_modules/chart.js/node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/chart.js/node_modules/moment/locale/te.js",
      "./tet": "./node_modules/chart.js/node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/chart.js/node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/chart.js/node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/chart.js/node_modules/moment/locale/tg.js",
      "./th": "./node_modules/chart.js/node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/chart.js/node_modules/moment/locale/th.js",
      "./tk": "./node_modules/chart.js/node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/chart.js/node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/chart.js/node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/chart.js/node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/chart.js/node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/chart.js/node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/chart.js/node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/chart.js/node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/chart.js/node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/chart.js/node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/chart.js/node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/chart.js/node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/chart.js/node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/chart.js/node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/chart.js/node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/chart.js/node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/chart.js/node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/chart.js/node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/chart.js/node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/chart.js/node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/chart.js/node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/chart.js/node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/chart.js/node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/chart.js/node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/chart.js/node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/chart.js/node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/chart.js/node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/chart.js/node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/chart.js/node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/chart.js/node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/chart.js/node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/chart.js/node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/chart.js/node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/chart.js/node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/chart.js/node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/chart.js/node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/chart.js/node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/chart.js/node_modules/moment/locale/zh-tw.js"
    };
    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }
    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }
      return map[req];
    }
    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };
    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/chart.js/node_modules/moment/locale sync recursive ^\\.\\/.*$";

    /***/
  },

  /***/"./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/
  /*! no static exports found */
  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };
    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }
    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }
      return map[req];
    }
    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };
    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

    /***/
  },

  /***/"./src/app/_constants/states.ts":
  /*!**************************************!*\
    !*** ./src/app/_constants/states.ts ***!
    \**************************************/
  /*! exports provided: states */
  /***/
  function srcApp_constantsStatesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "states", function () {
      return states;
    });
    var states = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Enugu', 'Edo', 'Ekiti', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT Abuja'];

    /***/
  },

  /***/"./src/app/_gaurds/auth.gaurd.ts":
  /*!***************************************!*\
    !*** ./src/app/_gaurds/auth.gaurd.ts ***!
    \***************************************/
  /*! exports provided: AuthGuard */
  /***/
  function srcApp_gaurdsAuthGaurdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);
        this.router = router;
        this.authService = authService;
      }
      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authService.currentUserValue;
          if (currentUser) {
            // authorised so return true
            return true;
          }
          // not logged in so redirect to login page with the return url
          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);
      return AuthGuard;
    }();
    AuthGuard.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function AuthGuard_Factory() {
        return new AuthGuard(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      },
      token: AuthGuard,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/_helpers/baseURL.interceptor.ts":
  /*!*************************************************!*\
    !*** ./src/app/_helpers/baseURL.interceptor.ts ***!
    \*************************************************/
  /*! exports provided: BaseUrlInterceptor */
  /***/
  function srcApp_helpersBaseURLInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BaseUrlInterceptor", function () {
      return BaseUrlInterceptor;
    });
    /* harmony import */
    var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! src/environments/environment */"./src/environments/environment.ts");
    var BaseUrlInterceptor = /*#__PURE__*/function () {
      function BaseUrlInterceptor(authService) {
        _classCallCheck(this, BaseUrlInterceptor);
        this.authService = authService;
      }
      _createClass(BaseUrlInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add base URL here to request sending to server globally at onee time
          // add authorization header with jwt token if available
          var currentUser = this.authService.currentUserValue;
          request = request.clone({
            url: "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].base_url).concat(request.url)
          });
          if (currentUser && currentUser.token) {
            request = request.clone({
              setHeaders: {
                Authorization: "".concat(currentUser.token)
              }
            });
          }
          return next.handle(request);
        }
      }]);
      return BaseUrlInterceptor;
    }();
    /***/
  },
  /***/"./src/app/_helpers/confirm-password.ts":
  /*!**********************************************!*\
    !*** ./src/app/_helpers/confirm-password.ts ***!
    \**********************************************/
  /*! exports provided: ConfirmPasswordValidator */
  /***/
  function srcApp_helpersConfirmPasswordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function () {
      return ConfirmPasswordValidator;
    });
    function ConfirmPasswordValidator(controlName, matchingControlName) {
      return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmPasswordValidator) {
          return;
        }
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({
            confirmPasswordValidator: true
          });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }

    /***/
  },

  /***/"./src/app/_helpers/date-native.adapter.ts":
  /*!*************************************************!*\
    !*** ./src/app/_helpers/date-native.adapter.ts ***!
    \*************************************************/
  /*! exports provided: DateNativeAdapter */
  /***/
  function srcApp_helpersDateNativeAdapterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DateNativeAdapter", function () {
      return DateNativeAdapter;
    });
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./util */"./src/app/_helpers/util.ts");
    var DateNativeAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
      _inherits(DateNativeAdapter, _ng_bootstrap_ng_boot);
      var _super = _createSuper(DateNativeAdapter);
      function DateNativeAdapter() {
        _classCallCheck(this, DateNativeAdapter);
        return _super.apply(this, arguments);
      }
      _createClass(DateNativeAdapter, [{
        key: "fromModel",
        value: function fromModel(date) {
          return Object(_util__WEBPACK_IMPORTED_MODULE_1__["isDate"])(date) ? {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
          } : null;
        }
      }, {
        key: "toModel",
        value: function toModel(date) {
          return date !== null && date.year !== null && date.month !== null ? new Date(Date.UTC(date.year, date.month - 1, date.day)) // If you don't see the error play (add\remove) the `+1` on this line
          : null;
        }
      }]);
      return DateNativeAdapter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDateAdapter"]);
    /***/
  },
  /***/"./src/app/_helpers/date-parser.ts":
  /*!*****************************************!*\
    !*** ./src/app/_helpers/date-parser.ts ***!
    \*****************************************/
  /*! exports provided: CustomDateParserFormatter */
  /***/
  function srcApp_helpersDateParserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CustomDateParserFormatter", function () {
      return CustomDateParserFormatter;
    });
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    var CustomDateParserFormatter = /*#__PURE__*/function (_ng_bootstrap_ng_boot2) {
      _inherits(CustomDateParserFormatter, _ng_bootstrap_ng_boot2);
      var _super2 = _createSuper(CustomDateParserFormatter);
      function CustomDateParserFormatter() {
        var _this;
        _classCallCheck(this, CustomDateParserFormatter);
        _this = _super2.apply(this, arguments);
        _this.DELIMITER = '/';
        return _this;
      }
      _createClass(CustomDateParserFormatter, [{
        key: "parse",
        value: function parse(value) {
          if (value) {
            var date = value.split(this.DELIMITER);
            return {
              day: parseInt(date[0], 10),
              month: parseInt(date[1], 10),
              year: parseInt(date[2], 10)
            };
          }
          return null;
        }
      }, {
        key: "format",
        value: function format(date) {
          return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
        }
      }]);
      return CustomDateParserFormatter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbDateParserFormatter"]);
    /***/
  },
  /***/"./src/app/_helpers/util.ts":
  /*!**********************************!*\
    !*** ./src/app/_helpers/util.ts ***!
    \**********************************/
  /*! exports provided: toInteger, isNumber, padNumber, isDate */
  /***/
  function srcApp_helpersUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "toInteger", function () {
      return toInteger;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "isNumber", function () {
      return isNumber;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "padNumber", function () {
      return padNumber;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "isDate", function () {
      return isDate;
    });
    function toInteger(value) {
      return parseInt("".concat(value), 10);
    }
    function isNumber(value) {
      return !isNaN(toInteger(value));
    }
    function padNumber(value) {
      if (isNumber(value)) {
        return "0".concat(value).slice(-2);
      } else {
        return '';
      }
    }
    function isDate(value) {
      return Object.prototype.toString.call(value) === "[object Date]";
    }

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7, ɵ8, ɵ9, ɵ10, ɵ11, ɵ12 */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
      return ɵ1;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
      return ɵ2;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ3", function () {
      return ɵ3;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ4", function () {
      return ɵ4;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ5", function () {
      return ɵ5;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ6", function () {
      return ɵ6;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ7", function () {
      return ɵ7;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ8", function () {
      return ɵ8;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ9", function () {
      return ɵ9;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ10", function () {
      return ɵ10;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ11", function () {
      return ɵ11;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ɵ12", function () {
      return ɵ12;
    });
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./login/login.component */"./src/app/login/login.component.ts");
    /* harmony import */
    var _core_core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./core/core.component */"./src/app/core/core.component.ts");
    /* harmony import */
    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./dashboard/dashboard.component */"./src/app/dashboard/dashboard.component.ts");
    /* harmony import */
    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./profile/profile.component */"./src/app/profile/profile.component.ts");
    /* harmony import */
    var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./inbox/inbox.component */"./src/app/inbox/inbox.component.ts");
    /* harmony import */
    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./contacts/contacts.component */"./src/app/contacts/contacts.component.ts");
    /* harmony import */
    var _gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./_gaurds/auth.gaurd */"./src/app/_gaurds/auth.gaurd.ts");
    /* harmony import */
    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./landing/landing.component */"./src/app/landing/landing.component.ts");
    /* harmony import */
    var _contacts_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./contacts/add-employee/add-employee.component */"./src/app/contacts/add-employee/add-employee.component.ts");
    /* harmony import */
    var _create_hosRequest_create_hosRequest_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./create-hosRequest/create-hosRequest.component */"./src/app/create-hosRequest/create-hosRequest.component.ts");
    /* harmony import */
    var _request_success_request_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./request-success/request-success.component */"./src/app/request-success/request-success.component.ts");
    /* harmony import */
    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./forgot-password/forgot-password.component */"./src/app/forgot-password/forgot-password.component.ts");
    /* harmony import */
    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./reset-password/reset-password.component */"./src/app/reset-password/reset-password.component.ts");
    /* harmony import */
    var _sendEmail_sendEmail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./sendEmail/sendEmail.component */"./src/app/sendEmail/sendEmail.component.ts");
    /* harmony import */
    var _verifyEmail_verifyEmail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./verifyEmail/verifyEmail.component */"./src/app/verifyEmail/verifyEmail.component.ts");
    var ɵ0 = function ɵ0() {
        return Promise.all( /*! import() | docter-docter-module-ngfactory */[__webpack_require__.e("default~calender-calender-module-ngfactory~docter-docter-module-ngfactory~frontDeskOfficer-front-des~2f596f2c"), __webpack_require__.e("common"), __webpack_require__.e("docter-docter-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./docter/docter.module.ngfactory */"./src/app/docter/docter.module.ngfactory.js")).then(function (m) {
          return m.DocterModuleNgFactory;
        });
      },
      ɵ1 = function ɵ1() {
        return Promise.all( /*! import() | lab-attendant-lab-attendant-module-ngfactory */[__webpack_require__.e("default~calender-calender-module-ngfactory~docter-docter-module-ngfactory~frontDeskOfficer-front-des~2f596f2c"), __webpack_require__.e("common"), __webpack_require__.e("lab-attendant-lab-attendant-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./lab-attendant/lab-attendant.module.ngfactory */"./src/app/lab-attendant/lab-attendant.module.ngfactory.js")).then(function (m) {
          return m.LabAttendantModuleNgFactory;
        });
      },
      ɵ2 = function ɵ2() {
        return Promise.all( /*! import() | frontDeskOfficer-front-desk-officer-module-ngfactory */[__webpack_require__.e("default~calender-calender-module-ngfactory~docter-docter-module-ngfactory~frontDeskOfficer-front-des~2f596f2c"), __webpack_require__.e("common"), __webpack_require__.e("frontDeskOfficer-front-desk-officer-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./frontDeskOfficer/front-desk-officer.module.ngfactory */"./src/app/frontDeskOfficer/front-desk-officer.module.ngfactory.js")).then(function (m) {
          return m.FrontDeskOfficerModuleNgFactory;
        });
      },
      ɵ3 = function ɵ3() {
        return Promise.all( /*! import() | pharmacy-pharmacy-module-ngfactory */[__webpack_require__.e("default~calender-calender-module-ngfactory~docter-docter-module-ngfactory~frontDeskOfficer-front-des~2f596f2c"), __webpack_require__.e("common"), __webpack_require__.e("pharmacy-pharmacy-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./pharmacy/pharmacy.module.ngfactory */"./src/app/pharmacy/pharmacy.module.ngfactory.js")).then(function (m) {
          return m.PharmacyModuleNgFactory;
        });
      },
      ɵ4 = function ɵ4() {
        return Promise.all( /*! import() | prescriptions-prescription-module-ngfactory */[__webpack_require__.e("common"), __webpack_require__.e("prescriptions-prescription-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./prescriptions/prescription.module.ngfactory */"./src/app/prescriptions/prescription.module.ngfactory.js")).then(function (m) {
          return m.PrescriptionModuleNgFactory;
        });
      },
      ɵ5 = function ɵ5() {
        return Promise.all( /*! import() | patient-patient-module-ngfactory */[__webpack_require__.e("default~calender-calender-module-ngfactory~docter-docter-module-ngfactory~frontDeskOfficer-front-des~2f596f2c"), __webpack_require__.e("common"), __webpack_require__.e("patient-patient-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./patient/patient.module.ngfactory */"./src/app/patient/patient.module.ngfactory.js")).then(function (m) {
          return m.PatientModuleNgFactory;
        });
      },
      ɵ6 = function ɵ6() {
        return Promise.all( /*! import() | payment-payment-module-ngfactory */[__webpack_require__.e("default~calender-calender-module-ngfactory~docter-docter-module-ngfactory~frontDeskOfficer-front-des~2f596f2c"), __webpack_require__.e("common"), __webpack_require__.e("payment-payment-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./payment/payment.module.ngfactory */"./src/app/payment/payment.module.ngfactory.js")).then(function (m) {
          return m.PaymentModuleNgFactory;
        });
      },
      ɵ7 = function ɵ7() {
        return __webpack_require__.e( /*! import() | user-user-module-ngfactory */"user-user-module-ngfactory").then(__webpack_require__.bind(null, /*! ./user/user.module.ngfactory */"./src/app/user/user.module.ngfactory.js")).then(function (m) {
          return m.UserModuleNgFactory;
        });
      },
      ɵ8 = function ɵ8() {
        return __webpack_require__.e( /*! import() | request-request-module-ngfactory */"request-request-module-ngfactory").then(__webpack_require__.bind(null, /*! ./request/request.module.ngfactory */"./src/app/request/request.module.ngfactory.js")).then(function (m) {
          return m.RequestModuleNgFactory;
        });
      },
      ɵ9 = function ɵ9() {
        return __webpack_require__.e( /*! import() | reports-reports-module-ngfactory */"reports-reports-module-ngfactory").then(__webpack_require__.bind(null, /*! ./reports/reports.module.ngfactory */"./src/app/reports/reports.module.ngfactory.js")).then(function (m) {
          return m.ReportsModuleNgFactory;
        });
      },
      ɵ10 = function ɵ10() {
        return Promise.all( /*! import() | calender-calender-module-ngfactory */[__webpack_require__.e("default~calender-calender-module-ngfactory~docter-docter-module-ngfactory~frontDeskOfficer-front-des~2f596f2c"), __webpack_require__.e("common"), __webpack_require__.e("calender-calender-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./calender/calender.module.ngfactory */"./src/app/calender/calender.module.ngfactory.js")).then(function (m) {
          return m.CalenderModuleNgFactory;
        });
      },
      ɵ11 = function ɵ11() {
        return Promise.all( /*! import() | hospitals-hospitals-module-ngfactory */[__webpack_require__.e("common"), __webpack_require__.e("hospitals-hospitals-module-ngfactory")]).then(__webpack_require__.bind(null, /*! ./hospitals/hospitals.module.ngfactory */"./src/app/hospitals/hospitals.module.ngfactory.js")).then(function (m) {
          return m.HospitalsModuleNgFactory;
        });
      },
      ɵ12 = function ɵ12() {
        return __webpack_require__.e( /*! import() | ticket-ticket-module-ngfactory */"ticket-ticket-module-ngfactory").then(__webpack_require__.bind(null, /*! ./ticket/ticket.module.ngfactory */"./src/app/ticket/ticket.module.ngfactory.js")).then(function (m) {
          return m.TicketModuleNgFactory;
        });
      };
    var routes = [{
      path: '',
      component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }, {
      path: 'forgot',
      component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"]
    }, {
      path: 'sendEmail',
      component: _sendEmail_sendEmail_component__WEBPACK_IMPORTED_MODULE_14__["SendEmailComponent"]
    }, {
      path: 'emailVerify/:token',
      component: _verifyEmail_verifyEmail_component__WEBPACK_IMPORTED_MODULE_15__["VerifyEmailComponent"]
    }, {
      path: 'resetpassword/:token',
      component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"]
    }, {
      path: 'hosRequest',
      component: _create_hosRequest_create_hosRequest_component__WEBPACK_IMPORTED_MODULE_10__["CreateHosRequestComponent"]
    }, {
      path: 'success',
      component: _request_success_request_success_component__WEBPACK_IMPORTED_MODULE_11__["RequestSuccessComponent"]
    }, {
      path: 'app',
      component: _core_core_component__WEBPACK_IMPORTED_MODULE_2__["CoreComponent"],
      canActivate: [_gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
      children: [{
        path: 'dash',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
      }, {
        path: 'contacts',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"]
      }, {
        path: 'contacts/add',
        component: _contacts_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_9__["AddEmployeeComponent"]
      }, {
        path: 'inbox',
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_5__["InboxComponent"]
      }, {
        path: 'inbox/:id',
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_5__["InboxComponent"]
      }, {
        path: 'pinbox',
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_5__["InboxComponent"]
      }, {
        path: 'doctor',
        loadChildren: ɵ0
      }, {
        path: 'labattendant',
        loadChildren: ɵ1
      }, {
        path: 'fdo',
        loadChildren: ɵ2
      }, {
        path: 'pharmacy',
        loadChildren: ɵ3
      }, {
        path: 'prescription',
        loadChildren: ɵ4
      }, {
        path: 'patient',
        loadChildren: ɵ5
      }, {
        path: 'payment',
        loadChildren: ɵ6
      }, {
        path: 'user',
        loadChildren: ɵ7
      }, {
        path: 'request',
        loadChildren: ɵ8
      }, {
        path: 'reports',
        loadChildren: ɵ9
      }, {
        path: 'calender',
        loadChildren: ɵ10
      }, {
        path: 'hospitals',
        loadChildren: ɵ11
      }, {
        path: 'ticket',
        loadChildren: ɵ12
      }, {
        path: '',
        redirectTo: 'dash',
        pathMatch: 'full'
      }]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    /***/
  },
  /***/"./src/app/app.component.css.shim.ngstyle.js":
  /*!***************************************************!*\
    !*** ./src/app/app.component.css.shim.ngstyle.js ***!
    \***************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppAppComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];

    /***/
  },

  /***/"./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/
  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */
    var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./app.component.css.shim.ngstyle */"./src/app/app.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./loader/loader.component.ngfactory */"./src/app/loader/loader.component.ngfactory.js");
    /* harmony import */
    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./loader/loader.component */"./src/app/loader/loader.component.ts");
    /* harmony import */
    var _shared_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./shared/loader.service */"./src/app/shared/loader.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _node_modules_angular_notifier_angular_notifier_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../node_modules/angular-notifier/angular-notifier.ngfactory */"./node_modules/angular-notifier/angular-notifier.ngfactory.js");
    /* harmony import */
    var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! angular-notifier */"./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./socket.service */"./src/app/socket.service.ts");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./auth.service */"./src/app/auth.service.ts");
    /* harmony import */
    var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ngx-permissions */"./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
    /* harmony import */
    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @ng-select/ng-select */"./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });
    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loader", [], null, null, null, _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LoaderComponent_0"], _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], [_shared_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "notifier-container", [["class", "notifier__container"]], null, null, null, _node_modules_angular_notifier_angular_notifier_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NotifierContainerComponent_0"], _node_modules_angular_notifier_angular_notifier_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NotifierContainerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 180224, null, 0, angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierContainerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], angular_notifier__WEBPACK_IMPORTED_MODULE_7__["ɵa"], angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
        _ck(_v, 3, 0);
      }, null);
    }
    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"], _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsService"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectConfig"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, socketSerive, authService, permissionsService, config) {
        _classCallCheck(this, AppComponent);
        this.router = router;
        this.socketSerive = socketSerive;
        this.authService = authService;
        this.permissionsService = permissionsService;
        this.config = config;
        this.title = 'hospital';
      }
      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;
          this.authService.currentUser.subscribe(function (user) {
            console.log('user role', user);
            if (user) {
              _this2.permissionsService.loadPermissions([user.role]);
            } else {
              _this2.permissionsService.loadPermissions([]);
            }
          });
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
              return;
            }
            window.scrollTo(0, 0);
          });
        }
      }]);
      return AppComponent;
    }();
    /***/
  },
  /***/"./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/
  /*! exports provided: AppModuleNgFactory */
  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../node_modules/@angular/router/router.ngfactory */"./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */
    var _landing_landing_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./landing/landing.component.ngfactory */"./src/app/landing/landing.component.ngfactory.js");
    /* harmony import */
    var _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./login/login.component.ngfactory */"./src/app/login/login.component.ngfactory.js");
    /* harmony import */
    var _forgot_password_forgot_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./forgot-password/forgot-password.component.ngfactory */"./src/app/forgot-password/forgot-password.component.ngfactory.js");
    /* harmony import */
    var _sendEmail_sendEmail_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./sendEmail/sendEmail.component.ngfactory */"./src/app/sendEmail/sendEmail.component.ngfactory.js");
    /* harmony import */
    var _verifyEmail_verifyEmail_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./verifyEmail/verifyEmail.component.ngfactory */"./src/app/verifyEmail/verifyEmail.component.ngfactory.js");
    /* harmony import */
    var _reset_password_reset_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./reset-password/reset-password.component.ngfactory */"./src/app/reset-password/reset-password.component.ngfactory.js");
    /* harmony import */
    var _create_hosRequest_create_hosRequest_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./create-hosRequest/create-hosRequest.component.ngfactory */"./src/app/create-hosRequest/create-hosRequest.component.ngfactory.js");
    /* harmony import */
    var _request_success_request_success_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./request-success/request-success.component.ngfactory */"./src/app/request-success/request-success.component.ngfactory.js");
    /* harmony import */
    var _core_core_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./core/core.component.ngfactory */"./src/app/core/core.component.ngfactory.js");
    /* harmony import */
    var _dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./dashboard/dashboard.component.ngfactory */"./src/app/dashboard/dashboard.component.ngfactory.js");
    /* harmony import */
    var _profile_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./profile/profile.component.ngfactory */"./src/app/profile/profile.component.ngfactory.js");
    /* harmony import */
    var _contacts_contacts_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./contacts/contacts.component.ngfactory */"./src/app/contacts/contacts.component.ngfactory.js");
    /* harmony import */
    var _contacts_add_employee_add_employee_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./contacts/add-employee/add-employee.component.ngfactory */"./src/app/contacts/add-employee/add-employee.component.ngfactory.js");
    /* harmony import */
    var _inbox_inbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./inbox/inbox.component.ngfactory */"./src/app/inbox/inbox.component.ngfactory.js");
    /* harmony import */
    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */"./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */
    var _node_modules_ngx_lightbox_lightbox_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ../../node_modules/ngx-lightbox/lightbox-overlay.component.ngfactory */"./node_modules/ngx-lightbox/lightbox-overlay.component.ngfactory.js");
    /* harmony import */
    var _node_modules_ngx_lightbox_lightbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ../../node_modules/ngx-lightbox/lightbox.component.ngfactory */"./node_modules/ngx-lightbox/lightbox.component.ngfactory.js");
    /* harmony import */
    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./app.component.ngfactory */"./src/app/app.component.ngfactory.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! ./auth.service */"./src/app/auth.service.ts");
    /* harmony import */
    var _helpers_baseURL_interceptor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! ./_helpers/baseURL.interceptor */"./src/app/_helpers/baseURL.interceptor.ts");
    /* harmony import */
    var angular_notifier__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__( /*! angular-notifier */"./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */
    var ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__( /*! ngx-lightbox/lightbox-config.service */"./node_modules/ngx-lightbox/lightbox-config.service.js");
    /* harmony import */
    var ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_31__);
    /* harmony import */
    var ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__( /*! ngx-lightbox/lightbox-event.service */"./node_modules/ngx-lightbox/lightbox-event.service.js");
    /* harmony import */
    var ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_32__);
    /* harmony import */
    var ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__( /*! ngx-lightbox/lightbox.service */"./node_modules/ngx-lightbox/lightbox.service.js");
    /* harmony import */
    var ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_33__);
    /* harmony import */
    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__( /*! ngx-socket-io */"./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */
    var ngx_permissions__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__( /*! ngx-permissions */"./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
    /* harmony import */
    var _helpers_date_native_adapter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__( /*! ./_helpers/date-native.adapter */"./src/app/_helpers/date-native.adapter.ts");
    /* harmony import */
    var _helpers_date_parser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__( /*! ./_helpers/date-parser */"./src/app/_helpers/date-parser.ts");
    /* harmony import */
    var _shared_loader_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__( /*! ./shared/loader.service */"./src/app/shared/loader.service.ts");
    /* harmony import */
    var _shared_notify_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__( /*! ./shared/notify.service */"./src/app/shared/notify.service.ts");
    /* harmony import */
    var _socket_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__( /*! ./socket.service */"./src/app/socket.service.ts");
    /* harmony import */
    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__( /*! ./landing/landing.component */"./src/app/landing/landing.component.ts");
    /* harmony import */
    var _login_login_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__( /*! ./login/login.component */"./src/app/login/login.component.ts");
    /* harmony import */
    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__( /*! ./forgot-password/forgot-password.component */"./src/app/forgot-password/forgot-password.component.ts");
    /* harmony import */
    var _sendEmail_sendEmail_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__( /*! ./sendEmail/sendEmail.component */"./src/app/sendEmail/sendEmail.component.ts");
    /* harmony import */
    var _verifyEmail_verifyEmail_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__( /*! ./verifyEmail/verifyEmail.component */"./src/app/verifyEmail/verifyEmail.component.ts");
    /* harmony import */
    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__( /*! ./reset-password/reset-password.component */"./src/app/reset-password/reset-password.component.ts");
    /* harmony import */
    var _create_hosRequest_create_hosRequest_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__( /*! ./create-hosRequest/create-hosRequest.component */"./src/app/create-hosRequest/create-hosRequest.component.ts");
    /* harmony import */
    var _request_success_request_success_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__( /*! ./request-success/request-success.component */"./src/app/request-success/request-success.component.ts");
    /* harmony import */
    var _core_core_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__( /*! ./core/core.component */"./src/app/core/core.component.ts");
    /* harmony import */
    var _gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__( /*! ./_gaurds/auth.gaurd */"./src/app/_gaurds/auth.gaurd.ts");
    /* harmony import */
    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__( /*! ./dashboard/dashboard.component */"./src/app/dashboard/dashboard.component.ts");
    /* harmony import */
    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__( /*! ./profile/profile.component */"./src/app/profile/profile.component.ts");
    /* harmony import */
    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__( /*! ./contacts/contacts.component */"./src/app/contacts/contacts.component.ts");
    /* harmony import */
    var _contacts_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__( /*! ./contacts/add-employee/add-employee.component */"./src/app/contacts/add-employee/add-employee.component.ts");
    /* harmony import */
    var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__( /*! ./inbox/inbox.component */"./src/app/inbox/inbox.component.ts");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _ngbshared_ngbshared_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__( /*! ./ngbshared/ngbshared.module */"./src/app/ngbshared/ngbshared.module.ts");
    /* harmony import */
    var ng2_charts__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__( /*! ng2-charts */"./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */
    var ngx_filesaver__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__( /*! ngx-filesaver */"./node_modules/ngx-filesaver/fesm2015/ngx-filesaver.js");
    /* harmony import */
    var ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__( /*! ngx-lightbox/lightbox.module */"./node_modules/ngx-lightbox/lightbox.module.js");
    /* harmony import */
    var ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_60__);
    /* harmony import */
    var ng5_slider__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__( /*! ng5-slider */"./node_modules/ng5-slider/esm2015/ng5-slider.js");
    /* harmony import */
    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__( /*! @ng-select/ng-select */"./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
    /* harmony import */
    var ngx_daterange__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__( /*! ngx-daterange */"./node_modules/ngx-daterange/fesm2015/ngx-daterange.js");
    /* harmony import */
    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__( /*! ng2-file-upload */"./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
    /* harmony import */
    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__( /*! ./shared/shared.module */"./src/app/shared/shared.module.ts");
    /* harmony import */
    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__( /*! @kolkov/angular-editor */"./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _landing_landing_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LandingComponentNgFactory"], _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["LoginComponentNgFactory"], _forgot_password_forgot_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponentNgFactory"], _sendEmail_sendEmail_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["SendEmailComponentNgFactory"], _verifyEmail_verifyEmail_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["VerifyEmailComponentNgFactory"], _reset_password_reset_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponentNgFactory"], _create_hosRequest_create_hosRequest_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["CreateHosRequestComponentNgFactory"], _request_success_request_success_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RequestSuccessComponentNgFactory"], _core_core_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["CoreComponentNgFactory"], _dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["DashboardComponentNgFactory"], _profile_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["ProfileComponentNgFactory"], _contacts_contacts_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["ContactsComponentNgFactory"], _contacts_add_employee_add_employee_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["AddEmployeeComponentNgFactory"], _inbox_inbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["InboxComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_18__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_18__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_18__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_18__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_18__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_18__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_18__["ɵsNgFactory"], _node_modules_ngx_lightbox_lightbox_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["LightboxOverlayComponentNgFactory"], _node_modules_ngx_lightbox_lightbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["LightboxComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_24__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_24__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
        return [p0_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"], _auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HTTP_INTERCEPTORS"], function (p0_0, p1_0) {
        return [p0_0, new _helpers_baseURL_interceptor__WEBPACK_IMPORTED_MODULE_29__["BaseUrlInterceptor"](p1_0)];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_h"], _auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_notifier__WEBPACK_IMPORTED_MODULE_30__["ɵc"], angular_notifier__WEBPACK_IMPORTED_MODULE_30__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_notifier__WEBPACK_IMPORTED_MODULE_30__["ɵa"], angular_notifier__WEBPACK_IMPORTED_MODULE_30__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, angular_notifier__WEBPACK_IMPORTED_MODULE_30__["NotifierConfigToken"], angular_notifier__WEBPACK_IMPORTED_MODULE_30__["notifierCustomConfigFactory"], [angular_notifier__WEBPACK_IMPORTED_MODULE_30__["NotifierOptionsToken"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_notifier__WEBPACK_IMPORTED_MODULE_30__["NotifierService"], angular_notifier__WEBPACK_IMPORTED_MODULE_30__["NotifierService"], [angular_notifier__WEBPACK_IMPORTED_MODULE_30__["ɵa"], angular_notifier__WEBPACK_IMPORTED_MODULE_30__["NotifierConfigToken"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_31__["LightboxConfig"], ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_31__["LightboxConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_32__["LightboxEvent"], ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_32__["LightboxEvent"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_33__["Lightbox"], ngx_lightbox_lightbox_service__WEBPACK_IMPORTED_MODULE_33__["Lightbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], ngx_lightbox_lightbox_config_service__WEBPACK_IMPORTED_MODULE_31__["LightboxConfig"], ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_32__["LightboxEvent"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_32__["LightboxWindowRef"], ngx_lightbox_lightbox_event_service__WEBPACK_IMPORTED_MODULE_32__["LightboxWindowRef"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ngx_socket_io__WEBPACK_IMPORTED_MODULE_34__["Socket"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_34__["ɵa"], [ngx_socket_io__WEBPACK_IMPORTED_MODULE_34__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsStore"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxRolesStore"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxRolesStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsConfigurationStore"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsConfigurationStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsService"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["USE_PERMISSIONS_STORE"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsStore"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxRolesService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxRolesService"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["USE_ROLES_STORE"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxRolesStore"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsGuard"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsGuard"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxRolesService"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsConfigurationService"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["USE_CONFIGURATION_STORE"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsConfigurationStore"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDateAdapter"], _helpers_date_native_adapter__WEBPACK_IMPORTED_MODULE_36__["DateNativeAdapter"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDateParserFormatter"], _helpers_date_parser__WEBPACK_IMPORTED_MODULE_37__["CustomDateParserFormatter"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_loader_service__WEBPACK_IMPORTED_MODULE_38__["LoaderService"], _shared_loader_service__WEBPACK_IMPORTED_MODULE_38__["LoaderService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_notify_service__WEBPACK_IMPORTED_MODULE_39__["NotifyService"], _shared_notify_service__WEBPACK_IMPORTED_MODULE_39__["NotifyService"], [angular_notifier__WEBPACK_IMPORTED_MODULE_30__["NotifierService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _socket_service__WEBPACK_IMPORTED_MODULE_40__["SocketService"], _socket_service__WEBPACK_IMPORTED_MODULE_40__["SocketService"], [ngx_socket_io__WEBPACK_IMPORTED_MODULE_34__["Socket"], _auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_24__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_22__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_22__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTES"], function () {
        return [[{
          path: "",
          component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_41__["LandingComponent"]
        }, {
          path: "login",
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_42__["LoginComponent"]
        }, {
          path: "forgot",
          component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_43__["ForgotPasswordComponent"]
        }, {
          path: "sendEmail",
          component: _sendEmail_sendEmail_component__WEBPACK_IMPORTED_MODULE_44__["SendEmailComponent"]
        }, {
          path: "emailVerify/:token",
          component: _verifyEmail_verifyEmail_component__WEBPACK_IMPORTED_MODULE_45__["VerifyEmailComponent"]
        }, {
          path: "resetpassword/:token",
          component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_46__["ResetPasswordComponent"]
        }, {
          path: "hosRequest",
          component: _create_hosRequest_create_hosRequest_component__WEBPACK_IMPORTED_MODULE_47__["CreateHosRequestComponent"]
        }, {
          path: "success",
          component: _request_success_request_success_component__WEBPACK_IMPORTED_MODULE_48__["RequestSuccessComponent"]
        }, {
          path: "app",
          component: _core_core_component__WEBPACK_IMPORTED_MODULE_49__["CoreComponent"],
          canActivate: [_gaurds_auth_gaurd__WEBPACK_IMPORTED_MODULE_50__["AuthGuard"]],
          children: [{
            path: "dash",
            component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_51__["DashboardComponent"]
          }, {
            path: "profile",
            component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_52__["ProfileComponent"]
          }, {
            path: "contacts",
            component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_53__["ContactsComponent"]
          }, {
            path: "contacts/add",
            component: _contacts_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_54__["AddEmployeeComponent"]
          }, {
            path: "inbox",
            component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_55__["InboxComponent"]
          }, {
            path: "inbox/:id",
            component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_55__["InboxComponent"]
          }, {
            path: "pinbox",
            component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_55__["InboxComponent"]
          }, {
            path: "doctor",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ0"]
          }, {
            path: "labattendant",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ1"]
          }, {
            path: "fdo",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ2"]
          }, {
            path: "pharmacy",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ3"]
          }, {
            path: "prescription",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ4"]
          }, {
            path: "patient",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ5"]
          }, {
            path: "payment",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ6"]
          }, {
            path: "user",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ7"]
          }, {
            path: "request",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ8"]
          }, {
            path: "reports",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ9"]
          }, {
            path: "calender",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ10"]
          }, {
            path: "hospitals",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ11"]
          }, {
            path: "ticket",
            loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["ɵ12"]
          }, {
            path: "",
            redirectTo: "dash",
            pathMatch: "full"
          }]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_24__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_24__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_56__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngbshared_ngbshared_module__WEBPACK_IMPORTED_MODULE_57__["NgbsharedModule"], _ngbshared_ngbshared_module__WEBPACK_IMPORTED_MODULE_57__["NgbsharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_charts__WEBPACK_IMPORTED_MODULE_58__["ChartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_58__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_notifier__WEBPACK_IMPORTED_MODULE_30__["NotifierModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_30__["NotifierModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_socket_io__WEBPACK_IMPORTED_MODULE_34__["SocketIoModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_34__["SocketIoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["NgxPermissionsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_filesaver__WEBPACK_IMPORTED_MODULE_59__["FileSaverModule"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_59__["FileSaverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_60__["LightboxModule"], ngx_lightbox_lightbox_module__WEBPACK_IMPORTED_MODULE_60__["LightboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng5_slider__WEBPACK_IMPORTED_MODULE_61__["Ng5SliderModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_61__["Ng5SliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_62__["NgSelectModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_62__["NgSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_daterange__WEBPACK_IMPORTED_MODULE_63__["NgxDateRangeModule"], ngx_daterange__WEBPACK_IMPORTED_MODULE_63__["NgxDateRangeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_file_upload__WEBPACK_IMPORTED_MODULE_64__["FileUploadModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_64__["FileUploadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_65__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_65__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_66__["AngularEditorModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_66__["AngularEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, angular_notifier__WEBPACK_IMPORTED_MODULE_30__["NotifierOptionsToken"], {
        position: {
          horizontal: {
            position: "right",
            distance: 12
          },
          vertical: {
            position: "top",
            distance: 12,
            gap: 10
          }
        },
        theme: "material",
        behaviour: {
          autoHide: 5000,
          onClick: "hide",
          onMouseover: "pauseAutoHide",
          showDismissButton: true,
          stacking: 4
        },
        animations: {
          enabled: true,
          show: {
            preset: "slide",
            speed: 300,
            easing: "ease"
          },
          hide: {
            preset: "fade",
            speed: 300,
            easing: "ease",
            offset: 50
          },
          shift: {
            speed: 300,
            easing: "ease"
          },
          overlap: 150
        }
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_62__["SELECTION_MODEL_FACTORY"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_62__["ɵb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_socket_io__WEBPACK_IMPORTED_MODULE_34__["ɵb"], {
        url: "http://127.0.0.1:3000/",
        options: {}
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["USE_PERMISSIONS_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["USE_ROLES_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_permissions__WEBPACK_IMPORTED_MODULE_35__["USE_CONFIGURATION_STORE"], undefined, [])]);
    });

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var angular_notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! angular-notifier */"./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */
    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ngx-socket-io */"./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */
    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/environments/environment */"./src/environments/environment.ts");

    /**
     * Custom angular notifier options
     */
    var customNotifierOptions = {
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease'
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50
        },
        shift: {
          speed: 300,
          easing: 'ease'
        },
        overlap: 150
      }
    };
    var config = {
      url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url,
      options: {}
    };
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    /***/
  },
  /***/"./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/
  /*! exports provided: AuthService */
  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUserHOS')));
        this.currentUser = this.currentUserSubject.asObservable();
      }
      _createClass(AuthService, [{
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var _this3 = this;
          return this.http.post("api/signin", {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            if (response.status == '200') {
              // login successful if there's a jwt token in the response
              if (response.data.user) {
                var user = Object.assign({}, response.data.user, {
                  roleId: response.data.roleId,
                  token: response.data.token
                });
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUserHOS', JSON.stringify(user));
                _this3.currentUserSubject.next(user);
              }
            }
            return response;
          }));
        }
      }, {
        key: "saveUser",
        value: function saveUser(response) {
          if (response.data.user) {
            var user = Object.assign({}, response.data.user, {
              roleId: response.data.roleId,
              token: response.data.token
            });
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUserHOS', JSON.stringify(user));
            this.currentUserSubject.next(user);
          }
        }
      }, {
        key: "toggleactive",
        value: function toggleactive(id) {
          return this.http.get("api/toggleActive/".concat(id));
        }
      }, {
        key: "toggleDelete",
        value: function toggleDelete(id) {
          return this.http.get("api/toggleDelete/".concat(id));
        }
      }, {
        key: "updateUser",
        value: function updateUser(id, value) {
          console.log('user value', value);
          var form = new FormData();
          Object.keys(value).forEach(function (key) {
            form.append(key, value[key]);
          });
          return this.http.put("api/updateUser/".concat(id), form);
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUserHOS');
          this.currentUserSubject.next(null);
        }
        // request for forgot password
      }, {
        key: "forgot",
        value: function forgot(value) {
          return this.http.post("api/forgot", value, {
            observe: 'response'
          });
        }
        // resets Password
      }, {
        key: "passwordReset",
        value: function passwordReset(value) {
          return this.http.post("api/reset", value, {
            observe: 'response'
          });
        }
        // sends Verification Email
      }, {
        key: "sendVerificationEmail",
        value: function sendVerificationEmail(value) {
          return this.http.post("api/sendVerificationEmail", value, {
            observe: 'response'
          });
        }
        // verifies Email
      }, {
        key: "verifyEmailLink",
        value: function verifyEmailLink(value) {
          return this.http.post("api/verifyEmail", value, {
            observe: 'response'
          });
        }
        // updates Password
      }, {
        key: "updatePassword",
        value: function updatePassword(value) {
          return this.http.post("api/updatePassword", value, {
            observe: 'response'
          });
        }
      }]);
      return AuthService;
    }();
    AuthService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function AuthService_Factory() {
        return new AuthService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      },
      token: AuthService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/contacts/add-employee/add-employee.component.css.shim.ngstyle.js":
  /*!**********************************************************************************!*\
    !*** ./src/app/contacts/add-employee/add-employee.component.css.shim.ngstyle.js ***!
    \**********************************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppContactsAddEmployeeAddEmployeeComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvYWRkLWVtcGxveWVlL2FkZC1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUEsWUFBWTs7QUFDWjtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2FkZC1lbXBsb3llZS9hZGQtZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59Il19 */"];

    /***/
  },

  /***/"./src/app/contacts/add-employee/add-employee.component.ngfactory.js":
  /*!***************************************************************************!*\
    !*** ./src/app/contacts/add-employee/add-employee.component.ngfactory.js ***!
    \***************************************************************************/
  /*! exports provided: RenderType_AddEmployeeComponent, View_AddEmployeeComponent_0, View_AddEmployeeComponent_Host_0, AddEmployeeComponentNgFactory */
  /***/
  function srcAppContactsAddEmployeeAddEmployeeComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_AddEmployeeComponent", function () {
      return RenderType_AddEmployeeComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_AddEmployeeComponent_0", function () {
      return View_AddEmployeeComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_AddEmployeeComponent_Host_0", function () {
      return View_AddEmployeeComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddEmployeeComponentNgFactory", function () {
      return AddEmployeeComponentNgFactory;
    });
    /* harmony import */
    var _add_employee_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./add-employee.component.css.shim.ngstyle */"./src/app/contacts/add-employee/add-employee.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _add_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./add-employee.component */"./src/app/contacts/add-employee/add-employee.component.ts");
    /* harmony import */
    var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! angular-notifier */"./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */
    var _employee_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../employee-service.service */"./src/app/contacts/employee-service.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_AddEmployeeComponent = [_add_employee_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_AddEmployeeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AddEmployeeComponent,
      data: {}
    });
    function View_AddEmployeeComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;
        _ck(_v, 1, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.name;
        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.name;
        _ck(_v, 3, 0, currVal_2);
      });
    }
    function View_AddEmployeeComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Select a Category "]))], null, null);
    }
    function View_AddEmployeeComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Name is required "]))], null, null);
    }
    function View_AddEmployeeComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Email is Required "]))], null, null);
    }
    function View_AddEmployeeComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Enter Valid Email Address "]))], null, null);
    }
    function View_AddEmployeeComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Phone Number is Required "]))], null, null);
    }
    function View_AddEmployeeComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 49, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 48, "form", [["class", "form-horizontal form-material"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }
        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 43, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "div", [["class", "col-md-12 m-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact Category"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "select", [["class", "form-control"], ["formControlName", "role"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddEmployeeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddEmployeeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 8, "div", [["class", "col-md-12 m-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "name"], ["placeholder", "Type name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddEmployeeComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 10, "div", [["class", "col-md-12 m-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "email"], ["placeholder", "Email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddEmployeeComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddEmployeeComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 9, "div", [["class", "col-md-12 m-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "phone"], ["placeholder", "Phone"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        if ("change" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).onChange($event.target.value) !== false;
          ad = pd_4 && ad;
        }
        if ("input" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).onChange($event.target.value) !== false;
          ad = pd_5 && ad;
        }
        if ("blur" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).onTouched() !== false;
          ad = pd_6 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AddEmployeeComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "a", [["class", "btn btn-info text-white waves-effect"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onSave() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.form;
        _ck(_v, 3, 0, currVal_7);
        var currVal_15 = "role";
        _ck(_v, 13, 0, currVal_15);
        var currVal_16 = _co.roles;
        _ck(_v, 17, 0, currVal_16);
        var currVal_17 = _co.isFormSubmitted && _co.f.role.errors && _co.f.role.errors.required;
        _ck(_v, 19, 0, currVal_17);
        var currVal_25 = "name";
        _ck(_v, 24, 0, currVal_25);
        var currVal_26 = _co.isFormSubmitted && _co.f.name.errors && _co.f.name.errors.required;
        _ck(_v, 28, 0, currVal_26);
        var currVal_34 = "email";
        _ck(_v, 33, 0, currVal_34);
        var currVal_35 = _co.isFormSubmitted && _co.f.email.errors && _co.f.email.errors.required;
        _ck(_v, 37, 0, currVal_35);
        var currVal_36 = _co.isFormSubmitted && _co.f.email.errors && _co.f.email.errors.email;
        _ck(_v, 39, 0, currVal_36);
        var currVal_44 = "phone";
        _ck(_v, 45, 0, currVal_44);
        var currVal_45 = _co.isFormSubmitted && _co.f.phone.errors && _co.f.phone.errors.required;
        _ck(_v, 49, 0, currVal_45);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending;
        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched;
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine;
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty;
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending;
        _ck(_v, 10, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassUntouched;
        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassTouched;
        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPristine;
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassDirty;
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassValid;
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassInvalid;
        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).ngClassPending;
        _ck(_v, 21, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);
        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassUntouched;
        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassTouched;
        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPristine;
        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassDirty;
        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassValid;
        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassInvalid;
        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).ngClassPending;
        _ck(_v, 30, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);
        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassUntouched;
        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassTouched;
        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassPristine;
        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassDirty;
        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassValid;
        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassInvalid;
        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).ngClassPending;
        _ck(_v, 41, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43);
      });
    }
    function View_AddEmployeeComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-add-employee", [], null, null, null, View_AddEmployeeComponent_0, RenderType_AddEmployeeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _add_employee_component__WEBPACK_IMPORTED_MODULE_4__["AddEmployeeComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"], _employee_service_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeServiceService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var AddEmployeeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-add-employee", _add_employee_component__WEBPACK_IMPORTED_MODULE_4__["AddEmployeeComponent"], View_AddEmployeeComponent_Host_0, {}, {
      save: "save"
    }, []);

    /***/
  },

  /***/"./src/app/contacts/add-employee/add-employee.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/contacts/add-employee/add-employee.component.ts ***!
    \*****************************************************************/
  /*! exports provided: AddEmployeeComponent */
  /***/
  function srcAppContactsAddEmployeeAddEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function () {
      return AddEmployeeComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    var AddEmployeeComponent = /*#__PURE__*/function () {
      function AddEmployeeComponent(formBuilder, notifier, employeeService) {
        _classCallCheck(this, AddEmployeeComponent);
        this.formBuilder = formBuilder;
        this.notifier = notifier;
        this.employeeService = employeeService;
        this.roles = [];
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.notifier = notifier;
      }
      _createClass(AddEmployeeComponent, [{
        key: "showNotification",
        value: function showNotification(type, message) {
          this.notifier.notify(type, message);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllRoles();
          this.isFormSubmitted = false;
          this.create();
        }
        // Reactive Forms
      }, {
        key: "create",
        value: function create() {
          this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
        // Adds Employee to DB
      }, {
        key: "onSave",
        value: function onSave() {
          var _this4 = this;
          this.isFormSubmitted = true;
          if (this.form.invalid) {
            return;
          }
          // let dob = this.form.controls.dob.value;
          // let jod = this.form.controls.joiningDate.value;
          // this.form.controls.dob.patchValue(new Date(dob.year, dob.month, dob.day ));
          // this.form.controls.joiningDate.patchValue(new Date(jod.year, jod.month, jod.day ));
          console.log(this.form.value);
          this.employeeService.createEmployee(this.form.value).subscribe(function (res) {
            if (res.status === 200) {
              _this4.save.emit(res.data);
              _this4.form.reset();
              _this4.showNotification('success', 'Employee Created.');
            }
          });
        }
        // function gets all Roles 
      }, {
        key: "getAllRoles",
        value: function getAllRoles() {
          var _this5 = this;
          this.employeeService.getAllRoles().subscribe(function (res) {
            if (res.status == '200') {
              _this5.roles = res.data;
            } else {
              _this5.roles = [];
            }
          });
        }
      }]);
      return AddEmployeeComponent;
    }();
    /***/
  },
  /***/"./src/app/contacts/contacts.component.css.shim.ngstyle.js":
  /*!*****************************************************************!*\
    !*** ./src/app/contacts/contacts.component.css.shim.ngstyle.js ***!
    \*****************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppContactsContactsComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = [".contact-page-aside[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n}\n.left-aside[_ngcontent-%COMP%] {\n    \n    \n    padding: 20px;\n    width: 325px;\n    height: 100%;\n}\nul.list-style-none[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n}\nul.list-style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 6px;\n}\n.list-style-none[_ngcontent-%COMP%]   li.box-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-weight: 500;\n}\n.right-aside[_ngcontent-%COMP%] {\n    padding: 20px;\n    border-left: 1px solid #e9ecef;\n    \n    width: 100%;\n}\nul.list-style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #212529;\n    padding: 8px 0;\n    display: block;\n    text-decoration: none;\n}\n.list-style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    float: right;\n}\n.list-style-none[_ngcontent-%COMP%]   li.divider[_ngcontent-%COMP%] {\n    margin: 10px 0;\n    height: 1px;\n    background: #e9ecef;\n}\n.list-style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color: #fb9678;\n}\n#demo-input-search2[_ngcontent-%COMP%] {\n    border: 0;\n    background-image: linear-gradient(#fb9678, #fb9678), linear-gradient(#e9ecef, #e9ecef);\n    background-size: 0 2px, 100% 1px;\n    background-repeat: no-repeat;\n    background-position: center bottom, center calc(100% - 1px);\n    background-color: transparent;\n    transition: background 0s ease-out;\n    float: none;\n    box-shadow: none;\n    border-radius: 0;\n    margin-left: 10px;\n    color: #212529;\n}\n.footable-pagination-wrapper[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.footable-paging[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\n    margin-left: 0;\n    border-bottom-left-radius: .25rem;\n    border-top-left-radius: .25rem;\n}\n.footable-paging[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #636c72;\n    pointer-events: none;\n    cursor: not-allowed;\n    background-color: #fff;\n    border-color: #ddd;\n}\n.footable-paging[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #636c72;\n    pointer-events: none;\n    cursor: not-allowed;\n    background-color: #fff;\n    border-color: #ddd;\n}\n.footable-paging[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: relative;\n    display: block;\n    padding: .5rem .75rem;\n    margin-left: -1px;\n    line-height: 1.25;\n    color: #0275d8;\n    background-color: #fff;\n    border: 1px solid #ddd;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    vertical-align: middle;\n}\n@media (max-width: 1023px){\n.d-flex[_ngcontent-%COMP%] {\n    display: flex !important;\n}\n}\n@media (max-width: 767px){\n  .contact-page-aside[_ngcontent-%COMP%] {\n    display: block;\n}\n.left-aside[_ngcontent-%COMP%] {\n  width: 100%;\n}\nul.list-style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\npadding: 0;\n}\n.p--2[_ngcontent-%COMP%]{\n  padding: 4px !important;\n}\n.right-page-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{\n  display: block !important;\n}\n.right-page-header[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]   .ml-auto[_ngcontent-%COMP%]{\n  margin: 0 !important;\n}\n#demo-input-search2[_ngcontent-%COMP%]{\n  margin-right: 0 !important;\n}\n.right-aside[_ngcontent-%COMP%]   .float-right[_ngcontent-%COMP%]{\n  float: none !important;\n}\n.left-aside[_ngcontent-%COMP%]{\n  border-bottom: 1px solid lightgray;\n}\n.card[_ngcontent-%COMP%]{\n  border-radius: 8px;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsc0ZBQXNGO0lBQ3RGLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIsMkRBQTJEO0lBQzNELDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlDQUFpQztJQUNqQyw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtBQUNBO0VBQ0U7SUFDRSxjQUFjO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtcGFnZS1hc2lkZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubGVmdC1hc2lkZSB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAgIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOWVjZWY7ICovXG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogMzI1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxudWwubGlzdC1zdHlsZS1ub25lIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbnVsLmxpc3Qtc3R5bGUtbm9uZSBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiA2cHg7XG59XG4ubGlzdC1zdHlsZS1ub25lIGxpLmJveC1sYWJlbCBhIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLnJpZ2h0LWFzaWRlIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICAvKiBtYXJnaW4tbGVmdDogMjUwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG59XG51bC5saXN0LXN0eWxlLW5vbmUgbGkgYSB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgcGFkZGluZzogOHB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxpc3Qtc3R5bGUtbm9uZSBsaSBhIHNwYW4ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5saXN0LXN0eWxlLW5vbmUgbGkuZGl2aWRlciB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbn1cbi5saXN0LXN0eWxlLW5vbmUgbGkgYTpob3ZlcntcbiAgICBjb2xvcjogI2ZiOTY3ODtcbn1cbiNkZW1vLWlucHV0LXNlYXJjaDIge1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZiOTY3OCwgI2ZiOTY3OCksIGxpbmVhci1ncmFkaWVudCgjZTllY2VmLCAjZTllY2VmKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAgMnB4LCAxMDAlIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b20sIGNlbnRlciBjYWxjKDEwMCUgLSAxcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHMgZWFzZS1vdXQ7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjMjEyNTI5O1xufVxuLmZvb3RhYmxlLXBhZ2luYXRpb24td3JhcHBlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGFibGUtcGFnaW5nIC5wYWdpbmF0aW9uIGxpOmZpcnN0LWNoaWxkIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMjVyZW07XG59XG4uZm9vdGFibGUtcGFnaW5nIC5wYWdpbmF0aW9uIGxpLmRpc2FibGVkIGEge1xuICAgIGNvbG9yOiAjNjM2YzcyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG4uZm9vdGFibGUtcGFnaW5nIC5wYWdpbmF0aW9uIGxpLmRpc2FibGVkIGEge1xuICAgIGNvbG9yOiAjNjM2YzcyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG5cbi5mb290YWJsZS1wYWdpbmcgLnBhZ2luYXRpb24gbGkgYSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IC41cmVtIC43NXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBjb2xvcjogIzAyNzVkODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG4udGFibGUgdGR7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpe1xuLmQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcbiAgLmNvbnRhY3QtcGFnZS1hc2lkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ubGVmdC1hc2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudWwubGlzdC1zdHlsZS1ub25lIGxpIGF7XG5wYWRkaW5nOiAwO1xufVxuLnAtLTJ7XG4gIHBhZGRpbmc6IDRweCAhaW1wb3J0YW50O1xufVxuLnJpZ2h0LXBhZ2UtaGVhZGVyIC5kLWZsZXh7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4ucmlnaHQtcGFnZS1oZWFkZXIgLmQtZmxleCAubWwtYXV0b3tcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4jZGVtby1pbnB1dC1zZWFyY2gye1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbi5yaWdodC1hc2lkZSAuZmxvYXQtcmlnaHR7XG4gIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubGVmdC1hc2lkZXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5jYXJke1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG59XG4iXX0= */"];

    /***/
  },

  /***/"./src/app/contacts/contacts.component.ngfactory.js":
  /*!**********************************************************!*\
    !*** ./src/app/contacts/contacts.component.ngfactory.js ***!
    \**********************************************************/
  /*! exports provided: RenderType_ContactsComponent, View_ContactsComponent_0, View_ContactsComponent_Host_0, ContactsComponentNgFactory */
  /***/
  function srcAppContactsContactsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_ContactsComponent", function () {
      return RenderType_ContactsComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_ContactsComponent_0", function () {
      return View_ContactsComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_ContactsComponent_Host_0", function () {
      return View_ContactsComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactsComponentNgFactory", function () {
      return ContactsComponentNgFactory;
    });
    /* harmony import */
    var _contacts_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./contacts.component.css.shim.ngstyle */"./src/app/contacts/contacts.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../shared/loader/loader.component.ngfactory */"./src/app/shared/loader/loader.component.ngfactory.js");
    /* harmony import */
    var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../shared/loader/loader.component */"./src/app/shared/loader/loader.component.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _add_employee_add_employee_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./add-employee/add-employee.component.ngfactory */"./src/app/contacts/add-employee/add-employee.component.ngfactory.js");
    /* harmony import */
    var _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./add-employee/add-employee.component */"./src/app/contacts/add-employee/add-employee.component.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! angular-notifier */"./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */
    var _employee_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./employee-service.service */"./src/app/contacts/employee-service.service.ts");
    /* harmony import */
    var _contacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./contacts.component */"./src/app/contacts/contacts.component.ts");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_ContactsComponent = [_contacts_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_ContactsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ContactsComponent,
      data: {}
    });
    function View_ContactsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "a", [["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClickRole(_v.context.$implicit.name) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "btn ml-auto waves-effect"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.delet(_v.context.$implicit._id) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [["class", "fas fa-trash fa-lg text-danger"]], null, null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;
        _ck(_v, 3, 0, currVal_0);
      });
    }
    function View_ContactsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "loader", [], null, null, null, _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_Loader_0"], _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_Loader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["Loader"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    function View_ContactsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "ul", [["class", "list-style-none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "li", [["class", "box-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "a", [["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["All Contacts"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["123"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "li", [["class", "divider p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "li", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "a", [["class", "mr-5"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClickRole(null) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["All"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "a", [["class", "btn p--2 mt-2 btn-info text-white"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onAddNewRole() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+ Create NewLabel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.roles;
        _ck(_v, 11, 0, currVal_0);
        var currVal_1 = _co.isLoader;
        _ck(_v, 16, 0, currVal_1);
      }, null);
    }
    function View_ContactsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title text-primary"], ["id", "myModalLabel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add New Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClose() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xD7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-add-employee", [], null, [[null, "save"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("save" === en) {
          var pd_0 = _co.save($event) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, _add_employee_add_employee_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_AddEmployeeComponent_0"], _add_employee_add_employee_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_AddEmployeeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_6__["AddEmployeeComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"], _employee_service_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeServiceService"]], null, {
        save: "save"
      })], function (_ck, _v) {
        _ck(_v, 6, 0);
      }, null);
    }
    function View_ContactsComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "card-title m-t-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No Employee Record! Please add Records "]))], null, null);
    }
    function View_ContactsComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "span", [["class", "label label-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "td", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "a", [["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.deletEmployee(_v.context.$implicit._id) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "i", [["class", "fas fa-trash fa-lg text-danger"]], null, null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.page * _co.limit + _v.context.index + 1;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.name;
        _ck(_v, 4, 0, currVal_1);
        var currVal_2 = _v.context.$implicit.email;
        _ck(_v, 6, 0, currVal_2);
        var currVal_3 = _v.context.$implicit.phone;
        _ck(_v, 8, 0, currVal_3);
        var currVal_4 = _v.context.$implicit.role;
        _ck(_v, 11, 0, currVal_4);
      });
    }
    function View_ContactsComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [["class", "page-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "a", [["aria-label", "Previous"], ["class", "page-link"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClickPage(_co.page - 1) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xAB"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Previous"]))], null, null);
    }
    function View_ContactsComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [["class", "page-item"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClickPage(0) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        "active": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "page-link"], ["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "page-item";
        var currVal_1 = _ck(_v, 3, 0, _co.page == 0);
        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }
    function View_ContactsComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [["class", "page-item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        "active": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "page-link"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClickPage(1) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["2"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "page-item";
        var currVal_1 = _ck(_v, 3, 0, _co.page == 1);
        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }
    function View_ContactsComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "li", [["class", "page-item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        "active": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "page-link"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClickPage(2) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["3"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "page-item";
        var currVal_1 = _ck(_v, 3, 0, _co.page == 2);
        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }
    function View_ContactsComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "li", [["class", "page-item"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        "active": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "a", [["aria-label", "Next"], ["class", "page-link"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClickPage(_co.page + 1) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xBB"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Next"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "page-item";
        var currVal_1 = _ck(_v, 3, 0, _co.page > 2);
        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }
    function View_ContactsComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "ul", [["class", "pagination justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.page > 0;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _co.totalCount / _co.limit >= 0;
        _ck(_v, 4, 0, currVal_1);
        var currVal_2 = _co.totalCount / _co.limit >= 1;
        _ck(_v, 6, 0, currVal_2);
        var currVal_3 = _co.totalCount / _co.limit >= 2;
        _ck(_v, 8, 0, currVal_3);
        var currVal_4 = _co.totalCount / _co.limit > 3 && _co.totalCount > _co.limit * (_co.page + 1);
        _ck(_v, 10, 0, currVal_4);
      }, null);
    }
    function View_ContactsComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "table", [["class", "table no-wrap table-bordered m-t-30 table-hover contact-list"], ["data-paging", "true"], ["data-paging-size", "7"], ["id", "demo-foo-addrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 12, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Phone"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Action"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 8, "tfoot", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 7, "tr", [["class", "footable-paging"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 6, "td", [["colspan", "8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "div", [["class", "footable-pagination-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 0, "div", [["class", "divider"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "span", [["class", "label label-primary"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, null, ["", " of ", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.employees;
        _ck(_v, 17, 0, currVal_0);
        var currVal_1 = _co.totalCount > _co.limit;
        _ck(_v, 23, 0, currVal_1);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.employees.length;
        var currVal_3 = _co.totalCount;
        _ck(_v, 26, 0, currVal_2, currVal_3);
      });
    }
    function View_ContactsComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "loader", [], null, null, null, _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_Loader_0"], _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_Loader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["Loader"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    function View_ContactsComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Enter a name "]))], null, null);
    }
    function View_ContactsComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [["class", "modal-title text-primary"], ["id", "myModalLabel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add Label"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClose() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xD7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 17, "div", [["class", "modal-body"]], null, [[null, "keyup.enter"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("keyup.enter" === en) {
          var pd_0 = _co.onAddNewRoleToDB() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 16, "form", [["class", "form-horizontal"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }
        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onReset() !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "label", [["class", "col-md-12 mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name of Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 8, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "name"], ["placeholder", "Type role name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 4, "div", [["class", "modal-footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "a", [["class", "btn btn-info text-white waves-effect"], ["data-dismiss", "modal"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onAddNewRoleToDB() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Save"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "a", [["class", "btn btn-default waves-effect"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClose() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.form;
        _ck(_v, 8, 0, currVal_7);
        var currVal_15 = "name";
        _ck(_v, 18, 0, currVal_15);
        var currVal_16 = _co.isFormSubmitted && _co.f.name.errors && _co.f.name.errors.required;
        _ck(_v, 22, 0, currVal_16);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending;
        _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassUntouched;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassTouched;
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPristine;
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassDirty;
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassValid;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassInvalid;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).ngClassPending;
        _ck(_v, 15, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
      });
    }
    function View_ContactsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, {
        createRoleModal: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, {
        createModal: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 29, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 28, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 27, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 26, "div", [["class", "contact-page-aside"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "left-aside bg-light-part"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 22, "div", [["class", "right-aside "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 11, "div", [["class", "right-page-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 10, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "div", [["class", "align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "h4", [["class", "card-title m-t-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contacts / Employee List "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "input", [["class", "form-control"], ["id", "demo-input-search2"], ["placeholder", "search contacts"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup"], [null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        if ("keyup" === en) {
          var pd_4 = _co.getEmployees() !== false;
          ad = pd_4 && ad;
        }
        if ("ngModelChange" === en) {
          var pd_5 = (_co.searchQuery = $event) !== false;
          ad = pd_5 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "button", [["class", "btn btn-info btn-rounded m-t-10 float-right"], ["data-target", "#add-contact"], ["data-toggle", "modal"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onAddNew() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add New Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[2, 2], ["createModal", 2]], null, 0, null, View_ContactsComponent_4)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 6, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[1, 2], ["createRoleModal", 2]], null, 0, null, View_ContactsComponent_15))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.isLoader;
        _ck(_v, 8, 0, currVal_0);
        var currVal_8 = _co.searchQuery;
        _ck(_v, 19, 0, currVal_8);
        var currVal_9 = _co.employees.length == 0;
        _ck(_v, 27, 0, currVal_9);
        var currVal_10 = _co.employees.length > 0 && !_co.isLoader;
        _ck(_v, 29, 0, currVal_10);
        var currVal_11 = _co.isLoader;
        _ck(_v, 31, 0, currVal_11);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassUntouched;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassTouched;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPristine;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassDirty;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassValid;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassInvalid;
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPending;
        _ck(_v, 16, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
      });
    }
    function View_ContactsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contacts", [], null, null, null, View_ContactsComponent_0, RenderType_ContactsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"], [angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _employee_service_service__WEBPACK_IMPORTED_MODULE_9__["EmployeeServiceService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var ContactsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contacts", _contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"], View_ContactsComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/contacts/contacts.component.ts":
  /*!************************************************!*\
    !*** ./src/app/contacts/contacts.component.ts ***!
    \************************************************/
  /*! exports provided: ContactsComponent */
  /***/
  function srcAppContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    var ContactsComponent = /*#__PURE__*/function () {
      function ContactsComponent(notifier, modalService, router, modal, formBuilder, employeeService) {
        _classCallCheck(this, ContactsComponent);
        this.notifier = notifier;
        this.modalService = modalService;
        this.router = router;
        this.modal = modal;
        this.formBuilder = formBuilder;
        this.employeeService = employeeService;
        this.isLoader = false;
        this.page = 0;
        this.limit = 10;
        this.totalCount = 4;
        this.employees = [];
        this.roles = [];
        this.notifier = notifier;
      }
      _createClass(ContactsComponent, [{
        key: "openVerticallyCentered",
        value: function openVerticallyCentered(content) {
          this.modalService.open(content);
        }
        // displays Delete Dialouge
      }, {
        key: "delet",
        value: function delet(id) {
          var _this6 = this;
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: 'Role Will be deleted!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then(function (result) {
            if (result.value) {
              _this6.onDeleteRole(id);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Role has been deleted.', 'success');
            } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Role is safe', 'error');
            }
          });
        }
      }, {
        key: "deletEmployee",
        value:
        // displays Delete Dialouge For Employee
        function deletEmployee(id) {
          var _this7 = this;
          sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: 'Employee Will be deleted!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then(function (result) {
            if (result.value) {
              _this7.onDeleteEmployee(id);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Deleted!', 'Employee has been deleted.', 'success');
            } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Cancelled', 'Employee is safe', 'error');
            }
          });
        }
      }, {
        key: "showNotification",
        value:
        // sweeet alert
        function showNotification(type, message) {
          this.notifier.notify(type, message);
        }
        // @ViewChild('app-appointment', { static: true }) addNewContactComponent: EmployeeContactComponent;
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllRoles();
          this.getEmployees();
          this.isFormSubmitted = false;
          this.create();
        }
        // Reactive Forms
      }, {
        key: "create",
        value: function create() {
          this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
        // Gets All Employees from DB
      }, {
        key: "getEmployees",
        value: function getEmployees() {
          var _this8 = this;
          var query = {
            page: this.page,
            limit: this.limit,
            searchQuery: null,
            role: null
          };
          if (this.searchQuery !== '') {
            query.searchQuery = this.searchQuery;
          }
          if (this.selectedRole) {
            query.role = this.selectedRole;
            // console.log(this.selectedRole);
          }

          this.isLoader = true;
          this.employeeService.getAllEmployees(query).subscribe(function (res) {
            if (res.status == '200') {
              console.log(res);
              _this8.employees = res.data;
              console.log(_this8.employees);
              _this8.isLoader = false;
            } else {
              _this8.employees = [];
            }
          });
        }
      }, {
        key: "onClickRole",
        value: function onClickRole(roleName) {
          this.selectedRole = roleName;
          this.getEmployees();
        }
        // function gets all Roles 
      }, {
        key: "getAllRoles",
        value: function getAllRoles() {
          var _this9 = this;
          this.isLoader = true;
          this.employeeService.getAllRoles().subscribe(function (res) {
            if (res.status == '200') {
              _this9.roles = res.data;
              console.log(_this9.roles);
              _this9.isLoader = false;
            } else {
              _this9.roles = [];
            }
          });
        }
        // Adds New Role to DB
      }, {
        key: "onAddNewRoleToDB",
        value: function onAddNewRoleToDB() {
          var _this10 = this;
          this.isFormSubmitted = true;
          if (this.form.invalid) {
            return;
          }
          this.employeeService.createRole(this.form.value).subscribe(function (res) {
            if (res.status == '200') {
              _this10.roles.push(res.data);
              _this10.form.reset();
              _this10.onClose();
              _this10.showNotification('success', 'Roles Added successfully.');
            } else {
              _this10.showNotification('danger', 'SomeThing went wrong.');
            }
          });
        }
        // deletes Role from DB
      }, {
        key: "onDeleteRole",
        value: function onDeleteRole(roleID) {
          var _this11 = this;
          this.employeeService.deleteRole(roleID).subscribe(function (res) {
            if (res.status == '200') {
              _this11.roles = _this11.roles.filter(function (role) {
                return role._id !== roleID;
              });
            }
          });
        }
        // deletes Employee from DB
      }, {
        key: "onDeleteEmployee",
        value: function onDeleteEmployee(id) {
          var _this12 = this;
          this.employeeService.deleteEmployee(id).subscribe(function (res) {
            if (res.status === 200) {
              _this12.employees = _this12.employees.filter(function (emp) {
                return emp._id !== id;
              });
            }
          });
        }
      }, {
        key: "_calculateAge",
        value: function _calculateAge(birthday) {
          if (birthday) {
            birthday = new Date(birthday);
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
          }
          return 0;
        }
        // opens add new Employee Modal
      }, {
        key: "onAddNew",
        value: function onAddNew() {
          this.modal.open(this.createModal, {
            size: 'lg'
          });
        }
      }, {
        key: "onAddNewRole",
        value: function onAddNewRole() {
          this.modal.open(this.createRoleModal, {
            size: 'lg'
          });
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.modal.dismissAll();
          this.getAllRoles();
          this.getEmployees();
        }
      }, {
        key: "save",
        value: function save(employee) {
          this.modal.dismissAll();
          this.employees.push(employee);
          console.log(employee);
        }
      }, {
        key: "onClickPage",
        value: function onClickPage() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          this.page = page;
          this.getEmployees();
        }
      }]);
      return ContactsComponent;
    }();
    /***/
  },
  /***/"./src/app/contacts/employee-service.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/contacts/employee-service.service.ts ***!
    \******************************************************/
  /*! exports provided: EmployeeServiceService */
  /***/
  function srcAppContactsEmployeeServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EmployeeServiceService", function () {
      return EmployeeServiceService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var EmployeeServiceService = /*#__PURE__*/function () {
      function EmployeeServiceService(httpClient) {
        _classCallCheck(this, EmployeeServiceService);
        this.httpClient = httpClient;
      }
      // creates a Role
      _createClass(EmployeeServiceService, [{
        key: "createRole",
        value: function createRole(value) {
          return this.httpClient.post("api/employee/createRole", value);
        }
        // gets All Roles
      }, {
        key: "getAllRoles",
        value: function getAllRoles() {
          return this.httpClient.get("api/employee/getAllRoles");
        }
        // deltes Roles
      }, {
        key: "deleteRole",
        value: function deleteRole(roleId) {
          return this.httpClient["delete"]("api/employee/role/".concat(roleId));
        }
        // Craetes Employee
      }, {
        key: "createEmployee",
        value: function createEmployee(value) {
          return this.httpClient.post("api/employee/createEmployee", value);
        }
        // Gets All Employees 
      }, {
        key: "getAllEmployees",
        value: function getAllEmployees(_ref) {
          var _ref$page = _ref.page,
            page = _ref$page === void 0 ? 0 : _ref$page,
            _ref$limit = _ref.limit,
            limit = _ref$limit === void 0 ? 10 : _ref$limit,
            _ref$searchQuery = _ref.searchQuery,
            searchQuery = _ref$searchQuery === void 0 ? null : _ref$searchQuery,
            _ref$role = _ref.role,
            role = _ref$role === void 0 ? null : _ref$role;
          var url = "api/employee?page=".concat(page, "&limit=").concat(limit);
          if (searchQuery) {
            url = url + "&searchQuery=".concat(searchQuery);
          }
          if (role) {
            url = url + "&role=".concat(role);
          }
          return this.httpClient.get(url);
        }
        // Deletes Employee
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(id) {
          return this.httpClient["delete"]("api/employee/".concat(id));
        }
      }]);
      return EmployeeServiceService;
    }();
    EmployeeServiceService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function EmployeeServiceService_Factory() {
        return new EmployeeServiceService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      },
      token: EmployeeServiceService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/core/core.component.css.shim.ngstyle.js":
  /*!*********************************************************!*\
    !*** ./src/app/core/core.component.css.shim.ngstyle.js ***!
    \*********************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppCoreCoreComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29yZS5jb21wb25lbnQuY3NzIn0= */"];

    /***/
  },

  /***/"./src/app/core/core.component.ngfactory.js":
  /*!**************************************************!*\
    !*** ./src/app/core/core.component.ngfactory.js ***!
    \**************************************************/
  /*! exports provided: RenderType_CoreComponent, View_CoreComponent_0, View_CoreComponent_Host_0, CoreComponentNgFactory */
  /***/
  function srcAppCoreCoreComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_CoreComponent", function () {
      return RenderType_CoreComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_CoreComponent_0", function () {
      return View_CoreComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_CoreComponent_Host_0", function () {
      return View_CoreComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CoreComponentNgFactory", function () {
      return CoreComponentNgFactory;
    });
    /* harmony import */
    var _core_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./core.component.css.shim.ngstyle */"./src/app/core/core.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../header/header.component.ngfactory */"./src/app/header/header.component.ngfactory.js");
    /* harmony import */
    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../header/header.component */"./src/app/header/header.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /* harmony import */
    var _inbox_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../inbox/chat.service */"./src/app/inbox/chat.service.ts");
    /* harmony import */
    var _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../shared/notification.service */"./src/app/shared/notification.service.ts");
    /* harmony import */
    var _shared_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../shared/search.service */"./src/app/shared/search.service.ts");
    /* harmony import */
    var _sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../sidebar/sidebar.component.ngfactory */"./src/app/sidebar/sidebar.component.ngfactory.js");
    /* harmony import */
    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../sidebar/sidebar.component */"./src/app/sidebar/sidebar.component.ts");
    /* harmony import */
    var _topbar_topbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../topbar/topbar.component.ngfactory */"./src/app/topbar/topbar.component.ngfactory.js");
    /* harmony import */
    var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ../topbar/topbar.component */"./src/app/topbar/topbar.component.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _core_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./core.component */"./src/app/core/core.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_CoreComponent = [_core_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_CoreComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_CoreComponent,
      data: {}
    });
    function View_CoreComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["id", "main-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-header", [], null, null, null, _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _inbox_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"], _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"], _shared_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-sidebar", [], null, null, null, _sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_SidebarComponent_0"], _sidebar_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_SidebarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "page-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "app-topbar", [], null, null, null, _topbar_topbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_TopbarComponent_0"], _topbar_topbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_TopbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__["TopbarComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 2, 0);
        _ck(_v, 4, 0);
        _ck(_v, 8, 0);
        _ck(_v, 10, 0);
      }, null);
    }
    function View_CoreComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-core", [], null, null, null, View_CoreComponent_0, RenderType_CoreComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _core_component__WEBPACK_IMPORTED_MODULE_14__["CoreComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var CoreComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-core", _core_component__WEBPACK_IMPORTED_MODULE_14__["CoreComponent"], View_CoreComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/core/core.component.ts":
  /*!****************************************!*\
    !*** ./src/app/core/core.component.ts ***!
    \****************************************/
  /*! exports provided: CoreComponent */
  /***/
  function srcAppCoreCoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CoreComponent", function () {
      return CoreComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CoreComponent = /*#__PURE__*/function () {
      function CoreComponent() {
        _classCallCheck(this, CoreComponent);
      }
      _createClass(CoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return CoreComponent;
    }();
    /***/
  },
  /***/"./src/app/create-hosRequest/create-hosRequest.component.css.shim.ngstyle.js":
  /*!***********************************************************************************!*\
    !*** ./src/app/create-hosRequest/create-hosRequest.component.css.shim.ngstyle.js ***!
    \***********************************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppCreateHosRequestCreateHosRequestComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = [".card-header[_ngcontent-%COMP%]{\n    background: white;\n}\n.capatalize-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    text-transform: capitalize;\n}\n.large-cta-section[_ngcontent-%COMP%] {\n  background: #1e9fc4 linear-gradient(45deg, #3e3ed0, #1e9fc4 57%, #4fddd5) repeat scroll 0 0;\n  box-shadow: 0 6px 12px -4px rgba(54, 56, 66, 0.25) inset;\n  text-align: center;\n  z-index: 1;\n  height: 300px;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.medium-large-wrapper[_ngcontent-%COMP%]{\n  padding-top: 50px;\n}\n.h2.large[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 5em;\n  font-family: \"Roboto\",sans-serif;\n}\n.white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.h2[_ngcontent-%COMP%]    > .yellow[_ngcontent-%COMP%] {\n  color: #f5ee33;\n  font-weight: 600;\n}\n.h3[_ngcontent-%COMP%] {\n  font-family: \"Roboto\",sans-serif;\n  font-size: 1.4em;\n  font-weight: 300;\n  line-height: 1.8rem;\n  margin-top: 10px;\n  margin-bottom: 40px;\n}\n@media (max-width:767px){\n  .large-cta-section[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .medium-large-wrapper[_ngcontent-%COMP%]{\n    padding-top: 30px;\n  }\n  .h2.large[_ngcontent-%COMP%] {\n    font-size: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWhvc1JlcXVlc3QvY3JlYXRlLWhvc1JlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7RUFDRSwyRkFBMkY7RUFDM0Ysd0RBQXdEO0VBQ3hELGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBR0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtaG9zUmVxdWVzdC9jcmVhdGUtaG9zUmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVye1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmNhcGF0YWxpemUtdGV4dCBpbnB1dHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmxhcmdlLWN0YS1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzFlOWZjNCBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzZTNlZDAsICMxZTlmYzQgNTclLCAjNGZkZGQ1KSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCAtNHB4IHJnYmEoNTQsIDU2LCA2NiwgMC4yNSkgaW5zZXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1lZGl1bS1sYXJnZS13cmFwcGVye1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5oMi5sYXJnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiA1ZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLHNhbnMtc2VyaWY7XG59XG4ud2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oMiA+IC55ZWxsb3cge1xuICBjb2xvcjogI2Y1ZWUzMztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5oMyB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xuICAubGFyZ2UtY3RhLXNlY3Rpb24ge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbiAgLm1lZGl1bS1sYXJnZS13cmFwcGVye1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG4gIC5oMi5sYXJnZSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gIH1cbn1cbiJdfQ== */"];

    /***/
  },

  /***/"./src/app/create-hosRequest/create-hosRequest.component.ngfactory.js":
  /*!****************************************************************************!*\
    !*** ./src/app/create-hosRequest/create-hosRequest.component.ngfactory.js ***!
    \****************************************************************************/
  /*! exports provided: RenderType_CreateHosRequestComponent, View_CreateHosRequestComponent_0, View_CreateHosRequestComponent_Host_0, CreateHosRequestComponentNgFactory */
  /***/
  function srcAppCreateHosRequestCreateHosRequestComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_CreateHosRequestComponent", function () {
      return RenderType_CreateHosRequestComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_CreateHosRequestComponent_0", function () {
      return View_CreateHosRequestComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_CreateHosRequestComponent_Host_0", function () {
      return View_CreateHosRequestComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CreateHosRequestComponentNgFactory", function () {
      return CreateHosRequestComponentNgFactory;
    });
    /* harmony import */
    var _create_hosRequest_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./create-hosRequest.component.css.shim.ngstyle */"./src/app/create-hosRequest/create-hosRequest.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _shared_directives_alphaspace_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../shared/directives/alphaspace.directive */"./src/app/shared/directives/alphaspace.directive.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _shared_directives_num_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../shared/directives/num.directive */"./src/app/shared/directives/num.directive.ts");
    /* harmony import */
    var _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../../node_modules/@kolkov/angular-editor/kolkov-angular-editor.ngfactory */"./node_modules/@kolkov/angular-editor/kolkov-angular-editor.ngfactory.js");
    /* harmony import */
    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @kolkov/angular-editor */"./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../shared/loader/loader.component.ngfactory */"./src/app/shared/loader/loader.component.ngfactory.js");
    /* harmony import */
    var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ../shared/loader/loader.component */"./src/app/shared/loader/loader.component.ts");
    /* harmony import */
    var _create_hosRequest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./create-hosRequest.component */"./src/app/create-hosRequest/create-hosRequest.component.ts");
    /* harmony import */
    var _request_hos_request_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ../request/hos-request.service */"./src/app/request/hos-request.service.ts");
    /* harmony import */
    var angular_notifier__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! angular-notifier */"./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */
    var _shared_notify_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ../shared/notify.service */"./src/app/shared/notify.service.ts");
    /* harmony import */
    var _shared_notification_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ../shared/notification.service */"./src/app/shared/notification.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_CreateHosRequestComponent = [_create_hosRequest_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_CreateHosRequestComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_CreateHosRequestComponent,
      data: {}
    });
    function View_CreateHosRequestComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Name is Required. "]))], null, null);
    }
    function View_CreateHosRequestComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Email is Required. "]))], null, null);
    }
    function View_CreateHosRequestComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Email must be a valid email address. "]))], null, null);
    }
    function View_CreateHosRequestComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Phone is Required. "]))], null, null);
    }
    function View_CreateHosRequestComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Phone Number's length is exceeded "]))], null, null);
    }
    function View_CreateHosRequestComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Address is Required. "]))], null, null);
    }
    function View_CreateHosRequestComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" City is Required. "]))], null, null);
    }
    function View_CreateHosRequestComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;
        _ck(_v, 1, 0, currVal_0);
        var currVal_1 = _v.context.$implicit;
        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit;
        _ck(_v, 3, 0, currVal_2);
      });
    }
    function View_CreateHosRequestComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" State is Required. "]))], null, null);
    }
    function View_CreateHosRequestComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Director Name is Required. "]))], null, null);
    }
    function View_CreateHosRequestComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Director Phone is Required. "]))], null, null);
    }
    function View_CreateHosRequestComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Phone Number's length is exceeded "]))], null, null);
    }
    function View_CreateHosRequestComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Staff Detail is required "]))], null, null);
    }
    function View_CreateHosRequestComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "small", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Cover letter is required "]))], null, null);
    }
    function View_CreateHosRequestComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 151, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "h5", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 149, "div", [["class", "form-material form-horizontal"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }
        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onReset() !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 67, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [["class", "col-md-12"], ["for", "example-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Hospital Name "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 9, "div", [["class", "col-md-12 capatalize-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "input", [["alphaspace", ""], ["class", "form-control"], ["formControlName", "name"], ["name", "example-text"], ["placeholder", "enter name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onKeydown($event) !== false;
          ad = pd_4 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _shared_directives_alphaspace_directive__WEBPACK_IMPORTED_MODULE_3__["AlphaspaceDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 13, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "label", [["class", "col-md-12"], ["for", "example-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["E-mail "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 10, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "email"], ["name", "example-text"], ["placeholder", "Enter  e-mail"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 14, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "label", [["class", "col-md-12"], ["for", "example-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hotline "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 11, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "phone"], ["name", "example-text"], ["num", ""], ["placeholder", "enter  number"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        if ("input" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).onInputChange($event) !== false;
          ad = pd_4 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _shared_directives_num_directive__WEBPACK_IMPORTED_MODULE_5__["NumDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "label", [["class", "col-md-12"], ["for", "example-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hospital Address "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 8, "div", [["class", "col-md-12 capatalize-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "address"], ["name", "example-text"], ["placeholder", "enter  Address"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "label", [["class", "col-md-12"], ["for", "example-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["City "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 9, "div", [["class", "col-md-12 capatalize-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 6, "input", [["alphaspace", ""], ["class", "form-control"], ["formControlName", "city"], ["name", "example-text"], ["placeholder", "enter  city"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "keydown"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).onKeydown($event) !== false;
          ad = pd_4 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 16384, null, 0, _shared_directives_alphaspace_directive__WEBPACK_IMPORTED_MODULE_3__["AlphaspaceDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 17, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 1, "label", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["State"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 14, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 11, "select", [["class", "form-control"], ["formControlName", "state"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onTouched() !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 3, "option", [["value", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select State"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 1, "label", [["class", "col-md-12"], ["for", "example-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Director Name "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 8, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "directorName"], ["name", "example-text"], ["placeholder", "enter  Director Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 14, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 1, "label", [["class", "col-md-12"], ["for", "example-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Director Phone "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 11, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 6, "input", [["class", "form-control"], ["formControlName", "directorPhone"], ["name", "example-text"], ["num", ""], ["placeholder", "Enter Director number"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 109)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 109).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 109)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 109)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        if ("input" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).onInputChange($event) !== false;
          ad = pd_4 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](114, 16384, null, 0, _shared_directives_num_directive__WEBPACK_IMPORTED_MODULE_5__["NumDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](116, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 1, "label", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Staff Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 9, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 6, "angular-editor", [["formControlName", "staffDetails"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "focus"]], function (_v, en, $event) {
        var ad = true;
        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 125).onFocus() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_AngularEditorComponent_0"], _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_AngularEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 4440064, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], [8, null]], {
        config: [0, "config"],
        placeholder: [1, "placeholder"]
      }, {
        focusEvent: "focus"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](127, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](129, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](131, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 1, "label", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cover Letter"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, null, 9, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 6, "angular-editor", [["formControlName", "coverLetter"]], [[1, "tabindex", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "focus"]], function (_v, en, $event) {
        var ad = true;
        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).onFocus() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_AngularEditorComponent_0"], _node_modules_kolkov_angular_editor_kolkov_angular_editor_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_AngularEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](138, 4440064, null, 0, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null], [8, null]], {
        config: [0, "config"]
      }, {
        focusEvent: "focus"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__["AngularEditorComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](140, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](142, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](144, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](145, 0, null, null, 6, "div", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 3, "button", [["class", "btn btn-dark waves-effect waves-light mr-2"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).onClick() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](147, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](148, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 1, "button", [["class", "btn btn-info waves-effect waves-light m-r-10"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onSave() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Submit"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.form;
        _ck(_v, 3, 0, currVal_7);
        var currVal_15 = "name";
        _ck(_v, 14, 0, currVal_15);
        var currVal_16 = _co.isFormSubmitted && _co.f.name.errors && _co.f.name.errors.required;
        _ck(_v, 19, 0, currVal_16);
        var currVal_24 = "email";
        _ck(_v, 27, 0, currVal_24);
        var currVal_25 = _co.isFormSubmitted && _co.f.email.errors && _co.f.email.errors.required;
        _ck(_v, 31, 0, currVal_25);
        var currVal_26 = _co.isFormSubmitted && _co.f.email.errors && _co.f.email.errors.email;
        _ck(_v, 33, 0, currVal_26);
        var currVal_34 = "phone";
        _ck(_v, 41, 0, currVal_34);
        var currVal_35 = _co.isFormSubmitted && _co.f.phone.errors && _co.f.phone.errors.required;
        _ck(_v, 46, 0, currVal_35);
        var currVal_36 = _co.isFormSubmitted && _co.f.phone.errors && (_co.f.phone.errors == null ? null : _co.f.phone.errors.maxlength);
        _ck(_v, 48, 0, currVal_36);
        var currVal_44 = "address";
        _ck(_v, 56, 0, currVal_44);
        var currVal_45 = _co.isFormSubmitted && _co.f.address.errors && _co.f.address.errors.required;
        _ck(_v, 60, 0, currVal_45);
        var currVal_53 = "city";
        _ck(_v, 68, 0, currVal_53);
        var currVal_54 = _co.isFormSubmitted && _co.f.city.errors && _co.f.city.errors.required;
        _ck(_v, 73, 0, currVal_54);
        var currVal_62 = "state";
        _ck(_v, 81, 0, currVal_62);
        var currVal_63 = "";
        _ck(_v, 85, 0, currVal_63);
        var currVal_64 = "";
        _ck(_v, 86, 0, currVal_64);
        var currVal_65 = _co.states;
        _ck(_v, 89, 0, currVal_65);
        var currVal_66 = _co.isFormSubmitted && _co.f.state.errors && _co.f.state.errors.required;
        _ck(_v, 91, 0, currVal_66);
        var currVal_74 = "directorName";
        _ck(_v, 99, 0, currVal_74);
        var currVal_75 = _co.isFormSubmitted && _co.f.directorName.errors && _co.f.directorName.errors.required;
        _ck(_v, 103, 0, currVal_75);
        var currVal_83 = "directorPhone";
        _ck(_v, 111, 0, currVal_83);
        var currVal_84 = _co.isFormSubmitted && _co.f.directorPhone.errors && _co.f.directorPhone.errors.required;
        _ck(_v, 116, 0, currVal_84);
        var currVal_85 = _co.isFormSubmitted && _co.f.directorPhone.errors && (_co.f.directorPhone.errors == null ? null : _co.f.directorPhone.errors.maxlength);
        _ck(_v, 118, 0, currVal_85);
        var currVal_94 = _co.editorConfig;
        var currVal_95 = "Enter your staff details i.e. No of patients & doctors";
        _ck(_v, 125, 0, currVal_94, currVal_95);
        var currVal_96 = "staffDetails";
        _ck(_v, 127, 0, currVal_96);
        var currVal_97 = _co.isFormSubmitted && _co.f.staffDetails.errors && _co.f.staffDetails.errors.required;
        _ck(_v, 131, 0, currVal_97);
        var currVal_106 = _co.editorConfig;
        _ck(_v, 138, 0, currVal_106);
        var currVal_107 = "coverLetter";
        _ck(_v, 140, 0, currVal_107);
        var currVal_108 = _co.isFormSubmitted && _co.f.coverLetter.errors && _co.f.coverLetter.errors.required;
        _ck(_v, 144, 0, currVal_108);
        var currVal_109 = _ck(_v, 148, 0, "/app/hospitals");
        _ck(_v, 147, 0, currVal_109);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassUntouched;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassTouched;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPristine;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassDirty;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassValid;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassInvalid;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ngClassPending;
        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched;
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine;
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty;
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending;
        _ck(_v, 11, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassUntouched;
        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassTouched;
        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPristine;
        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassDirty;
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassValid;
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassInvalid;
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPending;
        _ck(_v, 24, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);
        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassUntouched;
        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassTouched;
        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPristine;
        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassDirty;
        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassValid;
        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassInvalid;
        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPending;
        _ck(_v, 38, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33);
        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassUntouched;
        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassTouched;
        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPristine;
        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassDirty;
        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassValid;
        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassInvalid;
        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).ngClassPending;
        _ck(_v, 53, 0, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43);
        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassUntouched;
        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassTouched;
        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassPristine;
        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassDirty;
        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassValid;
        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassInvalid;
        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassPending;
        _ck(_v, 65, 0, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52);
        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).ngClassUntouched;
        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).ngClassTouched;
        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).ngClassPristine;
        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).ngClassDirty;
        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).ngClassValid;
        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).ngClassInvalid;
        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).ngClassPending;
        _ck(_v, 78, 0, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61);
        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassUntouched;
        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassTouched;
        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassPristine;
        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassDirty;
        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassValid;
        var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassInvalid;
        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).ngClassPending;
        _ck(_v, 96, 0, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73);
        var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassUntouched;
        var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassTouched;
        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassPristine;
        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassDirty;
        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassValid;
        var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassInvalid;
        var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).ngClassPending;
        _ck(_v, 108, 0, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82);
        var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 125).tabindex;
        var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassUntouched;
        var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassTouched;
        var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassPristine;
        var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassDirty;
        var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassValid;
        var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassInvalid;
        var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).ngClassPending;
        _ck(_v, 123, 0, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93);
        var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).tabindex;
        var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).ngClassUntouched;
        var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).ngClassTouched;
        var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).ngClassPristine;
        var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).ngClassDirty;
        var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).ngClassValid;
        var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).ngClassInvalid;
        var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 142).ngClassPending;
        _ck(_v, 136, 0, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105);
      });
    }
    function View_CreateHosRequestComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "loader", [], null, null, null, _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_Loader_0"], _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_Loader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["Loader"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    function View_CreateHosRequestComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "section", [["class", "large-cta-section skrollable skrollable-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "div", [["class", "medium-large-wrapper skrollable skrollable-after"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 12, "div", [["class", "medium-text-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "h2", [["class", "h2 large white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Get started "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "yellow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["today"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h3", [["class", "h3 white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fill Your Information Now to join us today. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "a", [["class", "text-white"], ["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, "img", [["alt", ""], ["height", "40"], ["src", "../assets/logo.png"], ["width", "50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Med"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "span", [["class", "font-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fest"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CreateHosRequestComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.isLoader;
        _ck(_v, 18, 0, currVal_0);
        var currVal_1 = _co.isLoader;
        _ck(_v, 20, 0, currVal_1);
      }, null);
    }
    function View_CreateHosRequestComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-create-hosRequest", [], null, null, null, View_CreateHosRequestComponent_0, RenderType_CreateHosRequestComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _create_hosRequest_component__WEBPACK_IMPORTED_MODULE_13__["CreateHosRequestComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _request_hos_request_service__WEBPACK_IMPORTED_MODULE_14__["HosRequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], angular_notifier__WEBPACK_IMPORTED_MODULE_15__["NotifierService"], _shared_notify_service__WEBPACK_IMPORTED_MODULE_16__["NotifyService"], _shared_notification_service__WEBPACK_IMPORTED_MODULE_17__["NotificationService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var CreateHosRequestComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-create-hosRequest", _create_hosRequest_component__WEBPACK_IMPORTED_MODULE_13__["CreateHosRequestComponent"], View_CreateHosRequestComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/create-hosRequest/create-hosRequest.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/create-hosRequest/create-hosRequest.component.ts ***!
    \******************************************************************/
  /*! exports provided: CreateHosRequestComponent */
  /***/
  function srcAppCreateHosRequestCreateHosRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CreateHosRequestComponent", function () {
      return CreateHosRequestComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _constants_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../_constants/states */"./src/app/_constants/states.ts");
    var CreateHosRequestComponent = /*#__PURE__*/function () {
      function CreateHosRequestComponent(formBuilder, hosRequestService, router, notifier, notifyService, notificationService) {
        _classCallCheck(this, CreateHosRequestComponent);
        this.formBuilder = formBuilder;
        this.hosRequestService = hosRequestService;
        this.router = router;
        this.notifier = notifier;
        this.notifyService = notifyService;
        this.notificationService = notificationService;
        this.isLoader = false;
        this.isFormSubmitted = false;
        this.states = _constants_states__WEBPACK_IMPORTED_MODULE_3__["states"];
        this.isEdit = false;
        this.editorConfig = {
          editable: true,
          spellcheck: true,
          height: '15rem',
          minHeight: '5rem',
          maxHeight: '15rem',
          width: 'auto',
          minWidth: '0',
          translate: 'yes',
          enableToolbar: true,
          showToolbar: true,
          placeholder: 'Enter text here...',
          defaultParagraphSeparator: '',
          defaultFontName: '',
          defaultFontSize: '',
          fonts: [{
            "class": 'arial',
            name: 'Arial'
          }, {
            "class": 'times-new-roman',
            name: 'Times New Roman'
          }, {
            "class": 'calibri',
            name: 'Calibri'
          }, {
            "class": 'comic-sans-ms',
            name: 'Comic Sans MS'
          }],
          customClasses: [{
            name: 'quote',
            "class": 'quote'
          }, {
            name: 'redText',
            "class": 'redText'
          }, {
            name: 'titleText',
            "class": 'titleText',
            tag: 'h1'
          }],
          uploadUrl: 'v1/image',
          uploadWithCredentials: false,
          sanitize: true,
          toolbarPosition: 'top',
          toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']]
        };
      }
      _createClass(CreateHosRequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
          this.getAdmin();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            address: [''],
            city: [''],
            state: [''],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]],
            coverLetter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            staffDetails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            directorName: [''],
            directorPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this13 = this;
          this.isFormSubmitted = true;
          if (this.form.invalid) {
            return;
          }
          console.log(this.form.value);
          this.hosRequestService.post(this.form.value).subscribe(function (response) {
            console.log(response);
            if (+response.status === 200) {
              _this13.notifyService.success('Hospital Request Submitted Successfully.');
              _this13.sendNotification();
              _this13.router.navigate(['/success']);
            }
          }, function (err) {
            console.log(err);
            if (err.status === 409) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                title: '',
                text: err.error.data.msg
              });
            }
            if (err.status === 500) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                icon: 'error',
                title: '',
                text: 'Server Error'
              });
            }
          });
        }
      }, {
        key: "sendNotification",
        value: function sendNotification() {
          var notObj = {
            createdBy: 'Public Request',
            description: 'Hospital Request is received',
            category: 6,
            sentTo: [this.adminID]
          };
          this.notificationService.sendHosRequestNotification(notObj);
        }
        // Shows Notifications
      }, {
        key: "showNotification",
        value: function showNotification(type, message) {
          this.notifier.notify(type, message);
        }
        // gets admin ID form DB
        // used to send notification to admin
      }, {
        key: "getAdmin",
        value: function getAdmin() {
          var _this14 = this;
          this.hosRequestService.getAdminID().subscribe(function (res) {
            if (+res.status === 200) {
              _this14.adminID = res.body.data;
            }
          });
        }
      }]);
      return CreateHosRequestComponent;
    }();
    /***/
  },
  /***/"./src/app/dashboard/dashboard.component.css.shim.ngstyle.js":
  /*!*******************************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css.shim.ngstyle.js ***!
    \*******************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppDashboardDashboardComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["tr[_ngcontent-%COMP%]:hover{\n    background: #F1F1F2;   \n    cursor: pointer; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0cjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjRjFGMUYyOyAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59Il19 */"];

    /***/
  },

  /***/"./src/app/dashboard/dashboard.component.ngfactory.js":
  /*!************************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ngfactory.js ***!
    \************************************************************/
  /*! exports provided: RenderType_DashboardComponent, View_DashboardComponent_0, View_DashboardComponent_Host_0, DashboardComponentNgFactory */
  /***/
  function srcAppDashboardDashboardComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_DashboardComponent", function () {
      return RenderType_DashboardComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_0", function () {
      return View_DashboardComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_Host_0", function () {
      return View_DashboardComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DashboardComponentNgFactory", function () {
      return DashboardComponentNgFactory;
    });
    /* harmony import */
    var _dashboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./dashboard.component.css.shim.ngstyle */"./src/app/dashboard/dashboard.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ng2-charts */"./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/loader/loader.component.ngfactory */"./src/app/shared/loader/loader.component.ngfactory.js");
    /* harmony import */
    var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../shared/loader/loader.component */"./src/app/shared/loader/loader.component.ts");
    /* harmony import */
    var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./dashboard.component */"./src/app/dashboard/dashboard.component.ts");
    /* harmony import */
    var _dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./dashboard.service */"./src/app/dashboard/dashboard.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_DashboardComponent = [_dashboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_DashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_DashboardComponent,
      data: {}
    });
    function View_DashboardComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "h5", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "small", [["class", "float-right text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hospitals"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["style", "display: block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["id", "chart-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, [[1, 0], ["myCanvas", 1]], null, 1, "canvas", [["baseChart", ""], ["id", "canvas"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]], {
        datasets: [0, "datasets"],
        labels: [1, "labels"],
        options: [2, "options"],
        chartType: [3, "chartType"],
        colors: [4, "colors"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.hosChartData;
        var currVal_1 = _co.chartLabels;
        var currVal_2 = _co.chartOptions;
        var currVal_3 = _co.chartType;
        var currVal_4 = _co.chartColors1;
        _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
      }, null);
    }
    function View_DashboardComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "h5", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "small", [["class", "float-right text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Doctors"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["style", "display: block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["id", "chart-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, [[1, 0], ["myCanvas", 1]], null, 1, "canvas", [["baseChart", ""], ["id", "canvas"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]], {
        datasets: [0, "datasets"],
        labels: [1, "labels"],
        options: [2, "options"],
        chartType: [3, "chartType"],
        colors: [4, "colors"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.docChartData;
        var currVal_1 = _co.chartLabels;
        var currVal_2 = _co.chartOptions;
        var currVal_3 = _co.chartType;
        var currVal_4 = _co.chartColors;
        _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
      }, null);
    }
    function View_DashboardComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "h5", [["class", "card-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "small", [["class", "float-right text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Patients"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "div", [["style", "display: block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["id", "chart-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, [[1, 0], ["myCanvas", 1]], null, 1, "canvas", [["baseChart", ""], ["id", "canvas"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 999424, null, 0, ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]], {
        datasets: [0, "datasets"],
        labels: [1, "labels"],
        options: [2, "options"],
        chartType: [3, "chartType"],
        colors: [4, "colors"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.patientChartData;
        var currVal_1 = _co.chartLabels;
        var currVal_2 = _co.chartOptions;
        var currVal_3 = _co.chartType;
        var currVal_4 = _co.chartColors2;
        _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
      }, null);
    }
    function View_DashboardComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "tr", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.gotoHospitalProfile(_v.context.$implicit._id) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.index + 1;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.name;
        _ck(_v, 4, 0, currVal_1);
        var currVal_2 = _v.context.$implicit.state;
        _ck(_v, 6, 0, currVal_2);
        var currVal_3 = _v.context.$implicit.username;
        _ck(_v, 8, 0, currVal_3);
        var currVal_4 = _v.context.$implicit.phone;
        _ck(_v, 10, 0, currVal_4);
      });
    }
    function View_DashboardComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 80, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 44, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "col-lg-3 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 8, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "div", [["class", "d-flex no-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "round align-self-center round-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-hospital-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "m-l-10 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h3", [["class", "m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "h5", [["class", "text-muted m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hospitals"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "div", [["class", "col-lg-3 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 8, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 7, "div", [["class", "d-flex no-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "div", [["class", "round align-self-center round-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "i", [["class", "fa fa-user-md"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "div", [["class", "m-l-10 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "h3", [["class", "m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "h5", [["class", "text-muted m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Doctors"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 10, "div", [["class", "col-lg-3 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 8, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 7, "div", [["class", "d-flex no-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "div", [["class", "round align-self-center round-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "i", [["class", "fa fa-users"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 4, "div", [["class", "m-l-10 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "h3", [["class", "m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "h5", [["class", "text-muted m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Patients"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 10, "div", [["class", "col-lg-3 col-md-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 9, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 8, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 7, "div", [["class", "d-flex no-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "div", [["class", "round align-self-center round-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 0, "i", [["class", "fa fa-question"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 4, "div", [["class", "m-l-10 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "h3", [["class", "m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](43, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "h5", [["class", "text-muted m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Requests"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 2, "div", [["class", "col-md-4 col-sm-12 col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DashboardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "div", [["class", "col-md-4 col-sm-12 col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DashboardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 2, "div", [["class", "col-md-4 col-sm-12 col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DashboardComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 24, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 23, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 22, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 21, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "h5", [["class", "card-title m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New Hospital List"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Recent Hospitals added in this month"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 16, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 15, "table", [["class", "table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 11, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["#"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["State"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Medfest ID"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hotline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DashboardComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_4 = _co.ishosChartLoaded;
        _ck(_v, 49, 0, currVal_4);
        var currVal_5 = _co.isdocChartLoaded;
        _ck(_v, 52, 0, currVal_5);
        var currVal_6 = _co.isPatientChartLoaded;
        _ck(_v, 55, 0, currVal_6);
        var currVal_7 = _co.hospitals;
        _ck(_v, 80, 0, currVal_7);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.hospitalCount;
        _ck(_v, 10, 0, currVal_0);
        var currVal_1 = _co.doctorCount;
        _ck(_v, 21, 0, currVal_1);
        var currVal_2 = _co.patientCount;
        _ck(_v, 32, 0, currVal_2);
        var currVal_3 = _co.requestCount;
        _ck(_v, 43, 0, currVal_3);
      });
    }
    function View_DashboardComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "loader", [], null, null, null, _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_Loader_0"], _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_Loader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["Loader"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    function View_DashboardComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        canvas: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DashboardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_DashboardComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.isLoader;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _co.isLoader;
        _ck(_v, 4, 0, currVal_1);
      }, null);
    }
    function View_DashboardComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], [_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var DashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-dashboard", _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], View_DashboardComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/
  /*! exports provided: DashboardComponent */
  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dashboardService, router) {
        _classCallCheck(this, DashboardComponent);
        this.dashboardService = dashboardService;
        this.router = router;
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.isLoader = false;
        this.patientCount = 0;
        this.hospitalCount = 0;
        this.doctorCount = 0;
        this.hospitals = [];
        this.requestCount = 0;
        this.chartType = 'line';
        this.docChartCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.isdocChartLoaded = false;
        this.hosChartCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.ishosChartLoaded = false;
        this.patientChartCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.isPatientChartLoaded = false;
      }
      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chartLabels = this.months;
          this.chartOptions = {
            responsive: true
          };
          this.patientChartData = [{
            data: this.patientChartCount,
            label: 'Patients',
            fill: true
          }];
          this.hosChartData = [{
            data: this.hosChartCount,
            label: 'Hospitals',
            fill: true
          }];
          this.docChartData = [{
            data: this.docChartCount,
            label: 'Doctors',
            fill: true
          }];
          this.getData();
          this.patientGraphData();
          this.hosGraphData();
          this.docGraphData();
          this.chartColors = [{
            backgroundColor: 'rgb(250,125,180)',
            borderColor: '105,159,177,1'
          }];
          this.chartColors1 = [{
            backgroundColor: 'rgb(99,216,252)',
            borderColor: '153, 250, 166,1'
          }];
          this.chartColors2 = [{
            backgroundColor: 'rgb(153, 250, 166)',
            borderColor: '105,159,177,1'
          }];
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this15 = this;
          this.isLoader = true;
          this.dashboardService.getDashboard().subscribe(function (res) {
            if (res.status == '200') {
              _this15.isLoader = false;
              _this15.patientCount = res.data.patient;
              _this15.doctorCount = res.data.doctor;
              _this15.hospitalCount = res.data.hospital;
              _this15.requestCount = res.data.request;
              _this15.hospitals = res.data.hospitals;
            }
          });
        }
      }, {
        key: "gotoHospitalProfile",
        value: function gotoHospitalProfile(id) {
          this.router.navigate(["app/hospitals/profile/".concat(id)]);
        }
        // events
      }, {
        key: "chartClicked",
        value: function chartClicked(e) {
          // console.log(e);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {
          // console.log(e);
        }
      }, {
        key: "patientGraphData",
        value: function patientGraphData() {
          var _this16 = this;
          this.isLoader = true;
          this.isPatientChartLoaded = false;
          this.dashboardService.getAdminPatientGraphData().subscribe(function (res) {
            _this16.isLoader = false;
            if (+res.status === 200) {
              for (var i = 0; i < res.data.length; i++) {
                _this16.patientChartCount[res.data[i]._id.month - 1] = res.data[i].count;
              }
              _this16.isPatientChartLoaded = true;
            }
          });
        }
      }, {
        key: "hosGraphData",
        value: function hosGraphData() {
          var _this17 = this;
          this.isLoader = true;
          this.ishosChartLoaded = false;
          this.dashboardService.getAdminHospitalGraphData().subscribe(function (res) {
            _this17.isLoader = false;
            if (+res.status === 200) {
              for (var i = 0; i < res.data.length; i++) {
                _this17.hosChartCount[res.data[i]._id.month - 1] = res.data[i].count;
              }
              _this17.ishosChartLoaded = true;
            }
          });
        }
      }, {
        key: "docGraphData",
        value: function docGraphData() {
          var _this18 = this;
          this.isLoader = true;
          this.isdocChartLoaded = false;
          this.dashboardService.getAdminDoctorGraphData().subscribe(function (res) {
            _this18.isLoader = false;
            if (+res.status === 200) {
              for (var i = 0; i < res.data.length; i++) {
                _this18.docChartCount[res.data[i]._id.month - 1] = res.data[i].count;
              }
              _this18.isdocChartLoaded = true;
            }
          });
        }
      }]);
      return DashboardComponent;
    }();
    /***/
  },
  /***/"./src/app/dashboard/dashboard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/dashboard/dashboard.service.ts ***!
    \************************************************/
  /*! exports provided: DashboardService */
  /***/
  function srcAppDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(httpClient, authService) {
        _classCallCheck(this, DashboardService);
        this.httpClient = httpClient;
        this.authService = authService;
      }
      _createClass(DashboardService, [{
        key: "getDashboard",
        value: function getDashboard() {
          return this.httpClient.get('api/dashboard/admin');
        }
      }, {
        key: "getHospitalDashboard",
        value: function getHospitalDashboard() {
          return this.httpClient.get('api/dashboard/hospital');
        }
      }, {
        key: "getDoctorDashboard",
        value: function getDoctorDashboard() {
          return this.httpClient.get('api/dashboard/doctor');
        }
      }, {
        key: "getPatientDashboard",
        value: function getPatientDashboard() {
          return this.httpClient.get('api/dashboard/patient');
        }
      }, {
        key: "getLabAttendantDashboard",
        value: function getLabAttendantDashboard() {
          return this.httpClient.get('api/dashboard/labAttendant');
        }
      }, {
        key: "getFDODashBoard",
        value: function getFDODashBoard() {
          return this.httpClient.get('api/dashboard/fdo');
        }
      }, {
        key: "getPharmacyDashBoard",
        value: function getPharmacyDashBoard() {
          return this.httpClient.get('api/dashboard/pharmacy');
        }
      }, {
        key: "getPatientGraphData",
        value: function getPatientGraphData() {
          return this.httpClient.get("api/graph/patientGraphData");
        }
      }, {
        key: "getAppointmentGraphData",
        value: function getAppointmentGraphData() {
          return this.httpClient.get("api/graph/appointmentGraphData");
        }
      }, {
        key: "getPaymentGraphData",
        value: function getPaymentGraphData() {
          return this.httpClient.get("api/graph/paymentsGraphData");
        }
      }, {
        key: "getAdminHospitalGraphData",
        value: function getAdminHospitalGraphData() {
          return this.httpClient.get("api/graph/adminHopitalGraphData");
        }
      }, {
        key: "getAdminPatientGraphData",
        value: function getAdminPatientGraphData() {
          return this.httpClient.get("api/graph/adminPatientGraphData");
        }
      }, {
        key: "getAdminDoctorGraphData",
        value: function getAdminDoctorGraphData() {
          return this.httpClient.get("api/graph/adminDoctorGraphData");
        }
      }, {
        key: "getFirstTimePatients",
        value: function getFirstTimePatients() {
          return this.httpClient.get("api/graph/adminDoctorGraphData");
        }
      }]);
      return DashboardService;
    }();
    DashboardService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function DashboardService_Factory() {
        return new DashboardService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      },
      token: DashboardService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/forgot-password/forgot-password.component.css.shim.ngstyle.js":
  /*!*******************************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.css.shim.ngstyle.js ***!
    \*******************************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppForgotPasswordForgotPasswordComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);\n\n\n\n\n.login-register[_ngcontent-%COMP%] {\n  \n  height: 100%;\n  width: 100%;\n  padding: 10% 0;\n  position: fixed;\n }\n.login-box[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto; }\n.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 30px; }\n#recoverform[_ngcontent-%COMP%] {\n  display: none; }\n.login-sidebar[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-top: 0px; }\n.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\n    right: 0px;\n    position: absolute;\n    height: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxnRkFBZ0Y7QUFOaEY7Ozs7O0NBS0M7QUFFRCxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7QUFDRjs7a0JBRWtCO0FBQ2xCO0VBQ0U7O3VDQUVxQztFQUNyQyxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFFO0FBQ2hCO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVLEVBQUU7QUFDZDtJQUNFLGNBQWM7SUFDZCxtQkFBbUIsRUFBRTtBQUV6QjtFQUNFLGFBQWEsRUFBRTtBQUVqQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUU7QUFDakI7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVksRUFBRSIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UZW1wbGF0ZSBOYW1lOiBBZG1pbiBUZW1wbGF0ZVxuQXV0aG9yOiBXcmFwcGl4ZWxcblxuRmlsZTogc2Nzc1xuKi9cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDApO1xuLypUaGVtZSBDb2xvcnMqL1xuLyoqXG4gKiBUYWJsZSBPZiBDb250ZW50XG4gKlxuICogXHQxLiBDb2xvciBzeXN0ZW1cbiAqXHQyLiBPcHRpb25zXG4gKlx0My4gQm9keVxuICpcdDQuIFR5cG9ncmFwaHlcbiAqXHQ1LiBCcmVhZGNydW1ic1xuICpcdDYuIENhcmRzXG4gKlx0Ny4gRHJvcGRvd25zXG4gKlx0OC4gQnV0dG9uc1xuICpcdDkuIFR5cG9ncmFwaHlcbiAqXHQxMC4gUHJvZ3Jlc3MgYmFyc1xuICpcdDExLiBUYWJsZXNcbiAqXHQxMi4gRm9ybXNcbiAqXHQxNC4gQ29tcG9uZW50XG4gKi9cbi8qKioqKioqKioqKioqKioqKioqXG5Mb2dpbiByZWdpc3RlciBhbmQgcmVjb3ZlciBwYXNzd29yZCBQYWdlXG4qKioqKioqKioqKioqKioqKiovXG4ubG9naW4tcmVnaXN0ZXIge1xuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMCUgMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuIH1cblxuLmxvZ2luLWJveCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87IH1cbiAgLmxvZ2luLWJveCAuZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDsgfVxuICAubG9naW4tYm94IC5zb2NpYWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuI3JlY292ZXJmb3JtIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ubG9naW4tc2lkZWJhciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4OyB9XG4gIC5sb2dpbi1zaWRlYmFyIC5sb2dpbi1ib3gge1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTsgfVxuIl19 */"];

    /***/
  },

  /***/"./src/app/forgot-password/forgot-password.component.ngfactory.js":
  /*!************************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.ngfactory.js ***!
    \************************************************************************/
  /*! exports provided: RenderType_ForgotPasswordComponent, View_ForgotPasswordComponent_0, View_ForgotPasswordComponent_Host_0, ForgotPasswordComponentNgFactory */
  /***/
  function srcAppForgotPasswordForgotPasswordComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_ForgotPasswordComponent", function () {
      return RenderType_ForgotPasswordComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_ForgotPasswordComponent_0", function () {
      return View_ForgotPasswordComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_ForgotPasswordComponent_Host_0", function () {
      return View_ForgotPasswordComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponentNgFactory", function () {
      return ForgotPasswordComponentNgFactory;
    });
    /* harmony import */
    var _forgot_password_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./forgot-password.component.css.shim.ngstyle */"./src/app/forgot-password/forgot-password.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../loader/loader.component.ngfactory */"./src/app/loader/loader.component.ngfactory.js");
    /* harmony import */
    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../loader/loader.component */"./src/app/loader/loader.component.ts");
    /* harmony import */
    var _shared_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/loader.service */"./src/app/shared/loader.service.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../shared/errors/errors.component.ngfactory */"./src/app/shared/errors/errors.component.ngfactory.js");
    /* harmony import */
    var _shared_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../shared/errors/errors.component */"./src/app/shared/errors/errors.component.ts");
    /* harmony import */
    var _forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./forgot-password.component */"./src/app/forgot-password/forgot-password.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_ForgotPasswordComponent = [_forgot_password_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_ForgotPasswordComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ForgotPasswordComponent,
      data: {}
    });
    function View_ForgotPasswordComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "text-center invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.error;
        _ck(_v, 1, 0, currVal_0);
      });
    }
    function View_ForgotPasswordComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loader", [], null, null, null, _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LoaderComponent_0"], _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], [_shared_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    function View_ForgotPasswordComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "section", [["id", "wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 24, "div", [["class", "login-register"], ["style", "background-image:url(./assets/images/background/login-register.jpg);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 23, "div", [["class", "login-box card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 22, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 21, "div", [["class", "form-horizontal form-material"], ["id", "loginform"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup.enter"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }
        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false;
          ad = pd_1 && ad;
        }
        if ("keyup.enter" === en) {
          var pd_2 = _co.onSubmit() !== false;
          ad = pd_2 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h3", [["class", "text-center m-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Forgot Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 11, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ForgotPasswordComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "email"], ["placeholder", "Email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "app-errors", [], null, null, null, _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ErrorsComponent_0"], _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ErrorsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _shared_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__["ErrorsComponent"], [], {
        form_control: [0, "form_control"],
        isSubmitted: [1, "isSubmitted"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 3, "div", [["class", "form-group text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "div", [["class", "col-xs-12 p-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "button", [["class", "btn btn-block btn-lg btn-info btn-rounded"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onSubmit() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Send Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ForgotPasswordComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.form;
        _ck(_v, 5, 0, currVal_7);
        var currVal_8 = _co.error;
        _ck(_v, 12, 0, currVal_8);
        var currVal_16 = "email";
        _ck(_v, 17, 0, currVal_16);
        var currVal_17 = _co.f.email;
        var currVal_18 = _co.submitted;
        _ck(_v, 21, 0, currVal_17, currVal_18);
        var currVal_19 = _co.isloading;
        _ck(_v, 27, 0, currVal_19);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending;
        _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched;
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched;
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine;
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid;
        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending;
        _ck(_v, 14, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);
      });
    }
    function View_ForgotPasswordComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-forgot-password", [], null, null, null, View_ForgotPasswordComponent_0, RenderType_ForgotPasswordComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _shared_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var ForgotPasswordComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-forgot-password", _forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], View_ForgotPasswordComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/forgot-password/forgot-password.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/forgot-password/forgot-password.component.ts ***!
    \**************************************************************/
  /*! exports provided: ForgotPasswordComponent */
  /***/
  function srcAppForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(router, route, loader, formBuilder, authService) {
        _classCallCheck(this, ForgotPasswordComponent);
        this.router = router;
        this.route = route;
        this.loader = loader;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.error = null;
        this.loading = false;
        this.submitted = false;
        this.isloading = false;
      }
      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // redirect to home if already logged in
          if (this.authService.currentUserValue) {
            this.router.navigate(['/app']);
          }
          this.create();
        }
      }, {
        key: "create",
        value: function create() {
          this.form = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
          });
        }
        // convenience getter for easy access to form fields
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this19 = this;
          this.submitted = true;
          if (this.form.invalid) {
            return;
          }
          this.isloading = true;
          this.authService.forgot(this.form.value).subscribe(function (res) {
            _this19.isloading = false;
            // console.log(res);
            if (res.status === 200) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('An email with password reset Link has sent to your Email');
              _this19.router.navigate(['/login']);
            } else if (res.status === 204) {
              _this19.error = 'Email does not exist';
              _this19.submitted = false;
            }
          }, function (err) {
            // console.log(err);
            _this19.isloading = false;
            _this19.error = err.error.errors;
          });
        }
      }]);
      return ForgotPasswordComponent;
    }();
    /***/
  },
  /***/"./src/app/header/header.component.css.shim.ngstyle.js":
  /*!*************************************************************!*\
    !*** ./src/app/header/header.component.css.shim.ngstyle.js ***!
    \*************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppHeaderHeaderComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = [".app-search[_ngcontent-%COMP%]{\n  position: relative;\n}\n.app-search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n  position: absolute;\n  left: 10px;\n  top: 24px;\n}\n.app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding: 6px 30px;\n}\n.message-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  height: 40px !important;\n}\n.message-center[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  height: 100% !important;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.scroll[_ngcontent-%COMP%] {\n    max-height: 410px !important;\n    overflow-y: auto !important;\n    \n    border-radius: 30px;\n\n  }\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 8px;\n  }\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background: rgb(212, 203, 203);\n  }\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #727272;\n    border-radius: 10px;\n  }\n.profile-img[_ngcontent-%COMP%]{\n    height: 30px;\n    width: 30px;\n  }\n.profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    height: 100%;\n    width: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n    border: 1px solid lightgray;\n  }\n@media (max-width: 1023px){\n  .d-flex[_ngcontent-%COMP%] {\n      display: flex !important;\n  }\n}\n@media (max-width: 767px){\n  .profile-img[_ngcontent-%COMP%]{\n    margin-right: 10px;\n  }\n  .hidden-xs[_ngcontent-%COMP%]{\n    display: none !important;\n  }\n  .app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding: 6px 26px !important;\n    width: 40px;\n  }\n  .app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    width: 100% !important;\n}\n.app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::-moz-placeholder{\n        font-size: 12px !important;\n}\n.app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{\n        font-size: 12px !important;\n}\n.topbar[_ngcontent-%COMP%]   .top-navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] > .nav-item[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBbUI7S0FBbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixtQkFBbUI7O0VBRXJCO0FBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQW1CO09BQW5CLG1CQUFtQjtJQUNuQiwyQkFBMkI7RUFDN0I7QUFDQTtFQUNBO01BQ0ksd0JBQXdCO0VBQzVCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixXQUFXO0VBQ2I7RUFDQTtJQUNFLHNCQUFzQjtBQUMxQjtBQUNBO1FBQ1EsMEJBQTBCO0FBQ2xDO0FBRkE7UUFDUSwwQkFBMEI7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNlYXJjaHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFwcC1zZWFyY2ggaXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDI0cHg7XG59XG4uYXBwLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZzogNnB4IDMwcHg7XG59XG4ubWVzc2FnZS1jZW50ZXIgYSAudXNlci1pbWcge1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbi5tZXNzYWdlLWNlbnRlciBhIC51c2VyLWltZyBpbWd7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnNjcm9sbCB7XG4gICAgbWF4LWhlaWdodDogNDEwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cbiAgfVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjEyLCAyMDMsIDIwMyk7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzI3MjcyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLnByb2ZpbGUtaW1ne1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxuICAucHJvZmlsZS1pbWcgaW1ne1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KXtcbiAgLmQtZmxleCB7XG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XG4gIC5wcm9maWxlLWltZ3tcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmhpZGRlbi14c3tcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFwcC1zZWFyY2ggLmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZzogNnB4IDI2cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxuICAuYXBwLXNlYXJjaCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmFwcC1zZWFyY2ggLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLnRvcGJhciAudG9wLW5hdmJhciAubmF2YmFyLW5hdj4ubmF2LWl0ZW0+Lm5hdi1saW5rIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4XG59XG59XG4iXX0= */"];

    /***/
  },

  /***/"./src/app/header/header.component.ngfactory.js":
  /*!******************************************************!*\
    !*** ./src/app/header/header.component.ngfactory.js ***!
    \******************************************************/
  /*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
  /***/
  function srcAppHeaderHeaderComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function () {
      return RenderType_HeaderComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function () {
      return View_HeaderComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function () {
      return View_HeaderComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function () {
      return HeaderComponentNgFactory;
    });
    /* harmony import */
    var _header_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./header.component.css.shim.ngstyle */"./src/app/header/header.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _shared_pipes_image_src_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/pipes/image-src.pipe */"./src/app/shared/pipes/image-src.pipe.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./header.component */"./src/app/header/header.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /* harmony import */
    var _inbox_chat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../inbox/chat.service */"./src/app/inbox/chat.service.ts");
    /* harmony import */
    var _shared_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../shared/notification.service */"./src/app/shared/notification.service.ts");
    /* harmony import */
    var _shared_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../shared/search.service */"./src/app/shared/search.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_HeaderComponent = [_header_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_HeaderComponent,
      data: {}
    });
    function View_HeaderComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "hidden-xs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Med"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "font-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fest"]))], null, null);
    }
    function View_HeaderComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "a", [["class", "dropdown-item dropdown-item"], ["ngbDropdownItem", ""]], [[2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.selectUser(_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[3, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " -- ", ""]))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled;
        _ck(_v, 0, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.username;
        var currVal_2 = _v.context.$implicit.name;
        _ck(_v, 2, 0, currVal_1, currVal_2);
      });
    }
    function View_HeaderComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "dropdown-menu"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], [[null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Enter"], [null, "keydown.Space"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"]], function (_v, en, $event) {
        var ad = true;
        if ("keydown.ArrowUp" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dropdown.onKeyDown($event) !== false;
          ad = pd_0 && ad;
        }
        if ("keydown.ArrowDown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dropdown.onKeyDown($event) !== false;
          ad = pd_1 && ad;
        }
        if ("keydown.Home" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dropdown.onKeyDown($event) !== false;
          ad = pd_2 && ad;
        }
        if ("keydown.End" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dropdown.onKeyDown($event) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown.Enter" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dropdown.onKeyDown($event) !== false;
          ad = pd_4 && ad;
        }
        if ("keydown.Space" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dropdown.onKeyDown($event) !== false;
          ad = pd_5 && ad;
        }
        if ("keydown.Tab" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dropdown.onKeyDown($event) !== false;
          ad = pd_6 && ad;
        }
        if ("keydown.Shift.Tab" === en) {
          var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dropdown.onKeyDown($event) !== false;
          ad = pd_7 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[1, 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        menuItems: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = _co.users;
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = true;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).dropdown.isOpen();
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).placement;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }
    function View_HeaderComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "notify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "span", [["class", "heartbit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "point"]], null, null, null, null, null))], null, null);
    }
    function View_HeaderComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "message-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No Notifications "]))], null, null);
    }
    function View_HeaderComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "user-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "user"], ["class", "img-circle"], ["src", "../../assets/images/users/user.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "profile-status online pull-right"]], null, null, null, null, null))], null, null);
    }
    function View_HeaderComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "mail-contnet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Hospital Request "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "mail-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 2)], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit == null ? null : _v.parent.context.$implicit.description;
        _ck(_v, 4, 0, currVal_0);
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.context.$implicit == null ? null : _v.parent.context.$implicit.date, "short"));
        _ck(_v, 6, 0, currVal_1);
      });
    }
    function View_HeaderComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "user-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "img", [["alt", "user"], ["class", "img-circle"]], [[8, "src", 4]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "span", [["class", "profile-status online pull-right"]], null, null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.parent.context.$implicit == null ? null : _v.parent.context.$implicit.createdBy == null ? null : _v.parent.context.$implicit.createdBy.image));
        _ck(_v, 1, 0, currVal_0);
      });
    }
    function View_HeaderComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "mail-contnet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "mail-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](7, 2)], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit == null ? null : _v.parent.context.$implicit.createdBy == null ? null : _v.parent.context.$implicit.createdBy.name;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _v.parent.context.$implicit == null ? null : _v.parent.context.$implicit.description;
        _ck(_v, 4, 0, currVal_1);
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 6, 0, _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.context.$implicit == null ? null : _v.parent.context.$implicit.createdAt, "short"));
        _ck(_v, 6, 0, currVal_2);
      });
    }
    function View_HeaderComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "a", [["class", ""], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.goToNotification(_v.context.$implicit == null ? null : _v.context.$implicit._id, _v.context.$implicit == null ? null : _v.context.$implicit.category, _v.context.$implicit == null ? null : _v.context.$implicit.naviagteUrl) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = (_v.context.$implicit == null ? null : _v.context.$implicit.category) === 6;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = (_v.context.$implicit == null ? null : _v.context.$implicit.category) === 6;
        _ck(_v, 4, 0, currVal_1);
        var currVal_2 = (_v.context.$implicit == null ? null : _v.context.$implicit.category) !== 6;
        _ck(_v, 6, 0, currVal_2);
        var currVal_3 = (_v.context.$implicit == null ? null : _v.context.$implicit.category) !== 6;
        _ck(_v, 8, 0, currVal_3);
      }, null);
    }
    function View_HeaderComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "message-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.userNotifications;
        _ck(_v, 2, 0, currVal_0);
      }, null);
    }
    function View_HeaderComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "notify"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "span", [["class", "heartbit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "span", [["class", "point"]], null, null, null, null, null))], null, null);
    }
    function View_HeaderComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "message-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No Messages "]))], null, null);
    }
    function View_HeaderComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "a", [["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          _co.markReadMessage(_v.context.$implicit == null ? null : _v.context.$implicit._id);
          var pd_0 = _co.gotoChat() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "user-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "img", [["alt", "user"], ["class", "img-circle"]], [[8, "src", 4]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "span", [["class", "profile-status online pull-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "div", [["class", "mail-contnet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "mail-desc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "span", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 2)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 1), _v.context.$implicit == null ? null : _v.context.$implicit.createdBy == null ? null : _v.context.$implicit.createdBy.image));
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _v.context.$implicit == null ? null : _v.context.$implicit.createdBy == null ? null : _v.context.$implicit.createdBy.name;
        _ck(_v, 7, 0, currVal_1);
        var currVal_2 = _v.context.$implicit == null ? null : _v.context.$implicit.message;
        _ck(_v, 9, 0, currVal_2);
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit == null ? null : _v.context.$implicit.date, "short"));
        _ck(_v, 11, 0, currVal_3);
      });
    }
    function View_HeaderComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "message-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.userMessages;
        _ck(_v, 2, 0, currVal_0);
      }, null);
    }
    function View_HeaderComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "li", [["class", "nav-item dropdown"], ["ngbDropdown", ""]], [[2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1720320, null, 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        _menu: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _anchor: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "a", [["aria-expanded", "false"], ["aria-haspopup", "true"], ["class", "nav-link dropdown-toggle waves-effect waves-dark dropdown-toggle"], ["data-toggle", "dropdown"], ["ngbDropdownToggle", ""]], [[1, "aria-expanded", 0]], [[null, "click"], [null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).dropdown.toggle() !== false;
          ad = pd_0 && ad;
        }
        if ("keydown.ArrowUp" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).dropdown.onKeyDown($event) !== false;
          ad = pd_1 && ad;
        }
        if ("keydown.ArrowDown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).dropdown.onKeyDown($event) !== false;
          ad = pd_2 && ad;
        }
        if ("keydown.Home" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).dropdown.onKeyDown($event) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown.End" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).dropdown.onKeyDown($event) !== false;
          ad = pd_4 && ad;
        }
        if ("keydown.Tab" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).dropdown.onKeyDown($event) !== false;
          ad = pd_5 && ad;
        }
        if ("keydown.Shift.Tab" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).dropdown.onKeyDown($event) !== false;
          ad = pd_6 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[8, 4]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownAnchor"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 13, "div", [["aria-labelledby", "2"], ["class", "dropdown-menu mailbox dropdown-menu-right animated bounceInDown"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], [[null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Enter"], [null, "keydown.Space"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"]], function (_v, en, $event) {
        var ad = true;
        if ("keydown.ArrowUp" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false;
          ad = pd_0 && ad;
        }
        if ("keydown.ArrowDown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false;
          ad = pd_1 && ad;
        }
        if ("keydown.Home" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false;
          ad = pd_2 && ad;
        }
        if ("keydown.End" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown.Enter" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false;
          ad = pd_4 && ad;
        }
        if ("keydown.Space" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false;
          ad = pd_5 && ad;
        }
        if ("keydown.Tab" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false;
          ad = pd_6 && ad;
        }
        if ("keydown.Shift.Tab" === en) {
          var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).dropdown.onKeyDown($event) !== false;
          ad = pd_7 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, [[7, 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        menuItems: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "a", [["class", "nav-link text-center link"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.gotoChat() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["See all Messages"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "i", [["class", "fa fa-angle-right"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.isUnreadMessage();
        _ck(_v, 9, 0, currVal_2);
        var currVal_6 = (_co.userMessages == null ? null : _co.userMessages.length) == 0;
        _ck(_v, 16, 0, currVal_6);
        var currVal_7 = (_co.userMessages == null ? null : _co.userMessages.length) > 0;
        _ck(_v, 18, 0, currVal_7);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isOpen();
        _ck(_v, 0, 0, currVal_0);
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).dropdown.isOpen();
        _ck(_v, 4, 0, currVal_1);
        var currVal_3 = true;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).dropdown.isOpen();
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).placement;
        _ck(_v, 10, 0, currVal_3, currVal_4, currVal_5);
      });
    }
    function View_HeaderComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_image_src_pipe__WEBPACK_IMPORTED_MODULE_4__["ImageSrcPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 83, "header", [["class", "topbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 82, "nav", [["class", "navbar top-navbar navbar-expand-md navbar-dark"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "navbar-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "a", [["class", "navbar-brand"], ["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["alt", ""], ["height", "40"], ["src", "../assets/logo.png"], ["width", "50"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 74, "div", [["class", "navbar-collapse align-items-md-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 22, "ul", [["class", "navbar-nav mr-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "a", [["class", "nav-link nav-toggler d-block d-md-none waves-effect waves-dark"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.collapse() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "i", [["class", "fa fa-bars"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "a", [["class", "nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.collapse() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "i", [["class", "fa fa-bars"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 15, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 14, "div", [["class", "app-search"], ["ngbDropdown", ""]], [[2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 1720320, null, 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _menu: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _anchor: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 7, "input", [["aria-haspopup", "true"], ["class", "form-control dropdown-toggle"], ["ngbDropdownToggle", ""], ["placeholder", "Search & enter"], ["type", "text"]], [[1, "aria-expanded", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "focus"], [null, "keyup"], [null, "ngModelChange"], [null, "click"], [null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).dropdown.toggle() !== false;
          ad = pd_0 && ad;
        }
        if ("keydown.ArrowUp" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).dropdown.onKeyDown($event) !== false;
          ad = pd_1 && ad;
        }
        if ("keydown.ArrowDown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).dropdown.onKeyDown($event) !== false;
          ad = pd_2 && ad;
        }
        if ("keydown.Home" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).dropdown.onKeyDown($event) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown.End" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).dropdown.onKeyDown($event) !== false;
          ad = pd_4 && ad;
        }
        if ("keydown.Tab" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).dropdown.onKeyDown($event) !== false;
          ad = pd_5 && ad;
        }
        if ("keydown.Shift.Tab" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).dropdown.onKeyDown($event) !== false;
          ad = pd_6 && ad;
        }
        if ("input" === en) {
          var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleInput($event.target.value) !== false;
          ad = pd_7 && ad;
        }
        if ("blur" === en) {
          var pd_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onTouched() !== false;
          ad = pd_8 && ad;
        }
        if ("compositionstart" === en) {
          var pd_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionStart() !== false;
          ad = pd_9 && ad;
        }
        if ("compositionend" === en) {
          var pd_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionEnd($event.target.value) !== false;
          ad = pd_10 && ad;
        }
        if ("focus" === en) {
          var pd_11 = _co.searchUser() !== false;
          ad = pd_11 && ad;
        }
        if ("keyup" === en) {
          var pd_12 = _co.searchUser() !== false;
          ad = pd_12 && ad;
        }
        if ("ngModelChange" === en) {
          var pd_13 = (_co.userSearchQuery = $event) !== false;
          ad = pd_13 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownAnchor"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "i", [["class", "fas fa-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 50, "ul", [["class", "navbar-nav my-lg-0 align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 21, "li", [["class", "nav-item dropdown"], ["ngbDropdown", ""]], [[2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 1720320, null, 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"]]], {
        autoClose: [0, "autoClose"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        _menu: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        _anchor: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 5, "a", [["aria-expanded", "false"], ["aria-haspopup", "true"], ["class", "nav-link dropdown-toggle waves-effect waves-dark dropdown-toggle"], ["data-toggle", "dropdown"], ["ngbDropdownToggle", ""]], [[1, "aria-expanded", 0]], [[null, "click"], [null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).dropdown.toggle() !== false;
          ad = pd_0 && ad;
        }
        if ("keydown.ArrowUp" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).dropdown.onKeyDown($event) !== false;
          ad = pd_1 && ad;
        }
        if ("keydown.ArrowDown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).dropdown.onKeyDown($event) !== false;
          ad = pd_2 && ad;
        }
        if ("keydown.Home" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).dropdown.onKeyDown($event) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown.End" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).dropdown.onKeyDown($event) !== false;
          ad = pd_4 && ad;
        }
        if ("keydown.Tab" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).dropdown.onKeyDown($event) !== false;
          ad = pd_5 && ad;
        }
        if ("keydown.Shift.Tab" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).dropdown.onKeyDown($event) !== false;
          ad = pd_6 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[5, 4]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownAnchor"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 0, "i", [["class", "fas fa-clipboard"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 11, "div", [["class", "dropdown-menu dropdown-menu-right mailbox animated bounceInDown"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], [[null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Enter"], [null, "keydown.Space"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"]], function (_v, en, $event) {
        var ad = true;
        if ("keydown.ArrowUp" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).dropdown.onKeyDown($event) !== false;
          ad = pd_0 && ad;
        }
        if ("keydown.ArrowDown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).dropdown.onKeyDown($event) !== false;
          ad = pd_1 && ad;
        }
        if ("keydown.Home" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).dropdown.onKeyDown($event) !== false;
          ad = pd_2 && ad;
        }
        if ("keydown.End" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).dropdown.onKeyDown($event) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown.Enter" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).dropdown.onKeyDown($event) !== false;
          ad = pd_4 && ad;
        }
        if ("keydown.Space" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).dropdown.onKeyDown($event) !== false;
          ad = pd_5 && ad;
        }
        if ("keydown.Tab" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).dropdown.onKeyDown($event) !== false;
          ad = pd_6 && ad;
        }
        if ("keydown.Shift.Tab" === en) {
          var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).dropdown.onKeyDown($event) !== false;
          ad = pd_7 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, [[4, 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        menuItems: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 8, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "div", [["class", "drop-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Notifications"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 4, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 25, "li", [["class", "nav-item dropdown u-pro"], ["ngbDropdown", ""]], [[2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 1720320, null, 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        _menu: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        _anchor: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 21, "div", [["class", "d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 3, "div", [["aria-haspopup", "true"], ["class", "profile-img dropdown-toggle dropdown-toggle"], ["ngbDropdownToggle", ""]], [[1, "aria-expanded", 0]], [[null, "click"], [null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).dropdown.toggle() !== false;
          ad = pd_0 && ad;
        }
        if ("keydown.ArrowUp" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).dropdown.onKeyDown($event) !== false;
          ad = pd_1 && ad;
        }
        if ("keydown.ArrowDown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).dropdown.onKeyDown($event) !== false;
          ad = pd_2 && ad;
        }
        if ("keydown.Home" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).dropdown.onKeyDown($event) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown.End" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).dropdown.onKeyDown($event) !== false;
          ad = pd_4 && ad;
        }
        if ("keydown.Tab" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).dropdown.onKeyDown($event) !== false;
          ad = pd_5 && ad;
        }
        if ("keydown.Shift.Tab" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).dropdown.onKeyDown($event) !== false;
          ad = pd_6 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[11, 4]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownAnchor"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 0, "img", [["alt", "user"], ["class", "rounded-circle"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 5, "a", [["aria-expanded", "false"], ["aria-haspopup", "true"], ["class", "nav-link dropdown-toggle d-flex waves-effect waves-dark profile-pic dropdown-toggle"], ["data-toggle", "dropdown"], ["ngbDropdownToggle", ""]], [[1, "aria-expanded", 0]], [[null, "click"], [null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).dropdown.toggle() !== false;
          ad = pd_0 && ad;
        }
        if ("keydown.ArrowUp" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).dropdown.onKeyDown($event) !== false;
          ad = pd_1 && ad;
        }
        if ("keydown.ArrowDown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).dropdown.onKeyDown($event) !== false;
          ad = pd_2 && ad;
        }
        if ("keydown.Home" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).dropdown.onKeyDown($event) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown.End" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).dropdown.onKeyDown($event) !== false;
          ad = pd_4 && ad;
        }
        if ("keydown.Tab" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).dropdown.onKeyDown($event) !== false;
          ad = pd_5 && ad;
        }
        if ("keydown.Shift.Tab" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).dropdown.onKeyDown($event) !== false;
          ad = pd_6 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[11, 4]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownAnchor"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 2, "span", [["class", "hidden-md-down pl-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](73, null, ["", " \xA0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 0, "i", [["class", "fa fa-angle-down"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 10, "div", [["class", "dropdown-menu dropdown-menu-right animated flipInY"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], [[null, "keydown.ArrowUp"], [null, "keydown.ArrowDown"], [null, "keydown.Home"], [null, "keydown.End"], [null, "keydown.Enter"], [null, "keydown.Space"], [null, "keydown.Tab"], [null, "keydown.Shift.Tab"]], function (_v, en, $event) {
        var ad = true;
        if ("keydown.ArrowUp" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).dropdown.onKeyDown($event) !== false;
          ad = pd_0 && ad;
        }
        if ("keydown.ArrowDown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).dropdown.onKeyDown($event) !== false;
          ad = pd_1 && ad;
        }
        if ("keydown.Home" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).dropdown.onKeyDown($event) !== false;
          ad = pd_2 && ad;
        }
        if ("keydown.End" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).dropdown.onKeyDown($event) !== false;
          ad = pd_3 && ad;
        }
        if ("keydown.Enter" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).dropdown.onKeyDown($event) !== false;
          ad = pd_4 && ad;
        }
        if ("keydown.Space" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).dropdown.onKeyDown($event) !== false;
          ad = pd_5 && ad;
        }
        if ("keydown.Tab" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).dropdown.onKeyDown($event) !== false;
          ad = pd_6 && ad;
        }
        if ("keydown.Shift.Tab" === en) {
          var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).dropdown.onKeyDown($event) !== false;
          ad = pd_7 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, [[10, 4]], 1, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        menuItems: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 0, "div", [["class", "dropdown-divider"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 2, "a", [["class", "dropdown-item"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.goToProfile() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 0, "i", [["class", "fa fa-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Profile"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 0, "div", [["class", "dropdown-divider"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 2, "a", [["class", "dropdown-item"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.logout() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 0, "i", [["class", "fa fa-power-off"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Logout"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.isCollapse;
        _ck(_v, 10, 0, currVal_0);
        var currVal_10 = _co.userSearchQuery;
        _ck(_v, 28, 0, currVal_10);
        var currVal_11 = _co.users.length > 0 && _co.userSearchQuery !== "";
        _ck(_v, 34, 0, currVal_11);
        var currVal_13 = true;
        _ck(_v, 37, 0, currVal_13);
        var currVal_15 = _co.isUnreadNotifiocation();
        _ck(_v, 45, 0, currVal_15);
        var currVal_19 = (_co.userNotifications == null ? null : _co.userNotifications.length) == 0;
        _ck(_v, 55, 0, currVal_19);
        var currVal_20 = (_co.userNotifications == null ? null : _co.userNotifications.length) > 0;
        _ck(_v, 57, 0, currVal_20);
        var currVal_21 = _co.showMessagesButton();
        _ck(_v, 59, 0, currVal_21);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).isOpen();
        _ck(_v, 20, 0, currVal_1);
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).dropdown.isOpen();
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty;
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid;
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending;
        _ck(_v, 24, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).isOpen();
        _ck(_v, 36, 0, currVal_12);
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).dropdown.isOpen();
        _ck(_v, 40, 0, currVal_14);
        var currVal_16 = true;
        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).dropdown.isOpen();
        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).placement;
        _ck(_v, 46, 0, currVal_16, currVal_17, currVal_18);
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).isOpen();
        _ck(_v, 60, 0, currVal_22);
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).dropdown.isOpen();
        _ck(_v, 65, 0, currVal_23);
        var currVal_24 = _co.imageSrc;
        _ck(_v, 68, 0, currVal_24);
        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).dropdown.isOpen();
        _ck(_v, 69, 0, currVal_25);
        var currVal_26 = _co.user.name;
        _ck(_v, 73, 0, currVal_26);
        var currVal_27 = true;
        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).dropdown.isOpen();
        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).placement;
        _ck(_v, 75, 0, currVal_27, currVal_28, currVal_29);
      });
    }
    function View_HeaderComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _inbox_chat_service__WEBPACK_IMPORTED_MODULE_9__["ChatService"], _shared_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"], _shared_search_service__WEBPACK_IMPORTED_MODULE_11__["SearchService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/
  /*! exports provided: HeaderComponent */
  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/environments/environment */"./src/environments/environment.ts");
    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, authService, chatService, notificationService, searchService) {
        var _this20 = this;
        _classCallCheck(this, HeaderComponent);
        this.router = router;
        this.authService = authService;
        this.chatService = chatService;
        this.notificationService = notificationService;
        this.searchService = searchService;
        this.isShown = false;
        this.isCollapse = true;
        this.userSearchQuery = '';
        this.users = [];
        this.notificationService.getNotification().subscribe(function (data) {
          console.log('Notification recived', data);
          _this20.userNotifications.push(data);
        });
      }
      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;
          this.user = this.authService.currentUserValue;
          this.imageSrc = this.user.image ? this.user.image : '../assets/images/users/1.jpg';
          this.imageSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url + this.imageSrc;
          this.getCurrentUserMessages();
          this.getNotificationsForCurrentUser();
          this.chatService.getMessage().subscribe(function (data) {
            console.log('msg recived', data);
            _this21.userMessages.push(data);
          });
        }
      }, {
        key: "toggleShow",
        value: function toggleShow() {
          this.isShown = !this.isShown;
        }
      }, {
        key: "collapse",
        value: function collapse() {
          this.isCollapse = !this.isCollapse;
          var dom = document.querySelector('body');
          dom.classList.toggle('mini-sidebar');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "selectUser",
        value: function selectUser(item) {
          this.userSearchQuery = item.username + '   ---   ' + item.name;
          var role = item.role;
          if (role === 'hospital') {
            this.router.navigate(["/app/hospitals/profile/".concat(item._id)]);
          } else if (role === 'doctor') {
            this.router.navigate(["/app/doctor/".concat(item._id)]);
          } else if (role === 'patient') {
            this.router.navigate(["/app/patient/".concat(item._id)]);
          }
        }
      }, {
        key: "searchUser",
        value: function searchUser() {
          var _this22 = this;
          if (!this.checkSearchValue()) {
            return;
          }
          this.searchService.searchUser(this.userSearchQuery).subscribe(function (response) {
            if (response.status == '200') {
              _this22.users = response.data;
            } else {
              _this22.users = [];
            }
          });
        }
      }, {
        key: "checkSearchValue",
        value: function checkSearchValue() {
          if (this.userSearchQuery === '') {
            return false;
          }
          return true;
        }
      }, {
        key: "getCurrentUserMessages",
        value: function getCurrentUserMessages() {
          var _this23 = this;
          this.chatService.getUserMessages().subscribe(function (res) {
            if (+res.status === 200) {
              _this23.userMessages = res.data.userMessages;
              // console.log(this.userMessages);
            } else {
              _this23.userMessages = [];
            }
          });
        }
      }, {
        key: "getNotificationsForCurrentUser",
        value: function getNotificationsForCurrentUser() {
          var _this24 = this;
          this.notificationService.getNotificationsById(this.authService.currentUserValue._id).subscribe(function (res) {
            if (+res.status === 200) {
              _this24.userNotifications = res.data;
              // console.log(this.userNotifications);
            } else {
              _this24.userNotifications = [];
            }
          });
        }
      }, {
        key: "gotoChat",
        value: function gotoChat() {
          this.router.navigate(['/app/inbox']);
        }
      }, {
        key: "deleteNotification",
        value: function deleteNotification(id) {
          var _this25 = this;
          this.notificationService.deleteNotification(id).subscribe(function (res) {
            if (+res.status === 200) {
              _this25.getNotificationsForCurrentUser();
            }
          });
        }
      }, {
        key: "goToNotification",
        value: function goToNotification(id, category, url) {
          var role = this.authService.currentUserValue.role;
          this.markReadNotification(id);
          this.deleteNotification(id);
          // vitals
          if (category === 1) {
            this.router.navigate(['/app/patient/profile/', this.authService.currentUserValue.roleId]);
          }
          // appointment
          if (category === 2) {
            this.router.navigate(['/app/calender']);
          }
          // payments
          if (category === 3) {
            this.router.navigate([url]);
            // this.router.navigate(['/app/payment']);
          }
          // lab reports
          if (category === 4) {
            if (role === 'labAttendant') {
              this.router.navigate(['/app/ticket']);
            } else {
              this.router.navigate([url]);
              // this.router.navigate(['/app/patient/profile/', this.authService.currentUserValue.roleId,]);
            }
          }
          // prescriptions
          if (category == 5) {
            this.router.navigate([url]);
            // if (role === 'pharmacy') {
            //   this.router.navigate(['/app/prescription']);
            // } else {
            //   this.router.navigate(['/app/patient/profile/', this.authService.currentUserValue.roleId, 'medical']);
            // }
          }

          if (category == 6) {
            this.router.navigate(['/app/request']);
          }
        }
      }, {
        key: "showMessagesButton",
        value: function showMessagesButton() {
          var role = this.authService.currentUserValue.role;
          if (role === 'admin' || role === 'doctor' || role === 'hospital' || role === 'labAttendant' || role === 'FDO' || role === 'pharmacy') {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "goToProfile",
        value: function goToProfile() {
          var route = '/';
          if (this.authService.currentUserValue.role === 'patient') {
            route = "/app/patient/profile/".concat(this.authService.currentUserValue.roleId);
          } else if (this.authService.currentUserValue.role === 'admin') {
            route = "/app/profile";
          } else if (this.authService.currentUserValue.role === 'hospital') {
            route = "/app/hospitals/profile/".concat(this.authService.currentUserValue._id);
          } else if (this.authService.currentUserValue.role === 'doctor') {
            route = "/app/doctor/profile/".concat(this.authService.currentUserValue.roleId);
          } else if (this.authService.currentUserValue.role === 'labAttendant') {
            route = "/app/labattendant/profile/".concat(this.authService.currentUserValue.roleId);
          }
          this.router.navigate([route]);
        }
      }, {
        key: "markReadNotification",
        value: function markReadNotification(id) {
          var _this26 = this;
          this.notificationService.markAsRead(id).subscribe(function (res) {
            if (+res.status === 200) {
              _this26.getNotificationsForCurrentUser();
            } else {}
          });
        }
      }, {
        key: "markReadMessage",
        value: function markReadMessage(id) {
          var _this27 = this;
          this.userMessages = this.userMessages.filter(function (msg) {
            return msg._id !== id;
          });
          this.chatService.markAsRead(id).subscribe(function (res) {
            if (+res.status === 200) {
              _this27.getCurrentUserMessages();
            } else {}
          });
        }
      }, {
        key: "isUnreadMessage",
        value: function isUnreadMessage() {
          if (!this.userMessages || this.userMessages.length == 0) {
            return false;
          }
          for (var i = 0; i < this.userMessages.length; i++) {
            if (this.userMessages[i].status === 'un-read') {
              // console.log(this.userMessages[i].status);
              return true;
            }
          }
          return false;
        }
      }, {
        key: "isUnreadNotifiocation",
        value: function isUnreadNotifiocation() {
          if (!this.userNotifications || this.userNotifications.length == 0) {
            return false;
          }
          for (var i = 0; i < this.userNotifications.length; i++) {
            if (this.userNotifications[i].status === 'un-read') {
              // console.log(this.userNotifications[i].status);
              return true;
            }
          }
          return false;
        }
      }]);
      return HeaderComponent;
    }();
    /***/
  },
  /***/"./src/app/inbox/chat.service.ts":
  /*!***************************************!*\
    !*** ./src/app/inbox/chat.service.ts ***!
    \***************************************/
  /*! exports provided: ChatService */
  /***/
  function srcAppInboxChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ngx-socket-io */"./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    var ChatService = /*#__PURE__*/function () {
      function ChatService(authService, httpClient, socket) {
        _classCallCheck(this, ChatService);
        this.authService = authService;
        this.httpClient = httpClient;
        this.socket = socket;
      }
      _createClass(ChatService, [{
        key: "getfriends",
        value: function getfriends() {
          return this.httpClient.get("api/chat/friends");
        }
      }, {
        key: "addfriend",
        value: function addfriend(id) {
          return this.httpClient.get("api/chat/friends/".concat(id));
        }
      }, {
        key: "getHistory",
        value: function getHistory(id, pageSize, pageNo) {
          return this.httpClient.get("api/chat/history/".concat(id, "?pageSize=").concat(pageSize, "&pageNo=").concat(pageNo));
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(chatObj) {
          this.socket.emit("sendMessage", chatObj);
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          return this.socket.fromEvent(this.authService.currentUserValue._id + 'Msg');
        }
      }, {
        key: "getUserMessages",
        value: function getUserMessages() {
          return this.httpClient.get("api/chat/getUserMessages");
        }
      }, {
        key: "markAsRead",
        value: function markAsRead(id) {
          return this.httpClient.put("api/readMessage/".concat(id), {});
        }
      }]);
      return ChatService;
    }();
    ChatService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function ChatService_Factory() {
        return new ChatService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]));
      },
      token: ChatService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/inbox/inbox.component.css.shim.ngstyle.js":
  /*!***********************************************************!*\
    !*** ./src/app/inbox/inbox.component.css.shim.ngstyle.js ***!
    \***********************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppInboxInboxComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);\n\n\n\n\n.chat-img[_ngcontent-%COMP%]{\n  height: 35px !important;\n  width: 35px !important;\n  border-radius: 50%;\n\n}\n.chat-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 100%;\n  border: 1px solid lightgray;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 50%;\n}\n.chat-main-box[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  float: left;\n  z-index: 9;\n  top: 0px;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .open-panel[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n  position: absolute;\n  left: -webkit-calc(100% - 1px);\n  top: 50%;\n  z-index: 100;\n  background-color: #fff;\n  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);\n  \n  line-height: 1;\n  padding: 15px 8px 15px 4px;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .chat-left-inner[_ngcontent-%COMP%] {\n  position: relative;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .chat-left-inner[_ngcontent-%COMP%]   .chatonline[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .chat-left-inner[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  height: 60px;\n  padding: 15px;\n  background-image: linear-gradient(#03a9f3, #03a9f3), linear-gradient(#e9ecef, #e9ecef);\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .chat-left-inner[_ngcontent-%COMP%]   .style-none[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0 ;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .chat-left-inner[_ngcontent-%COMP%]   .style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  overflow: hidden;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .chat-left-inner[_ngcontent-%COMP%]   .style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .chat-left-inner[_ngcontent-%COMP%]   .style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .chat-left-inner[_ngcontent-%COMP%]   .style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%] {\n  width: calc(100% - 250px);\n  float: left;\n  border-left: 1px solid #e9ecef;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%]   .chat-rbox[_ngcontent-%COMP%] {\n  height: auto;\n  position: relative;\n}\n.chat-rboxc[_ngcontent-%COMP%]{\n  max-height: 400px;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%]   .chat-list[_ngcontent-%COMP%] {\n  height: 400px;\n  \n  padding-top: 40px;\n  overflow-y: scroll;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%]   .chat-list[_ngcontent-%COMP%]   .chat-text[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%]   .chat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-time[_ngcontent-%COMP%] {\n  display: block;\n  text-align: left;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%]   .chat-list[_ngcontent-%COMP%]   li.reverse[_ngcontent-%COMP%]   .chat-time[_ngcontent-%COMP%] {\n  margin-left: auto;\n  text-align: right;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%]   .send-chat-box[_ngcontent-%COMP%] {\n  position: relative;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%]   .send-chat-box[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #e9ecef;\n  resize: none;\n  height: 80px;\n  padding-right: 180px;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%]   .send-chat-box[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #e9ecef;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%]   .send-chat-box[_ngcontent-%COMP%]   .custom-send[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  bottom: 10px;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%]   .send-chat-box[_ngcontent-%COMP%]   .custom-send[_ngcontent-%COMP%]   .cst-icon[_ngcontent-%COMP%] {\n  color: #212529;\n  margin-right: 10px;\n}\n.chat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-time[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  color: #6c757d;\n  margin: 5px 0 0px 0px !important ;\n}\n.left-scroll[_ngcontent-%COMP%] {\n  height: 500px;\n  overflow-y: scroll;\n  border-radius: 0 !important;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 5px;\n  background: rgb(212, 203, 203);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #b3b2b2;\n  border-radius: 5px;\n}\n@media (max-width: 1023px){\n.d-flex[_ngcontent-%COMP%] {\n    display: flex !important;\n}\n}\n@media (max-width: 767px){\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%] {\n  left: 0px !important;\n  position: absolute;\n  transition: 0.5s ease-in;\n  background: #fff;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]{\n  position: relative;\n  width: 100%;\n  float: none;\n  z-index: 9;\n  top: 0px;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-right-aside[_ngcontent-%COMP%] {\n  width: 100%;\n  float: none;\n  border-left: 0px;\n}\n.left-scroll[_ngcontent-%COMP%] {\n  height: 400px;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .chat-left-inner[_ngcontent-%COMP%] {\n  position: relative;\n  \n}\n.m-r-10[_ngcontent-%COMP%] {\n  margin-right: 0px !important;\n  font-size: 10px !important;\n  padding: 5px 7px !important;\n}\n.chat-none[_ngcontent-%COMP%]{\n  display: none;\n}\n.chat-main-box[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n.chat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 13px;\n  font-weight: 500;\n}\n.chat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.chat-main-box[_ngcontent-%COMP%]   .chat-left-aside[_ngcontent-%COMP%]   .chat-left-inner[_ngcontent-%COMP%]   .style-none[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.btn-circle.btn-lg[_ngcontent-%COMP%], .btn-group-lg[_ngcontent-%COMP%] > .btn-circle.btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  padding: 2px 1px;\n  font-size: 14px;\n  line-height: 18px;\n}\n.form-control[_ngcontent-%COMP%]{\n  height: 24px;\n}\n.form-control[_ngcontent-%COMP%]::-moz-placeholder{\n  font-size: 12px !important;\n}\n.form-control[_ngcontent-%COMP%]::placeholder{\n  font-size: 12px !important;\n}\n.box-title[_ngcontent-%COMP%]{\n  font-size: 1rem !important;\n  font-weight: 500;\n}\n.chat-right-aside[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{\n  padding: .5rem;\n}\n\n\n}\n.back-arrow[_ngcontent-%COMP%]{\n  padding: 5px;\n  border-radius: 100%;\n  color: white;\n  background: black;\n  margin-right: 10px;\n}\n.chat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #000;\n  font-weight: 500;\n}\n.chat-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .chat-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #fff;\n  background: #6f42c1;\n}\n.chatonline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ib3gvaW5ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLGdGQUFnRjtBQVBoRjs7Ozs7Q0FLQztBQUdELGVBQWU7QUFFZjs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRTtBQUVGOztrQkFFa0I7QUFDbEI7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLHNCQUFtQjtLQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsUUFBUTtBQUNWO0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsUUFBUTtFQUNSLFlBQVk7RUFDWixzQkFBc0I7RUFFdEIsd0NBQXdDO0VBQ3hDLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0ZBQXNGO0FBQ3hGO0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtFQUNaLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3QjtBQUdBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFFBQVE7QUFDVjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUZBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztHQUVHO0FBQ0g7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9pbmJveC9pbmJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRlbXBsYXRlIE5hbWU6IEFkbWluIFRlbXBsYXRlXG5BdXRob3I6IFdyYXBwaXhlbFxuXG5GaWxlOiBzY3NzXG4qL1xuXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwKTtcbi8qVGhlbWUgQ29sb3JzKi9cblxuLyoqXG4gKiBUYWJsZSBPZiBDb250ZW50XG4gKlxuICogXHQxLiBDb2xvciBzeXN0ZW1cbiAqXHQyLiBPcHRpb25zXG4gKlx0My4gQm9keVxuICpcdDQuIFR5cG9ncmFwaHlcbiAqXHQ1LiBCcmVhZGNydW1ic1xuICpcdDYuIENhcmRzXG4gKlx0Ny4gRHJvcGRvd25zXG4gKlx0OC4gQnV0dG9uc1xuICpcdDkuIFR5cG9ncmFwaHlcbiAqXHQxMC4gUHJvZ3Jlc3MgYmFyc1xuICpcdDExLiBUYWJsZXNcbiAqXHQxMi4gRm9ybXNcbiAqXHQxNC4gQ29tcG9uZW50XG4gKi9cblxuLyoqKioqKioqKioqKioqKioqKipcbmNoYXQgYXBwbGljYXRpb24gUGFnZVxuKioqKioqKioqKioqKioqKioqL1xuLmNoYXQtaW1ne1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDM1cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG59XG4uY2hhdC1pbWcgaW1ne1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5jaGF0LW1haW4tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2hhdC1tYWluLWJveCAuY2hhdC1sZWZ0LWFzaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjUwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB6LWluZGV4OiA5O1xuICB0b3A6IDBweDtcbn1cblxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtbGVmdC1hc2lkZSAub3Blbi1wYW5lbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDFweCk7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMXB4IDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLyogYm9yZGVyLXJhZGl1czogMCAxMDBweCAxMDBweCAwOyAqL1xuICBsaW5lLWhlaWdodDogMTtcbiAgcGFkZGluZzogMTVweCA4cHggMTVweCA0cHg7XG59XG5cbi5jaGF0LW1haW4tYm94IC5jaGF0LWxlZnQtYXNpZGUgLmNoYXQtbGVmdC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtbGVmdC1hc2lkZSAuY2hhdC1sZWZ0LWlubmVyIC5jaGF0b25saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaGF0LW1haW4tYm94IC5jaGF0LWxlZnQtYXNpZGUgLmNoYXQtbGVmdC1pbm5lciAuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAzYTlmMywgIzAzYTlmMyksIGxpbmVhci1ncmFkaWVudCgjZTllY2VmLCAjZTllY2VmKTtcbn1cblxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtbGVmdC1hc2lkZSAuY2hhdC1sZWZ0LWlubmVyIC5zdHlsZS1ub25lIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgO1xufVxuXG4uY2hhdC1tYWluLWJveCAuY2hhdC1sZWZ0LWFzaWRlIC5jaGF0LWxlZnQtaW5uZXIgLnN0eWxlLW5vbmUgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2hhdC1tYWluLWJveCAuY2hhdC1sZWZ0LWFzaWRlIC5jaGF0LWxlZnQtaW5uZXIgLnN0eWxlLW5vbmUgbGkgYSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jaGF0LW1haW4tYm94IC5jaGF0LWxlZnQtYXNpZGUgLmNoYXQtbGVmdC1pbm5lciAuc3R5bGUtbm9uZSBsaSBhOmhvdmVyLCAuY2hhdC1tYWluLWJveCAuY2hhdC1sZWZ0LWFzaWRlIC5jaGF0LWxlZnQtaW5uZXIgLnN0eWxlLW5vbmUgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG4uY2hhdC1tYWluLWJveCAuY2hhdC1yaWdodC1hc2lkZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWVjZWY7XG59XG5cbi5jaGF0LW1haW4tYm94IC5jaGF0LXJpZ2h0LWFzaWRlIC5jaGF0LXJib3gge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGF0LXJib3hje1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cbi5jaGF0LW1haW4tYm94IC5jaGF0LXJpZ2h0LWFzaWRlIC5jaGF0LWxpc3Qge1xuICBoZWlnaHQ6IDQwMHB4O1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5jaGF0LW1haW4tYm94IC5jaGF0LXJpZ2h0LWFzaWRlIC5jaGF0LWxpc3QgLmNoYXQtdGV4dCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtcmlnaHQtYXNpZGUgLmNoYXQtbGlzdCBsaSAuY2hhdC10aW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jaGF0LW1haW4tYm94IC5jaGF0LXJpZ2h0LWFzaWRlIC5jaGF0LWxpc3QgbGkucmV2ZXJzZSAuY2hhdC10aW1lIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2hhdC1tYWluLWJveCAuY2hhdC1yaWdodC1hc2lkZSAuc2VuZC1jaGF0LWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtcmlnaHQtYXNpZGUgLnNlbmQtY2hhdC1ib3ggLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxODBweDtcbn1cblxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtcmlnaHQtYXNpZGUgLnNlbmQtY2hhdC1ib3ggLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI2U5ZWNlZjtcbn1cblxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtcmlnaHQtYXNpZGUgLnNlbmQtY2hhdC1ib3ggLmN1c3RvbS1zZW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4uY2hhdC1tYWluLWJveCAuY2hhdC1yaWdodC1hc2lkZSAuc2VuZC1jaGF0LWJveCAuY3VzdG9tLXNlbmQgLmNzdC1pY29uIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jaGF0LWxpc3QgbGkgLmNoYXQtdGltZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW46IDVweCAwIDBweCAwcHggIWltcG9ydGFudCA7XG59XG5cbi5sZWZ0LXNjcm9sbCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjEyLCAyMDMsIDIwMyk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYjNiMmIyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KXtcbi5kLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XG4uY2hhdC1tYWluLWJveCAuY2hhdC1sZWZ0LWFzaWRlIHtcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtbGVmdC1hc2lkZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IG5vbmU7XG4gIHotaW5kZXg6IDk7XG4gIHRvcDogMHB4O1xufVxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtcmlnaHQtYXNpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAwcHg7XG59XG4ubGVmdC1zY3JvbGwge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtbGVmdC1hc2lkZSAuY2hhdC1sZWZ0LWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQ7ICovXG59XG4ubS1yLTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweCA3cHggIWltcG9ydGFudDtcbn1cbi5jaGF0LW5vbmV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2hhdC1tYWluLWJveCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmNoYXQtbGlzdCBsaSAuY2hhdC1jb250ZW50IGg1IHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0LWxpc3QgbGkgLmNoYXQtY29udGVudCAuYm94IHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmNoYXQtbWFpbi1ib3ggLmNoYXQtbGVmdC1hc2lkZSAuY2hhdC1sZWZ0LWlubmVyIC5zdHlsZS1ub25lIGxpIGEge1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmJ0bi1jaXJjbGUuYnRuLWxnLCAuYnRuLWdyb3VwLWxnPi5idG4tY2lyY2xlLmJ0biB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDJweCAxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4uZm9ybS1jb250cm9se1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlcntcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uYm94LXRpdGxle1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0LXJpZ2h0LWFzaWRlIC5jYXJkLWJvZHl7XG4gIHBhZGRpbmc6IC41cmVtO1xufVxuXG4vKiAuY2hhdC1ibG9ja3tcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn0gKi9cbn1cbi5iYWNrLWFycm93e1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jaGF0LWxpc3QgbGkgLmNoYXQtY29udGVudCBoNSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXQtbGlzdCBsaSAuY2hhdC1jb250ZW50IC5ib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNmY0MmMxO1xufVxuLmNoYXRvbmxpbmUgbGkgYSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiJdfQ== */"];

    /***/
  },

  /***/"./src/app/inbox/inbox.component.ngfactory.js":
  /*!****************************************************!*\
    !*** ./src/app/inbox/inbox.component.ngfactory.js ***!
    \****************************************************/
  /*! exports provided: RenderType_InboxComponent, View_InboxComponent_0, View_InboxComponent_Host_0, InboxComponentNgFactory */
  /***/
  function srcAppInboxInboxComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_InboxComponent", function () {
      return RenderType_InboxComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_InboxComponent_0", function () {
      return View_InboxComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_InboxComponent_Host_0", function () {
      return View_InboxComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "InboxComponentNgFactory", function () {
      return InboxComponentNgFactory;
    });
    /* harmony import */
    var _inbox_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./inbox.component.css.shim.ngstyle */"./src/app/inbox/inbox.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-permissions */"./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
    /* harmony import */
    var _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../shared/loader/loader.component.ngfactory */"./src/app/shared/loader/loader.component.ngfactory.js");
    /* harmony import */
    var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../shared/loader/loader.component */"./src/app/shared/loader/loader.component.ts");
    /* harmony import */
    var _inbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./inbox.component */"./src/app/inbox/inbox.component.ts");
    /* harmony import */
    var _chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./chat.service */"./src/app/inbox/chat.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /* harmony import */
    var _shared_notify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../shared/notify.service */"./src/app/shared/notify.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_InboxComponent = [_inbox_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_InboxComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_InboxComponent,
      data: {}
    });
    function View_InboxComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = (_co.isChat = !_co.isChat) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.onChangeUser(_v.context.$implicit._id) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
        "active": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "chat-img mr-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "img", [["alt", "user-img"], ["class", "img-circle"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", " "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _ck(_v, 4, 0, _v.context.$implicit._id === _co.activeUser);
        _ck(_v, 3, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.getImage(_v.context.$implicit.image);
        _ck(_v, 7, 0, currVal_1);
        var currVal_2 = _v.context.$implicit.name;
        _ck(_v, 9, 0, currVal_2);
      });
    }
    function View_InboxComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "ml-auto btn btn-info waves-effect waves-light m-r-10"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.activeAdmin() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact Admin"]))], null, null);
    }
    function View_InboxComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "chat-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "user"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.getImage(_v.parent.context.$implicit.createdBy.image);
        _ck(_v, 1, 0, currVal_0);
      });
    }
    function View_InboxComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "chat-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", "user"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.getImage(_v.parent.context.$implicit.createdBy.image);
        _ck(_v, 1, 0, currVal_0);
      });
    }
    function View_InboxComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "li", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        "reverse": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InboxComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 7, "div", [["class", "chat-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "box bg-light-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "chat-time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](13, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InboxComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _ck(_v, 3, 0, _v.context.$implicit.createdBy._id !== _co.currentUser._id);
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _v.context.$implicit.createdBy._id === _co.currentUser._id;
        _ck(_v, 5, 0, currVal_1);
        var currVal_5 = _v.context.$implicit.createdBy._id !== _co.currentUser._id;
        _ck(_v, 15, 0, currVal_5);
      }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit == null ? null : _v.context.$implicit.createdBy == null ? null : _v.context.$implicit.createdBy.name;
        _ck(_v, 8, 0, currVal_2);
        var currVal_3 = _v.context.$implicit == null ? null : _v.context.$implicit.message;
        _ck(_v, 10, 0, currVal_3);
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit == null ? null : _v.context.$implicit.date, "MMM d, h:mm a"));
        _ck(_v, 12, 0, currVal_4);
      });
    }
    function View_InboxComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ul", [["class", "chat-list p-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InboxComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.chat;
        _ck(_v, 2, 0, currVal_0);
      }, null);
    }
    function View_InboxComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 46, "div", [["class", "chat-main-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 18, "div", [["class", "chat-left-aside"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
        "chat-none": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "open-panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "ti-angle-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "div", [["class", "chat-left-inner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "form-material"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "input", [["class", "form-control p-2"], ["placeholder", "Search Contact"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        if ("ngModelChange" === en) {
          var pd_4 = (_co.friendSerach = $event) !== false;
          ad = pd_4 && ad;
        }
        if ("keyup" === en) {
          var pd_5 = _co.getFriendSearhList() !== false;
          ad = pd_5 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "div", [["class", "left-scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 3, "ul", [["class", "chatonline style-none "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InboxComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "li", [["class", "p-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 26, "div", [["class", "chat-right-aside chat-menu chat-none"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](23, {
        "d-block": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 7, "div", [["class", "chat-main-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 6, "div", [["class", "p-md-3 p-2 b-b d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "span", [["class", "fa fa-arrow-left back-arrow d-md-none d-block"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = (_co.isChat = !_co.isChat) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "h4", [["class", "box-title mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Chat Message"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_InboxComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](31, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, [[1, 0], ["scrollMe", 1]], null, 2, "div", [["class", "chat-rboxc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InboxComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 11, "div", [["class", "card-body border-top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 10, "div", [["class", "row align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 6, "div", [["class", "col-8 pr-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 5, "textarea", [["class", "form-control border-0"], ["placeholder", "Type your message here"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        if ("ngModelChange" === en) {
          var pd_4 = (_co.message = $event) !== false;
          ad = pd_4 && ad;
        }
        if ("keyup" === en) {
          var pd_5 = _co.keyDown($event) !== false;
          ad = pd_5 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 2, "div", [["class", "col-4 text-right pl-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "button", [["class", "btn btn-info btn-circle btn-lg"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.sendMessage() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "i", [["class", "fas fa-paper-plane"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "chat-left-aside";
        var currVal_1 = _ck(_v, 4, 0, _co.isChat);
        _ck(_v, 3, 0, currVal_0, currVal_1);
        var currVal_9 = _co.friendSerach;
        _ck(_v, 12, 0, currVal_9);
        var currVal_10 = _co.friendSerachList;
        _ck(_v, 18, 0, currVal_10);
        var currVal_11 = "chat-right-aside chat-menu chat-none";
        var currVal_12 = _ck(_v, 23, 0, _co.isChat);
        _ck(_v, 22, 0, currVal_11, currVal_12);
        var currVal_13 = _ck(_v, 31, 0, "hospital");
        _ck(_v, 30, 0, currVal_13);
        var currVal_14 = _co.chat;
        _ck(_v, 34, 0, currVal_14);
        var currVal_22 = _co.message;
        _ck(_v, 41, 0, currVal_22);
      }, function (_ck, _v) {
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassUntouched;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassTouched;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPristine;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassDirty;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassValid;
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassInvalid;
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPending;
        _ck(_v, 9, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassUntouched;
        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassTouched;
        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPristine;
        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassDirty;
        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassValid;
        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassInvalid;
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPending;
        _ck(_v, 38, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);
      });
    }
    function View_InboxComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "loader", [], null, null, null, _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_Loader_0"], _shared_loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_Loader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["Loader"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    function View_InboxComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, {
        scrollMe: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "card m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InboxComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_InboxComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.isLoader;
        _ck(_v, 7, 0, currVal_0);
        var currVal_1 = _co.isLoader;
        _ck(_v, 9, 0, currVal_1);
      }, null);
    }
    function View_InboxComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-inbox", [], null, null, null, View_InboxComponent_0, RenderType_InboxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8503296, null, 0, _inbox_component__WEBPACK_IMPORTED_MODULE_7__["InboxComponent"], [_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _shared_notify_service__WEBPACK_IMPORTED_MODULE_11__["NotifyService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var InboxComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-inbox", _inbox_component__WEBPACK_IMPORTED_MODULE_7__["InboxComponent"], View_InboxComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/inbox/inbox.component.ts":
  /*!******************************************!*\
    !*** ./src/app/inbox/inbox.component.ts ***!
    \******************************************/
  /*! exports provided: InboxComponent */
  /***/
  function srcAppInboxInboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "InboxComponent", function () {
      return InboxComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/environments/environment */"./src/environments/environment.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var InboxComponent = /*#__PURE__*/function () {
      function InboxComponent(chatService, route, authService, noti) {
        var _this28 = this;
        _classCallCheck(this, InboxComponent);
        this.chatService = chatService;
        this.route = route;
        this.authService = authService;
        this.noti = noti;
        this.isLoader = false;
        this.isChat = false;
        this.friendSerach = "";
        this.friendSerachList = [];
        this.friendsList = [];
        this.activeUser = null;
        this.chat = [];
        this.pageSize = 5;
        this.pageNo = 0;
        this.message = '';
        this.currentUser = null;
        this.currentUser = this.authService.currentUserValue;
        this.route.params.subscribe(function (params) {
          if (params['id']) {
            _this28.activeUser = params['id'];
          }
        });
        this.isLoader = true;
        this.chatService.getfriends().subscribe(function (res) {
          console.log('here', res);
          if (res && +res.status === 200) {
            _this28.friendsList = res.data.friends;
            _this28.friendSerachList = _this28.friendsList;
            if (_this28.friendsList && _this28.friendsList.length > 0 && (_this28.activeUser === null || _this28.friendsList.findIndex(function (e) {
              return e._id === _this28.activeUser;
            }) === -1)) {
              _this28.activeUser = _this28.friendsList[0]._id;
              _this28.getChatHistory();
            }
            _this28.isLoader = false;
          }
        }, function (err) {
          console.log(err.message);
        });
      }
      _createClass(InboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;
          this.chatService.getMessage().subscribe(function (data) {
            console.log('msg recived', data);
            if (_this29.activeUser === data.createdBy._id) {
              _this29.chat.push(data);
            }
          });
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToBottom();
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
          } catch (err) {}
        }
      }, {
        key: "getImage",
        value: function getImage(image) {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url + image;
        }
        // swaps two elements of array
      }, {
        key: "swapArray",
        value: function swapArray(Swap1, Swap2) {
          var temp = this.friendsList[Swap1];
          this.friendsList[Swap1] = this.friendsList[Swap2];
          this.friendsList[Swap2] = temp;
        }
      }, {
        key: "onChangeUser",
        value: function onChangeUser(id) {
          this.activeUser = id;
          var index = this.friendsList.findIndex(function (x) {
            return x._id === id;
          });
          if (index !== 0) {
            this.swapArray(index, 0);
          }
          this.getChatHistory();
        }
      }, {
        key: "getChatHistory",
        value: function getChatHistory() {
          var _this30 = this;
          this.chatService.getHistory(this.activeUser, this.pageSize, this.pageNo).subscribe(function (res) {
            console.log('Chat history', res);
            if (+res.status === 200) {
              _this30.chat = res.data.chat;
            }
          });
        }
      }, {
        key: "keyDown",
        value: function keyDown(event) {
          if (event.keyCode === 13) {
            this.message = this.message.slice(0, -1);
            this.sendMessage();
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var chatObj = {
            createdBy: this.authService.currentUserValue._id,
            sentTo: this.activeUser,
            message: this.message,
            date: new Date(Date.now()).toISOString()
          };
          if (!this.activeUser) {
            this.noti.info("Can;t send message without Recepient");
            this.message = "";
            return;
          }
          console.log('chatObj.date', chatObj.date);
          this.chatService.sendMessage(chatObj);
          this.message = '';
          this.chat.push(Object.assign({}, chatObj, {
            createdBy: {
              _id: chatObj.createdBy,
              name: this.authService.currentUserValue.name,
              image: this.authService.currentUserValue.image
            }
          }));
        }
      }, {
        key: "getFriendSearhList",
        value: function getFriendSearhList() {
          if (this.friendSerach == null || this.friendSerach == "") {
            this.friendSerachList = this.friendsList;
          } else {
            this.friendSerachList = [];
            for (var i = 0; i < this.friendsList.length; i++) {
              if (this.friendsList[i].name.toLowerCase().includes(this.friendSerach.toLowerCase())) {
                this.friendSerachList.push(this.friendsList[i]);
              }
            }
          }
        }
      }, {
        key: "activeAdmin",
        value: function activeAdmin() {
          if (this.friendsList && this.friendsList.length > 0) {
            for (var i = 0; i < this.friendsList.length; i++) {
              if (this.friendsList[i].role === 'admin') {
                this.onChangeUser(this.friendsList[i]._id);
                return;
              }
            }
          }
        }
      }]);
      return InboxComponent;
    }();
    /***/
  },
  /***/"./src/app/landing/landing.component.css.shim.ngstyle.js":
  /*!***************************************************************!*\
    !*** ./src/app/landing/landing.component.css.shim.ngstyle.js ***!
    \***************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppLandingLandingComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["#content[_ngcontent-%COMP%] {\n    width: 100%; \n}\n.header-logo[_ngcontent-%COMP%]   .m-span[_ngcontent-%COMP%]{\n    color: white;\n    font-size: 3rem;\n    font-weight: lighter;\n}\n.header-logo[_ngcontent-%COMP%]   .ed-span[_ngcontent-%COMP%]{\n    color: white;\n    font-size: 1.5rem;\n    font-weight: lighter;\n}\n.header-logo[_ngcontent-%COMP%]   .fest-span[_ngcontent-%COMP%]{\n    color: white;\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n.table[_ngcontent-%COMP%] { \n    display: table; \n    width: 100%; \n    margin-top: 10%; \n}\n.table[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%] { \n    display: table-cell; \n    vertical-align: top; \n}\n.table[_ngcontent-%COMP%]   .table-cell.space3[_ngcontent-%COMP%] { \n    width: 33%; \n}\n.button-cell[_ngcontent-%COMP%] { \n    margin: 0 auto 0 auto; \n    width: 200px; \n}\n.button-cell[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%] { \n    width: 200px; \n    height: 200px; \n    display: table-cell; \n    position: relative; \n    border-radius: 50%; }\n.button-cell[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%] { \n    width: 125px; \n    height: 125px; \n    margin: 37px; \n    vertical-align: middle; \n    border-radius: 50%; \n    transition: all 0.3s ease; \n}\n.button-cell[_ngcontent-%COMP%]:hover   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%] { \n    width: 170px; \n    height: 170px; \n    margin: 15px;  \n}\n.button-cell[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%]   .button-header-child[_ngcontent-%COMP%] { \n    width: 100px; \n    height: 100px; \n    position: absolute; \n    left: 50px; top: 50px; \n}\n.button-cell[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%]   .button-header-child[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { \n    width: 100px; \n    height: 100px; \n    transition: all 0.3s ease; \n}\n.button-cell[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] { \n    text-align: center; \n    font-size: 25px; \n    padding-top: 20px; \n    margin-top: 20px; \n    padding: 10px 10px; \n    transition: all 0.3s ease; \n    color: #646464; \n}\n.button-cell[_ngcontent-%COMP%]:hover   .button-text[_ngcontent-%COMP%] { \n    background: #ccc; \n    color: #000; \n}\n.color1[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%] { \n    background: #476367; \n    border: 3px solid #314547;\n    cursor: pointer; \n}\n.color1[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%] { \n    background: #314547; \n}\n.color2[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%] { \n    background: #BA4437; \n    border: 3px solid #873228;\n    cursor: pointer;  \n}\n.color2[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%] { \n    background: #873228; \n}\n.color3[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%] { \n    background: #DFC142; \n    border: 3px solid #BDA338; \n    cursor: pointer; \n}\n.color3[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%] { \n    background: #BDA338; \n}\n.floatRight[_ngcontent-%COMP%] { \n    margin-right:0;\n}\n.floatLeft[_ngcontent-%COMP%] { \n    margin-left:0; \n}\n.header[_ngcontent-%COMP%] { \n    overflow: hidden; \n    width: 100%; \n    height: 100px; \n    background: #6f42c1; \n}\n.header[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%] { \n    display: table-cell; \n    vertical-align: middle; \n    height: 100px; \n    padding-left: 20px; \n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover { \n    text-decoration: none; \n    cursor: default;\n}\n@media screen and (max-width: 800px) {\n    .table[_ngcontent-%COMP%]   .table-cell[_ngcontent-%COMP%] { \n        display: block; \n    }\n    .floatRight[_ngcontent-%COMP%] {\n        margin-right:auto;\n    }\n    .floatLeft[_ngcontent-%COMP%] { \n        margin-left:auto; \n    }\n    .table[_ngcontent-%COMP%]   .table-cell.space3[_ngcontent-%COMP%] { \n        width: 100%; \n    }\n    .table[_ngcontent-%COMP%] { \n        margin-top: 20px; \n    }\n    .button-cell[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] { \n        margin-bottom: 20px;  \n    }\n}\n@media screen and (max-width: 450px) {\n    .button-cell[_ngcontent-%COMP%] { \n        margin: 0 auto 20px auto; \n        width: 150px; \n    }\n    .button-cell[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%] { \n        width: 150px; \n        height: 150px; \n        display: table-cell; \n        position: relative; \n        border-radius: 50%; }\n    .button-cell[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%] { \n        width: 100px; \n        height: 100px; \n        margin: 25px; \n        vertical-align: middle; \n        border-radius: 50%; transition: all 0.3s ease; \n    }\n    .button-cell[_ngcontent-%COMP%]:hover   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%] { \n        width: 130px; \n        height: 130px; \n        margin: 10px;  \n    }\n    .button-cell[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%]   .button-header-child[_ngcontent-%COMP%] { \n        width: 50px; \n        height: 50px; \n        position: absolute; \n        left: 50px; \n        top: 50px; \n    }\n    .button-cell[_ngcontent-%COMP%]   .button-header[_ngcontent-%COMP%]   .button-header-parent[_ngcontent-%COMP%]   .button-header-child[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { \n        width: 50px; \n        height: 50px; \n        transition: all 0.3s ease; \n    }\n    \n    \n    .button-cell[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] { \n        text-align: center; \n        font-size: 15px; \n        padding-top: 20px; \n        margin-top: 20px; \n        padding: 10px 10px; \n        transition: all 0.3s ease;  \n    }\n    .button-cell[_ngcontent-%COMP%]:hover   .button-text[_ngcontent-%COMP%] { \n        background: #ccc; \n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUlsQixrQkFBa0IsRUFBRTtBQUN4QjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUl0QixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVUsRUFBRSxTQUFTO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO1FBQ3hCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUlsQixrQkFBa0IsRUFBRTtJQUN4QjtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsWUFBWTtRQUNaLHNCQUFzQjtRQUl0QixrQkFBa0IsRUFBRSx5QkFBeUI7SUFDakQ7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWix5QkFBeUI7SUFDN0I7SUFDQTtzSEFDa0g7SUFDbEgsNkpBQTZKO0lBQzdKO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNjb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTsgXG59XG4uaGVhZGVyLWxvZ28gLm0tc3BhbntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuLmhlYWRlci1sb2dvIC5lZC1zcGFue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi5oZWFkZXItbG9nbyAuZmVzdC1zcGFue1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50YWJsZSB7IFxuICAgIGRpc3BsYXk6IHRhYmxlOyBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgbWFyZ2luLXRvcDogMTAlOyBcbn1cbi50YWJsZSAudGFibGUtY2VsbCB7IFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7IFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IFxufVxuLnRhYmxlIC50YWJsZS1jZWxsLnNwYWNlMyB7IFxuICAgIHdpZHRoOiAzMyU7IFxufVxuXG4uYnV0dG9uLWNlbGwgeyBcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87IFxuICAgIHdpZHRoOiAyMDBweDsgXG59XG4uYnV0dG9uLWNlbGwgLmJ1dHRvbi1oZWFkZXIgeyBcbiAgICB3aWR0aDogMjAwcHg7IFxuICAgIGhlaWdodDogMjAwcHg7IFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgIC1raHRtbC1ib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxuLmJ1dHRvbi1jZWxsIC5idXR0b24taGVhZGVyIC5idXR0b24taGVhZGVyLXBhcmVudCB7IFxuICAgIHdpZHRoOiAxMjVweDsgXG4gICAgaGVpZ2h0OiAxMjVweDsgXG4gICAgbWFyZ2luOiAzN3B4OyBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlOyBcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgLWtodG1sLWJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyBcbn1cbi5idXR0b24tY2VsbDpob3ZlciAuYnV0dG9uLWhlYWRlciAuYnV0dG9uLWhlYWRlci1wYXJlbnQgeyBcbiAgICB3aWR0aDogMTcwcHg7IFxuICAgIGhlaWdodDogMTcwcHg7IFxuICAgIG1hcmdpbjogMTVweDsgIFxufVxuLmJ1dHRvbi1jZWxsIC5idXR0b24taGVhZGVyIC5idXR0b24taGVhZGVyLXBhcmVudCAuYnV0dG9uLWhlYWRlci1jaGlsZCB7IFxuICAgIHdpZHRoOiAxMDBweDsgXG4gICAgaGVpZ2h0OiAxMDBweDsgXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICBsZWZ0OiA1MHB4OyB0b3A6IDUwcHg7IFxufVxuLmJ1dHRvbi1jZWxsIC5idXR0b24taGVhZGVyIC5idXR0b24taGVhZGVyLXBhcmVudCAuYnV0dG9uLWhlYWRlci1jaGlsZCBpbWcgeyBcbiAgICB3aWR0aDogMTAwcHg7IFxuICAgIGhlaWdodDogMTAwcHg7IFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IFxufVxuLmJ1dHRvbi1jZWxsIC5idXR0b24tdGV4dCB7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZm9udC1zaXplOiAyNXB4OyBcbiAgICBwYWRkaW5nLXRvcDogMjBweDsgXG4gICAgbWFyZ2luLXRvcDogMjBweDsgXG4gICAgcGFkZGluZzogMTBweCAxMHB4OyBcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyBcbiAgICBjb2xvcjogIzY0NjQ2NDsgXG59XG4uYnV0dG9uLWNlbGw6aG92ZXIgLmJ1dHRvbi10ZXh0IHsgXG4gICAgYmFja2dyb3VuZDogI2NjYzsgXG4gICAgY29sb3I6ICMwMDA7IFxufVxuLmNvbG9yMSAuYnV0dG9uLWhlYWRlciB7IFxuICAgIGJhY2tncm91bmQ6ICM0NzYzNjc7IFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzMTQ1NDc7XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1cbi5jb2xvcjEgLmJ1dHRvbi1oZWFkZXIgLmJ1dHRvbi1oZWFkZXItcGFyZW50IHsgXG4gICAgYmFja2dyb3VuZDogIzMxNDU0NzsgXG59XG4uY29sb3IyIC5idXR0b24taGVhZGVyIHsgXG4gICAgYmFja2dyb3VuZDogI0JBNDQzNzsgXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzg3MzIyODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICBcbn1cbi5jb2xvcjIgLmJ1dHRvbi1oZWFkZXIgLmJ1dHRvbi1oZWFkZXItcGFyZW50IHsgXG4gICAgYmFja2dyb3VuZDogIzg3MzIyODsgXG59XG4uY29sb3IzIC5idXR0b24taGVhZGVyIHsgXG4gICAgYmFja2dyb3VuZDogI0RGQzE0MjsgXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0JEQTMzODsgXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1cbi5jb2xvcjMgLmJ1dHRvbi1oZWFkZXIgLmJ1dHRvbi1oZWFkZXItcGFyZW50IHsgXG4gICAgYmFja2dyb3VuZDogI0JEQTMzODsgXG59XG5cbi5mbG9hdFJpZ2h0IHsgXG4gICAgbWFyZ2luLXJpZ2h0OjA7XG59XG4uZmxvYXRMZWZ0IHsgXG4gICAgbWFyZ2luLWxlZnQ6MDsgXG59XG4uaGVhZGVyIHsgXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogMTAwcHg7IFxuICAgIGJhY2tncm91bmQ6ICM2ZjQyYzE7IFxufVxuLmhlYWRlciAuaGVhZGVyLWxvZ28geyBcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsOyBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcbiAgICBoZWlnaHQ6IDEwMHB4OyBcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IFxufVxuXG5hLCBhOnZpc2l0ZWQsIGE6aG92ZXIgeyBcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLnRhYmxlIC50YWJsZS1jZWxsIHsgXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICB9XG4gICAgLmZsb2F0UmlnaHQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgICB9XG4gICAgLmZsb2F0TGVmdCB7IFxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcbiAgICB9XG4gICAgLnRhYmxlIC50YWJsZS1jZWxsLnNwYWNlMyB7IFxuICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgfVxuICAgIC50YWJsZSB7IFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyBcbiAgICB9XG4gICAgLmJ1dHRvbi1jZWxsIC5idXR0b24tdGV4dCB7IFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyAgXG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5idXR0b24tY2VsbCB7IFxuICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4IGF1dG87IFxuICAgICAgICB3aWR0aDogMTUwcHg7IFxuICAgIH1cbiAgICAuYnV0dG9uLWNlbGwgLmJ1dHRvbi1oZWFkZXIgeyBcbiAgICAgICAgd2lkdGg6IDE1MHB4OyBcbiAgICAgICAgaGVpZ2h0OiAxNTBweDsgXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7IFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlOyBcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgICAgICAta2h0bWwtYm9yZGVyLXJhZGl1czogNTAlOyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG4gICAgLmJ1dHRvbi1jZWxsIC5idXR0b24taGVhZGVyIC5idXR0b24taGVhZGVyLXBhcmVudCB7IFxuICAgICAgICB3aWR0aDogMTAwcHg7IFxuICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcbiAgICAgICAgbWFyZ2luOiAyNXB4OyBcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTsgXG4gICAgICAgIC1raHRtbC1ib3JkZXItcmFkaXVzOiA1MCU7IFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IFxuICAgIH1cbiAgICAuYnV0dG9uLWNlbGw6aG92ZXIgLmJ1dHRvbi1oZWFkZXIgLmJ1dHRvbi1oZWFkZXItcGFyZW50IHsgXG4gICAgICAgIHdpZHRoOiAxMzBweDsgXG4gICAgICAgIGhlaWdodDogMTMwcHg7IFxuICAgICAgICBtYXJnaW46IDEwcHg7ICBcbiAgICB9XG4gICAgLmJ1dHRvbi1jZWxsIC5idXR0b24taGVhZGVyIC5idXR0b24taGVhZGVyLXBhcmVudCAuYnV0dG9uLWhlYWRlci1jaGlsZCB7IFxuICAgICAgICB3aWR0aDogNTBweDsgXG4gICAgICAgIGhlaWdodDogNTBweDsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGxlZnQ6IDUwcHg7IFxuICAgICAgICB0b3A6IDUwcHg7IFxuICAgIH1cbiAgICAuYnV0dG9uLWNlbGwgLmJ1dHRvbi1oZWFkZXIgLmJ1dHRvbi1oZWFkZXItcGFyZW50IC5idXR0b24taGVhZGVyLWNoaWxkIGltZyB7IFxuICAgICAgICB3aWR0aDogNTBweDsgXG4gICAgICAgIGhlaWdodDogNTBweDsgXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IFxuICAgIH1cbiAgICAvKi5idXR0b24tY2VsbCAuYnV0dG9uLWhlYWRlcjpob3ZlciAuYnV0dG9uLWhlYWRlci1wYXJlbnQgLmJ1dHRvbi1oZWFkZXItY2hpbGQgeyB3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMHB4OyB0b3A6IDBweDsgfVxuICAgIC5idXR0b24tY2VsbCAuYnV0dG9uLWhlYWRlcjpob3ZlciAuYnV0dG9uLWhlYWRlci1wYXJlbnQgLmJ1dHRvbi1oZWFkZXItY2hpbGQgaW1nIHsgd2lkdGg6IDIwMHB4OyBoZWlnaHQ6IDIwMHB4OyB9Ki9cbiAgICAvKi5idXR0b24tY2VsbCAuYnV0dG9uLWhlYWRlciAuYnV0dG9uLWhlYWRlci1wYXJlbnQgLmJ1dHRvbi1oZWFkZXItY2hpbGQgLmJ1dHRvbi1pY29uIHsgd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBtYXJnaW46IGF1dG87IH0qL1xuICAgIC5idXR0b24tY2VsbCAuYnV0dG9uLXRleHQgeyBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgZm9udC1zaXplOiAxNXB4OyBcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7IFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyBcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4OyBcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgIFxuICAgIH1cbiAgICAuYnV0dG9uLWNlbGw6aG92ZXIgLmJ1dHRvbi10ZXh0IHsgXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7IFxuICAgIH1cbn0iXX0= */"];

    /***/
  },

  /***/"./src/app/landing/landing.component.ngfactory.js":
  /*!********************************************************!*\
    !*** ./src/app/landing/landing.component.ngfactory.js ***!
    \********************************************************/
  /*! exports provided: RenderType_LandingComponent, View_LandingComponent_0, View_LandingComponent_Host_0, LandingComponentNgFactory */
  /***/
  function srcAppLandingLandingComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_LandingComponent", function () {
      return RenderType_LandingComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_LandingComponent_0", function () {
      return View_LandingComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_LandingComponent_Host_0", function () {
      return View_LandingComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LandingComponentNgFactory", function () {
      return LandingComponentNgFactory;
    });
    /* harmony import */
    var _landing_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./landing.component.css.shim.ngstyle */"./src/app/landing/landing.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./landing.component */"./src/app/landing/landing.component.ts");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_LandingComponent = [_landing_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_LandingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_LandingComponent,
      data: {}
    });
    function View_LandingComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 39, "div", [["id", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "header-logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "a", [["href", "javascript:void(0)"], ["style", "color: white;font-size: x-large;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "img", [["alt", ""], ["height", "60"], ["src", "../assets/logo.png"], ["width", "70"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "span", [["class", "hidden-xs"], ["style", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Med"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [["class", "font-bold"], ["style", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fest"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 30, "div", [["class", "table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 9, "div", [["class", "table-cell space3"], ["routerLink", "/login"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 7, "a", [["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "div", [["class", "button-cell color1 floatRight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "div", [["class", "button-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [["class", "button-header-parent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "div", [["class", "button-header-child"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "img", [["src", "../../assets/images/Patient.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["class", "button-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Patients "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 9, "div", [["class", "table-cell space3"], ["routerLink", "/login"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onClick() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 7, "a", [["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 6, "div", [["class", "button-cell color2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "div", [["class", "button-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "div", [["class", "button-header-parent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "div", [["class", "button-header-child"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "img", [["src", "../../assets/images/Doctor.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "div", [["class", "button-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Doctors "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 9, "div", [["class", "table-cell space3"], ["routerLink", "/login"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 7, "a", [["href", "javascript:void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 6, "div", [["class", "button-cell color3 floatLeft"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 3, "div", [["class", "button-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "div", [["class", "button-header-parent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "div", [["class", "button-header-child"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "img", [["src", "../../assets/images/Hospital.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "div", [["class", "button-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Hospital "]))], function (_ck, _v) {
        var currVal_0 = "/login";
        _ck(_v, 11, 0, currVal_0);
        var currVal_1 = "/login";
        _ck(_v, 21, 0, currVal_1);
        var currVal_2 = "/login";
        _ck(_v, 31, 0, currVal_2);
      }, null);
    }
    function View_LandingComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-landing", [], null, null, null, View_LandingComponent_0, RenderType_LandingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var LandingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-landing", _landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"], View_LandingComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/
  /*! exports provided: LandingComponent */
  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent(router, authService) {
        _classCallCheck(this, LandingComponent);
        this.router = router;
        this.authService = authService;
      }
      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // redirect to home if already logged in
          if (this.authService.currentUserValue) {
            this.router.navigate(['/app']);
          }
        }
      }]);
      return LandingComponent;
    }();
    /***/
  },
  /***/"./src/app/loader/loader.component.css.shim.ngstyle.js":
  /*!*************************************************************!*\
    !*** ./src/app/loader/loader.component.css.shim.ngstyle.js ***!
    \*************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppLoaderLoaderComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"];

    /***/
  },

  /***/"./src/app/loader/loader.component.ngfactory.js":
  /*!******************************************************!*\
    !*** ./src/app/loader/loader.component.ngfactory.js ***!
    \******************************************************/
  /*! exports provided: RenderType_LoaderComponent, View_LoaderComponent_0, View_LoaderComponent_Host_0, LoaderComponentNgFactory */
  /***/
  function srcAppLoaderLoaderComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_LoaderComponent", function () {
      return RenderType_LoaderComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_LoaderComponent_0", function () {
      return View_LoaderComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_LoaderComponent_Host_0", function () {
      return View_LoaderComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoaderComponentNgFactory", function () {
      return LoaderComponentNgFactory;
    });
    /* harmony import */
    var _loader_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./loader.component.css.shim.ngstyle */"./src/app/loader/loader.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./loader.component */"./src/app/loader/loader.component.ts");
    /* harmony import */
    var _shared_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/loader.service */"./src/app/shared/loader.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_LoaderComponent = [_loader_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_LoaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_LoaderComponent,
      data: {}
    });
    function View_LoaderComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "preloader"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "loader"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "loader__figure"]], null, null, null, null, null))], null, null);
    }
    function View_LoaderComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.loading;
        _ck(_v, 1, 0, currVal_0);
      }, null);
    }
    function View_LoaderComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loader", [], null, null, null, View_LoaderComponent_0, RenderType_LoaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], [_shared_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var LoaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-loader", _loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], View_LoaderComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/loader/loader.component.ts":
  /*!********************************************!*\
    !*** ./src/app/loader/loader.component.ts ***!
    \********************************************/
  /*! exports provided: LoaderComponent */
  /***/
  function srcAppLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent(load) {
        _classCallCheck(this, LoaderComponent);
        this.load = load;
        this.loading = false;
      }
      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;
          // this.load.getLoad().subscribe(asd => this.loading = asd);
          this.load.loading.subscribe(function (v) {
            _this31.loading = v;
          });
        }
      }]);
      return LoaderComponent;
    }();
    /***/
  },
  /***/"./src/app/login/login.component.css.shim.ngstyle.js":
  /*!***********************************************************!*\
    !*** ./src/app/login/login.component.css.shim.ngstyle.js ***!
    \***********************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppLoginLoginComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);\n\n\n\n\n.login-register[_ngcontent-%COMP%] {\n  \n  height: 100%;\n  width: 100%;\n  padding: 10% 0;\n  position: fixed;\n }\n.login-box[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto; }\n.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 30px; }\n#recoverform[_ngcontent-%COMP%] {\n  display: none; }\n.login-sidebar[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-top: 0px; }\n.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\n    right: 0px;\n    position: absolute;\n    height: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsZ0ZBQWdGO0FBTmhGOzs7OztDQUtDO0FBRUQsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFO0FBQ0Y7O2tCQUVrQjtBQUNsQjtFQUNFOzt1Q0FFcUM7RUFDckMsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBRTtBQUNoQjtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVSxFQUFFO0FBQ2Q7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CLEVBQUU7QUFFekI7RUFDRSxhQUFhLEVBQUU7QUFFakI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFFO0FBQ2pCO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRlbXBsYXRlIE5hbWU6IEFkbWluIFRlbXBsYXRlXG5BdXRob3I6IFdyYXBwaXhlbFxuXG5GaWxlOiBzY3NzXG4qL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMCk7XG4vKlRoZW1lIENvbG9ycyovXG4vKipcbiAqIFRhYmxlIE9mIENvbnRlbnRcbiAqXG4gKiBcdDEuIENvbG9yIHN5c3RlbVxuICpcdDIuIE9wdGlvbnNcbiAqXHQzLiBCb2R5XG4gKlx0NC4gVHlwb2dyYXBoeVxuICpcdDUuIEJyZWFkY3J1bWJzXG4gKlx0Ni4gQ2FyZHNcbiAqXHQ3LiBEcm9wZG93bnNcbiAqXHQ4LiBCdXR0b25zXG4gKlx0OS4gVHlwb2dyYXBoeVxuICpcdDEwLiBQcm9ncmVzcyBiYXJzXG4gKlx0MTEuIFRhYmxlc1xuICpcdDEyLiBGb3Jtc1xuICpcdDE0LiBDb21wb25lbnRcbiAqL1xuLyoqKioqKioqKioqKioqKioqKipcbkxvZ2luIHJlZ2lzdGVyIGFuZCByZWNvdmVyIHBhc3N3b3JkIFBhZ2VcbioqKioqKioqKioqKioqKioqKi9cbi5sb2dpbi1yZWdpc3RlciB7XG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwJSAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gfVxuXG4ubG9naW4tYm94IHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuICAubG9naW4tYm94IC5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4OyB9XG4gIC5sb2dpbi1ib3ggLnNvY2lhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuXG4jcmVjb3ZlcmZvcm0ge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5sb2dpbi1zaWRlYmFyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7IH1cbiAgLmxvZ2luLXNpZGViYXIgLmxvZ2luLWJveCB7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4iXX0= */"];

    /***/
  },

  /***/"./src/app/login/login.component.ngfactory.js":
  /*!****************************************************!*\
    !*** ./src/app/login/login.component.ngfactory.js ***!
    \****************************************************/
  /*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */
  /***/
  function srcAppLoginLoginComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function () {
      return RenderType_LoginComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function () {
      return View_LoginComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function () {
      return View_LoginComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function () {
      return LoginComponentNgFactory;
    });
    /* harmony import */
    var _login_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./login.component.css.shim.ngstyle */"./src/app/login/login.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./login.component */"./src/app/login/login.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _shared_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../shared/loader.service */"./src/app/shared/loader.service.ts");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_LoginComponent = [_login_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_LoginComponent,
      data: {}
    });
    function View_LoginComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "text-center invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.isIncorrect;
        _ck(_v, 1, 0, currVal_0);
      });
    }
    function View_LoginComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "text-center invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [["class", "forgot-password"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.navigateSendVerificationEmail() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Click Here to Verify your Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null))], null, null);
    }
    function View_LoginComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Username is required"]))], null, null);
    }
    function View_LoginComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.f.username.errors.required;
        _ck(_v, 2, 0, currVal_0);
      }, null);
    }
    function View_LoginComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password is required"]))], null, null);
    }
    function View_LoginComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.f.password.errors.required;
        _ck(_v, 2, 0, currVal_0);
      }, null);
    }
    function View_LoginComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 60, "section", [["id", "wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 59, "div", [["class", "login-register"], ["style", "background-image:url(./assets/images/background/login-register.jpg);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 58, "div", [["class", "login-box card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 57, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 56, "div", [["class", "form-horizontal form-material"], ["id", "loginform"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }
        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h3", [["class", "text-center m-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sign In"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 16, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 8, "input", [["class", "form-control"], ["formControlName", "username"], ["placeholder", "Username"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](19, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 11, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 8, "input", [["class", "form-control"], ["formControlName", "password"], ["placeholder", "Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](32, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 10, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 9, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 8, "div", [["class", "d-flex no-block align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 3, "div", [["class", "custom-control custom-checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 0, "input", [["class", "custom-control-input"], ["id", "customCheck1"], ["type", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "label", [["class", "custom-control-label"], ["for", "customCheck1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Remember me"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 3, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 2, "a", [["class", "text-muted"], ["href", "javascript:void(0)"], ["id", "to-recover"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.naviagteForgot() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 0, "i", [["class", "fas fa-lock m-r-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Forgot pwd?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 3, "div", [["class", "form-group text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 2, "div", [["class", "col-xs-12 p-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "button", [["class", "btn btn-block btn-lg btn-info btn-rounded"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.login() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Log In"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 5, "div", [["class", "form-group m-b-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 4, "div", [["class", "col-sm-12 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Don't have an account? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 2, "a", [["class", "text-info m-l-5"], ["href", "javascript::void(0)"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sign Up"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.form;
        _ck(_v, 5, 0, currVal_7);
        var currVal_8 = _co.isIncorrect;
        _ck(_v, 12, 0, currVal_8);
        var currVal_9 = _co.emailVerify;
        _ck(_v, 14, 0, currVal_9);
        var currVal_17 = "form-control";
        var currVal_18 = _ck(_v, 19, 0, _co.submitted && _co.f.username.errors);
        _ck(_v, 18, 0, currVal_17, currVal_18);
        var currVal_19 = "username";
        _ck(_v, 22, 0, currVal_19);
        var currVal_20 = _co.submitted && _co.f.username.errors;
        _ck(_v, 26, 0, currVal_20);
        var currVal_28 = "form-control";
        var currVal_29 = _ck(_v, 32, 0, _co.submitted && _co.f.password.errors);
        _ck(_v, 31, 0, currVal_28, currVal_29);
        var currVal_30 = "password";
        _ck(_v, 35, 0, currVal_30);
        var currVal_31 = _co.submitted && _co.f.password.errors;
        _ck(_v, 39, 0, currVal_31);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending;
        _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassUntouched;
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassTouched;
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPristine;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassDirty;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassValid;
        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassInvalid;
        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).ngClassPending;
        _ck(_v, 16, 0, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassUntouched;
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassTouched;
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPristine;
        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassDirty;
        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassValid;
        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassInvalid;
        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).ngClassPending;
        _ck(_v, 29, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27);
      });
    }
    function View_LoginComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, [["window", "keydown"]], function (_v, en, $event) {
        var ad = true;
        if ("window:keydown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).handleKeyboardEvent($event) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/
  /*! exports provided: LoginComponent */
  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, route, loader, formBuilder, authService) {
        _classCallCheck(this, LoginComponent);
        this.router = router;
        this.route = route;
        this.loader = loader;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.emailVerify = false;
      }
      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // redirect to home if already logged in
          if (this.authService.currentUserValue) {
            this.router.navigate(['/app']);
          }
          this.create();
        }
        // convenience getter for easy access to form fields
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "create",
        value: function create() {
          this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          if (event.keyCode === 13) {
            this.login();
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this32 = this;
          this.submitted = true;
          if (this.form.invalid) {
            return;
          }
          this.loader.loading.next(true);
          this.authService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (res) {
            console.log(res);
            if (res.status == '200') {
              _this32.goToDashboard();
            }
            _this32.isIncorrect = res.msg;
          }, function (err) {
            if (err.status === 422) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Email Not Verified"
              });
              _this32.isIncorrect = err.error.info;
              _this32.emailVerify = true;
            } else {
              _this32.isIncorrect = 'Username or Password is incorrect.';
            }
          }).add(function () {
            _this32.loader.loading.next(false);
          });
        }
      }, {
        key: "goToDashboard",
        value: function goToDashboard() {
          var route = '/';
          if (this.authService.currentUserValue.role === 'patient') {
            route = "/app/patient/dash";
          } else if (this.authService.currentUserValue.role === 'admin') {
            route = "/app/dash";
          } else if (this.authService.currentUserValue.role === 'hospital') {
            route = "/app/hospitals/dash";
          } else if (this.authService.currentUserValue.role === 'doctor') {
            route = "/app/doctor/dash";
          } else if (this.authService.currentUserValue.role === 'labAttendant') {
            route = "/app/labattendant/dash";
          } else if (this.authService.currentUserValue.role === 'pharmacy') {
            route = "/app/pharmacy/dash";
          } else if (this.authService.currentUserValue.role === 'FDO') {
            route = "/app/fdo/dash";
          }
          this.router.navigate([route]);
        }
      }, {
        key: "naviagteForgot",
        value: function naviagteForgot() {
          this.router.navigate(['/forgot']);
        }
      }, {
        key: "navigateSendVerificationEmail",
        value: function navigateSendVerificationEmail() {
          this.router.navigate(['/sendEmail']);
        }
      }]);
      return LoginComponent;
    }();
    /***/
  },
  /***/"./src/app/ngbshared/ngbshared.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/ngbshared/ngbshared.module.ts ***!
    \***********************************************/
  /*! exports provided: NgbsharedModule */
  /***/
  function srcAppNgbsharedNgbsharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NgbsharedModule", function () {
      return NgbsharedModule;
    });
    var NgbsharedModule = /*#__PURE__*/_createClass(function NgbsharedModule() {
      _classCallCheck(this, NgbsharedModule);
    });
    /***/
  },
  /***/"./src/app/profile/profile.component.css.shim.ngstyle.js":
  /*!***************************************************************!*\
    !*** ./src/app/profile/profile.component.css.shim.ngstyle.js ***!
    \***************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppProfileProfileComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = [".user-bg[_ngcontent-%COMP%]{\n  height: 375px;\n  width: 100%;\n}\n.user-bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\nheight: 100%;\nwidth: 100%;\n-o-object-fit: contain;\n   object-fit: contain;\nborder-bottom: 1px solid lightgray;\n}\n@media (max-width: 767px){\n  .user-bg[_ngcontent-%COMP%]{\n    height: 150px;\n    width: 150px;\n    margin: 5px auto;\n  }\n  .user-bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n  }\n  p[_ngcontent-%COMP%]{\n    margin-bottom: 5px;\n  }\n  .m-t-10[_ngcontent-%COMP%]{\n    margin-top: 5px;\n  }\n  .card[_ngcontent-%COMP%]{\n    border-radius: 10px;\n  }\n  .h-b[_ngcontent-%COMP%]{\n    border: 0 !important;\n  }\n  .mb-10[_ngcontent-%COMP%]{\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYLHNCQUFtQjtHQUFuQixtQkFBbUI7QUFDbkIsa0NBQWtDO0FBQ2xDO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1iZ3tcbiAgaGVpZ2h0OiAzNzVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXNlci1iZyBpbWd7XG5oZWlnaHQ6IDEwMCU7XG53aWR0aDogMTAwJTtcbm9iamVjdC1maXQ6IGNvbnRhaW47XG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcbiAgLnVzZXItYmd7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgfVxuICAudXNlci1iZyBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBwe1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAubS10LTEwe1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5oLWJ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1iLTEwe1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"];

    /***/
  },

  /***/"./src/app/profile/profile.component.ngfactory.js":
  /*!********************************************************!*\
    !*** ./src/app/profile/profile.component.ngfactory.js ***!
    \********************************************************/
  /*! exports provided: RenderType_ProfileComponent, View_ProfileComponent_0, View_ProfileComponent_Host_0, ProfileComponentNgFactory */
  /***/
  function srcAppProfileProfileComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_ProfileComponent", function () {
      return RenderType_ProfileComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_ProfileComponent_0", function () {
      return View_ProfileComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_ProfileComponent_Host_0", function () {
      return View_ProfileComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProfileComponentNgFactory", function () {
      return ProfileComponentNgFactory;
    });
    /* harmony import */
    var _profile_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./profile.component.css.shim.ngstyle */"./src/app/profile/profile.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _shared_pipes_address_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../shared/pipes/address.pipe */"./src/app/shared/pipes/address.pipe.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./profile.component */"./src/app/profile/profile.component.ts");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_ProfileComponent = [_profile_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_ProfileComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ProfileComponent,
      data: {}
    });
    function View_ProfileComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1)], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.admin));
        _ck(_v, 1, 0, currVal_0);
      });
    }
    function View_ProfileComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _shared_pipes_address_pipe__WEBPACK_IMPORTED_MODULE_2__["AddressPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 82, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 31, "div", [["class", "col-lg-4 col-xlg-3 col-md-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 30, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "user-bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["alt", "user"], ["class", "img-responsive card-img"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 27, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 5, "div", [["class", "row text-center m-t-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 4, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 10, "div", [["class", "row text-center m-t-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "div", [["class", "col-md-6 col-6 b-r"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email ID"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "div", [["class", "col-md-6 col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hotline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 5, "div", [["class", "row text-center m-t-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 4, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 49, "div", [["class", "col-lg-8 col-xlg-9 col-md-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 48, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 7, "div", [["style", "padding-top: 10px; padding-right: 10px ;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 6, "ul", [["class", "nav nav-tabs profile-tab"], ["role", "tablist"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 5, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 4, "a", [["class", "nav-link"], ["data-toggle", "tab"], ["href", "javascript::void(0)"], ["role", "tab"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onclickTab(1) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](42, {
        active: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 39, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 38, "div", [["class", "tab-pane "], ["id", "profile"], ["role", "tabpanel"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](48, {
        active: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 34, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 20, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 4, "div", [["class", "col-md-3 col-6 mb-10 b-r"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ID"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 1, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](55, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 4, "div", [["class", "col-md-3 col-6 mb-10 b-r h-b"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hotline"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](60, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 4, "div", [["class", "col-md-3 col-6 b-r"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["City"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 1, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](65, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 4, "div", [["class", "col-md-3 col-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["State"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "p", [["class", "text-muted"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](70, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Biography"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 5, "h4", [["class", "font-medium m-t-30"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status: \xA0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 3, "span", [["class", "label "], ["style", "padding: 10px;"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](83, null, [" ", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_4 = _co.admin;
        _ck(_v, 31, 0, currVal_4);
        var currVal_5 = "nav-link";
        var currVal_6 = _ck(_v, 42, 0, _co.tab === 1);
        _ck(_v, 41, 0, currVal_5, currVal_6);
        var currVal_7 = "tab-pane ";
        var currVal_8 = _ck(_v, 48, 0, _co.tab === 1);
        _ck(_v, 47, 0, currVal_7, currVal_8);
        var currVal_13 = "label ";
        var currVal_14 = _co.admin.active ? "label-success" : "label-primary";
        _ck(_v, 82, 0, currVal_13, currVal_14);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.ImageSrc;
        _ck(_v, 5, 0, currVal_0);
        var currVal_1 = _co.admin.name;
        _ck(_v, 12, 0, currVal_1);
        var currVal_2 = _co.admin.email;
        _ck(_v, 19, 0, currVal_2);
        var currVal_3 = _co.admin.phone;
        _ck(_v, 24, 0, currVal_3);
        var currVal_9 = _co.admin.username;
        _ck(_v, 55, 0, currVal_9);
        var currVal_10 = _co.admin.phone;
        _ck(_v, 60, 0, currVal_10);
        var currVal_11 = _co.admin.city;
        _ck(_v, 65, 0, currVal_11);
        var currVal_12 = _co.admin.state;
        _ck(_v, 70, 0, currVal_12);
        var currVal_15 = _co.admin.active ? "Active" : "Inactive";
        _ck(_v, 83, 0, currVal_15);
      });
    }
    function View_ProfileComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-profile", [], null, null, null, View_ProfileComponent_0, RenderType_ProfileComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var ProfileComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-profile", _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], View_ProfileComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/
  /*! exports provided: ProfileComponent */
  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/environments/environment */"./src/environments/environment.ts");
    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(authService) {
        _classCallCheck(this, ProfileComponent);
        this.authService = authService;
        this.tab = 1;
      }
      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.admin = this.authService.currentUserValue;
        }
      }, {
        key: "ImageSrc",
        get: function get() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url + this.admin.image;
        }
      }, {
        key: "onclickTab",
        value: function onclickTab(tab) {
          this.tab = tab;
        }
      }]);
      return ProfileComponent;
    }();
    /***/
  },
  /***/"./src/app/request-success/request-success.component.css.shim.ngstyle.js":
  /*!*******************************************************************************!*\
    !*** ./src/app/request-success/request-success.component.css.shim.ngstyle.js ***!
    \*******************************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppRequestSuccessRequestSuccessComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = [".success[_ngcontent-%COMP%] {\n  background-color: #007aff;\n  color: #fff;\n  font-size: 100%;\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  height: 100vh;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  font-weight: 300;\n  color: #fff;\n  font-size: 1.2em;\n  text-decoration: none;\n  border: 1px solid #efefef;\n  padding: .5em;\n  border-radius: 3px;\n  margin: 5em 0;\n  position: relative;\n  transition: all .3s linear;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #007aff;\n  color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 2em;\n  text-align: center;\n  font-weight: 100;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 15em;\n  font-weight: 100;\n  text-shadow: #0062cc 1px 1px, #0062cc 2px 2px, #0062cc 3px 3px, #0062cd 4px 4px, #0062cd 5px 5px, #0062cd 6px 6px, #0062cd 7px 7px, #0062ce 8px 8px, #0063ce 9px 9px, #0063ce 10px 10px, #0063ce 11px 11px, #0063cf 12px 12px, #0063cf 13px 13px, #0063cf 14px 14px, #0063cf 15px 15px, #0063d0 16px 16px, #0064d0 17px 17px, #0064d0 18px 18px, #0064d0 19px 19px, #0064d1 20px 20px, #0064d1 21px 21px, #0064d1 22px 22px, #0064d1 23px 23px, #0064d2 24px 24px, #0065d2 25px 25px, #0065d2 26px 26px, #0065d2 27px 27px, #0065d3 28px 28px, #0065d3 29px 29px, #0065d3 30px 30px, #0065d3 31px 31px, #0065d4 32px 32px, #0065d4 33px 33px, #0066d4 34px 34px, #0066d4 35px 35px, #0066d5 36px 36px, #0066d5 37px 37px, #0066d5 38px 38px, #0066d5 39px 39px, #0066d6 40px 40px, #0066d6 41px 41px, #0067d6 42px 42px, #0067d6 43px 43px, #0067d7 44px 44px, #0067d7 45px 45px, #0067d7 46px 46px, #0067d7 47px 47px, #0067d8 48px 48px, #0067d8 49px 49px, #0068d8 50px 50px, #0068d9 51px 51px, #0068d9 52px 52px, #0068d9 53px 53px, #0068d9 54px 54px, #0068da 55px 55px, #0068da 56px 56px, #0068da 57px 57px, #0068da 58px 58px, #0069db 59px 59px, #0069db 60px 60px, #0069db 61px 61px, #0069db 62px 62px, #0069dc 63px 63px, #0069dc 64px 64px, #0069dc 65px 65px, #0069dc 66px 66px, #006add 67px 67px, #006add 68px 68px, #006add 69px 69px, #006add 70px 70px, #006ade 71px 71px, #006ade 72px 72px, #006ade 73px 73px, #006ade 74px 74px, #006bdf 75px 75px, #006bdf 76px 76px, #006bdf 77px 77px, #006bdf 78px 78px, #006be0 79px 79px, #006be0 80px 80px, #006be0 81px 81px, #006be0 82px 82px, #006be1 83px 83px, #006ce1 84px 84px, #006ce1 85px 85px, #006ce1 86px 86px, #006ce2 87px 87px, #006ce2 88px 88px, #006ce2 89px 89px, #006ce2 90px 90px, #006ce3 91px 91px, #006de3 92px 92px, #006de3 93px 93px, #006de3 94px 94px, #006de4 95px 95px, #006de4 96px 96px, #006de4 97px 97px, #006de4 98px 98px, #006de5 99px 99px, #006ee5 100px 100px, #006ee5 101px 101px, #006ee6 102px 102px, #006ee6 103px 103px, #006ee6 104px 104px, #006ee6 105px 105px, #006ee7 106px 106px, #006ee7 107px 107px, #006ee7 108px 108px, #006fe7 109px 109px, #006fe8 110px 110px, #006fe8 111px 111px, #006fe8 112px 112px, #006fe8 113px 113px, #006fe9 114px 114px, #006fe9 115px 115px, #006fe9 116px 116px, #0070e9 117px 117px, #0070ea 118px 118px, #0070ea 119px 119px, #0070ea 120px 120px, #0070ea 121px 121px, #0070eb 122px 122px, #0070eb 123px 123px, #0070eb 124px 124px, #0071eb 125px 125px, #0071ec 126px 126px, #0071ec 127px 127px, #0071ec 128px 128px, #0071ec 129px 129px, #0071ed 130px 130px, #0071ed 131px 131px, #0071ed 132px 132px, #0071ed 133px 133px, #0072ee 134px 134px, #0072ee 135px 135px, #0072ee 136px 136px, #0072ee 137px 137px, #0072ef 138px 138px, #0072ef 139px 139px, #0072ef 140px 140px, #0072ef 141px 141px, #0073f0 142px 142px, #0073f0 143px 143px, #0073f0 144px 144px, #0073f0 145px 145px, #0073f1 146px 146px, #0073f1 147px 147px, #0073f1 148px 148px, #0073f1 149px 149px, #0074f2 150px 150px, #0074f2 151px 151px, #0074f2 152px 152px, #0074f3 153px 153px, #0074f3 154px 154px, #0074f3 155px 155px, #0074f3 156px 156px, #0074f4 157px 157px, #0074f4 158px 158px, #0075f4 159px 159px, #0075f4 160px 160px, #0075f5 161px 161px, #0075f5 162px 162px, #0075f5 163px 163px, #0075f5 164px 164px, #0075f6 165px 165px, #0075f6 166px 166px, #0076f6 167px 167px, #0076f6 168px 168px, #0076f7 169px 169px, #0076f7 170px 170px, #0076f7 171px 171px, #0076f7 172px 172px, #0076f8 173px 173px, #0076f8 174px 174px, #0077f8 175px 175px, #0077f8 176px 176px, #0077f9 177px 177px, #0077f9 178px 178px, #0077f9 179px 179px, #0077f9 180px 180px, #0077fa 181px 181px, #0077fa 182px 182px, #0077fa 183px 183px, #0078fa 184px 184px, #0078fb 185px 185px, #0078fb 186px 186px, #0078fb 187px 187px, #0078fb 188px 188px, #0078fc 189px 189px, #0078fc 190px 190px, #0078fc 191px 191px, #0079fc 192px 192px, #0079fd 193px 193px, #0079fd 194px 194px, #0079fd 195px 195px, #0079fd 196px 196px, #0079fe 197px 197px, #0079fe 198px 198px, #0079fe 199px 199px, #007aff 200px 200px;\n}\n\n@media (max-width:767px){\n  .success[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    margin: 1em 0;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 7em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdC1zdWNjZXNzL3JlcXVlc3Qtc3VjY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwyNUhBQTI1SDtBQUM3NUg7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVxdWVzdC1zdWNjZXNzL3JlcXVlc3Qtc3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWZmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24ge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICBwYWRkaW5nOiAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogNWVtIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWZmO1xuICBjb2xvcjogI2ZmZjtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1ZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHRleHQtc2hhZG93OiAjMDA2MmNjIDFweCAxcHgsICMwMDYyY2MgMnB4IDJweCwgIzAwNjJjYyAzcHggM3B4LCAjMDA2MmNkIDRweCA0cHgsICMwMDYyY2QgNXB4IDVweCwgIzAwNjJjZCA2cHggNnB4LCAjMDA2MmNkIDdweCA3cHgsICMwMDYyY2UgOHB4IDhweCwgIzAwNjNjZSA5cHggOXB4LCAjMDA2M2NlIDEwcHggMTBweCwgIzAwNjNjZSAxMXB4IDExcHgsICMwMDYzY2YgMTJweCAxMnB4LCAjMDA2M2NmIDEzcHggMTNweCwgIzAwNjNjZiAxNHB4IDE0cHgsICMwMDYzY2YgMTVweCAxNXB4LCAjMDA2M2QwIDE2cHggMTZweCwgIzAwNjRkMCAxN3B4IDE3cHgsICMwMDY0ZDAgMThweCAxOHB4LCAjMDA2NGQwIDE5cHggMTlweCwgIzAwNjRkMSAyMHB4IDIwcHgsICMwMDY0ZDEgMjFweCAyMXB4LCAjMDA2NGQxIDIycHggMjJweCwgIzAwNjRkMSAyM3B4IDIzcHgsICMwMDY0ZDIgMjRweCAyNHB4LCAjMDA2NWQyIDI1cHggMjVweCwgIzAwNjVkMiAyNnB4IDI2cHgsICMwMDY1ZDIgMjdweCAyN3B4LCAjMDA2NWQzIDI4cHggMjhweCwgIzAwNjVkMyAyOXB4IDI5cHgsICMwMDY1ZDMgMzBweCAzMHB4LCAjMDA2NWQzIDMxcHggMzFweCwgIzAwNjVkNCAzMnB4IDMycHgsICMwMDY1ZDQgMzNweCAzM3B4LCAjMDA2NmQ0IDM0cHggMzRweCwgIzAwNjZkNCAzNXB4IDM1cHgsICMwMDY2ZDUgMzZweCAzNnB4LCAjMDA2NmQ1IDM3cHggMzdweCwgIzAwNjZkNSAzOHB4IDM4cHgsICMwMDY2ZDUgMzlweCAzOXB4LCAjMDA2NmQ2IDQwcHggNDBweCwgIzAwNjZkNiA0MXB4IDQxcHgsICMwMDY3ZDYgNDJweCA0MnB4LCAjMDA2N2Q2IDQzcHggNDNweCwgIzAwNjdkNyA0NHB4IDQ0cHgsICMwMDY3ZDcgNDVweCA0NXB4LCAjMDA2N2Q3IDQ2cHggNDZweCwgIzAwNjdkNyA0N3B4IDQ3cHgsICMwMDY3ZDggNDhweCA0OHB4LCAjMDA2N2Q4IDQ5cHggNDlweCwgIzAwNjhkOCA1MHB4IDUwcHgsICMwMDY4ZDkgNTFweCA1MXB4LCAjMDA2OGQ5IDUycHggNTJweCwgIzAwNjhkOSA1M3B4IDUzcHgsICMwMDY4ZDkgNTRweCA1NHB4LCAjMDA2OGRhIDU1cHggNTVweCwgIzAwNjhkYSA1NnB4IDU2cHgsICMwMDY4ZGEgNTdweCA1N3B4LCAjMDA2OGRhIDU4cHggNThweCwgIzAwNjlkYiA1OXB4IDU5cHgsICMwMDY5ZGIgNjBweCA2MHB4LCAjMDA2OWRiIDYxcHggNjFweCwgIzAwNjlkYiA2MnB4IDYycHgsICMwMDY5ZGMgNjNweCA2M3B4LCAjMDA2OWRjIDY0cHggNjRweCwgIzAwNjlkYyA2NXB4IDY1cHgsICMwMDY5ZGMgNjZweCA2NnB4LCAjMDA2YWRkIDY3cHggNjdweCwgIzAwNmFkZCA2OHB4IDY4cHgsICMwMDZhZGQgNjlweCA2OXB4LCAjMDA2YWRkIDcwcHggNzBweCwgIzAwNmFkZSA3MXB4IDcxcHgsICMwMDZhZGUgNzJweCA3MnB4LCAjMDA2YWRlIDczcHggNzNweCwgIzAwNmFkZSA3NHB4IDc0cHgsICMwMDZiZGYgNzVweCA3NXB4LCAjMDA2YmRmIDc2cHggNzZweCwgIzAwNmJkZiA3N3B4IDc3cHgsICMwMDZiZGYgNzhweCA3OHB4LCAjMDA2YmUwIDc5cHggNzlweCwgIzAwNmJlMCA4MHB4IDgwcHgsICMwMDZiZTAgODFweCA4MXB4LCAjMDA2YmUwIDgycHggODJweCwgIzAwNmJlMSA4M3B4IDgzcHgsICMwMDZjZTEgODRweCA4NHB4LCAjMDA2Y2UxIDg1cHggODVweCwgIzAwNmNlMSA4NnB4IDg2cHgsICMwMDZjZTIgODdweCA4N3B4LCAjMDA2Y2UyIDg4cHggODhweCwgIzAwNmNlMiA4OXB4IDg5cHgsICMwMDZjZTIgOTBweCA5MHB4LCAjMDA2Y2UzIDkxcHggOTFweCwgIzAwNmRlMyA5MnB4IDkycHgsICMwMDZkZTMgOTNweCA5M3B4LCAjMDA2ZGUzIDk0cHggOTRweCwgIzAwNmRlNCA5NXB4IDk1cHgsICMwMDZkZTQgOTZweCA5NnB4LCAjMDA2ZGU0IDk3cHggOTdweCwgIzAwNmRlNCA5OHB4IDk4cHgsICMwMDZkZTUgOTlweCA5OXB4LCAjMDA2ZWU1IDEwMHB4IDEwMHB4LCAjMDA2ZWU1IDEwMXB4IDEwMXB4LCAjMDA2ZWU2IDEwMnB4IDEwMnB4LCAjMDA2ZWU2IDEwM3B4IDEwM3B4LCAjMDA2ZWU2IDEwNHB4IDEwNHB4LCAjMDA2ZWU2IDEwNXB4IDEwNXB4LCAjMDA2ZWU3IDEwNnB4IDEwNnB4LCAjMDA2ZWU3IDEwN3B4IDEwN3B4LCAjMDA2ZWU3IDEwOHB4IDEwOHB4LCAjMDA2ZmU3IDEwOXB4IDEwOXB4LCAjMDA2ZmU4IDExMHB4IDExMHB4LCAjMDA2ZmU4IDExMXB4IDExMXB4LCAjMDA2ZmU4IDExMnB4IDExMnB4LCAjMDA2ZmU4IDExM3B4IDExM3B4LCAjMDA2ZmU5IDExNHB4IDExNHB4LCAjMDA2ZmU5IDExNXB4IDExNXB4LCAjMDA2ZmU5IDExNnB4IDExNnB4LCAjMDA3MGU5IDExN3B4IDExN3B4LCAjMDA3MGVhIDExOHB4IDExOHB4LCAjMDA3MGVhIDExOXB4IDExOXB4LCAjMDA3MGVhIDEyMHB4IDEyMHB4LCAjMDA3MGVhIDEyMXB4IDEyMXB4LCAjMDA3MGViIDEyMnB4IDEyMnB4LCAjMDA3MGViIDEyM3B4IDEyM3B4LCAjMDA3MGViIDEyNHB4IDEyNHB4LCAjMDA3MWViIDEyNXB4IDEyNXB4LCAjMDA3MWVjIDEyNnB4IDEyNnB4LCAjMDA3MWVjIDEyN3B4IDEyN3B4LCAjMDA3MWVjIDEyOHB4IDEyOHB4LCAjMDA3MWVjIDEyOXB4IDEyOXB4LCAjMDA3MWVkIDEzMHB4IDEzMHB4LCAjMDA3MWVkIDEzMXB4IDEzMXB4LCAjMDA3MWVkIDEzMnB4IDEzMnB4LCAjMDA3MWVkIDEzM3B4IDEzM3B4LCAjMDA3MmVlIDEzNHB4IDEzNHB4LCAjMDA3MmVlIDEzNXB4IDEzNXB4LCAjMDA3MmVlIDEzNnB4IDEzNnB4LCAjMDA3MmVlIDEzN3B4IDEzN3B4LCAjMDA3MmVmIDEzOHB4IDEzOHB4LCAjMDA3MmVmIDEzOXB4IDEzOXB4LCAjMDA3MmVmIDE0MHB4IDE0MHB4LCAjMDA3MmVmIDE0MXB4IDE0MXB4LCAjMDA3M2YwIDE0MnB4IDE0MnB4LCAjMDA3M2YwIDE0M3B4IDE0M3B4LCAjMDA3M2YwIDE0NHB4IDE0NHB4LCAjMDA3M2YwIDE0NXB4IDE0NXB4LCAjMDA3M2YxIDE0NnB4IDE0NnB4LCAjMDA3M2YxIDE0N3B4IDE0N3B4LCAjMDA3M2YxIDE0OHB4IDE0OHB4LCAjMDA3M2YxIDE0OXB4IDE0OXB4LCAjMDA3NGYyIDE1MHB4IDE1MHB4LCAjMDA3NGYyIDE1MXB4IDE1MXB4LCAjMDA3NGYyIDE1MnB4IDE1MnB4LCAjMDA3NGYzIDE1M3B4IDE1M3B4LCAjMDA3NGYzIDE1NHB4IDE1NHB4LCAjMDA3NGYzIDE1NXB4IDE1NXB4LCAjMDA3NGYzIDE1NnB4IDE1NnB4LCAjMDA3NGY0IDE1N3B4IDE1N3B4LCAjMDA3NGY0IDE1OHB4IDE1OHB4LCAjMDA3NWY0IDE1OXB4IDE1OXB4LCAjMDA3NWY0IDE2MHB4IDE2MHB4LCAjMDA3NWY1IDE2MXB4IDE2MXB4LCAjMDA3NWY1IDE2MnB4IDE2MnB4LCAjMDA3NWY1IDE2M3B4IDE2M3B4LCAjMDA3NWY1IDE2NHB4IDE2NHB4LCAjMDA3NWY2IDE2NXB4IDE2NXB4LCAjMDA3NWY2IDE2NnB4IDE2NnB4LCAjMDA3NmY2IDE2N3B4IDE2N3B4LCAjMDA3NmY2IDE2OHB4IDE2OHB4LCAjMDA3NmY3IDE2OXB4IDE2OXB4LCAjMDA3NmY3IDE3MHB4IDE3MHB4LCAjMDA3NmY3IDE3MXB4IDE3MXB4LCAjMDA3NmY3IDE3MnB4IDE3MnB4LCAjMDA3NmY4IDE3M3B4IDE3M3B4LCAjMDA3NmY4IDE3NHB4IDE3NHB4LCAjMDA3N2Y4IDE3NXB4IDE3NXB4LCAjMDA3N2Y4IDE3NnB4IDE3NnB4LCAjMDA3N2Y5IDE3N3B4IDE3N3B4LCAjMDA3N2Y5IDE3OHB4IDE3OHB4LCAjMDA3N2Y5IDE3OXB4IDE3OXB4LCAjMDA3N2Y5IDE4MHB4IDE4MHB4LCAjMDA3N2ZhIDE4MXB4IDE4MXB4LCAjMDA3N2ZhIDE4MnB4IDE4MnB4LCAjMDA3N2ZhIDE4M3B4IDE4M3B4LCAjMDA3OGZhIDE4NHB4IDE4NHB4LCAjMDA3OGZiIDE4NXB4IDE4NXB4LCAjMDA3OGZiIDE4NnB4IDE4NnB4LCAjMDA3OGZiIDE4N3B4IDE4N3B4LCAjMDA3OGZiIDE4OHB4IDE4OHB4LCAjMDA3OGZjIDE4OXB4IDE4OXB4LCAjMDA3OGZjIDE5MHB4IDE5MHB4LCAjMDA3OGZjIDE5MXB4IDE5MXB4LCAjMDA3OWZjIDE5MnB4IDE5MnB4LCAjMDA3OWZkIDE5M3B4IDE5M3B4LCAjMDA3OWZkIDE5NHB4IDE5NHB4LCAjMDA3OWZkIDE5NXB4IDE5NXB4LCAjMDA3OWZkIDE5NnB4IDE5NnB4LCAjMDA3OWZlIDE5N3B4IDE5N3B4LCAjMDA3OWZlIDE5OHB4IDE5OHB4LCAjMDA3OWZlIDE5OXB4IDE5OXB4LCAjMDA3YWZmIDIwMHB4IDIwMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XG4gIC5zdWNjZXNzIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiA3ZW07XG4gIH1cbn1cbiJdfQ== */"];

    /***/
  },

  /***/"./src/app/request-success/request-success.component.ngfactory.js":
  /*!************************************************************************!*\
    !*** ./src/app/request-success/request-success.component.ngfactory.js ***!
    \************************************************************************/
  /*! exports provided: RenderType_RequestSuccessComponent, View_RequestSuccessComponent_0, View_RequestSuccessComponent_Host_0, RequestSuccessComponentNgFactory */
  /***/
  function srcAppRequestSuccessRequestSuccessComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_RequestSuccessComponent", function () {
      return RenderType_RequestSuccessComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_RequestSuccessComponent_0", function () {
      return View_RequestSuccessComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_RequestSuccessComponent_Host_0", function () {
      return View_RequestSuccessComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RequestSuccessComponentNgFactory", function () {
      return RequestSuccessComponentNgFactory;
    });
    /* harmony import */
    var _request_success_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./request-success.component.css.shim.ngstyle */"./src/app/request-success/request-success.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _request_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./request-success.component */"./src/app/request-success/request-success.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_RequestSuccessComponent = [_request_success_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_RequestSuccessComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_RequestSuccessComponent,
      data: {}
    });
    function View_RequestSuccessComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Thank You"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Your Request has been submitted Successfully"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "a", [["class", "btn button"], ["href", "https://dev.ateccotechnologies.com/wordpress/"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "icon-home"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Go to Site"]))], null, null);
    }
    function View_RequestSuccessComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-request-success", [], null, null, null, View_RequestSuccessComponent_0, RenderType_RequestSuccessComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _request_success_component__WEBPACK_IMPORTED_MODULE_2__["RequestSuccessComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var RequestSuccessComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-request-success", _request_success_component__WEBPACK_IMPORTED_MODULE_2__["RequestSuccessComponent"], View_RequestSuccessComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/request-success/request-success.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/request-success/request-success.component.ts ***!
    \**************************************************************/
  /*! exports provided: RequestSuccessComponent */
  /***/
  function srcAppRequestSuccessRequestSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RequestSuccessComponent", function () {
      return RequestSuccessComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var RequestSuccessComponent = /*#__PURE__*/function () {
      function RequestSuccessComponent() {
        _classCallCheck(this, RequestSuccessComponent);
      }
      _createClass(RequestSuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return RequestSuccessComponent;
    }();
    /***/
  },
  /***/"./src/app/request/hos-request.service.ts":
  /*!************************************************!*\
    !*** ./src/app/request/hos-request.service.ts ***!
    \************************************************/
  /*! exports provided: HosRequestService */
  /***/
  function srcAppRequestHosRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HosRequestService", function () {
      return HosRequestService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var HosRequestService = /*#__PURE__*/function () {
      function HosRequestService(httpClient) {
        _classCallCheck(this, HosRequestService);
        this.httpClient = httpClient;
      }
      _createClass(HosRequestService, [{
        key: "post",
        value: function post(request) {
          return this.httpClient.post('api/hosRequest/', request);
        }
      }, {
        key: "getAll",
        value: function getAll() {
          var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
          var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.httpClient.post("api/hosRequest/getAll", {
            page: page,
            limit: limit,
            query: query
          }, {
            observe: 'response'
          });
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.httpClient.get("api/hosRequest/".concat(id), {
            observe: 'response'
          });
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(id, value) {
          return this.httpClient.put("api/hosRequest/updateStatus/".concat(id), value, {
            observe: 'response'
          });
        }
      }, {
        key: "getAdminID",
        value: function getAdminID() {
          return this.httpClient.get("api/getAdmin", {
            observe: 'response'
          });
        }
      }]);
      return HosRequestService;
    }();
    HosRequestService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function HosRequestService_Factory() {
        return new HosRequestService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      },
      token: HosRequestService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/reset-password/reset-password.component.css.shim.ngstyle.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/reset-password/reset-password.component.css.shim.ngstyle.js ***!
    \*****************************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppResetPasswordResetPasswordComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);\n\n\n\n\n.login-register[_ngcontent-%COMP%] {\n  \n  height: 100%;\n  width: 100%;\n  padding: 10% 0;\n  position: fixed;\n }\n.login-box[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto; }\n.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 30px; }\n#recoverform[_ngcontent-%COMP%] {\n  display: none; }\n.login-sidebar[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-top: 0px; }\n.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\n    right: 0px;\n    position: absolute;\n    height: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsZ0ZBQWdGO0FBTmhGOzs7OztDQUtDO0FBRUQsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFO0FBQ0Y7O2tCQUVrQjtBQUNsQjtFQUNFOzt1Q0FFcUM7RUFDckMsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBRTtBQUNoQjtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVSxFQUFFO0FBQ2Q7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CLEVBQUU7QUFFekI7RUFDRSxhQUFhLEVBQUU7QUFFakI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFFO0FBQ2pCO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRlbXBsYXRlIE5hbWU6IEFkbWluIFRlbXBsYXRlXG5BdXRob3I6IFdyYXBwaXhlbFxuXG5GaWxlOiBzY3NzXG4qL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMCk7XG4vKlRoZW1lIENvbG9ycyovXG4vKipcbiAqIFRhYmxlIE9mIENvbnRlbnRcbiAqXG4gKiBcdDEuIENvbG9yIHN5c3RlbVxuICpcdDIuIE9wdGlvbnNcbiAqXHQzLiBCb2R5XG4gKlx0NC4gVHlwb2dyYXBoeVxuICpcdDUuIEJyZWFkY3J1bWJzXG4gKlx0Ni4gQ2FyZHNcbiAqXHQ3LiBEcm9wZG93bnNcbiAqXHQ4LiBCdXR0b25zXG4gKlx0OS4gVHlwb2dyYXBoeVxuICpcdDEwLiBQcm9ncmVzcyBiYXJzXG4gKlx0MTEuIFRhYmxlc1xuICpcdDEyLiBGb3Jtc1xuICpcdDE0LiBDb21wb25lbnRcbiAqL1xuLyoqKioqKioqKioqKioqKioqKipcbkxvZ2luIHJlZ2lzdGVyIGFuZCByZWNvdmVyIHBhc3N3b3JkIFBhZ2VcbioqKioqKioqKioqKioqKioqKi9cbi5sb2dpbi1yZWdpc3RlciB7XG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwJSAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gfVxuXG4ubG9naW4tYm94IHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuICAubG9naW4tYm94IC5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4OyB9XG4gIC5sb2dpbi1ib3ggLnNvY2lhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuXG4jcmVjb3ZlcmZvcm0ge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5sb2dpbi1zaWRlYmFyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7IH1cbiAgLmxvZ2luLXNpZGViYXIgLmxvZ2luLWJveCB7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4iXX0= */"];

    /***/
  },

  /***/"./src/app/reset-password/reset-password.component.ngfactory.js":
  /*!**********************************************************************!*\
    !*** ./src/app/reset-password/reset-password.component.ngfactory.js ***!
    \**********************************************************************/
  /*! exports provided: RenderType_ResetPasswordComponent, View_ResetPasswordComponent_0, View_ResetPasswordComponent_Host_0, ResetPasswordComponentNgFactory */
  /***/
  function srcAppResetPasswordResetPasswordComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_ResetPasswordComponent", function () {
      return RenderType_ResetPasswordComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_ResetPasswordComponent_0", function () {
      return View_ResetPasswordComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_ResetPasswordComponent_Host_0", function () {
      return View_ResetPasswordComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponentNgFactory", function () {
      return ResetPasswordComponentNgFactory;
    });
    /* harmony import */
    var _reset_password_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./reset-password.component.css.shim.ngstyle */"./src/app/reset-password/reset-password.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../loader/loader.component.ngfactory */"./src/app/loader/loader.component.ngfactory.js");
    /* harmony import */
    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../loader/loader.component */"./src/app/loader/loader.component.ts");
    /* harmony import */
    var _shared_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/loader.service */"./src/app/shared/loader.service.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../shared/errors/errors.component.ngfactory */"./src/app/shared/errors/errors.component.ngfactory.js");
    /* harmony import */
    var _shared_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../shared/errors/errors.component */"./src/app/shared/errors/errors.component.ts");
    /* harmony import */
    var _reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./reset-password.component */"./src/app/reset-password/reset-password.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_ResetPasswordComponent = [_reset_password_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_ResetPasswordComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ResetPasswordComponent,
      data: {}
    });
    function View_ResetPasswordComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "text-center invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.error;
        _ck(_v, 1, 0, currVal_0);
      });
    }
    function View_ResetPasswordComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loader", [], null, null, null, _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LoaderComponent_0"], _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], [_shared_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    function View_ResetPasswordComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 34, "section", [["id", "wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 33, "div", [["class", "login-register"], ["style", "background-image:url(./assets/images/background/login-register.jpg);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 32, "div", [["class", "login-box card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 31, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 30, "div", [["class", "form-horizontal form-material"], ["id", "loginform"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup.enter"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }
        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false;
          ad = pd_1 && ad;
        }
        if ("keyup.enter" === en) {
          var pd_2 = _co.onSubmit() !== false;
          ad = pd_2 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h3", [["class", "text-center m-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Forgot Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 20, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ResetPasswordComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "password"], ["placeholder", "Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "app-errors", [], null, null, null, _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ErrorsComponent_0"], _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ErrorsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _shared_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__["ErrorsComponent"], [], {
        form_control: [0, "form_control"],
        isSubmitted: [1, "isSubmitted"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "confirmPassword"], ["placeholder", "Confirm Password"], ["type", "password"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "app-errors", [], null, null, null, _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ErrorsComponent_0"], _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ErrorsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, null, 0, _shared_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__["ErrorsComponent"], [], {
        form_control: [0, "form_control"],
        isSubmitted: [1, "isSubmitted"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 3, "div", [["class", "form-group text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "div", [["class", "col-xs-12 p-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "button", [["class", "btn btn-block btn-lg btn-info btn-rounded"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onSubmit() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reset Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ResetPasswordComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.form;
        _ck(_v, 5, 0, currVal_7);
        var currVal_8 = _co.error;
        _ck(_v, 12, 0, currVal_8);
        var currVal_16 = "password";
        _ck(_v, 17, 0, currVal_16);
        var currVal_17 = _co.f.password;
        var currVal_18 = _co.isFormSubmit;
        _ck(_v, 21, 0, currVal_17, currVal_18);
        var currVal_26 = "confirmPassword";
        _ck(_v, 26, 0, currVal_26);
        var currVal_27 = _co.f.confirmPassword;
        var currVal_28 = _co.isFormSubmit;
        _ck(_v, 30, 0, currVal_27, currVal_28);
        var currVal_29 = _co.isloading;
        _ck(_v, 36, 0, currVal_29);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending;
        _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched;
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched;
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine;
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid;
        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending;
        _ck(_v, 14, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);
        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassUntouched;
        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassTouched;
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPristine;
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassDirty;
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassValid;
        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassInvalid;
        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPending;
        _ck(_v, 23, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);
      });
    }
    function View_ResetPasswordComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-reset-password", [], null, null, null, View_ResetPasswordComponent_0, RenderType_ResetPasswordComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var ResetPasswordComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-reset-password", _reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"], View_ResetPasswordComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/reset-password/reset-password.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/reset-password/reset-password.component.ts ***!
    \************************************************************/
  /*! exports provided: ResetPasswordComponent */
  /***/
  function srcAppResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */
    var _helpers_confirm_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../_helpers/confirm-password */"./src/app/_helpers/confirm-password.ts");
    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(formBuilder, route, authService, router) {
        _classCallCheck(this, ResetPasswordComponent);
        this.formBuilder = formBuilder;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.isFormSubmit = false;
        this.isloading = false;
        this.error = null;
        this.accessToken = null;
        this.isConsultant = true;
        this.isCompnany = false;
        this.activeTab = 0;
      }
      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;
          this.isFormSubmit = false;
          this.routeSub = this.route.params.subscribe(function (params) {
            console.log(params); //log the entire params object
            _this33.accessToken = params['token'];
          });
          this.create();
        }
      }, {
        key: "create",
        value: function create() {
          this.form = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            token: [this.accessToken]
          }, {
            validator: Object(_helpers_confirm_password__WEBPACK_IMPORTED_MODULE_3__["ConfirmPasswordValidator"])('password', 'confirmPassword')
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this34 = this;
          this.isFormSubmit = true;
          if (this.form.invalid) {
            return;
          }
          // console.log(this.form.value);
          this.authService.passwordReset(this.form.value).subscribe(function (res) {
            console.log(res);
            _this34.isloading = false;
            if (+res.status === 200) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Password Reset Successful!', '', 'success');
              _this34.router.navigate(['/login']);
            } else if (res.status === 204) {
              _this34.error = 'Verification Email has expired!';
              _this34.isFormSubmit = false;
            }
          }, function (err) {
            // console.log(err);
            _this34.isloading = false;
            _this34.error = err.error.errors;
          });
        }
      }]);
      return ResetPasswordComponent;
    }();
    /***/
  },
  /***/"./src/app/sendEmail/sendEmail.component.css.shim.ngstyle.js":
  /*!*******************************************************************!*\
    !*** ./src/app/sendEmail/sendEmail.component.css.shim.ngstyle.js ***!
    \*******************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppSendEmailSendEmailComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);\n\n\n\n\n.login-register[_ngcontent-%COMP%] {\n  \n  height: 100%;\n  width: 100%;\n  padding: 10% 0;\n  position: fixed;\n }\n.login-box[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto; }\n.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 30px; }\n#recoverform[_ngcontent-%COMP%] {\n  display: none; }\n.login-sidebar[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-top: 0px; }\n.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\n    right: 0px;\n    position: absolute;\n    height: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuZEVtYWlsL3NlbmRFbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxnRkFBZ0Y7QUFOaEY7Ozs7O0NBS0M7QUFFRCxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7QUFDRjs7a0JBRWtCO0FBQ2xCO0VBQ0U7O3VDQUVxQztFQUNyQyxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYyxFQUFFO0FBQ2hCO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVLEVBQUU7QUFDZDtJQUNFLGNBQWM7SUFDZCxtQkFBbUIsRUFBRTtBQUV6QjtFQUNFLGFBQWEsRUFBRTtBQUVqQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUU7QUFDakI7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVksRUFBRSIsImZpbGUiOiJzcmMvYXBwL3NlbmRFbWFpbC9zZW5kRW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UZW1wbGF0ZSBOYW1lOiBBZG1pbiBUZW1wbGF0ZVxuQXV0aG9yOiBXcmFwcGl4ZWxcblxuRmlsZTogc2Nzc1xuKi9cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDApO1xuLypUaGVtZSBDb2xvcnMqL1xuLyoqXG4gKiBUYWJsZSBPZiBDb250ZW50XG4gKlxuICogXHQxLiBDb2xvciBzeXN0ZW1cbiAqXHQyLiBPcHRpb25zXG4gKlx0My4gQm9keVxuICpcdDQuIFR5cG9ncmFwaHlcbiAqXHQ1LiBCcmVhZGNydW1ic1xuICpcdDYuIENhcmRzXG4gKlx0Ny4gRHJvcGRvd25zXG4gKlx0OC4gQnV0dG9uc1xuICpcdDkuIFR5cG9ncmFwaHlcbiAqXHQxMC4gUHJvZ3Jlc3MgYmFyc1xuICpcdDExLiBUYWJsZXNcbiAqXHQxMi4gRm9ybXNcbiAqXHQxNC4gQ29tcG9uZW50XG4gKi9cbi8qKioqKioqKioqKioqKioqKioqXG5Mb2dpbiByZWdpc3RlciBhbmQgcmVjb3ZlciBwYXNzd29yZCBQYWdlXG4qKioqKioqKioqKioqKioqKiovXG4ubG9naW4tcmVnaXN0ZXIge1xuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMCUgMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuIH1cblxuLmxvZ2luLWJveCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87IH1cbiAgLmxvZ2luLWJveCAuZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDsgfVxuICAubG9naW4tYm94IC5zb2NpYWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuI3JlY292ZXJmb3JtIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ubG9naW4tc2lkZWJhciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4OyB9XG4gIC5sb2dpbi1zaWRlYmFyIC5sb2dpbi1ib3gge1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTsgfVxuIl19 */"];

    /***/
  },

  /***/"./src/app/sendEmail/sendEmail.component.ngfactory.js":
  /*!************************************************************!*\
    !*** ./src/app/sendEmail/sendEmail.component.ngfactory.js ***!
    \************************************************************/
  /*! exports provided: RenderType_SendEmailComponent, View_SendEmailComponent_0, View_SendEmailComponent_Host_0, SendEmailComponentNgFactory */
  /***/
  function srcAppSendEmailSendEmailComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_SendEmailComponent", function () {
      return RenderType_SendEmailComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_SendEmailComponent_0", function () {
      return View_SendEmailComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_SendEmailComponent_Host_0", function () {
      return View_SendEmailComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SendEmailComponentNgFactory", function () {
      return SendEmailComponentNgFactory;
    });
    /* harmony import */
    var _sendEmail_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./sendEmail.component.css.shim.ngstyle */"./src/app/sendEmail/sendEmail.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../loader/loader.component.ngfactory */"./src/app/loader/loader.component.ngfactory.js");
    /* harmony import */
    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../loader/loader.component */"./src/app/loader/loader.component.ts");
    /* harmony import */
    var _shared_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../shared/loader.service */"./src/app/shared/loader.service.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../shared/errors/errors.component.ngfactory */"./src/app/shared/errors/errors.component.ngfactory.js");
    /* harmony import */
    var _shared_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../shared/errors/errors.component */"./src/app/shared/errors/errors.component.ts");
    /* harmony import */
    var _sendEmail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./sendEmail.component */"./src/app/sendEmail/sendEmail.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_SendEmailComponent = [_sendEmail_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_SendEmailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_SendEmailComponent,
      data: {}
    });
    function View_SendEmailComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "text-center invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.error;
        _ck(_v, 1, 0, currVal_0);
      });
    }
    function View_SendEmailComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loader", [], null, null, null, _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_LoaderComponent_0"], _loader_loader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_LoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], [_shared_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    function View_SendEmailComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "section", [["id", "wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 24, "div", [["class", "login-register"], ["style", "background-image:url(./assets/images/background/login-register.jpg);"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 23, "div", [["class", "login-box card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 22, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 21, "div", [["class", "form-horizontal form-material"], ["id", "loginform"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keyup.enter"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }
        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false;
          ad = pd_1 && ad;
        }
        if ("keyup.enter" === en) {
          var pd_2 = _co.onSubmit() !== false;
          ad = pd_2 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h3", [["class", "text-center m-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Verify Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 11, "div", [["class", "col-xs-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SendEmailComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "input", [["class", "form-control"], ["formControlName", "email"], ["placeholder", "Email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }
        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false;
          ad = pd_1 && ad;
        }
        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionStart() !== false;
          ad = pd_2 && ad;
        }
        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "app-errors", [], null, null, null, _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ErrorsComponent_0"], _shared_errors_errors_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ErrorsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _shared_errors_errors_component__WEBPACK_IMPORTED_MODULE_8__["ErrorsComponent"], [], {
        form_control: [0, "form_control"],
        isSubmitted: [1, "isSubmitted"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 3, "div", [["class", "form-group text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "div", [["class", "col-xs-12 p-b-20"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "button", [["class", "btn btn-block btn-lg btn-info btn-rounded"], ["type", "submit"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onSubmit() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Send Verification Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SendEmailComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.form;
        _ck(_v, 5, 0, currVal_7);
        var currVal_8 = _co.error;
        _ck(_v, 12, 0, currVal_8);
        var currVal_16 = "email";
        _ck(_v, 17, 0, currVal_16);
        var currVal_17 = _co.f.email;
        var currVal_18 = _co.submitted;
        _ck(_v, 21, 0, currVal_17, currVal_18);
        var currVal_19 = _co.isloading;
        _ck(_v, 27, 0, currVal_19);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending;
        _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched;
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched;
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine;
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid;
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid;
        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending;
        _ck(_v, 14, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);
      });
    }
    function View_SendEmailComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-sendEmail", [], null, null, null, View_SendEmailComponent_0, RenderType_SendEmailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _sendEmail_component__WEBPACK_IMPORTED_MODULE_9__["SendEmailComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _shared_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var SendEmailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-sendEmail", _sendEmail_component__WEBPACK_IMPORTED_MODULE_9__["SendEmailComponent"], View_SendEmailComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/sendEmail/sendEmail.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/sendEmail/sendEmail.component.ts ***!
    \**************************************************/
  /*! exports provided: SendEmailComponent */
  /***/
  function srcAppSendEmailSendEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SendEmailComponent", function () {
      return SendEmailComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    var SendEmailComponent = /*#__PURE__*/function () {
      function SendEmailComponent(router, route, loader, formBuilder, authService) {
        _classCallCheck(this, SendEmailComponent);
        this.router = router;
        this.route = route;
        this.loader = loader;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.error = null;
        this.loading = false;
        this.submitted = false;
        this.isloading = false;
      }
      _createClass(SendEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // redirect to home if already logged in
          if (this.authService.currentUserValue) {
            this.router.navigate(['/app']);
          }
          this.create();
        }
      }, {
        key: "create",
        value: function create() {
          this.form = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
          });
        }
        // convenience getter for easy access to form fields
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this35 = this;
          this.submitted = true;
          if (this.form.invalid) {
            return;
          }
          this.isloading = true;
          this.authService.sendVerificationEmail(this.form.value).subscribe(function (res) {
            _this35.isloading = false;
            // console.log(res);
            if (res.status === 200) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('An email with verification Link has sent to your Email');
              _this35.router.navigate(['/login']);
            } else if (res.status === 204) {
              _this35.error = 'Email does not exist';
              _this35.submitted = false;
            }
          }, function (err) {
            // console.log(err);
            _this35.isloading = false;
            _this35.error = err.error.errors;
          });
        }
      }]);
      return SendEmailComponent;
    }();
    /***/
  },
  /***/"./src/app/shared/directives/alphaspace.directive.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/directives/alphaspace.directive.ts ***!
    \***********************************************************/
  /*! exports provided: AlphaspaceDirective */
  /***/
  function srcAppSharedDirectivesAlphaspaceDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AlphaspaceDirective", function () {
      return AlphaspaceDirective;
    });
    var AlphaspaceDirective = /*#__PURE__*/function () {
      function AlphaspaceDirective() {
        _classCallCheck(this, AlphaspaceDirective);
      }
      _createClass(AlphaspaceDirective, [{
        key: "onKeydown",
        value: function onKeydown(event) {
          this.key = event.keyCode;
          console.log(this.key);
          if ((this.key >= 15 && this.key <= 64 || this.key >= 123 || this.key >= 96 && this.key <= 105) && this.key !== 32) {
            event.preventDefault();
          }
        }
      }]);
      return AlphaspaceDirective;
    }();
    /***/
  },
  /***/"./src/app/shared/directives/num.directive.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/directives/num.directive.ts ***!
    \****************************************************/
  /*! exports provided: NumDirective */
  /***/
  function srcAppSharedDirectivesNumDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NumDirective", function () {
      return NumDirective;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var NumDirective = /*#__PURE__*/function () {
      function NumDirective(_el) {
        _classCallCheck(this, NumDirective);
        this._el = _el;
      }
      _createClass(NumDirective, [{
        key: "onInputChange",
        value: function onInputChange(event) {
          var initalValue = this._el.nativeElement.value;
          this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
          if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
          }
        }
      }]);
      return NumDirective;
    }();
    /***/
  },
  /***/"./src/app/shared/errors/errors.component.css.shim.ngstyle.js":
  /*!********************************************************************!*\
    !*** ./src/app/shared/errors/errors.component.css.shim.ngstyle.js ***!
    \********************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppSharedErrorsErrorsComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lcnJvcnMvZXJyb3JzLmNvbXBvbmVudC5jc3MifQ== */"];

    /***/
  },

  /***/"./src/app/shared/errors/errors.component.ngfactory.js":
  /*!*************************************************************!*\
    !*** ./src/app/shared/errors/errors.component.ngfactory.js ***!
    \*************************************************************/
  /*! exports provided: RenderType_ErrorsComponent, View_ErrorsComponent_0, View_ErrorsComponent_Host_0, ErrorsComponentNgFactory */
  /***/
  function srcAppSharedErrorsErrorsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_ErrorsComponent", function () {
      return RenderType_ErrorsComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_ErrorsComponent_0", function () {
      return View_ErrorsComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_ErrorsComponent_Host_0", function () {
      return View_ErrorsComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ErrorsComponentNgFactory", function () {
      return ErrorsComponentNgFactory;
    });
    /* harmony import */
    var _errors_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./errors.component.css.shim.ngstyle */"./src/app/shared/errors/errors.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./errors.component */"./src/app/shared/errors/errors.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_ErrorsComponent = [_errors_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_ErrorsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ErrorsComponent,
      data: {}
    });
    function View_ErrorsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Field is required"]))], null, null);
    }
    function View_ErrorsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email must be a valid email address "]))], null, null);
    }
    function View_ErrorsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Password and Confirm Password didn't match "]))], null, null);
    }
    function View_ErrorsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ErrorsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ErrorsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ErrorsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.form_control.errors.required;
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _co.form_control.errors.email;
        _ck(_v, 4, 0, currVal_1);
        var currVal_2 = _co.form_control.errors.confirmPasswordValidator;
        _ck(_v, 6, 0, currVal_2);
      }, null);
    }
    function View_ErrorsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ErrorsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.isSubmitted && _co.form_control.errors;
        _ck(_v, 1, 0, currVal_0);
      }, null);
    }
    function View_ErrorsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-errors", [], null, null, null, View_ErrorsComponent_0, RenderType_ErrorsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _errors_component__WEBPACK_IMPORTED_MODULE_3__["ErrorsComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var ErrorsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-errors", _errors_component__WEBPACK_IMPORTED_MODULE_3__["ErrorsComponent"], View_ErrorsComponent_Host_0, {
      form_control: "form_control",
      isSubmitted: "isSubmitted"
    }, {}, []);

    /***/
  },

  /***/"./src/app/shared/errors/errors.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/errors/errors.component.ts ***!
    \***************************************************/
  /*! exports provided: ErrorsComponent */
  /***/
  function srcAppSharedErrorsErrorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ErrorsComponent", function () {
      return ErrorsComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ErrorsComponent = /*#__PURE__*/function () {
      function ErrorsComponent() {
        _classCallCheck(this, ErrorsComponent);
      }
      _createClass(ErrorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return ErrorsComponent;
    }();
    /***/
  },
  /***/"./src/app/shared/loader.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/loader.service.ts ***!
    \******************************************/
  /*! exports provided: LoaderService */
  /***/
  function srcAppSharedLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    var LoaderService = /*#__PURE__*/function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
      }
      _createClass(LoaderService, [{
        key: "getLoad",
        value: function getLoad() {
          console.log(this.loading);
          return this.loading;
        }
      }]);
      return LoaderService;
    }();
    /***/
  },
  /***/"./src/app/shared/loader/loader.component.css.shim.ngstyle.js":
  /*!********************************************************************!*\
    !*** ./src/app/shared/loader/loader.component.css.shim.ngstyle.js ***!
    \********************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppSharedLoaderLoaderComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = [".lds-facebook[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: absolute;\n    left: 8px;\n    width: 16px;\n    background: #6610f2;\n    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  }\n  .lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n    left: 8px;\n    animation-delay: -0.24s;\n  }\n  .lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    left: 32px;\n    animation-delay: -0.12s;\n  }\n  .lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n    left: 56px;\n    animation-delay: 0;\n  }\n  @keyframes lds-facebook {\n    0% {\n      top: 8px;\n      height: 64px;\n    }\n    50%,\n    100% {\n      top: 24px;\n      height: 32px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrRUFBa0U7RUFDcEU7RUFDQTtJQUNFLFNBQVM7SUFDVCx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFO01BQ0UsUUFBUTtNQUNSLFlBQVk7SUFDZDtJQUNBOztNQUVFLFNBQVM7TUFDVCxZQUFZO0lBQ2Q7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLWZhY2Vib29rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICAubGRzLWZhY2Vib29rIGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA4cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogIzY2MTBmMjtcbiAgICBhbmltYXRpb246IGxkcy1mYWNlYm9vayAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XG4gIH1cbiAgLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBsZWZ0OiA4cHg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XG4gIH1cbiAgLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBsZWZ0OiAzMnB4O1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xuICB9XG4gIC5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgbGVmdDogNTZweDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDA7XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtZmFjZWJvb2sge1xuICAgIDAlIHtcbiAgICAgIHRvcDogOHB4O1xuICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgIH1cbiAgICA1MCUsXG4gICAgMTAwJSB7XG4gICAgICB0b3A6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxuICB9XG4gICJdfQ== */"];

    /***/
  },

  /***/"./src/app/shared/loader/loader.component.ngfactory.js":
  /*!*************************************************************!*\
    !*** ./src/app/shared/loader/loader.component.ngfactory.js ***!
    \*************************************************************/
  /*! exports provided: RenderType_Loader, View_Loader_0, View_Loader_Host_0, LoaderNgFactory */
  /***/
  function srcAppSharedLoaderLoaderComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_Loader", function () {
      return RenderType_Loader;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_Loader_0", function () {
      return View_Loader_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_Loader_Host_0", function () {
      return View_Loader_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoaderNgFactory", function () {
      return LoaderNgFactory;
    });
    /* harmony import */
    var _loader_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./loader.component.css.shim.ngstyle */"./src/app/shared/loader/loader.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./loader.component */"./src/app/shared/loader/loader.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_Loader = [_loader_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_Loader = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_Loader,
      data: {}
    });
    function View_Loader_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "d-flex justify-content-center align-items-center"], ["style", "height: 50vh;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "lds-facebook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null))], null, null);
    }
    function View_Loader_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "loader", [], null, null, null, View_Loader_0, RenderType_Loader)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _loader_component__WEBPACK_IMPORTED_MODULE_2__["Loader"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var LoaderNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("loader", _loader_component__WEBPACK_IMPORTED_MODULE_2__["Loader"], View_Loader_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/shared/loader/loader.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/loader/loader.component.ts ***!
    \***************************************************/
  /*! exports provided: Loader */
  /***/
  function srcAppSharedLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Loader", function () {
      return Loader;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var Loader = /*#__PURE__*/function () {
      function Loader() {
        _classCallCheck(this, Loader);
      }
      _createClass(Loader, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return Loader;
    }();
    /***/
  },
  /***/"./src/app/shared/notification.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/notification.service.ts ***!
    \************************************************/
  /*! exports provided: NotificationService */
  /***/
  function srcAppSharedNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ngx-socket-io */"./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(httpClient, socket, authService) {
        _classCallCheck(this, NotificationService);
        this.httpClient = httpClient;
        this.socket = socket;
        this.authService = authService;
      }
      _createClass(NotificationService, [{
        key: "sendNotification",
        value: function sendNotification(notificationObj) {
          // to do here socket 
          console.log(notificationObj);
          this.socket.emit("createNotification", notificationObj);
        }
      }, {
        key: "sendHosRequestNotification",
        value: function sendHosRequestNotification(notificationObj) {
          // to do here socket 
          console.log(notificationObj);
          this.socket.emit("hosRequest", notificationObj);
        }
      }, {
        key: "getNotification",
        value: function getNotification() {
          // alert('here');
          return this.socket.fromEvent(this.authService.currentUserValue._id + 'Notifi');
        }
      }, {
        key: "getNotificationsById",
        value: function getNotificationsById(id) {
          return this.httpClient.get("api/getNotifications/".concat(id));
        }
      }, {
        key: "markAsRead",
        value: function markAsRead(id) {
          return this.httpClient.put("api/readNotification/".concat(id), {});
        }
      }, {
        key: "deleteNotification",
        value: function deleteNotification(id) {
          return this.httpClient["delete"]("api/deleteNotification/".concat(id));
        }
      }]);
      return NotificationService;
    }();
    NotificationService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function NotificationService_Factory() {
        return new NotificationService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      },
      token: NotificationService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/shared/notify.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/notify.service.ts ***!
    \******************************************/
  /*! exports provided: NotifyService */
  /***/
  function srcAppSharedNotifyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NotifyService", function () {
      return NotifyService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! angular-notifier */"./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    var NotifyService = /*#__PURE__*/function () {
      function NotifyService(notifierService) {
        _classCallCheck(this, NotifyService);
        this.notifierService = notifierService;
      }
      _createClass(NotifyService, [{
        key: "success",
        value: function success(text) {
          this.notifierService.notify('success', text);
        }
      }, {
        key: "info",
        value: function info(text) {
          this.notifierService.notify('info', text);
        }
      }]);
      return NotifyService;
    }();
    NotifyService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function NotifyService_Factory() {
        return new NotifyService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]));
      },
      token: NotifyService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/shared/pipes/address.pipe.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/pipes/address.pipe.ts ***!
    \**********************************************/
  /*! exports provided: AddressPipe */
  /***/
  function srcAppSharedPipesAddressPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddressPipe", function () {
      return AddressPipe;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AddressPipe = /*#__PURE__*/function () {
      function AddressPipe() {
        _classCallCheck(this, AddressPipe);
      }
      _createClass(AddressPipe, [{
        key: "transform",
        value: function transform(value, args) {
          return value.address + ', ' + value.city + ',' + value.state;
        }
      }]);
      return AddressPipe;
    }();
    /***/
  },
  /***/"./src/app/shared/pipes/image-src.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/pipes/image-src.pipe.ts ***!
    \************************************************/
  /*! exports provided: ImageSrcPipe */
  /***/
  function srcAppSharedPipesImageSrcPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ImageSrcPipe", function () {
      return ImageSrcPipe;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/environments/environment */"./src/environments/environment.ts");
    var ImageSrcPipe = /*#__PURE__*/function () {
      function ImageSrcPipe() {
        _classCallCheck(this, ImageSrcPipe);
      }
      _createClass(ImageSrcPipe, [{
        key: "transform",
        value: function transform(src) {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url + src;
        }
      }]);
      return ImageSrcPipe;
    }();
    /***/
  },
  /***/"./src/app/shared/search.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/search.service.ts ***!
    \******************************************/
  /*! exports provided: SearchService */
  /***/
  function srcAppSharedSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    var SearchService = /*#__PURE__*/function () {
      function SearchService(httpClient) {
        _classCallCheck(this, SearchService);
        this.httpClient = httpClient;
      }
      _createClass(SearchService, [{
        key: "searchDoctor",
        value: function searchDoctor(query) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
          return this.httpClient.get("api/doctor?searchQuery=".concat(query, "&limit=").concat(limit));
        }
      }, {
        key: "searchPatient",
        value: function searchPatient(query) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
          return this.httpClient.get("api/patient?searchQuery=".concat(query));
        }
      }, {
        key: "searchlabAttendant",
        value: function searchlabAttendant(query) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
          return this.httpClient.get("api/labAttendant?searchQuery=".concat(query, "&limit=").concat(limit));
        }
      }, {
        key: "searchFDO",
        value: function searchFDO(query) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
          return this.httpClient.get("api/fdo?searchQuery=".concat(query, "&limit=").concat(limit));
        }
      }, {
        key: "searchPharmacy",
        value: function searchPharmacy(query) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
          return this.httpClient.get("api/pharmacy?searchQuery=".concat(query, "&limit=").concat(limit));
        }
      }, {
        key: "searchUser",
        value: function searchUser(query) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
          return this.httpClient.get("api/search?searchQuery=".concat(query, "&limit=").concat(limit));
        }
      }]);
      return SearchService;
    }();
    SearchService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function SearchService_Factory() {
        return new SearchService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      },
      token: SearchService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/
  /*! exports provided: SharedModule */
  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
      _classCallCheck(this, SharedModule);
    });
    /***/
  },
  /***/"./src/app/sidebar/sidebar.component.css.shim.ngstyle.js":
  /*!***************************************************************!*\
    !*** ./src/app/sidebar/sidebar.component.css.shim.ngstyle.js ***!
    \***************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppSidebarSidebarComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = [".scroll[_ngcontent-%COMP%] {\n    max-height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n    margin-right: 0px;\n    border-radius: 30px;\n\n  }\n\n  [_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 2px;\n  }\n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    border-radius: 2px;\n    background: rgb(212, 203, 203);\n  }\n\n  [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: #b3b2b2;\n    border-radius: 2px;\n  }\n\n  .sidebar-nav[_ngcontent-%COMP%] {\n    padding: 0px 0 0 0px;\n}\n\n  a[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\n    color: #8d97ad !important;\n    text-decoration: none;\n}\n\n  .profile-img[_ngcontent-%COMP%]{\n  height: 30px;\n  width: 30px;\n  margin-right: 10px;\n}\n\n  .profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border: 1px solid lightgray;\n}\n\n  @media (max-width: 1023px){\n  .d-flex[_ngcontent-%COMP%] {\n      display: flex !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1COztFQUVyQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0Usb0JBQW9CO0FBQ3hCOztFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7RUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7RUFDQTtFQUNFO01BQ0ksd0JBQXdCO0VBQzVCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcblxuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDJweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjEyLCAyMDMsIDIwMyk7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjNiMmIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxuICAuc2lkZWJhci1uYXYge1xuICAgIHBhZGRpbmc6IDBweCAwIDAgMHB4O1xufVxuICBhOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XG4gICAgY29sb3I6ICM4ZDk3YWQgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucHJvZmlsZS1pbWd7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5wcm9maWxlLWltZyBpbWd7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpe1xuICAuZC1mbGV4IHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */"];

    /***/
  },

  /***/"./src/app/sidebar/sidebar.component.ngfactory.js":
  /*!********************************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ngfactory.js ***!
    \********************************************************/
  /*! exports provided: RenderType_SidebarComponent, View_SidebarComponent_0, View_SidebarComponent_Host_0, SidebarComponentNgFactory */
  /***/
  function srcAppSidebarSidebarComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_SidebarComponent", function () {
      return RenderType_SidebarComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_SidebarComponent_0", function () {
      return View_SidebarComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_SidebarComponent_Host_0", function () {
      return View_SidebarComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SidebarComponentNgFactory", function () {
      return SidebarComponentNgFactory;
    });
    /* harmony import */
    var _sidebar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./sidebar.component.css.shim.ngstyle */"./src/app/sidebar/sidebar.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-permissions */"./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
    /* harmony import */
    var _sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./sidebar.component */"./src/app/sidebar/sidebar.component.ts");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_SidebarComponent = [_sidebar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_SidebarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_SidebarComponent,
      data: {}
    });
    function View_SidebarComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "a", [["class", "dropdown-item"], ["href", "javascript:void(0)"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "fa fa-sticky-note-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Medical History"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _ck(_v, 3, 0, "/app/patient/profile", _co.authService.currentUserValue.roleId, "medical");
        _ck(_v, 2, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.showMenuFunv(3) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fas fa-th-large"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact / Employee"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/contacts");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["class", "waves-effect waves-dark "], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.showMenuFunv(4) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[8, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fas fa-envelope"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Inbox"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/inbox");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["aria-expanded", "false"], ["class", " waves-effect waves-dark"], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.showMenuFunv(5) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[10, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, [["calender", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-calendar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Appointment"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/calender");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["aria-expanded", "false"], ["class", "waves-effect waves-dark"], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.showMenuFunv(6) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[12, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, [["docter", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-user-md"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Doctors"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/doctor");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["aria-expanded", "false"], ["class", "waves-effect waves-dark"], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[14, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-user-md"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" LAB SCIENTIST"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/labattendant");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["aria-expanded", "false"], ["class", "waves-effect waves-dark"], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.showMenuFunv(7) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[16, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, [["patient", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-users"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Patients"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/patient");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["aria-expanded", "false"], ["class", "waves-effect waves-dark"], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.showMenuFunv(7) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[18, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, [["patient", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-users"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Front Desk Officer"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/fdo");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["aria-expanded", "false"], ["class", "waves-effect waves-dark"], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.showMenuFunv(7) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[20, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, [["patient", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-medkit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pharmacy"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/pharmacy");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["aria-expanded", "false"], ["class", "waves-effect waves-dark"], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[22, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, [["hospitals", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-hospital-o"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hospitals"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/hospitals");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["aria-expanded", "false"], ["class", " waves-effect waves-dark"], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.showMenuFunv(8) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[24, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, [["payment", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-money"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Payments"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/payment");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["aria-expanded", "false"], ["class", " waves-effect waves-dark"], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.showMenuFunv(8) !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[26, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, [["payment", 4]], 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-medkit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Prescriptions"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/prescription");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["class", "waves-effect waves-dark "], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[28, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-question"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Requests"]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/request");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 8, "a", [["class", "waves-effect waves-dark "], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, [[30, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](3, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fa fa-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Ticket "]))], function (_ck, _v) {
        var currVal_2 = _ck(_v, 3, 0, "/app/ticket");
        _ck(_v, 2, 0, currVal_2);
        var currVal_3 = "active";
        _ck(_v, 4, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href;
        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }
    function View_SidebarComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 81, "aside", [["class", "left-sidebar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 80, "div", [["class", "scroll"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 79, "nav", [["class", "sidebar-nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 78, "ul", [["id", "sidebarnav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 19, "li", [["class", "user-pro"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "a", [["aria-expanded", "false"], ["class", "has-arrow waves-effect waves-dark d-flex align-items-center"], ["href", "javascript:void(0)"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.showMenuFunv(1) !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](8, {
        "active": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "profile-img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "img", [["alt", "user-img"], ["class", "img-circle"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 10, "ul", [["aria-expanded", "false"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](16, {
        "collapse": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 6, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "a", [["href", "javascript:void(0)"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }
        if ("click" === en) {
          var pd_1 = _co.logout() !== false;
          ad = pd_1 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](20, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "i", [["class", "fa fa-power-off"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 6, "a", [["class", "waves-effect waves-dark "], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.goToProfile() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "i", [["class", "fa fa-user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Profile"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 6, "a", [["class", "waves-effect waves-dark "], ["href", "javascript:void(0)"], ["routerLinkActive", "active"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.goToDashboard() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "i", [["class", "fas fa-tachometer-alt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "span", [["class", "hide-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](42, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](45, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](48, 6), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](51, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](54, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](57, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](60, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](63, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](66, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](69, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](72, 5), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](75, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](78, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_SidebarComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 737280, null, 0, ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsDirective"], [ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsConfigurationService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxRolesService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngxPermissionsOnly: [0, "ngxPermissionsOnly"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](81, 1)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "has-arrow waves-effect waves-dark d-flex align-items-center";
        var currVal_1 = _ck(_v, 8, 0, _co.showMenu == 1);
        _ck(_v, 7, 0, currVal_0, currVal_1);
        var currVal_4 = _ck(_v, 16, 0, _co.showMenu != 1);
        _ck(_v, 15, 0, currVal_4);
        var currVal_7 = _ck(_v, 20, 0, "/login");
        _ck(_v, 19, 0, currVal_7);
        var currVal_8 = "active";
        _ck(_v, 26, 0, currVal_8);
        var currVal_9 = "active";
        _ck(_v, 34, 0, currVal_9);
        var currVal_10 = _ck(_v, 42, 0, "patient");
        _ck(_v, 41, 0, currVal_10);
        var currVal_11 = _ck(_v, 45, 0, "hospital");
        _ck(_v, 44, 0, currVal_11);
        var currVal_12 = _ck(_v, 48, 0, "admin", "hospital", "doctor", "labAttendant", "FDO", "pharmacy");
        _ck(_v, 47, 0, currVal_12);
        var currVal_13 = _ck(_v, 51, 0, "hospital", "patient", "doctor", "FDO");
        _ck(_v, 50, 0, currVal_13);
        var currVal_14 = _ck(_v, 54, 0, "hospital", "pharmacy", "labAttendant");
        _ck(_v, 53, 0, currVal_14);
        var currVal_15 = _ck(_v, 57, 0, "hospital", "doctor");
        _ck(_v, 56, 0, currVal_15);
        var currVal_16 = _ck(_v, 60, 0, "hospital", "doctor", "FDO");
        _ck(_v, 59, 0, currVal_16);
        var currVal_17 = _ck(_v, 63, 0, "hospital");
        _ck(_v, 62, 0, currVal_17);
        var currVal_18 = _ck(_v, 66, 0, "hospital", "doctor");
        _ck(_v, 65, 0, currVal_18);
        var currVal_19 = _ck(_v, 69, 0, "admin");
        _ck(_v, 68, 0, currVal_19);
        var currVal_20 = _ck(_v, 72, 0, "hospital", "pharmacy", "patient", "FDO", "doctor");
        _ck(_v, 71, 0, currVal_20);
        var currVal_21 = _ck(_v, 75, 0, "pharmacy");
        _ck(_v, 74, 0, currVal_21);
        var currVal_22 = _ck(_v, 78, 0, "admin");
        _ck(_v, 77, 0, currVal_22);
        var currVal_23 = _ck(_v, 81, 0, "labAttendant");
        _ck(_v, 80, 0, currVal_23);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.imageSrc;
        _ck(_v, 10, 0, currVal_2);
        var currVal_3 = _co.user.name;
        _ck(_v, 12, 0, currVal_3);
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).target;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).href;
        _ck(_v, 18, 0, currVal_5, currVal_6);
      });
    }
    function View_SidebarComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-sidebar", [], null, null, null, View_SidebarComponent_0, RenderType_SidebarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var SidebarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-sidebar", _sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], View_SidebarComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/sidebar/sidebar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/sidebar/sidebar.component.ts ***!
    \**********************************************/
  /*! exports provided: SidebarComponent */
  /***/
  function srcAppSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/environments/environment */"./src/environments/environment.ts");
    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(router, authService) {
        _classCallCheck(this, SidebarComponent);
        // router.events.subscribe((val) => {
        //   if (val instanceof NavigationEnd && !this.isCollapse) {
        //     this.collapse();
        //   }
        this.router = router;
        this.authService = authService;
        this.navbarCollapsed = true;
        this.showMenu = -1;
        // });
      }
      // mini-sidebar
      // 768px width
      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.authService.currentUserValue;
          this.imageSrc = this.user.image ? this.user.image : '../assets/images/users/1.jpg';
          this.imageSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_url + this.imageSrc;
          if (window.innerWidth <= 768) {
            document.querySelector('body').classList.add('mini-sidebar');
          } else {
            document.querySelector('body').classList.remove('mini-sidebar');
          }
        }
      }, {
        key: "showMenuFunv",
        value: function showMenuFunv(menu) {
          if (this.showMenu == menu) {
            return this.showMenu = -1;
          }
          this.showMenu = menu;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "goToProfile",
        value: function goToProfile() {
          var route = '/';
          if (this.authService.currentUserValue.role === 'patient') {
            route = "/app/patient/profile/".concat(this.authService.currentUserValue.roleId);
          } else if (this.authService.currentUserValue.role === 'admin') {
            route = "/app/profile";
          } else if (this.authService.currentUserValue.role === 'hospital') {
            route = "/app/hospitals/profile/".concat(this.authService.currentUserValue._id);
          } else if (this.authService.currentUserValue.role === 'doctor') {
            route = "/app/doctor/profile/".concat(this.authService.currentUserValue.roleId);
          } else if (this.authService.currentUserValue.role === 'labAttendant') {
            route = "/app/labattendant/profile/".concat(this.authService.currentUserValue.roleId);
          } else if (this.authService.currentUserValue.role === 'FDO') {
            route = "/app/fdo/profile/".concat(this.authService.currentUserValue.roleId);
          } else if (this.authService.currentUserValue.role === 'pharmacy') {
            route = "/app/pharmacy/profile/".concat(this.authService.currentUserValue.roleId);
          }
          this.router.navigate([route]);
        }
      }, {
        key: "goToDashboard",
        value: function goToDashboard() {
          var route = '/';
          if (this.authService.currentUserValue.role === 'patient') {
            route = "/app/patient/dash";
          } else if (this.authService.currentUserValue.role === 'admin') {
            route = "/app/dash";
          } else if (this.authService.currentUserValue.role === 'hospital') {
            route = "/app/hospitals/dash";
          } else if (this.authService.currentUserValue.role === 'doctor') {
            route = "/app/doctor/dash";
          } else if (this.authService.currentUserValue.role === 'labAttendant') {
            route = "/app/labattendant/dash";
          } else if (this.authService.currentUserValue.role === 'FDO') {
            route = "/app/fdo/dash/";
          } else if (this.authService.currentUserValue.role === 'pharmacy') {
            route = "/app/pharmacy/dash/";
          }
          this.router.navigate([route]);
        }
      }, {
        key: "collapse",
        value: function collapse() {
          var dom = document.querySelector('body');
          dom.classList.toggle('mini-sidebar');
        }
      }]);
      return SidebarComponent;
    }();
    /***/
  },
  /***/"./src/app/socket.service.ts":
  /*!***********************************!*\
    !*** ./src/app/socket.service.ts ***!
    \***********************************/
  /*! exports provided: SocketService */
  /***/
  function srcAppSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ngx-socket-io */"./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./auth.service */"./src/app/auth.service.ts");
    var SocketService = /*#__PURE__*/function () {
      function SocketService(socket, authService) {
        _classCallCheck(this, SocketService);
        this.socket = socket;
        this.authService = authService;
        this.myTickets = this.socket.fromEvent("getMyTickets");
        this.adminTickets = this.socket.fromEvent("adminGetTickets");
      }
      _createClass(SocketService, [{
        key: "adminGetAllTickets",
        value: function adminGetAllTickets() {
          this.socket.emit("adminGetAllTickets");
        }
      }, {
        key: "getMyTicket",
        value: function getMyTicket() {
          this.socket.emit("getMyTicket", {
            createdBy: this.authService.currentUserValue._id
          });
        }
      }, {
        key: "createTicket",
        value: function createTicket(subject, description) {
          this.socket.emit("createTicket", {
            createdBy: this.authService.currentUserValue._id,
            subject: subject,
            description: description
          });
        }
      }, {
        key: "chatTicket",
        value: function chatTicket(id) {
          this.socket.emit("createTicket", {
            _id: id
          });
        }
      }]);
      return SocketService;
    }();
    SocketService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function SocketService_Factory() {
        return new SocketService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      },
      token: SocketService,
      providedIn: "root"
    });

    /***/
  },

  /***/"./src/app/topbar/topbar.component.css.shim.ngstyle.js":
  /*!*************************************************************!*\
    !*** ./src/app/topbar/topbar.component.css.shim.ngstyle.js ***!
    \*************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppTopbarTopbarComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = [".fa[_ngcontent-%COMP%] {\n    padding-right: 5px !important;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n    padding-right: 10px !important;\n}\n.back-arrow[_ngcontent-%COMP%]{\n  padding: 5px;\n  border-radius: 100%;\n  color: white;\n  background: black;\n  margin-right: 10px;\n}\n@media (max-width: 1023px){\n.d-flex[_ngcontent-%COMP%] {\n    display: flex !important;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuLmJyZWFkY3J1bWItaXRlbSB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuLmJhY2stYXJyb3d7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCl7XG4uZC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG59XG4iXX0= */"];

    /***/
  },

  /***/"./src/app/topbar/topbar.component.ngfactory.js":
  /*!******************************************************!*\
    !*** ./src/app/topbar/topbar.component.ngfactory.js ***!
    \******************************************************/
  /*! exports provided: RenderType_TopbarComponent, View_TopbarComponent_0, View_TopbarComponent_Host_0, TopbarComponentNgFactory */
  /***/
  function srcAppTopbarTopbarComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_TopbarComponent", function () {
      return RenderType_TopbarComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_TopbarComponent_0", function () {
      return View_TopbarComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_TopbarComponent_Host_0", function () {
      return View_TopbarComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TopbarComponentNgFactory", function () {
      return TopbarComponentNgFactory;
    });
    /* harmony import */
    var _topbar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./topbar.component.css.shim.ngstyle */"./src/app/topbar/topbar.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./topbar.component */"./src/app/topbar/topbar.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_TopbarComponent = [_topbar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_TopbarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_TopbarComponent,
      data: {}
    });
    function View_TopbarComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["class", "btn btn-info m-l-15"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.onClick() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        ngClass: [0, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.btnIcon;
        _ck(_v, 3, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.btnTitle;
        _ck(_v, 4, 0, currVal_1);
      });
    }
    function View_TopbarComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "row align-items-center page-titles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "col-md-5 col-6 align-self-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "d-flex align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "span", [["class", "fa fa-arrow-left back-arrow d-md-none"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.goBack() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [["class", "text-themecolor"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;
        if ("click" === en) {
          var pd_0 = _co.goBack() !== false;
          ad = pd_0 && ad;
        }
        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "div", [["class", "col-md-7 col-6 align-self-center text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "d-flex justify-content-end align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TopbarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.btnTitle !== "";
        _ck(_v, 9, 0, currVal_1);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.title;
        _ck(_v, 5, 0, currVal_0);
      });
    }
    function View_TopbarComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TopbarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.title !== "";
        _ck(_v, 1, 0, currVal_0);
      }, null);
    }
    function View_TopbarComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-topbar", [], null, null, null, View_TopbarComponent_0, RenderType_TopbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _topbar_component__WEBPACK_IMPORTED_MODULE_3__["TopbarComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var TopbarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-topbar", _topbar_component__WEBPACK_IMPORTED_MODULE_3__["TopbarComponent"], View_TopbarComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/topbar/topbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/topbar/topbar.component.ts ***!
    \********************************************/
  /*! exports provided: TopbarComponent */
  /***/
  function srcAppTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var TopbarComponent = /*#__PURE__*/function () {
      function TopbarComponent(router, authService, _location) {
        var _this36 = this;
        _classCallCheck(this, TopbarComponent);
        this.router = router;
        this.authService = authService;
        this._location = _location;
        this.title = '';
        this.btnTitle = '';
        this.btnNavigation = '';
        this.btnIcon = '';
        this.router.events.subscribe(function (event) {
          var url = _this36.router.url;
          if (url == '/app/patient') {
            _this36.title = 'Patients';
            if (authService.currentUserValue.role == 'hospital' || authService.currentUserValue.role == 'FDO') {
              _this36.btnTitle = 'Add New';
            } else {
              _this36.btnTitle = '';
            }
            _this36.btnNavigation = '/app/patient/add';
            _this36.btnIcon = 'fa fa-plus-circle';
          }
          // Update Details Back Button
          else if (url.includes("app/patient/edit")) {
            _this36.title = 'Patient Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = null;
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes("app/labattendant/edit")) {
            _this36.title = 'Lab Scientist Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = null;
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes("app/doctor/edit/")) {
            _this36.title = 'Doctor Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = null;
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes("app/fdo/edit/")) {
            _this36.title = 'Front Desk Officer Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = null;
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes("app/pharmacy/edit/")) {
            _this36.title = 'Pharmacy Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = null;
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes("app/hospitals/edit/")) {
            _this36.title = 'Hospital Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = null;
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/patient/add') {
            _this36.title = 'Add Patient';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/patient';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/patient/dash') {
            _this36.title = '';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url.includes('add-followup')) {
            _this36.title = 'Add Followup';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = url.replace(url.slice(url.indexOf("add-followup"), url.length), '');
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes('followup')) {
            _this36.title = 'Followup';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = url.replace(url.slice(url.indexOf("followup"), url.length), '');
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes('medical')) {
            _this36.title = 'Medical History';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = url.replace('/medical', '');
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes('/app/patient/profile')) {
            _this36.title = 'Profile';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url.includes('/app/patient')) {
            _this36.title = 'Patient Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/patient';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/patient/1/medical') {
            _this36.title = 'Medical History';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url.includes('/app/hospitals/dash')) {
            _this36.title = '';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url.includes('app/hospitals/profile')) {
            _this36.title = 'Profile';
            _this36.btnTitle = '';
            _this36.btnNavigation = '/';
            _this36.btnIcon = '';
          } else if (url.includes('/app/hospitals/profile')) {
            _this36.title = 'Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/hospitals';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes('/app/hospitals/add')) {
            _this36.title = 'Add Hospital';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/hospitals';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes('/app/hospitals')) {
            _this36.title = 'Hospitals';
            _this36.btnTitle = 'Add New';
            _this36.btnNavigation = '/app/hospitals/add';
            _this36.btnIcon = 'fa fa-plus-circle';
          } else if (url == '/app/doctor') {
            _this36.title = 'Doctors';
            if (authService.currentUserValue.role == 'hospital') {
              _this36.btnTitle = 'Add New';
            } else {
              _this36.btnTitle = '';
            }
            _this36.btnNavigation = '/app/doctor/add';
            _this36.btnIcon = 'fa fa-plus-circle';
          } else if (url == '/app/doctor/add') {
            _this36.title = 'Add Doctor';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/doctor';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes('/app/doctor/profile')) {
            _this36.title = 'Profile';
            _this36.btnTitle = '';
            _this36.btnNavigation = '/';
            _this36.btnIcon = '';
          } else if (url.includes('/app/doctor')) {
            _this36.title = 'Doctor Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/doctor';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/pharmacy') {
            _this36.title = 'Pharmacies';
            if (authService.currentUserValue.role == 'hospital') {
              _this36.btnTitle = 'Add New';
            } else {
              _this36.btnTitle = '';
            }
            _this36.btnNavigation = '/app/pharmacy/add';
            _this36.btnIcon = 'fa fa-plus-circle';
          } else if (url == '/app/pharmacy/add') {
            _this36.title = 'Add Pharmacy';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/pharmacy';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url.includes('/app/pharmacy/profile')) {
            _this36.title = 'Profile';
            _this36.btnTitle = '';
            _this36.btnNavigation = '/app/pharmacy';
            _this36.btnIcon = '';
          }
          // else if (url.includes('/app/pharmacy/profile')) {
          //   this.title = 'pharmacy Profile';
          //   this.btnTitle = 'Back';
          //   this.btnNavigation = '/app/pharmacy';
          //   this.btnIcon = 'fa fa-arrow-circle-left';
          // }
          else if (url == '/app/labattendant') {
            _this36.title = 'Lab Scientist';
            if (authService.currentUserValue.role == 'hospital') {
              _this36.btnTitle = 'Add New';
            } else {
              _this36.btnTitle = '';
            }
            _this36.btnNavigation = '/app/labattendant/add';
            _this36.btnIcon = 'fa fa-plus-circle';
          } else if (url == '/app/fdo/add') {
            _this36.title = 'Add Front Desk Officer';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/fdo';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/fdo/dash') {
            _this36.title = '';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url.includes('/app/fdo/profile')) {
            _this36.title = 'Front Desk Officer Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/fdo';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/fdo') {
            _this36.title = 'Front Desk Officer';
            if (authService.currentUserValue.role == 'hospital') {
              _this36.btnTitle = 'Add New';
            } else {
              _this36.btnTitle = '';
            }
            _this36.btnNavigation = '/app/fdo/add';
            _this36.btnIcon = 'fa fa-plus-circle';
          } else if (url == '/app/labattendant/add') {
            _this36.title = 'Add Lab Scientist';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/labattendant';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/labattendant/dash') {
            _this36.title = '';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url.includes('/app/labattendant/profile')) {
            _this36.title = 'Profile';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url.includes('/app/labattendant')) {
            _this36.title = 'Lab Scientist Profile';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/labattendant';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/payment') {
            _this36.title = 'Payment';
            authService.currentUserValue.role == 'patient' ? _this36.btnTitle = "" : _this36.btnTitle = 'Add New';
            // this.btnTitle = 'Add New';
            _this36.btnNavigation = '/app/payment/add';
            _this36.btnIcon = 'fa fa-plus-circle';
          } else if (url == '/app/payment/add') {
            _this36.title = 'Add Payment';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/payment';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/user') {
            _this36.title = 'Users';
            _this36.btnTitle = 'Add New';
            _this36.btnNavigation = '/app/user/add';
            _this36.btnIcon = 'fa fa-plus-circle';
          } else if (url == '/app/user/add') {
            _this36.title = 'Add User';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/user';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/hospital') {
            _this36.title = 'Hospitals';
            _this36.btnTitle = 'Add New';
            _this36.btnNavigation = '/app/hospital/add';
            _this36.btnIcon = 'fa fa-plus-circle';
          } else if (url == '/app/hospital/add') {
            _this36.title = 'Add Hospital';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/hospital';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/request') {
            _this36.title = 'Incoming Requests';
            _this36.btnTitle = '';
            _this36.btnNavigation = '/app';
            _this36.btnIcon = '';
          } else if (url == '/app/calender') {
            _this36.title = 'Appointments';
            if (authService.currentUserValue.role == 'doctor' || authService.currentUserValue.role == 'hospital' || authService.currentUserValue.role == 'FDO') {
              _this36.btnTitle = 'Add New';
            } else {
              _this36.btnTitle = '';
            }
            _this36.btnNavigation = '/app/calender/book';
            _this36.btnIcon = 'fa fa-plus-circle';
          } else if (url == '/app/calender/book') {
            _this36.title = 'Book an Appointment';
            _this36.btnTitle = 'Back';
            _this36.btnNavigation = '/app/calender';
            _this36.btnIcon = 'fa fa-arrow-circle-left';
          } else if (url == '/app/reports/sales') {
            _this36.title = 'Sales Report';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url == '/app/reports/income') {
            _this36.title = 'Income Report';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url == '/app/reports/payments') {
            _this36.title = 'Payments Report';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url == '/app/home') {
            _this36.title = 'Dashboard';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url == '/app/contacts') {
            _this36.title = 'Employee Contacts';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url == '/app/contact') {
            _this36.title = 'Patient Contacts';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url == '/app/reports/stats') {
            _this36.title = 'Reports';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url == '/app/inbox') {
            _this36.title = 'Inbox';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else if (url == '/app/profile') {
            _this36.title = 'Profile';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          } else {
            _this36.title = '';
            _this36.btnTitle = '';
            _this36.btnNavigation = '';
            _this36.btnIcon = '';
          }
        });
      }
      _createClass(TopbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isTittle",
        get: function get() {
          return this.title !== '';
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (!this.btnNavigation) {
            this.goBack();
            return;
          }
          this.router.navigate([this.btnNavigation]);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this._location.back();
        }
      }]);
      return TopbarComponent;
    }();
    /***/
  },
  /***/"./src/app/verifyEmail/verifyEmail.component.css.shim.ngstyle.js":
  /*!***********************************************************************!*\
    !*** ./src/app/verifyEmail/verifyEmail.component.css.shim.ngstyle.js ***!
    \***********************************************************************/
  /*! exports provided: styles */
  /***/
  function srcAppVerifyEmailVerifyEmailComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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
    var styles = ["@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);\n\n\n\n\n.login-register[_ngcontent-%COMP%] {\n  \n  height: 100%;\n  width: 100%;\n  padding: 10% 0;\n  position: fixed;\n }\n.login-box[_ngcontent-%COMP%] {\n  width: 400px;\n  margin: 0 auto; }\n.login-box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    width: 100%;\n    left: 0px;\n    right: 0px; }\n.login-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 30px; }\n#recoverform[_ngcontent-%COMP%] {\n  display: none; }\n.login-sidebar[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-top: 0px; }\n.login-sidebar[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%] {\n    right: 0px;\n    position: absolute;\n    height: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5RW1haWwvdmVyaWZ5RW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsZ0ZBQWdGO0FBTmhGOzs7OztDQUtDO0FBRUQsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFO0FBQ0Y7O2tCQUVrQjtBQUNsQjtFQUNFOzt1Q0FFcUM7RUFDckMsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBRTtBQUNoQjtJQUNFLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVSxFQUFFO0FBQ2Q7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CLEVBQUU7QUFFekI7RUFDRSxhQUFhLEVBQUU7QUFFakI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFFO0FBQ2pCO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZLEVBQUUiLCJmaWxlIjoic3JjL2FwcC92ZXJpZnlFbWFpbC92ZXJpZnlFbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRlbXBsYXRlIE5hbWU6IEFkbWluIFRlbXBsYXRlXG5BdXRob3I6IFdyYXBwaXhlbFxuXG5GaWxlOiBzY3NzXG4qL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMCk7XG4vKlRoZW1lIENvbG9ycyovXG4vKipcbiAqIFRhYmxlIE9mIENvbnRlbnRcbiAqXG4gKiBcdDEuIENvbG9yIHN5c3RlbVxuICpcdDIuIE9wdGlvbnNcbiAqXHQzLiBCb2R5XG4gKlx0NC4gVHlwb2dyYXBoeVxuICpcdDUuIEJyZWFkY3J1bWJzXG4gKlx0Ni4gQ2FyZHNcbiAqXHQ3LiBEcm9wZG93bnNcbiAqXHQ4LiBCdXR0b25zXG4gKlx0OS4gVHlwb2dyYXBoeVxuICpcdDEwLiBQcm9ncmVzcyBiYXJzXG4gKlx0MTEuIFRhYmxlc1xuICpcdDEyLiBGb3Jtc1xuICpcdDE0LiBDb21wb25lbnRcbiAqL1xuLyoqKioqKioqKioqKioqKioqKipcbkxvZ2luIHJlZ2lzdGVyIGFuZCByZWNvdmVyIHBhc3N3b3JkIFBhZ2VcbioqKioqKioqKioqKioqKioqKi9cbi5sb2dpbi1yZWdpc3RlciB7XG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7ICovXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwJSAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gfVxuXG4ubG9naW4tYm94IHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuICAubG9naW4tYm94IC5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4OyB9XG4gIC5sb2dpbi1ib3ggLnNvY2lhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuXG4jcmVjb3ZlcmZvcm0ge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5sb2dpbi1zaWRlYmFyIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7IH1cbiAgLmxvZ2luLXNpZGViYXIgLmxvZ2luLWJveCB7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4iXX0= */"];

    /***/
  },

  /***/"./src/app/verifyEmail/verifyEmail.component.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./src/app/verifyEmail/verifyEmail.component.ngfactory.js ***!
    \****************************************************************/
  /*! exports provided: RenderType_VerifyEmailComponent, View_VerifyEmailComponent_0, View_VerifyEmailComponent_Host_0, VerifyEmailComponentNgFactory */
  /***/
  function srcAppVerifyEmailVerifyEmailComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RenderType_VerifyEmailComponent", function () {
      return RenderType_VerifyEmailComponent;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_VerifyEmailComponent_0", function () {
      return View_VerifyEmailComponent_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "View_VerifyEmailComponent_Host_0", function () {
      return View_VerifyEmailComponent_Host_0;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "VerifyEmailComponentNgFactory", function () {
      return VerifyEmailComponentNgFactory;
    });
    /* harmony import */
    var _verifyEmail_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./verifyEmail.component.css.shim.ngstyle */"./src/app/verifyEmail/verifyEmail.component.css.shim.ngstyle.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _verifyEmail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./verifyEmail.component */"./src/app/verifyEmail/verifyEmail.component.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../auth.service */"./src/app/auth.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */

    var styles_VerifyEmailComponent = [_verifyEmail_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
    var RenderType_VerifyEmailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_VerifyEmailComponent,
      data: {}
    });
    function View_VerifyEmailComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" verifyEmail works!\n"]))], null, null);
    }
    function View_VerifyEmailComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-verifyEmail", [], null, null, null, View_VerifyEmailComponent_0, RenderType_VerifyEmailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _verifyEmail_component__WEBPACK_IMPORTED_MODULE_2__["VerifyEmailComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }
    var VerifyEmailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-verifyEmail", _verifyEmail_component__WEBPACK_IMPORTED_MODULE_2__["VerifyEmailComponent"], View_VerifyEmailComponent_Host_0, {}, {}, []);

    /***/
  },

  /***/"./src/app/verifyEmail/verifyEmail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/verifyEmail/verifyEmail.component.ts ***!
    \******************************************************/
  /*! exports provided: VerifyEmailComponent */
  /***/
  function srcAppVerifyEmailVerifyEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function () {
      return VerifyEmailComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! sweetalert2 */"./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */
    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    var VerifyEmailComponent = /*#__PURE__*/function () {
      function VerifyEmailComponent(router, route, authService) {
        _classCallCheck(this, VerifyEmailComponent);
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.accessToken = null;
        this.error = null;
        this.loading = false;
        this.isloading = false;
      }
      _createClass(VerifyEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;
          // redirect to home if already logged in
          if (this.authService.currentUserValue) {
            this.router.navigate(['/app']);
          }
          this.routeSub = this.route.params.subscribe(function (params) {
            _this37.accessToken = params['token'];
            if (_this37.accessToken) {
              _this37.authService.verifyEmailLink({
                accessToken: _this37.accessToken
              }).subscribe(function (res) {
                console.log(res);
                if (+res.status === 200) {
                  _this37.authService.saveUser(res.body);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Email Verified Successfully',
                    showConfirmButton: false,
                    timer: 1000
                  });
                  _this37.goToDashboard();
                  // Swal.fire('Email Verified Successfully', '', 'success');
                }
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: err.error.info
                });
                _this37.router.navigate(['/login']);
              });
            } else {
              _this37.router.navigate(['/login']);
            }
          });
        }
      }, {
        key: "goToDashboard",
        value: function goToDashboard() {
          var route = '/';
          if (this.authService.currentUserValue.role === 'patient') {
            route = "/app/patient/dash";
          } else if (this.authService.currentUserValue.role === 'admin') {
            route = "/app/dash";
          } else if (this.authService.currentUserValue.role === 'hospital') {
            route = "/app/hospitals/dash";
          } else if (this.authService.currentUserValue.role === 'doctor') {
            route = "/app/doctor/dash";
          } else if (this.authService.currentUserValue.role === 'labAttendant') {
            route = "/app/labattendant/dash";
          } else if (this.authService.currentUserValue.role === 'pharmacy') {
            route = "/app/pharmacy/dash";
          } else if (this.authService.currentUserValue.role === 'FDO') {
            route = "/app/fdo/dash";
          }
          this.router.navigate([route]);
        }
      }]);
      return VerifyEmailComponent;
    }();
    /***/
  },
  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    var environment = {
      production: false,
      // base_url: 'https://portal.medfestng.com/'
      base_url: "http://127.0.0.1:3000/"
      // base_url: 'http://198.245.53.50:3000/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    /* harmony import */
    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module.ngfactory */"./src/app/app.module.ngfactory.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! /Users/admin/Desktop/career-projects/medfest-emr/emr/HOS-master/src/main.ts */"./src/main.ts");

    /***/
  },

  /***/1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/
  /*! no static exports found */
  /***/
  function _(module, exports) {

    /* (ignored) */

    /***/}
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map