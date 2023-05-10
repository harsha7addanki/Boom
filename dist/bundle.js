/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// UNUSED EXPORTS: BoomBind

;// CONCATENATED MODULE: ./src/BoomBind.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BoomBindElement = /** @class */ (function (_super) {
    __extends(BoomBindElement, _super);
    function BoomBindElement() {
        return _super.call(this) || this;
    }
    BoomBindElement.prototype.connectedCallback = function () {
        this.attachShadow({ mode: "open" });
        var wrapper = document.createElement("div");
        if (this.hasAttribute("bname")) {
            // avoid users from knowing the raw id (Could be used for exploit). Keep it as class becauce what if you want to mass change something?
            wrapper.setAttribute("class", "boom-".concat(this.getAttribute("bname")));
        }
        else {
            throw "No BName";
        }
        this.shadowRoot.append(wrapper);
    };
    return BoomBindElement;
}(HTMLElement));
var BoomBind = /** @class */ (function () {
    function BoomBind(bname) {
        this.bname = "boom-".concat(bname);
    }
    BoomBind.prototype.bind = function (text) {
        var elements = document.getElementsByClassName(this.bname);
        for (var _i = 0, _a = Array.from(elements); _i < _a.length; _i++) {
            var element = _a[_i];
            element.innerHTML = text;
        }
    };
    return BoomBind;
}());


;// CONCATENATED MODULE: ./src/index.ts

customElements.define("boom-bind", BoomBindElement);


/******/ })()
;