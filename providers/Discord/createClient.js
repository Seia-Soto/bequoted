const Eris = require('eris')

const sharedFunctions = require('../../functions')
const { mergeObjects } = require('../../utils')
const events = require('./events')
const functions = require('./functions')
const { type } = require('./profile')

const createClient = async config => {
  const client = new Eris(config.token)

  client.type = type

  // NOTE: register events;
  const eventNames = Object.keys(events)

  for (let i = 0, l = eventNames.length; i < l; i++) {
    const eventName = eventNames[i]

    client.on(eventName, events[eventName].bind(null, client))
  }

  client.fns = mergeObjects(sharedFunctions, functions)

  await client.connect()

  return client
}

module.exports = createClient
