define(["require", "exports", "../../config/entity/queue/LeadQueueConfig", "../../definition/entity/queue/LeadQueueDefinition"], function (require, exports, LeadQueueConfig_1, LeadQueueDefinition_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LeadQueue = void 0;
    var LeadQueue = /** @class */ (function () {
        function LeadQueue() {
        }
        LeadQueue.prototype.api = function () {
        };
        LeadQueue.prototype.getDefinition = function (data) {
            if (data != null)
                return new LeadQueueDefinition_1.LeadQueueDefinition(data);
            else
                return new LeadQueueDefinition_1.LeadQueueDefinition();
        };
        LeadQueue.prototype.getConfig = function () {
            return new LeadQueueConfig_1.LeadQueueConfig();
        };
        LeadQueue.prototype.getRenderer = function () {
            return "<generic-queue data-config='entityConfig' data-definition='entityDefinition'></generic-queue>";
        };
        return LeadQueue;
    }());
    exports.LeadQueue = LeadQueue;
});
