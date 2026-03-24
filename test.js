import cStringd from './index.js';

test('basic test', () => {
  const result = cStringd(
    ':{bgcolor(black)}:{color(red)}My :{color(cyan)}name :{color(yellowBright)}is :{color(underline)}:{name}:{color:reset}',
    {
      name: 'stringd_colors',
    },
  );
  console.log(`Result: ${result}`);
  expect(result).toBe('\u001b[40m\u001b[31mMy \u001b[36mname \u001b[93mis \u001b[4mstringd_colors\u001b[0m');
});
