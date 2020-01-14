import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { GatewaysBundleServicesFactory } from '../build/GatewaysBundleServicesFactory';
import { GatewaysBundleClientsFactory } from '../build/GatewaysBundleClientsFactory';

export class GatewaysBundleProcess extends ProcessContainer {

    public constructor() {
        super("iqs-bundles-gateways", "Gateways bundle for iQuipsys Positron");
        this._factories.add(new GatewaysBundleServicesFactory);
        this._factories.add(new GatewaysBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
