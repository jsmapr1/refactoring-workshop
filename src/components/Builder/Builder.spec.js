import Builder from './Builder';

const onion = {
  id: 1,
  name: 'onion',
  type: 'vegetables',
};

const greenPeppers = {
  id: 2,
  name: 'green peppers',
  type: 'vegetables',
};

const mozarella = {
  id: 3,
  name: 'mozarella',
  type: 'cheese',
};

const thin = {
  id: 4,
  name: 'thin',
  type: 'crust',
};

const dodo = {
  id: 5,
  name: 'Dodo egg',
  type: 'rare',
};

const {
  init,
} = Builder();

jest.mock('../../api/toppings');
describe('init', () => {
  it('should sort options by type and create array of pairs', async () => {
    const results = await init();

    const expected = [
      ['vegetables', [onion, greenPeppers]],
      ['cheese', [mozarella]],
      ['crust', [thin]],
      ['rare', [dodo]],
    ];

    expect(results).toEqual(expected);
  });
});
