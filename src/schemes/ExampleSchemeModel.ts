import { Model } from "../services/Model";

export default class FlatSchemeModel implements Model {
    
    getModel(): object {
        return this.attributes;
    }
    constructor() {} 

    attributes:object = {
        name: "",
        age: 0
    }

}