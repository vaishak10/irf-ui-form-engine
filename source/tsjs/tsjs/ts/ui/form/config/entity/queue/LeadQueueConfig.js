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
define(["require", "exports", "./GenericQueueConfig"], function (require, exports, GenericQueueConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LeadQueueConfig = void 0;
    var LeadQueueConfig = /** @class */ (function (_super) {
        __extends(LeadQueueConfig, _super);
        function LeadQueueConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.filters = [
                "leadName",
                "businessName",
                "area",
                "cityTownVillage"
            ];
            _this.columns = [
                {
                    title: 'ID',
                    data: 'id',
                    name: 'ID'
                }, {
                    title: 'Lead Name',
                    data: 'leadName',
                    name: "Lead Name"
                }, {
                    name: "Business Name",
                    title: 'Business Name',
                    data: 'businessName'
                }, {
                    name: "Address Line1",
                    title: 'Address Line1',
                    data: 'addressLine1'
                }, {
                    name: 'City Town Village',
                    title: 'CityTownVillage',
                    data: 'cityTownVillage'
                }, {
                    name: 'Area',
                    title: 'Area',
                    data: 'area'
                }, {
                    name: 'Spoke',
                    title: 'Spoke',
                    data: 'centreId'
                }, {
                    name: 'Pincode',
                    title: 'Pincode',
                    data: 'pincode'
                }, {
                    name: 'Mobile No',
                    title: 'Mobile No',
                    data: 'mobileNo'
                }
            ];
            return _this;
        }
        return LeadQueueConfig;
    }(GenericQueueConfig_1.GenericQueueConfig));
    exports.LeadQueueConfig = LeadQueueConfig;
});
