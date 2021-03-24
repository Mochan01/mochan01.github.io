webpackHotUpdate("static\\development\\pages\\menus\\menu2\\act\\1.js",{

/***/ "./components/templates/Content/Content.tsx":
/*!**************************************************!*\
  !*** ./components/templates/Content/Content.tsx ***!
  \**************************************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/wrapper */ "./styles/wrapper.tsx");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/colors */ "./constants/colors.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../containers */ "./containers.ts");
/* harmony import */ var _constants_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/time */ "./constants/time.ts");
var _this = undefined,
    _jsxFileName = "C:\\Users\\drbob\\repos\\work\\bng-wap-front\\components\\templates\\Content\\Content.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/**
 * Styled component.
 */
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1nuf6s3-0"
})(["width:100%;background-color:", ";"], _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue);
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1nuf6s3-1"
})(["", " width:100%;max-width:1025px;background-color:#fff;margin:0 auto;min-height:100vh;position:relative;padding-bottom:100px;"], _styles_wrapper__WEBPACK_IMPORTED_MODULE_2__["sidePadding"]);
var ChildWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1nuf6s3-2"
})(["", " ", ""], _styles_wrapper__WEBPACK_IMPORTED_MODULE_2__["topPaddingMidium"], _styles_wrapper__WEBPACK_IMPORTED_MODULE_2__["mainWrapper"]);
var HeaderOvr = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1nuf6s3-3"
})(["width:100%;top:0;left:0;right:0;padding-top:92px;position:fixed;z-index:1;&:before{width:100%;height:100%;content:\"\";top:0;left:0;right:0;margin:auto;max-width:1025px;position:absolute;background-color:#fff;}"]);
/**
 * Functional component.
 * @param props 
 */

var Content = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var children = _ref.children;

  var _CreateBgColor$useCon = _containers__WEBPACK_IMPORTED_MODULE_4__["CreateBgColor"].useContainer(),
      setBgColor = _CreateBgColor$useCon.setBgColor;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      setBgColor(_constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue);
    }, _constants_time__WEBPACK_IMPORTED_MODULE_5__["default"].transitionAnimation);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(Main, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(HeaderOvr, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx(ChildWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, children))));
});

/***/ })

})
//# sourceMappingURL=1.js.12fd995afc28fc32b676.hot-update.js.map