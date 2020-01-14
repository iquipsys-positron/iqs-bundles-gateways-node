"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const iqs_clients_devices_node_1 = require("iqs-clients-devices-node");
const pip_clients_organizations_node_1 = require("pip-clients-organizations-node");
const iqs_clients_gateways_node_1 = require("iqs-clients-gateways-node");
const pip_clients_beacons_node_1 = require("pip-clients-beacons-node");
const iqs_clients_currobjectstates_node_1 = require("iqs-clients-currobjectstates-node");
const iqs_clients_stateupdates_node_1 = require("iqs-clients-stateupdates-node");
const iqs_clients_restgateway_node_1 = require("iqs-clients-restgateway-node");
const iqs_clients_mqttgateway_node_1 = require("iqs-clients-mqttgateway-node");
const iqs_clients_signals_node_1 = require("iqs-clients-signals-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
class GatewaysBundleClientsFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_clients_clusters_node_1.ClustersClientFactory());
        this.add(new iqs_clients_devices_node_1.DevicesClientFactory);
        this.add(new pip_clients_organizations_node_1.OrganizationsClientFactory);
        this.add(new iqs_clients_gateways_node_1.GatewaysClientFactory);
        this.add(new pip_clients_beacons_node_1.BeaconsClientFactory);
        this.add(new iqs_clients_currobjectstates_node_1.CurrentObjectStatesClientFactory);
        this.add(new iqs_clients_stateupdates_node_1.StateUpdatesClientFactory);
        this.add(new iqs_clients_restgateway_node_1.RestGatewayClientFactory);
        this.add(new iqs_clients_mqttgateway_node_1.MqttGatewayClientFactory);
        this.add(new iqs_clients_signals_node_1.SignalsClientFactory);
    }
}
exports.GatewaysBundleClientsFactory = GatewaysBundleClientsFactory;
//# sourceMappingURL=GatewaysBundleClientsFactory.js.map