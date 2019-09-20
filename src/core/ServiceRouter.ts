import ServiceController from "./ServiceController";
import Logger from './Logger'
const express = require('express');
const router = express.Router();


router.post('/', function (req:any, res:any) {
    let serviceName:string = req.baseUrl.substr(req.baseUrl.lastIndexOf('/') + 1);
    const requestedService = ServiceController.FindService(serviceName);
    if (requestedService !== undefined){

        if (requestedService.isExposed()) {

            //Check we have a valid input for our model
            if (!requestedService.validateInput(req, requestedService._model)) {
                res.status(400).end();
                Logger.log(`Bad Request ${serviceName}`, true, true)
                return;
            }
            try {
            res.json( requestedService.invoke(req, res));
            } catch (error) { Logger.log(error,true,true); }
        } else {
            //Endpoint is forbidden
            res.status(403).end();
            Logger.log("Attempting To Access Unexposed Service From Endpoint", true, true);
        }
    } else {
        //Can't find the service from the endpoint
        res.status(404).end();
        Logger.log(`${serviceName} Not Found`, true, true);
    }  
});

module.exports = router; 
