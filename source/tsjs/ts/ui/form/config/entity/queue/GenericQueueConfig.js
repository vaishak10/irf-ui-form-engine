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
    exports.GenericQueueConfig = exports.AbstractQueueConfig = void 0;
    var AbstractQueueConfig = /** @class */ (function (_super) {
        __extends(AbstractQueueConfig, _super);
        function AbstractQueueConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AbstractQueueConfig;
    }(AbstractEntityConfig_1.AbstractEntityConfig));
    exports.AbstractQueueConfig = AbstractQueueConfig;
    var GenericQueueConfig = /** @class */ (function (_super) {
        __extends(GenericQueueConfig, _super);
        function GenericQueueConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.filters = [];
            _this.columns = [];
            return _this;
        }
        return GenericQueueConfig;
    }(AbstractQueueConfig));
    exports.GenericQueueConfig = GenericQueueConfig;
});
