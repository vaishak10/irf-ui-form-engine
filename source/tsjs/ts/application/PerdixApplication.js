define(["require", "exports", "../ui/form/services/detail/GenericDetail", "../ui/form/services/detail/LeadDetail", "../ui/form/services/queue/GenericQueue", "../ui/form/services/queue/LeadQueue", "../ui/form/UIEntityRegistry"], function (require, exports, GenericDetail_1, LeadDetail_1, GenericQueue_1, LeadQueue_1, UIEntityRegistry_1) {
    "use strict";
    var PerdixApplication = /** @class */ (function () {
        function PerdixApplication() {
            this.run();
        }
        /**
         * Initialize the application and loads modules (providers).
         */
        PerdixApplication.prototype.run = function () {
            this.entityRegister = new UIEntityRegistry_1.UIEntityRegistry();
            this.entityRegister.addItem("GenericQueue", new GenericQueue_1.GenericQueue());
            this.entityRegister.addItem("LeadQueue", new LeadQueue_1.LeadQueue());
            this.entityRegister.addItem("GenericDetail", new GenericDetail_1.GenericDetail());
            this.entityRegister.addItem("LeadDetail", new LeadDetail_1.LeadDetail());
        };
        return PerdixApplication;
    }());
    var _perdixApplication = new PerdixApplication();
    return _perdixApplication;
});
