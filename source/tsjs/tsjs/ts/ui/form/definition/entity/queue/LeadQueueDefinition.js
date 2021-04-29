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
define(["require", "exports", "./GenericQueueDefinition"], function (require, exports, GenericQueueDefinition_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LeadQueueDefinition = void 0;
    var LeadQueueDefinition = /** @class */ (function (_super) {
        __extends(LeadQueueDefinition, _super);
        function LeadQueueDefinition() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._searchSchema = {
                "leadName": {
                    "title": "LEAD_NAME",
                    "type": "string"
                },
                "businessName": {
                    "title": "BUSINESS_NAME",
                    "type": "string"
                },
                "area": {
                    "title": "AREA",
                    "type": "string"
                },
                "cityTownVillage": {
                    "title": "CITY/_TOWN_VILLAGE",
                    "type": "string"
                }
            };
            return _this;
        }
        return LeadQueueDefinition;
    }(GenericQueueDefinition_1.GenericQueueDefinition));
    exports.LeadQueueDefinition = LeadQueueDefinition;
});
