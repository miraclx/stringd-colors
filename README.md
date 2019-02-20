stringd-colors
==============
> Extends a [stringd][stringd] object with [ansi styles][ansi-styles]
## Features
- Supports [stringd][stringd] parsing functionality
- Extends any object with styles defined [here](#styles)

[![NPM](https://nodei.co/npm/stringd-colors.png?stars&downloads)](https://nodei.co/npm/stringd-colors/)

## Installing

Via [NPM][npm]:

``` bash
$ npm install stringd-colors
```

## Example

``` javascript
// CommonJS
const cStringd = require('stringd-colors');
const { log } = console;

log(cStringd(
  ':{color:bgGreen}:{color:red}:{greeting}:{color:close}:{color:bgClose}',
  { greeting: 'Hello World' }
));
```
``` javascript
// ES6
import cStringd from 'stringd-colors';
const { log } = console;

log(cStringd(
  ':{color:bgGreen}:{color:red}:{greeting}:{color:close}:{color:bgClose}',
  { greeting: 'Hello World' }
));
```
### Result
![StringD Colors](https://raw.githubusercontent.com/Miraclx/stringd-colors/master/screenshots/colors.png "Colors Example")

## API
``` javascript
const cStringd = require('stringd-colors');
```
### cStringd(template[, object]): string
Parse the `template` with the colors in [cStringd.raw](#cStringdraw) and variables in `object` if provided
``` javascript
const cStringd = require('stringd-colors');
cStringd(':{color:green}Hi There:{color:close}');
// '\u001b[32mHi There\u001b[39m'
```
### cStringd.extend([object]): object
Return an extension of `object` with [cStringd.raw](#cStringdraw), hence appending the ansi colors to the `object`, the absence of `object` would return [cStringd.raw](#cStringdraw)
``` javascript
const stringd = require('stringd');
const cStringd = require('stringd-colors');
stringd(':{color:green}:{name}:{color:close}', cStringd.extend({name: 'Jon Bellion'}));
// '\u001b[32mJon Bellion\u001b[39m'
```
### cStringd.raw
An object for stringd parsing of ansi styles defined [here](#styles)

## Styles
ANSI style documentation [here][ansi-styles]
### Modifiers
To close modifiers, append `:close` the key name e.g `:{color:underline:close}`
- `color:reset`
- `color:bold`
- `color:dim`
- `color:italic`
- `color:underline`
- `color:inverse`
- `color:hidden`
- `color:strikethrough`
- `color:visible`

### Colors
Use `:{color:close}` to close these
- `color:black`
- `color:red`
- `color:green`
- `color:yellow`
- `color:blue`
- `color:magenta`
- `color:cyan`
- `color:white`
- `color:gray`
- `color:redBright`
- `color:greenBright`
- `color:yellowBright`
- `color:blueBright`
- `color:magentaBright`
- `color:cyanBright`
- `color:whiteBright`

### Background colors
Use `:{color:bgClose}` to close these
- `color:bgBlack`
- `color:bgRed`
- `color:bgGreen`
- `color:bgYellow`
- `color:bgBlue`
- `color:bgMagenta`
- `color:bgCyan`
- `color:bgWhite`
- `color:bgBlackBright`
- `color:bgRedBright`
- `color:bgGreenBright`
- `color:bgYellowBright`
- `color:bgBlueBright`
- `color:bgMagentaBright`
- `color:bgCyanBright`
- `color:bgWhiteBright`

## Development
Tests are executed with [Jest][jest]. To use it, simple run `npm install`, it will install
Jest and its dependencies in your project's `node_modules` directory followed by `npm test`.

To run the tests:

``` bash
$ npm install
$ npm test
```
## About
### License
[Apache 2.0][license]
### Author
Miraculous Owonubi: [[email]](mailto:omiraculous@gmail.com) <https://github.com/Miraclx>

[npm]:  https://github.com/npm/npm "The Node Package Manager"
[jest]:  https://github.com/facebook/jest "Delightful JavaScript Testing"
[license]:  LICENSE "Apache 2.0 License"
[stringd]:  https://github.com/Miraclx/stringd "NodeJS String Variable Parser"
[ansi-styles]:  https://github.com/chalk/ansi-styles "ANSI escape codes for styling strings in the terminal"
