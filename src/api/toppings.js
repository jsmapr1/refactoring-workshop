/* istanbul ignore file */
export function fetchToppings() {
  return fetch('http://localhost:3009/toppings')
    .then(response => response.json());
}

export function fetchTopping(id) {
  return fetch(`http://localhost:3009/toppings/${id}`)
    .then(response => response.json());
}
