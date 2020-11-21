const debug = require('./debug')

const parse = message => {
  debug('parsing message structure:', message)

  const [prefix, command, ...args] = message.trim().split(' ')

  return {
    prefix,
    command,
    args
  }
}

module.exports = parse
