import { GenericQueueConfig } from "../config/entity/queue/GenericQueueConfig";
import { GenericQueueDefinition } from "../definition/entity/queue/GenericQueueDefinition";
import { UIEntity } from "./UIEntity";

export interface QueueEntity extends UIEntity{
    api():void;
    getDefinition(data):GenericQueueDefinition;
    getConfig():GenericQueueConfig;
}