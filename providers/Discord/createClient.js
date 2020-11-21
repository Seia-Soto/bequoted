const Eris = require('eris')

const events = require('./events')

const createClient = async config => {
  const client = new Eris(config.token)

  const eventNames = Object.keys(events)

  for (let i = 0, l = eventNames.length; i < l; i++) {
    const eventName = eventNames[i]

    client.on(eventName, events[eventName].bind(null, client))
  }

  await client.connect()

  return client
}

module.exports = createClient
