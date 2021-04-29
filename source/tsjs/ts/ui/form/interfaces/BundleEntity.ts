import { GenericDetailConfig } from "../config/entity/detail/GenericDetailConfig";
import { GenericDetailDefinition } from "../definition/entity/detail/GenericDetailDefinition";
import { UIEntity } from "./UIEntity";

export interface BundleEntity extends UIEntity{
    getDefinition(data):GenericDetailDefinition;
    getConfig():GenericDetailConfig;
}