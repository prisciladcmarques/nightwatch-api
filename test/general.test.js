const { client } = require('../src');

describe('General features', () => {
  test('Handles basic commands', async () => {
    const onResultReady = jest.fn();
    await client
      .init()
      .setValue('#a', 4)
      .setValue('#b', 5)
      .click('#add')
      .getText('#result', ({ value }) => onResultReady(parseInt(value)));
    expect(onResultReady).toBeCalledWith(9);
  });
});

describe('Assertion features', () => {
  test('Handles assert.ok', async () => {
    let sum;

    await client
      .init()
      .setValue('#a', 4)
      .setValue('#b', 5)
      .click('#add')
      .getText('#result', ({ value }) => {
        sum = parseInt(value);
      })
      .assert.ok(sum === 9);
  });
});
