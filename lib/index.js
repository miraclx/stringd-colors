/**
 * @module stringd-colors
 * @license Apache-2.0
 * @author Miraculous Owonubi
 * @copyright Apache-2.0 (c) 2019 Miraculous Owonubi
 *
 * :{color} // random foreground color
 * :{color(red)} // specific red foreground
 * :{color:close} // close random foreground color
 * :{color:close(red)} // close specific red foreground
 *
 * :{bgcolor} // random background color
 * :{bgcolor(green)} // specific green background
 * :{bgcolor:close} // close random background color
 * :{bgcolor:close(green)} // close specific green backreground
 *
 * :{color:reset} // Reset all ANSI manipulations
 */

import stringd from 'stringd';
import ansiStyles from 'ansi-styles';

const {bgColor, color, modifier, reset} = ansiStyles;

const bg = {open: {}, close: {}};
const fg = {open: {}, close: {}};
const mod = {open: {}, close: {}};

[[bg, bgColor], [fg, color], [mod, modifier]].forEach(([stack, _color]) =>
  Object.entries(_color)
    .filter(([v]) => !['ansi', 'ansi16m', 'ansi256', 'close'].includes(v))
    .forEach(
      ([key, value]) => (
        (key = key.replace(/^bg(.)/, (_, x) => x.toLowerCase())), (stack.open[key] = value.open), (stack.close[key] = value.close)
      ),
    ),
);

const colorTemplate = Object.fromEntries(
  [
    ['color', {...fg.open, ...mod.open}, Object.values(fg.open)],
    ['bgcolor', bg.open, Object.values(bg.open)],
    ['color:close', {...fg.close, ...mod.close}, [color.close]],
    ['bgcolor:close', bg.close, [bgColor.close]],
    ['color:reset', reset],
  ].map(([name, stack, def]) => [
    name,
    (_, type) =>
      typeof stack === 'string'
        ? stack
        : type
        ? type in stack
          ? stack[type]
          : null
        : (_stack => _stack[Math.floor(Math.random() * _stack.length)])(def || Object.values(stack)),
  ]),
);

function extendStringD(object) {
  return {...colorTemplate, ...object};
}

module.exports = function stringdColors(template, object) {
  return stringd(template, extendStringD(object));
};

module.exports.raw = colorTemplate;
module.exports.extend = extendStringD;
