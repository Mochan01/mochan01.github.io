(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@ion-phaser/core/dist/esm/ion-phaser.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ion-phaser/core/dist/esm/ion-phaser.entry.js ***!
  \********************************************************************/
/*! exports provided: ion_phaser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_phaser", function() { return IonPhaser; });
/* harmony import */ var _index_53dab568_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53dab568.js */ "./node_modules/@ion-phaser/core/dist/esm/index-53dab568.js");


const ionPhaserCss = "ion-phaser{display:block}";

const IonPhaser = class {
  constructor(hostRef) {
    Object(_index_53dab568_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Initialize the phaser game manually
     */
    this.initialize = true;
    this.initializeGame = (game = this.game) => {
      if (game === null || game === undefined)
        return;
      if (game.instance !== undefined && game.instance !== null) {
        throw new Error("A Phaser game already exist");
      }
      game.parent = game.parent || this.el;
      game.instance = new Phaser.Game(game);
    };
  }
  onGameChange(game) {
    if (this.initialize && !this.hasInitialized()) {
      this.initializeGame(game);
    }
  }
  onInitialize(newInitialize, oldInitialize) {
    if (newInitialize && !oldInitialize) {
      this.initializeGame();
    }
  }
  /**
   * Get the Phaser game instance
   */
  async getInstance() {
    const { instance } = this.game || {};
    return Promise.resolve(instance);
  }
  /**
   * Destroy the Phaser game instance
   */
  async destroy() {
    if (this.hasInitialized()) {
      this.game.instance.destroy(true);
      this.game.instance = null;
    }
  }
  connectedCallback() {
    if (!this.hasInitialized() && this.initialize) {
      this.initializeGame();
    }
  }
  disconnectedCallback() {
    this.destroy();
  }
  hasInitialized() {
    return (this.game &&
      this.game.instance !== undefined &&
      this.game.instance !== null);
  }
  get el() { return Object(_index_53dab568_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "game": ["onGameChange"],
    "initialize": ["onInitialize"]
  }; }
};
IonPhaser.style = ionPhaserCss;




/***/ })

}]);
//# sourceMappingURL=3.js.map