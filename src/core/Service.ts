
export abstract class Service {
    protected _exposeToBackend = false;
    protected _serviceName = "";
    protected _status = false;

    protected _model: {} = {};
    constructor(model: any){
        this._model = model.getModel();

    }

    abstract start() : void;
    abstract stop() : void;
    abstract invoke(req: any, res:any): {};

    //Check that the model data is within the body of the request
    protected validateInput(req: any) :boolean {
        for (let [key] of Object.entries(this._model)) {
            if (!req.body.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    
    isExposed() :boolean {
        return this._exposeToBackend;
    }

    isRunning() :boolean {
        return this._status;
    }

    updateRunningStatus(input :boolean): void {
        this._status = input;
    }

    getServiceName():string {
        return this._serviceName;
    }

    
}