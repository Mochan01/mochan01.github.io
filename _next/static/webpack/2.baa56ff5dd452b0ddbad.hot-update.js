webpackHotUpdate(2,{

/***/ "./util/PhaserCustomEvent.ts":
/*!***********************************!*\
  !*** ./util/PhaserCustomEvent.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhaserCustomEvent; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");




var PhaserCustomEvent = /*#__PURE__*/function () {
  function PhaserCustomEvent(scene, obj) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhaserCustomEvent);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "isTouch", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "gameObject", void 0);

    this.isTouch = !!scene.game.input.touch;
    this.gameObject = obj;
  }
  /**
   * Custom events.
   * - click
   * @param eventName 
   * @param fn 
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PhaserCustomEvent, [{
    key: "on",
    value: function on(eventName, fn) {
      switch (eventName) {
        case "click":
          this.gameObject.setInteractive({
            useHandCursor: true
          }).on("pointerup", function (pointer) {
            // CSSのpointer-eventsを効くようにsする
            // if (pointer.downElement.nodeName !== 'CANVAS') return;
            // 親でprevent defaultを無効にしてるため、これを入れないと重複タッチされてしまう。
            // if (this.isTouch && !pointer["id"]) return;
            var distanceX = pointer.getDistanceX();
            var distanceY = pointer.getDistanceY();
            var ratio = 8;

            if (distanceX < ratio && distanceY < ratio) {
              console.log("hoge");
              fn();
            }
          });
          break;
      }

      ;
    }
  }]);

  return PhaserCustomEvent;
}();



/***/ })

})
//# sourceMappingURL=2.baa56ff5dd452b0ddbad.hot-update.js.map