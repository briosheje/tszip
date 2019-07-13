![npm](https://img.shields.io/npm/v/tszip.svg)
[![Build Status](https://travis-ci.com/briosheje/tszip.svg?branch=master)](https://travis-ci.com/briosheje/tszip)
[![Coverage Status](https://coveralls.io/repos/github/briosheje/tszip/badge.svg?branch=master)](https://coveralls.io/github/briosheje/tszip?branch=master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# TSZIP
A typescript / javascript library that emulates the python's `zip` method, providing a similar interface in a javascript / typescript context.

# Installation
### NPM
```shell
npm install tszip
```

### Vanilla JS / Web
Download the latest release from the release section, then include the desired script located in the ´dist´ folder (either `dist/lib`, either one of the js files in `dist`, according to what is the targeted environment).

# Usage
Examples are directly available in the <a href="https://briosheje.github.io/tszip/">docs</a>, which will be updated if any change is occurring.

To use the library in an ES6 environment, just import it:

```js
import { tszip } from 'tszip';
```

Or, if you must use require:

```js
const zip = require('tszip').zip;
```

There also is an `example` folder in this repository available providing some example usages.
The webpack example is a raw clone of this repository: https://github.com/wbkd/webpack-starter.git, where I'm simply importing the library.
