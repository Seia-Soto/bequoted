const merge = (item, target = {}) => {
  // NOTE: If the type of item is object.
  if (item.constructor === Object && !!item) {
    const keys = Object.keys(item)

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]

      target[key] = merge(item[key], target[key])
    }
  } else {
    return item
  }

  return target
}

module.exports = merge
