import { AbstractEntityConfig } from "../AbstractEntityConfig";

export abstract class AbstractDetailConfig extends AbstractEntityConfig{
    processJson:any ={};
}

export class GenericDetailConfig extends AbstractDetailConfig{

}