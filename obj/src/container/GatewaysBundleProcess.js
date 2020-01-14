"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const GatewaysBundleServicesFactory_1 = require("../build/GatewaysBundleServicesFactory");
const GatewaysBundleClientsFactory_1 = require("../build/GatewaysBundleClientsFactory");
class GatewaysBundleProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("iqs-bundles-gateways", "Gateways bundle for iQuipsys Positron");
        this._factories.add(new GatewaysBundleServicesFactory_1.GatewaysBundleServicesFactory);
        this._factories.add(new GatewaysBundleClientsFactory_1.GatewaysBundleClientsFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
    }
}
exports.GatewaysBundleProcess = GatewaysBundleProcess;
//# sourceMappingURL=GatewaysBundleProcess.js.map