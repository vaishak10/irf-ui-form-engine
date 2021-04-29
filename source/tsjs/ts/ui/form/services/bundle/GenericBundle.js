define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenericDetail = void 0;
    var GenericDetail = /** @class */ (function () {
        function GenericDetail() {
        }
        GenericDetail.prototype.getDefinition = function (data) {
            throw new Error("Method not implemented.");
        };
        GenericDetail.prototype.getConfig = function () {
            throw new Error("Method not implemented.");
        };
        GenericDetail.prototype.getRenderer = function () {
            return "<generic-lead data-config='entityConfig' data-definition='entityDefinition'></generic-lead>";
        };
        return GenericDetail;
    }());
    exports.GenericDetail = GenericDetail;
});
