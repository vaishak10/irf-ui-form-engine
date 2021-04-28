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
define(["require", "exports", "../AbstractEntityDefinition"], function (require, exports, AbstractEntityDefinition_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenericDetailDefinition = exports.AbstractDetailDefinition = void 0;
    var AbstractDetailDefinition = /** @class */ (function (_super) {
        __extends(AbstractDetailDefinition, _super);
        function AbstractDetailDefinition() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getIncludes = [];
            _this.overrides = [];
            _this.repositoryAdditions = {};
            _this.json = {};
            return _this;
        }
        return AbstractDetailDefinition;
    }(AbstractEntityDefinition_1.AbstractEntityDefinition));
    exports.AbstractDetailDefinition = AbstractDetailDefinition;
    var GenericDetailDefinition = /** @class */ (function (_super) {
        __extends(GenericDetailDefinition, _super);
        function GenericDetailDefinition(data) {
            if (data === void 0) { data = {}; }
            var _this = _super.call(this) || this;
            Object.assign(_this, data);
            return _this;
        }
        return GenericDetailDefinition;
    }(AbstractDetailDefinition));
    exports.GenericDetailDefinition = GenericDetailDefinition;
});
