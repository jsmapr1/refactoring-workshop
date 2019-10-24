import ohYeah from './images/ohyeah.gif';
import save from './images/tobias.gif';
import { fetchTopping, fetchToppings } from '../../api/toppings';
import { generateDisplayName, generateModalConfig } from './utils';

let toppings = [];
let askedSaved = false;

function reset () {
  toppings = [];
  askedSaved = false;
}

function addTopping(callback, { name, id }) {
  return fetchTopping(id)
    .then(({ available }) => {
      if (available) {
        toppings = [...toppings, name];
        if (toppings.length > 3 && !askedSaved) {
          askedSaved = true;
          const modalConfig = generateModalConfig({
            image: save,
            text: 'This is looking complicated? Would you like to save?',
            width: 600,
          })
          callback(modalConfig);
        }
        return generateDisplayName(toppings);
      }
      const modalConfig = generateModalConfig({
        text: 'Topping Not Available',
      })
      callback(modalConfig);
      return generateDisplayName(toppings);
    });
}

function removeTopping({ name }) {
  const copy = [...toppings];
  const index = copy.indexOf(name);
  copy.splice(index, 1);
  toppings = [...copy];
  return toppings;
}

function displayMarketingMessage(callback, config) {
  const modalConfig = generateModalConfig({
    image: ohYeah,
    text: 'Dude, you rock so hard',
  });
  setTimeout(() => {
    callback(modalConfig);
  }, config.time);
}

export async function init() {
  return fetchToppings()
    .then((options) => {
      const initial = options.reduce((sorted, option) => {
        const { type } = option;
        if (sorted.has(type)) {
          sorted.set(type, [...sorted.get(type), option]);
          return sorted;
        }
        sorted.set(type, [option]);
        return sorted;
      }, new Map());
      return [...initial];
    });
}

export default () => ({
  addTopping,
  displayMarketingMessage,
  removeTopping,
  reset,
  init,
});
