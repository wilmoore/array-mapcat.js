# array-mapcat
> Curried function deriving new array values by applying provided function to each item/index of provided array then applying `concat` to the results. Fast and compatible with modern or old browsers.

[![Build Status](http://img.shields.io/travis/wilmoore/array-mapcat.js.svg)](https://travis-ci.org/wilmoore/array-mapcat.js) [![Code Climate](https://codeclimate.com/github/wilmoore/array-mapcat.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/array-mapcat.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install array-mapcat --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/array-mapcat.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/array-mapcat.svg)](https://www.npmjs.org/package/array-mapcat) [![NPM downloads](http://img.shields.io/npm/dm/array-mapcat.svg)](https://www.npmjs.org/package/array-mapcat) [![David](https://img.shields.io/david/wilmoore/array-mapcat.js.svg)](https://david-dm.org/wilmoore/array-mapcat.js)

## Overview

Optionally, a dot-notation formatted string may be provided for item property access.

## API Example

###### Basic

```js
var mapcat = require('array-mapcat')
var splitword = (sentance) => sentance.split(/\s+/)
var sentances = [ 'two birds', 'three green peas' ]

mapcat(splitword, sentances)
//=> ['two', 'birds', 'three', 'green', 'peas']
```

###### Dot-notation object access

```js
var mapcat = require('array-mapcat')
var listmodel = [
  { list: [1, 2, 3] },
  { list: [4, 5, 6] },
  { list: [7, 8, 9] }
]

mapcat('list', listmodel)
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

###### Pointfree Style

```js
var mapcat = require('array-mapcat')
var listmodel = Promise.resolve([
  { list: [1, 2, 3] },
  { list: [4, 5, 6] },
  { list: [7, 8, 9] }
])

listmodel.then(mapcat('list'))
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## API

### `mapcat(fn, list)`

###### arguments

 - `fn (Function|String)` Function to apply to each item.
 - `list (array)` Array to iterate over.

###### returns

 - `(array)` Array resulting from applying provided function `fn` to each item of `list` then applying `concat` to the results.

## Inspiration

 - [mapcat]
 - [concatMap]
 - [flat_map]

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/array-mapcat.js.svg)](https://github.com/wilmoore/array-mapcat.js/blob/master/license)

[mapcat]: https://clojuredocs.org/clojure.core/mapcat
[concatMap]: https://www.haskell.org/hoogle/?hoogle=concatMap
[flat_map]: http://apidock.com/ruby/Enumerable/flat_map
