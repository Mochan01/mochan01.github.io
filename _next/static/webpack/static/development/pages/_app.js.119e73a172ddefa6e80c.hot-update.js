webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/organisms/HeaderUnit/HeaderUnit.tsx":
/*!********************************************************!*\
  !*** ./components/organisms/HeaderUnit/HeaderUnit.tsx ***!
  \********************************************************/
/*! exports provided: HeaderUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUnit", function() { return HeaderUnit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _molecules_ControlUnit_ControlUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/ControlUnit/ControlUnit */ "./components/molecules/ControlUnit/ControlUnit.tsx");
/* harmony import */ var _styles_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/wrapper */ "./styles/wrapper.tsx");
/* harmony import */ var _constants_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/size */ "./constants/size.ts");
var _this = undefined,
    _jsxFileName = "C:\\Users\\drbob\\repos\\work\\bng-wap-front\\components\\organisms\\HeaderUnit\\HeaderUnit.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/**
 * Styled component.
 */
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1hq2yxo-0"
})(["", " width:100%;position:fixed;top:0;left:0;right:0;margin:0 auto;padding-top:", "px;overflow:hidden;z-index:3;@keyframes slideAsVerticalNext2{0%{transform:translateY(-", "px);animation-timing-function:cubic-bezier(0.22,1,0.36,1);opacity:0;}50%{transform:translateY(", "px);animation-timing-function:ease-in;}100%{transform:translateY(0);animation-timing-function:ease-out;opacity:1;}}@keyframes slideAsVerticalPrev2{0%{transform:translateY(0);animation-timing-function:cubic-bezier(0.22,1,0.36,1);opacity:1;}50%{transform:translateY(", "px);animation-timing-function:ease-in;}100%{transform:translateY(-", "px);animation-timing-function:ease-out;opacity:0;}}"], _styles_wrapper__WEBPACK_IMPORTED_MODULE_3__["sidePadding"], _constants_size__WEBPACK_IMPORTED_MODULE_4__["default"].controlUnitTopMargin, function (props) {
  return props.contentHeight;
}, function (props) {
  return props.contentHeight * 0.05;
}, function (props) {
  return props.contentHeight * 0.05;
}, function (props) {
  return props.contentHeight;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1hq2yxo-1"
})(["max-width:864px;margin:0 auto;position:relative;& > .penguin{position:absolute;bottom:0;right:0;}"]);
/**
 * Functional component.
 * @param props 
 */

var HeaderUnit = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var setTransTime = _ref.setTransTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      contentHeight = _useState[0],
      setContentHeight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var el = document.getElementById("__next").children[0];
    if (el) setContentHeight(el.clientHeight);
    return function () {
      if (el) setContentHeight(el.clientHeight);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Main, {
    id: "horizonStatics",
    contentHeight: contentHeight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_molecules_ControlUnit_ControlUnit__WEBPACK_IMPORTED_MODULE_2__["ControlUnit"], {
    setTransTime: setTransTime,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }))));
});

/***/ })

})
//# sourceMappingURL=_app.js.119e73a172ddefa6e80c.hot-update.js.map