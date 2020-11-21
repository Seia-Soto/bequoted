// NOTE: initializer code;
const os = require('os')

const debug = require('./debug')

debug('set UV_THREADPOOL_SIZE to', os.cpus().length)

process.env.UV_THREADPOOL_SIZE = os.cpus().length

// NOTE: actual code;
const {
  providers,
  messages
} = require('./structures')
const config = require('./config')

module.exports = (async () => {
  await providers.start(config.providers)

  messages.parse('prefix alpha beta')
})()
