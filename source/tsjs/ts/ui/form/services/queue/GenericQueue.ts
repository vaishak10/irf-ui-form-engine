import { GenericQueueConfig } from "../../config/entity/queue/GenericQueueConfig";
import { GenericQueueDefinition } from "../../definition/entity/queue/GenericQueueDefinition";
import { QueueEntity } from "../../interfaces/QueueEntity";

export class GenericQueue implements QueueEntity{
    api():void{
        
    }
    getDefinition(data): GenericQueueDefinition {
        throw new Error("Method not implemented.");
    }
    getConfig(): GenericQueueConfig {
        throw new Error("Method not implemented.");
    }
    getRenderer(): String {
        throw new Error("Method not implemented.");
    }
}