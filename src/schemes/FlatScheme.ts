import { Service } from "../services/Service";

export default class FlatScheme extends Service {

    constructor() {
        super()
    }

    running :boolean = false;
    
    public Start() :void  {
       this.running = true;
       console.log("Flat Scheme Service Started...");
    }    

    public Stop() :void {
        this.running = false;
        console.log("Flat Scheme Service Stopped...");
    }

}