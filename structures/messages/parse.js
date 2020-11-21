const debug = require('./debug')

module.exports = message => {
  debug('parsing message structure:', message)

  const [prefix, command, ...args] = message.trim().split(' ')

  return {
    prefix,
    command,
    args
  }
}
