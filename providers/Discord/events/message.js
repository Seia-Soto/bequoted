const debug = require('../debug')

module.exports = async (client, message) => {
  debug('received message:', message.content)
}
