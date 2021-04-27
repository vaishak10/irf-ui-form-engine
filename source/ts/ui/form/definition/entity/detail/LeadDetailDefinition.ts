import { GenericDetailDefinition } from "./GenericDetailDefinition";

export class LeadDetailDefinition extends GenericDetailDefinition{
    constructor(data: Partial<LeadDetailDefinition> = {}) {
        super();
        (<any>Object).assign(this, data);
    }
}