import { GenericDetailConfig } from "../../config/entity/detail/GenericDetailConfig";
import { GenericDetailDefinition } from "../../definition/entity/detail/GenericDetailDefinition";
import { DetailEntity } from "../../interfaces/DetailEntity";


export class GenericDetail implements DetailEntity{
    getDefinition(data: any): GenericDetailDefinition {
        throw new Error("Method not implemented.");
    }
    getConfig(): GenericDetailConfig {
        throw new Error("Method not implemented.");
    }
    getRenderer(): String {
        return "<generic-lead data-config='entityConfig' data-definition='entityDefinition'></generic-lead>"
    }
    
}