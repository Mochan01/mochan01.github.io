webpackHotUpdate("static\\development\\pages\\menus\\menu2.js",{

/***/ "./constants/transitionStyles.ts":
/*!***************************************!*\
  !*** ./constants/transitionStyles.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./constants/time.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
  init: "\n    .page-transition-enter {\n    }\n    .page-transition-enter-active {\n    }\n    .page-transition-exit {\n    }\n    .page-transition-exit-active {\n    }\n    .page-transition-enter #horizonStatics{\n    }\n  ",
  slideAsVerticalNext: "\n    .page-transition-enter {\n      transform: translateY(100%);\n      #horizonStatics {\n        transform: translateY(-100%);\n      }\n    }\n\n    .page-transition-enter-active {\n      animation: slideAsVerticalNext ".concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms;\n      @keyframes slideAsVerticalNext {\n        0% {\n          transform: translateY(100%);\n          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n        }\n        50% {\n          transform: translateY(-2.5%);\n          \n          animation-timing-function: ease-in;\n        }\n        100% {\n          transform: translateY(0);\n          animation-timing-function: ease-out;\n        }\n      }\n\n      #horizonStatics {\n        animation: slideAsVerticalNext2 ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms;\n        opacity: 0;\n      }\n    }\n\n    .page-transition-exit {\n      transform: translateY(0);\n      #horizonStatics {\n        transform: translateY(0);\n      }\n    }\n\n    .page-transition-exit-active {\n      transform: translateY(-100%);\n      transition: transform ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms cubic-bezier(0.32, 0, 0.67, 0);\n      #horizonStatics {\n        transform: translateY(100%);\n        transition: transform ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms cubic-bezier(0.32, 0, 0.67, 0);\n      }\n    }\n  "),
  slideAsVerticalPrev: "\n    .page-transition-enter {\n      transform: translateY(-100%);\n      #horizonStatics {\n        transform: translateY(0);\n      }\n    }\n\n    .page-transition-enter-active {\n      transform: translateY(0);\n      transition: transform ".concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms cubic-bezier(0.33, 1, 0.68, 1);\n      #horizonStatics {\n        transform: translateY(-100%);\n        transition: transform ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms cubic-bezier(0.33, 1, 0.68, 1);\n      }\n    }\n\n    .page-transition-exit {\n      transform: translateY(100%);\n      #horizonStatics {\n        transform: translateY(100%);\n      }\n    }\n\n    .page-transition-exit-active {\n      animation: slideAsVerticalPrev ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms;\n      @keyframes slideAsVerticalPrev {\n        0% {\n          transform: translateY(0);\n          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n        }\n        50% {\n          transform: translateY(-2.5%);\n          animation-timing-function: ease-in;\n        }\n        100% {\n          transform: translateY(100%);\n          animation-timing-function: ease-out;\n        }\n      }\n\n      #horizonStatics {\n        animation: slideAsVerticalPrev2 ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms;\n      }\n    }\n  "),
  slideAsHorizontalNext: "\n    .page-transition-enter {\n      transform: translateX(100vw);\n      #horizonStatics {\n        transform: translateX(-100vw);\n      }\n    }\n\n    .page-transition-enter-active {\n      animation: slideAsHorizontalNext ".concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms;\n      @keyframes slideAsHorizontalNext {\n        0% {\n          transform: translateX(100vw);\n          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n        }\n        50% {\n          transform: translateX(-5vw);\n          \n          animation-timing-function: ease-in;\n        }\n        100% {\n          transform: translateX(0);\n          animation-timing-function: ease-out;\n        }\n      }\n\n      #horizonStatics {\n        animation: slideAsHorizontalNext2 ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms;\n        @keyframes slideAsHorizontalNext2 {\n          0% {\n            transform: translateX(-100vw);\n            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n          }\n          50% {\n            transform: translateX(5vw);\n            \n            animation-timing-function: ease-in;\n          }\n          100% {\n            transform: translateX(0);\n            animation-timing-function: ease-out;\n          }\n        }\n      }\n    }\n\n    .page-transition-exit {\n      transform: translateX(0);\n      #horizonStatics {\n        transform: translateX(0);\n      }\n    }\n\n    .page-transition-exit-active {\n      transform: translateX(-100vw);\n      transition: transform ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms cubic-bezier(0.32, 0, 0.67, 0);\n      #horizonStatics {\n        transform: translateX(100vw);\n        transition: transform ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms cubic-bezier(0.32, 0, 0.67, 0);\n      }\n    }\n  "),
  slideAsHorizontalPrev: "\n    .page-transition-enter {\n      transform: translateX(-100vw);\n      #horizonStatics {\n        transform: translateX(100vw);\n      }\n    }\n\n    .page-transition-enter-active {\n      animation: slideAsHorizontalPrev ".concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms;\n      @keyframes slideAsHorizontalPrev {\n        0% {\n          transform: translateX(-100vw);\n          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n        }\n        50% {\n          transform: translateX(5vw);\n          \n          animation-timing-function: ease-in;\n        }\n        100% {\n          transform: translateX(0);\n          animation-timing-function: ease-out;\n        }\n      }\n\n      #horizonStatics {\n        animation: slideAsHorizontalPrev2 ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms;\n        @keyframes slideAsHorizontalPrev2 {\n          0% {\n            transform: translateX(100vw);\n            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n          }\n          50% {\n            transform: translateX(-5vw);\n            \n            animation-timing-function: ease-in;\n          }\n          100% {\n            transform: translateX(0);\n            animation-timing-function: ease-out;\n          }\n        }\n      }\n    }\n\n    .page-transition-exit {\n      transform: translateX(0);\n      #horizonStatics {\n        transform: translateX(0);\n      }\n    }\n\n    .page-transition-exit-active {\n      transform: translateX(100vw);\n      transition: transform ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms cubic-bezier(0.32, 0, 0.67, 0);\n      #horizonStatics {\n        transform: translateX(-100vw);\n        transition: transform ").concat(_time__WEBPACK_IMPORTED_MODULE_0__["default"].transitionAnimation, "ms cubic-bezier(0.32, 0, 0.67, 0);\n      }\n    }\n  ")
});

/***/ })

})
//# sourceMappingURL=menu2.js.61ae6f4a82c176ce94ae.hot-update.js.map