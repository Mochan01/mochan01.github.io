webpackHotUpdate("static\\development\\pages\\menus.js",{

/***/ "./components/templates/Menu/Menu.tsx":
/*!********************************************!*\
  !*** ./components/templates/Menu/Menu.tsx ***!
  \********************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/wrapper */ "./styles/wrapper.tsx");
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/colors */ "./constants/colors.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../containers */ "./containers.ts");
/* harmony import */ var _constants_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/time */ "./constants/time.ts");
var _this = undefined,
    _jsxFileName = "C:\\Users\\drbob\\repos\\work\\bng-wap-front\\components\\templates\\Menu\\Menu.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







/**
 * Styled component.
 */
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  componentId: "sc-1bsdk52-0"
})(["height:100%;position:relative;background-color:", ";", " ", " margin-bottom:100px;& > div{", "}"], _constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _styles_wrapper__WEBPACK_IMPORTED_MODULE_2__["sidePadding"], _styles_wrapper__WEBPACK_IMPORTED_MODULE_2__["topPaddingLarge"], _styles_wrapper__WEBPACK_IMPORTED_MODULE_2__["mainWrapper"]);
/**
 * Functional component.
 * @param props 
 */

var Menu = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var children = _ref.children;

  var _CreateBgColor$useCon = _containers__WEBPACK_IMPORTED_MODULE_4__["CreateBgColor"].useContainer(),
      setBgColor = _CreateBgColor$useCon.setBgColor;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      setBgColor(_constants_colors__WEBPACK_IMPORTED_MODULE_3__["default"].blue);
    }, _constants_time__WEBPACK_IMPORTED_MODULE_5__["default"].transitionAnimation);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Main, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, children));
});

/***/ })

})
//# sourceMappingURL=menus.js.62d72705d0dd29b0c42f.hot-update.js.map