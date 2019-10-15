/* istanbul ignore file */

const data = {
  toppings: [
    {
      id: 1,
      name: 'onion',
      type: 'vegetables',
    },
    {
      id: 2,
      name: 'green peppers',
      type: 'vegetables',
    },
    {
      id: 3,
      name: 'mozzarella',
      type: 'cheese',
    },
    {
      id: 4,
      name: 'thin',
      type: 'crust',
    },
    {
      id: 5,
      name: 'Dodo egg',
      type: 'rare',
    },
  ],
};
export function fetchToppings() {
  return Promise.resolve(data.toppings);
}

export function fetchTopping(id) {
  return Promise.resolve({
    available: id !== 5,
  });
}
