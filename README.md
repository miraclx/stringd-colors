# stringd-colors

> Extends a [stringd][stringd] object with [ansi styles][ansi-styles]

## Features

- Supports [stringd][stringd] parsing functionality
- Extends any object with styles defined [here](#styles)

[![NPM][npm-image-url]][npm-url]

## Installing

Via [NPM][npm]:

``` bash
npm install stringd-colors
```

## Usage

``` javascript
// Node CommonJS
var cStringd = require('stringd-colors');
// Or ES6
import cStringd from 'stringd-colors';
```

``` html
<!-- Or in the Browser -->
<script src="index.js"></script>
```

## Example

``` javascript
// CommonJS
const { log } = console;

log(cStringd(
  ':{color:bgGreen}:{color:red}:{greeting}:{color:close}:{color:bgClose}',
  { greeting: 'Hello World' }
));
```

### Result

![StringD Colors][stringd-result]

## API

### cStringd(template[, objects])

- `template`: &lt;[string][]&gt;
- `objects`: &lt;[object][]&gt;
- Returns: &lt;[string][]&gt;

Parse the `template` with the colors in [cStringd.raw](#cstringdraw) and variables in `objects` if provided

``` javascript
cStringd(':{color:green}Hi There:{color:close}');
// '\u001b[32mHi There\u001b[39m'
```

### cStringd.extend([objects])

- `objects`: &lt;[object][]&gt;
- Returns: &lt;[string][]&gt;

Return an extension of `object` with [cStringd.raw](#cstringdraw), hence appending the ansi colors to the `object`, the absence of `object` would return [cStringd.raw](#cstringdraw)

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
npm install
npm test
```

## License

[Apache 2.0][license] © **Miraculous Owonubi** ([@miraclx][author-url]) &lt;omiraculous@gmail.com&gt;

[npm]:  https://github.com/npm/npm "The Node Package Manager"
[jest]:  https://github.com/facebook/jest "Delightful JavaScript Testing"
[license]:  LICENSE "Apache 2.0 License"
[stringd]:  https://github.com/Miraclx/stringd "NodeJS String Variable Parser"
[author-url]: https://github.com/miraclx
[ansi-styles]:  https://github.com/chalk/ansi-styles "ANSI escape codes for styling strings in the terminal"
[stringd-result]: https://raw.githubusercontent.com/miraclx/stringd-colors/master/screenshots/colors.png "StringD Colors Example"

[npm-url]: https://npmjs.org/package/stringd
[npm-image]: https://badgen.net/npm/node/stringd
[npm-image-url]: https://nodei.co/npm/stringd.png?stars&downloads

[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
