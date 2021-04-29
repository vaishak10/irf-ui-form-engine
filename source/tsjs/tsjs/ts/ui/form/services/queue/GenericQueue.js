define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenericQueue = void 0;
    var GenericQueue = /** @class */ (function () {
        function GenericQueue() {
        }
        GenericQueue.prototype.api = function () {
        };
        GenericQueue.prototype.getDefinition = function (data) {
            throw new Error("Method not implemented.");
        };
        GenericQueue.prototype.getConfig = function () {
            throw new Error("Method not implemented.");
        };
        GenericQueue.prototype.getRenderer = function () {
            throw new Error("Method not implemented.");
        };
        return GenericQueue;
    }());
    exports.GenericQueue = GenericQueue;
});
