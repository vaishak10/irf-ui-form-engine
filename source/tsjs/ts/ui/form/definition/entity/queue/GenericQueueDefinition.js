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
    exports.GenericQueueDefinition = exports.AbstractQueueDefinition = void 0;
    var AbstractQueueDefinition = /** @class */ (function (_super) {
        __extends(AbstractQueueDefinition, _super);
        function AbstractQueueDefinition() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.searchTitle = "";
            _this.uiPageNation = true;
            _this.serverPagination = true;
            _this.uiPerPage = 10;
            _this.serverPerPage = 100;
            _this.filters = [];
            _this.columns = [];
            _this._searchSchema = {};
            return _this;
        }
        return AbstractQueueDefinition;
    }(AbstractEntityDefinition_1.AbstractEntityDefinition));
    exports.AbstractQueueDefinition = AbstractQueueDefinition;
    var GenericQueueDefinition = /** @class */ (function (_super) {
        __extends(GenericQueueDefinition, _super);
        function GenericQueueDefinition(data) {
            if (data === void 0) { data = {}; }
            var _this = _super.call(this) || this;
            Object.assign(_this, data);
            return _this;
        }
        return GenericQueueDefinition;
    }(AbstractQueueDefinition));
    exports.GenericQueueDefinition = GenericQueueDefinition;
});
