const debug = require('../debug')

module.exports = client => {
  debug(`client is now ready and logged in as '${client.user.username}#${client.user.discriminator}' (${client.user.id})`)
}
