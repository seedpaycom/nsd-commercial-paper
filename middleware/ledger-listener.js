
module.exports = function(require){

  var log4js  = require('log4js');
  var logger  = log4js.getLogger('LedgerListener');

  var peerListener = require('../lib-fabric/peer-listener.js');

  logger.info('Initialisation');

  peerListener.registerBlockEvent(function(block){
    var type = 'Unknown';
    try{
      type = block.data.data[0].payload.header.channel_header.type;
    }catch(e){
      logger.warn(e);
      return;
    }
    logger.info('Got block event %s: ', type, block.header.data_hash);
  });

}