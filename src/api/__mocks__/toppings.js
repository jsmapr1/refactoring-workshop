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

export const fetchToppings = jest.fn().mockImplementation(() => Promise.resolve([
  onion,
  greenPeppers,
  mozarella,
  thin,
  dodo
]));

export const fetchTopping = jest.fn().mockImplementation((id) => Promise.resolve({
  available: id !== 5
}));
