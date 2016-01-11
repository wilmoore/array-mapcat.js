'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var mapcat = require('./')

/*!
 * fixtures.
 */

var splitword = function (sentance) { return sentance.split(/\s+/) }
var sentances = [ 'two birds', 'three green peas' ]
var listmodel = [
  { list: [1, 2, 3] },
  { list: [4, 5, 6] },
  { list: [7, 8, 9] }
]

/*!
 * tests.
 */

test('mapcat()', function (t) {
  t.deepEqual(mapcat(splitword, sentances), ['two', 'birds', 'three', 'green', 'peas'])
  t.deepEqual(mapcat('list', listmodel), [1, 2, 3, 4, 5, 6, 7, 8, 9])
  t.end()
})
