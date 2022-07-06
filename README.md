# stringd-colors

> Extends a [stringd][stringd] object with [ansi styles][ansi-styles]

## Features

- Supports [stringd][stringd] parsing functionality
- Extends any object with styles defined [here](#styles)

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

[![NPM][npm-image-url]][npm-url]

## Installing

Via [NPM][npm]:

``` bash
npm install stringd-colors
```

## Usage

``` javascript
import cStringd from 'stringd-colors';

cStringd(
  ':{bgcolor(green)}:{color(red)}:{greeting}:{color:close(red)}:{bgcolor:close(green)}',
  { greeting: 'Hello, World' }
);
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
cStringd(':{color(green)}Hi There:{color:close(green)}');
// '\u001b[32mHi There\u001b[39m'
```

### cStringd.extend([objects])

- `objects`: &lt;[object][]&gt;
- Returns: &lt;[string][]&gt;

Return an extension of `object` with [cStringd.raw](#cstringdraw), hence appending the ansi colors to the `object`, the absence of `object` would return [cStringd.raw](#cstringdraw)

``` javascript
const stringd = require('stringd');
const cStringd = require('stringd-colors');
stringd(':{color(green)}:{name}:{color:close(green)}', cStringd.extend({name: 'Jon Bellion'}));
// '\u001b[32mJon Bellion\u001b[39m'
```

### cStringd.raw

An object for stringd parsing of ansi styles defined [here](#styles)

## Handles

### `color`

This handle, without a specific style specification, selects a random foreground color or modifier.

``` text
":{color}" // Random color
":{color(red)}" // Specifically the color red
":{color(underline)}" // Underline
":{color(green, bold)}" // Green foreground and underline
```

### `color:close`

This handle, without a specific style specification, defaults to closing all foreground colors

``` text
":{color:close}" // Close foreground colors
":{color:close(yellow)}" // Close the active yellow style
":{color:close(hidden)}" // Close the hidden modifier
```

### `bgcolor`

This handle, without a specific style specification, selects a random background color or modifier.

``` text
":{bgcolor}" // Random background color
":{bgcolor(cyan)}" // Specifically the color cyan
":{bgcolor(bold)}" // bold
":{bgcolor(yellow, underline)}" // Yellow background and underline
```

### `bgcolor:close`

This handle, without a specific style specification, defaults to closing all background colors

``` text
":{bgcolor:close}" // Close background colors
":{bgcolor:close(magenta)}" // Close the active magenta style
":{bgcolor:close(strikethrough)}" // Close the strikethrough modifier
```

### `color:reset`

This special handle, closes all ANSI manipulations.

## Styles

ANSI style documentation [here][ansi-styles]

### Modifiers

- `color(bold)`
- `color(dim)`
- `color(italic)`
- `color(underline)`
- `color(inverse)`
- `color(hidden)`
- `color(strikethrough)`
- `color(visible)`

Modifiers are also accessible on `bgcolor:`

### Colors

- `color(black)`
- `color(red)`
- `color(green)`
- `color(yellow)`
- `color(blue)`
- `color(magenta)`
- `color(cyan)`
- `color(white)`
- `color(gray)`
- `color(redBright)`
- `color(greenBright)`
- `color(yellowBright)`
- `color(blueBright)`
- `color(magentaBright)`
- `color(cyanBright)`
- `color(whiteBright)`

### Background colors

- `bgcolor(black)`
- `bgcolor(red)`
- `bgcolor(green)`
- `bgcolor(yellow)`
- `bgcolor(blue)`
- `bgcolor(magenta)`
- `bgcolor(cyan)`
- `bgcolor(white)`
- `bgcolor(blackBright)`
- `bgcolor(redBright)`
- `bgcolor(greenBright)`
- `bgcolor(yellowBright)`
- `bgcolor(blueBright)`
- `bgcolor(magentaBright)`
- `bgcolor(cyanBright)`
- `bgcolor(whiteBright)`

## Development

### Building

Feel free to clone, use in adherance to the [license](#license). Pull requests are very much welcome.

``` bash
git clone https://github.com/miraclx/stringd-colors.git
cd stringd-colors
npm install
# hack on code
npm test
```

### Testing

Tests are executed with [Jest][jest]. To use it, simple run `npm install`, it will install
Jest and its dependencies in your project's `node_modules` directory followed by `npm test`.

To run the tests:

``` bash
npm install
npm test
```

## License

[Apache 2.0][license] © **Miraculous Owonubi** ([@miraclx][author-url]) &lt;omiraculous@gmail.com&gt;

[npm]:  https://github.com/npm/cli "The Node Package Manager"
[jest]:  https://github.com/facebook/jest "Delightful JavaScript Testing"
[license]:  LICENSE "Apache 2.0 License"
[stringd]:  https://github.com/miraclx/stringd "NodeJS String Variable Parser"
[author-url]: https://github.com/miraclx
[ansi-styles]:  https://github.com/chalk/ansi-styles "ANSI escape codes for styling strings in the terminal"
[stringd-result]: https://raw.githubusercontent.com/miraclx/stringd-colors/master/screenshots/colors.png "StringD Colors Example"

[npm-url]: https://npmjs.org/package/stringd-colors
[npm-image]: https://badgen.net/npm/node/stringd-colors
[npm-image-url]: https://nodei.co/npm/stringd-colors.png?stars&downloads
[downloads-url]: https://npmjs.org/package/stringd-colors
[downloads-image]: https://badgen.net/npm/dm/stringd-colors

[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
