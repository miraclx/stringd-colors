/**
 * @module stringd-colors
 * @license Apache-2.0
 * @author Miraculous Owonubi
 * @copyright Apache-2.0 (c) 2019 Miraculous Owonubi
 */

const stringd = require('stringd');
const ansiStyles = require('ansi-styles');

const bg = [];
const fg = [];
const mod = [];
const colors = {bg, fg, mod};
[[bg, ansiStyles.bgColor], [fg, ansiStyles.color], [mod, ansiStyles.modifier]].forEach(([stack, color]) =>
  stack.push(...Object.keys(color).filter(v => !['ansi', 'ansi16m', 'ansi256', 'close'].includes(v))),
);
let colorTemplate = {
  'color:close': ansiStyles.color.close,
  'color:random': () => ansiStyles[colors.fg[(Math.random() * colors.fg.length) | 0]].open,
  'color:bgClose': ansiStyles.bgColor.close,
  'color:bgRandom': () => ansiStyles[colors.bg[(Math.random() * colors.bg.length) | 0]].open,
};
colors.mod.forEach(color => {
  colorTemplate = {
    ...colorTemplate,
    [`color:${color}`]: ansiStyles[color].open,
    [`color:${color}:close`]: ansiStyles[color].close,
  };
});
[...colors.bg, ...colors.fg].forEach(color => (colorTemplate[`color:${color}`] = ansiStyles[color].open));
function extendStringD(object) {
  return {...colorTemplate, ...object};
}

module.exports = function stringdColors(template, object) {
  return stringd(template, extendStringD(object));
};

module.exports.raw = colorTemplate;
module.exports.extend = extendStringD;
