define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIEntityRegistry = void 0;
    var UIEntityRegistry = /** @class */ (function () {
        function UIEntityRegistry() {
            this.entites = new Map();
        }
        UIEntityRegistry.prototype.getItem = function (key) {
            return this.entites.get(key);
        };
        UIEntityRegistry.prototype.addItem = function (key, obj) {
            this.entites.set(key, obj);
        };
        return UIEntityRegistry;
    }());
    exports.UIEntityRegistry = UIEntityRegistry;
});
