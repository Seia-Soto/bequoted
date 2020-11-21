const debug = require('debug')

const { name } = require('../package')

const createDebugger = subTitle => {
  if (!subTitle) {
    return debug(name)
  } else {
    return debug(`${name}:${subTitle}`)
  }
}

module.exports = createDebugger
