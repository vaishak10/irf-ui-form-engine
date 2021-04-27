import { AbstractEntityDefinition } from "../AbstractEntityDefinition";

export abstract class AbstractDetailDefinition extends AbstractEntityDefinition{
    getIncludes:any = [];
    overrides:any = [];
    repositoryAdditions:any = {};
    json:any = {};
}
export class GenericDetailDefinition extends AbstractDetailDefinition{
    constructor(data: Partial<AbstractDetailDefinition> = {}) {
        super();
        (<any>Object).assign(this, data);
    }
}