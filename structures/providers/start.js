const providers = require('../../providers')
const debug = require('./debug')

module.exports = async config => {
  debug('creating clients from each providers')

  const providerNames = Object.keys(providers)
  const clients = {}

  for (let i = 0, l = providerNames.length; i < l; i++) {
    const name = providerNames[i]
    const provider = providers[name]
    const providerConfig = config[name]

    debug(`starting ${name} client`)

    try {
      const client = await provider.createClient(providerConfig)

      clients[name] = client
    } catch (error) {
      debug(`got error while initializing ${name} client: ${error}`)

      if (config._throwException) {
        debug('the exception will be thrown because `config.providers._throwException` value calculated to be true. you can set this as false or zero value that represents `false` to prevent causing exceptions.')

        throw new Error(error)
      }
    }
  }

  return clients
}
