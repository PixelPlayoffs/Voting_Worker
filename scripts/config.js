var config = {}

// This HAS to be set as env in contaner
config.host = process.env.AZURE_SERVICEBUS_NAMESPACE || "AZURE_SERVICEBUS_NAMESPACE";
config.authKey = process.env.AZURE_SERVICEBUS_ACCESS_KEY || "AZURE_SERVICEBUS_ACCESS_KEY";

module.exports = config;