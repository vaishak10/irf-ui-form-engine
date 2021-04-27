import { GenericDetail } from "../ui/form/services/detail/GenericDetail";
import { LeadDetail } from "../ui/form/services/detail/LeadDetail";
import { GenericQueue } from "../ui/form/services/queue/GenericQueue";
import { LeadQueue } from "../ui/form/services/queue/LeadQueue";
import { UIEntityRegistry } from "../ui/form/UIEntityRegistry";

class PerdixApplication {
    public entityRegister : UIEntityRegistry;
    constructor(){
        this.run();
    }
    /**
     * Initialize the application and loads modules (providers).
     */
    private run(): void {
        this.entityRegister = new UIEntityRegistry();
        this.entityRegister.addItem("GenericQueue", new GenericQueue());
        this.entityRegister.addItem("LeadQueue",new LeadQueue());
        this.entityRegister.addItem("GenericDetail", new GenericDetail());
        this.entityRegister.addItem("LeadDetail", new LeadDetail());
    }
}
var _perdixApplication = new PerdixApplication();
export =  _perdixApplication;