import { GenericDetailDefinition } from "./GenericDetailDefinition";

export class LeadDetailDefinition extends GenericDetailDefinition{
    constructor(data: Partial<LeadDetailDefinition> = {}) {
        super();
        Object.assign(this, data);
    }
}