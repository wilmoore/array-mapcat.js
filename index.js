'use strict'

/*!
 * imports.
 */

var curry2 = require('curry2')
var map = require('arraymap')

/*!
 * exports.
 */

module.exports = curry2(mapcat)

/**
 * Curried function deriving new array values by applying provided function to each item/index of provided array
 * then applying `concat` to the results. Optionally, a dot-notation formatted string may be provided for item
 * property access.
 *
 * @param {Function|String} fn
 * Function to apply to each item.
 *
 * @param {Array} list
 * Array to iterate over.
 *
 * @return {Array}
 * Array resulting from applying provided function `fn` to each item of `list` then applying `concat` to the results.
 */

function mapcat (fn, list) {
  return [].concat.apply([], map(fn, list))
}
