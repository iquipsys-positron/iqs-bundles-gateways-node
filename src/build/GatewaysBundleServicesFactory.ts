import { DefaultContainerFactory } from 'pip-services3-container-node';

import { RestGatewayServiceFactory } from 'iqs-services-restgateway-node';
import { MqttGatewayServiceFactory } from 'iqs-services-mqttgateway-node';
import { TeltonikaGatewayServiceFactory } from 'iqs-services-teltonikagateway-node';
import { SignalsServiceFactory } from 'iqs-services-signals-node';

export class GatewaysBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new RestGatewayServiceFactory);
        this.add(new MqttGatewayServiceFactory);
        this.add(new TeltonikaGatewayServiceFactory);
        this.add(new SignalsServiceFactory);

    }

}
