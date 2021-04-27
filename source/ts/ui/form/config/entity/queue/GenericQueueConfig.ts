import { AbstractEntityConfig } from "../AbstractEntityConfig";

export abstract class AbstractQueueConfig extends AbstractEntityConfig{
    filters:Object;
    columns:Object;
}

export class GenericQueueConfig extends AbstractQueueConfig{
    filters:Object = [];
    columns:Object = [];
}
