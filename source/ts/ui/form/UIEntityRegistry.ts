import { UIEntity } from "./interfaces/UIEntity";

export class UIEntityRegistry {
    constructor(){
        this.entites = new Map();
    }
    private entites;
    public getItem(key:String): UIEntity {
        return this.entites.get(key);
    }

    public addItem(key:string, obj: UIEntity): void{
        this.entites.set(key,obj);
    }
}