import { AbstractEntityDefinition } from "../AbstractEntityDefinition";

export abstract class AbstractQueueDefinition extends AbstractEntityDefinition{
    searchTitle : String = "";
    uiPageNation: Boolean = true;
    serverPagination: Boolean = true;
    uiPerPage: Number = 10;
    serverPerPage: Number =100;
    filters:any = [];
    columns:any = [];
    _searchSchema: any = {};
    actions:[];
}
export class GenericQueueDefinition extends AbstractQueueDefinition{
    constructor(data: Partial<AbstractQueueDefinition> = {}) {
        super();
        Object.assign(this, data);
    }
}