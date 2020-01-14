"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const iqs_services_restgateway_node_1 = require("iqs-services-restgateway-node");
const iqs_services_mqttgateway_node_1 = require("iqs-services-mqttgateway-node");
const iqs_services_teltonikagateway_node_1 = require("iqs-services-teltonikagateway-node");
const iqs_services_signals_node_1 = require("iqs-services-signals-node");
class GatewaysBundleServicesFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new iqs_services_restgateway_node_1.RestGatewayServiceFactory);
        this.add(new iqs_services_mqttgateway_node_1.MqttGatewayServiceFactory);
        this.add(new iqs_services_teltonikagateway_node_1.TeltonikaGatewayServiceFactory);
        this.add(new iqs_services_signals_node_1.SignalsServiceFactory);
    }
}
exports.GatewaysBundleServicesFactory = GatewaysBundleServicesFactory;
//# sourceMappingURL=GatewaysBundleServicesFactory.js.map