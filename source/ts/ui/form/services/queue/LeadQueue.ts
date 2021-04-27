import { LeadQueueConfig } from "../../config/entity/queue/LeadQueueConfig";
import { LeadQueueDefinition } from "../../definition/entity/queue/LeadQueueDefinition";
import { QueueEntity } from "../../interfaces/QueueEntity";

export class LeadQueue implements QueueEntity{
    api():void{
        
    }
    getDefinition(data): LeadQueueDefinition {
        if(data != null)
            return new LeadQueueDefinition(data);
        else
            return new LeadQueueDefinition();
    }
    getConfig(): LeadQueueConfig {
        return new LeadQueueConfig();
    }
    getRenderer(): String {
        return "<generic-queue data-config='entityConfig' data-definition='entityDefinition'></generic-queue>"
    }
    
}