define(["require", "exports", "../../config/entity/detail/LeadDetailConfig", "../../definition/entity/detail/LeadDetailDefinition"], function (require, exports, LeadDetailConfig_1, LeadDetailDefinition_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LeadDetail = void 0;
    var LeadDetail = /** @class */ (function () {
        function LeadDetail() {
        }
        LeadDetail.prototype.getDefinition = function (data) {
            if (data != null) {
                return new LeadDetailDefinition_1.LeadDetailDefinition(data);
            }
            return new LeadDetailDefinition_1.LeadDetailDefinition();
        };
        LeadDetail.prototype.getConfig = function () {
            return new LeadDetailConfig_1.LeadDetailConfig();
        };
        LeadDetail.prototype.getRenderer = function () {
            return "<generic-lead data-config='entityConfig' data-definition='entityDefinition'></generic-lead>";
        };
        return LeadDetail;
    }());
    exports.LeadDetail = LeadDetail;
});
