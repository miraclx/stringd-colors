/**
 * @module stringd-colors
 * @license Apache-2.0
 * @author Miraculous Owonubi
 * @copyright Apache-2.0 (c) 2019 Miraculous Owonubi
 */

import stringd from 'stringd';
import ansiStyles from 'ansi-styles';

const {bgColor, color, modifier} = ansiStyles;

const bg = [];
const fg = [];
const mod = [];
const colors = {bg, fg, mod};
[[bg, bgColor], [fg, color], [mod, modifier]].forEach(([stack, _color]) =>
  stack.push(...Object.keys(_color).filter(v => !['ansi', 'ansi16m', 'ansi256', 'close'].includes(v))),
);
let colorTemplate = {
  'color:close': color.close,
  'color:random': () => ansiStyles[colors.fg[(Math.random() * colors.fg.length) | 0]].open,
  'color:bgClose': bgColor.close,
  'color:bgRandom': () => ansiStyles[colors.bg[(Math.random() * colors.bg.length) | 0]].open,
};
colors.mod.forEach(colorStr => {
  colorTemplate = {
    ...colorTemplate,
    [`color:${colorStr}`]: ansiStyles[colorStr].open,
    [`color:${colorStr}:close`]: ansiStyles[colorStr].close,
  };
});
[...colors.bg, ...colors.fg].forEach(colorStr => (colorTemplate[`color:${colorStr}`] = ansiStyles[colorStr].open));
function extendStringD(object) {
  return {...colorTemplate, ...object};
}

module.exports = function stringdColors(template, object) {
  return stringd(template, extendStringD(object));
};

module.exports.raw = colorTemplate;
module.exports.extend = extendStringD;
