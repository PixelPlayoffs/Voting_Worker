var azure = require('azure');
var AzureSBQueueWatcher = require('azure-sb-queue-watcher');
 
var myServiceBus = azure.createServiceBusService();
var watcher = new AzureSBQueueWatcher({
  serviceBus: myServiceBus,
  queueName: 'Votes'
});
 
watcher.start();
 
watcher.on('message', newMessage);
watcher.on('error', console.error);
 
function newMessage(message, done) {
  // TODO: Write to DocDB
  // TODO: Update Redis Key
  setTimeout(done, 200);
}