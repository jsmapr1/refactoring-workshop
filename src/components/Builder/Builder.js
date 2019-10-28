import ohYeah from './images/ohyeah.gif';
import save from './images/tobias.gif';
import { fetchTopping, fetchToppings } from '../../api/toppings';
import { generateModalConfig } from './utils';

let toppings = [];

function reset () {
  toppings = [];
}

function setThresholdAlert(...limits) {
  let asked = false;
  return (arg) => {
    if(asked) {
      return false;
    }
    const reached = limits.every(limit => limit(arg));
    if(!reached) {
      return false;
    }
    asked = true;
    return true;
  }
}

const sendLengthAlert = setThresholdAlert(({ toppings}) => toppings.length > 3);

function checkAvailability(id) {
  return fetchTopping(id)
  .then(({ available }) => available)
}

function getUnavailableMessage() {
  return generateModalConfig({
    text: 'Topping Not Available',
  })
}

function addTopping(name) {
    toppings = [...toppings, name];
    return toppings;
}

function checkToppingLimit(toppings) {
  if(sendLengthAlert({ toppings })) {
    return generateModalConfig({
      image: save,
      text: 'This is looking complicated? Would you like to save?',
      width: 600,
    })
  }
  return null;
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
  checkAvailability,
  checkToppingLimit,
  displayMarketingMessage,
  getUnavailableMessage,
  removeTopping,
  reset,
  init,
});
