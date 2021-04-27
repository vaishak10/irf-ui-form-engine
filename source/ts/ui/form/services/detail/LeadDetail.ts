import { LeadDetailConfig } from "../../config/entity/detail/LeadDetailConfig";
import { LeadDetailDefinition } from "../../definition/entity/detail/LeadDetailDefinition";
import { DetailEntity } from "../../interfaces/DetailEntity";


export class LeadDetail implements DetailEntity{
    getDefinition(data: any): LeadDetailDefinition {
        if(data != null){
            return new LeadDetailDefinition(data);
        }
        return new LeadDetailDefinition();
    }
    getConfig(): LeadDetailConfig {
        return new LeadDetailConfig();
    }
    getRenderer(): String {
        return "<generic-lead data-config='entityConfig' data-definition='entityDefinition'></generic-lead>"
    }
    
}