To Bool
=========

A small library that converts typical "boolean" values to boolean

## Installation

  `npm install @gin93r/to-bool`

## Usage

    var toBool = require('@gin93r/to-bool');

    var b = toBool(0, [options]}); // false
  
  
### Options

 `treatUndefinedAsFalse` | *default*: `true`<br>
 `treatNullAsFalse` | *default*: `true`

When true, `undefined` and `null` values will be returned as `false`.

When false, `undefined` and `null` will be returned as normal.

    var b = toBool(undefined, {treatUndefinedAsFalse:false}) // undefined
    var b = toBool(null, {treatNullAsFalse:false}) // null


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

[![Build Status](https://travis-ci.org/gin93r/to-bool.svg?branch=master)](https://travis-ci.org/gin93r/to-bool)
[![Coverage Status](https://coveralls.io/repos/github/gin93r/to-bool/badge.svg?branch=master)](https://coveralls.io/github/gin93r/to-bool?branch=master)