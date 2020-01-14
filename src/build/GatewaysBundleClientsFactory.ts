import { DefaultContainerFactory } from 'pip-services3-container-node';

import { DevicesClientFactory } from 'iqs-clients-devices-node';
import { OrganizationsClientFactory } from 'pip-clients-organizations-node';
import { GatewaysClientFactory } from 'iqs-clients-gateways-node';
import { BeaconsClientFactory } from 'pip-clients-beacons-node';

import { CurrentObjectStatesClientFactory } from 'iqs-clients-currobjectstates-node';
import { StateUpdatesClientFactory } from 'iqs-clients-stateupdates-node';

import { RestGatewayClientFactory } from 'iqs-clients-restgateway-node';
import { MqttGatewayClientFactory } from 'iqs-clients-mqttgateway-node';
import { SignalsClientFactory } from 'iqs-clients-signals-node';

import { ClustersClientFactory } from 'pip-clients-clusters-node';


export class GatewaysBundleClientsFactory extends DefaultContainerFactory {

    public constructor() {
        super();
        
        this.add(new ClustersClientFactory());

        this.add(new DevicesClientFactory);
        this.add(new OrganizationsClientFactory);
        this.add(new GatewaysClientFactory);
        this.add(new BeaconsClientFactory);

        this.add(new CurrentObjectStatesClientFactory);
        this.add(new StateUpdatesClientFactory);

        this.add(new RestGatewayClientFactory);
        this.add(new MqttGatewayClientFactory);
        this.add(new SignalsClientFactory);

    }

}
