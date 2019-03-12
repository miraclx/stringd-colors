const cStringd = require('../lib');

test('basic', () => {
  const result = cStringd(':{color:bgGreen}:{color:red}:{greeting}:{color:close}:{color:bgClose}', {greeting: 'Hello World'});
  expect(result).toBe('\u001b[42m\u001b[31mHello World\u001b[39m\u001b[49m');
});

Object.keys(cStringd.raw)
  .filter(key => typeof cStringd.raw[key] === 'string' && !(key.includes(':close') || key.includes(':bgClose')))
  .forEach(style => {
    test(`testing [${style}]`, () => {
      expect(cStringd(`:{${style}}test:{color:reset}`)).toBe(`${cStringd.raw[style]}test\x1b[0m`);
    });
  });
