let GatewaysBundleProcess = require('../obj/src/container/GatewaysBundleProcess').GatewaysBundleProcess;

try {
    new GatewaysBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}