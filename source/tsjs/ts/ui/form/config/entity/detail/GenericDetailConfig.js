var __extends = (this && this.__extends) || (function () {
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
define(["require", "exports", "../AbstractEntityConfig"], function (require, exports, AbstractEntityConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenericDetailConfig = exports.AbstractDetailConfig = void 0;
    var AbstractDetailConfig = /** @class */ (function (_super) {
        __extends(AbstractDetailConfig, _super);
        function AbstractDetailConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.processJson = {};
            return _this;
        }
        return AbstractDetailConfig;
    }(AbstractEntityConfig_1.AbstractEntityConfig));
    exports.AbstractDetailConfig = AbstractDetailConfig;
    var GenericDetailConfig = /** @class */ (function (_super) {
        __extends(GenericDetailConfig, _super);
        function GenericDetailConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GenericDetailConfig;
    }(AbstractDetailConfig));
    exports.GenericDetailConfig = GenericDetailConfig;
});
