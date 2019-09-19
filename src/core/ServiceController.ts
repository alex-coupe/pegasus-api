import {Service} from './Service'
import Logger from './Logger';

export default class ServiceController {

    logger = new Logger();

    private static serviceContainer : Service[] = [];

    registerServices(service: Service[]) : void {
        service.forEach(element => {
            this.logger.log(`${element.getServiceName()} Registered Successfully`);
            ServiceController.serviceContainer.push(element);
        }); 
    }

    startServices() : void {
        ServiceController.serviceContainer.forEach(service => {
            this.logger.log(`${service.getServiceName()} Started Successfully`);
          service.updateRunningStatus( true );
          service.Start();
      });
    }

    stopServices(): void {
        ServiceController.serviceContainer.forEach(service => {
            this.logger.log(`${service.getServiceName()} Stopped Successfully`);
          service.updateRunningStatus( false );
          service.Stop();
      });
    }

    static FindService(serviceName :string) : any {
     return ServiceController.serviceContainer.find((element) => {
            return serviceName === element.getServiceName();
        });
    }

   
}