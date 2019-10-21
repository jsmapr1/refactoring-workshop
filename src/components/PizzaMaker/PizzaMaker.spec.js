import React from 'react';
import {
  render, fireEvent, cleanup, waitForElement,
  getByText as getByTextAll,
  queryByText as queryByTextAll,
} from '@testing-library/react';

import PizzaMaker from './PizzaMaker';
jest.mock('../../api/toppings');

describe('PizzaMaker', () => {
  afterEach(cleanup);
  it('should render options column and order column', async () => {
    const { getByText, getByTestId } = render(
      <PizzaMaker />,
    );
    // Wait for all options to load
    await waitForElement(() => getByText('onion'));
    getByText('Options');
    getByText('Your Custom Order');

    const order = getByTestId('order');
    expect(queryByTextAll(order, /onion/)).toBeNull();
  });

  it('should add item to Custom Order Column', async () => {
    const { getByText, getByTestId } = render(
      <PizzaMaker />,
    );
    const order = getByTestId('order');
    const onionButton = await waitForElement(() => getByText('onion'));
    fireEvent.click(onionButton);
    await waitForElement(() => getByTextAll(order, 'onion'));
  });

  it('should add multiple items', async () => {
    const { getByText, getByTestId } = render(
      <PizzaMaker />,
    );
    const order = getByTestId('order');
    const onionButton = await waitForElement(() => getByText('onion'));
    fireEvent.click(onionButton);
    fireEvent.click(onionButton);
    await waitForElement(() => getByTextAll(order, 'onion (2)'));
  })

  it('should remove item from column', async () => {
    const { getByText, getByTestId } = render(
      <PizzaMaker />,
    );
    const order = getByTestId('order');
    const onionButton = await waitForElement(() => getByText('onion'));
    fireEvent.click(onionButton);
    fireEvent.click(onionButton);
    fireEvent.click(onionButton);
    await waitForElement(() => getByTextAll(order, 'onion (3)'));
    fireEvent.click(getByTextAll(order, 'onion (3)'));
    await waitForElement(() => getByTextAll(order, 'onion (2)'));
  })

  it('should show marketing modal', async () => {
    const { getByText, queryByText, getByTestId } = render(
      <PizzaMaker />,
    );
    await waitForElement(() => getByText(/Dude/));
    const modal = getByTestId('modal');
    fireEvent.click(modal.firstChild);
    expect(queryByText(/Dude/)).toBeNull();
  })

  it('should show unavailable modal', async () => {
    const { getByText, getByTestId, queryByText, } = render(
      <PizzaMaker />,
    );
    const onionButton = await waitForElement(() => getByText('onion'));
    fireEvent.click(onionButton);
    fireEvent.click(onionButton);

    const peppers = await waitForElement(() => getByText(/dodo/i));
    fireEvent.click(peppers);
    await waitForElement(() => getByText(/Not Available/));

    const modal = getByTestId('modal');
    fireEvent.click(modal.firstChild);
    expect(queryByText(/Not Available/)).toBeNull();
    getByText('onion (2)')
  })

  it('should show save modal', async () => {
    const { getByText, } = render(
      <PizzaMaker />,
    );
    const onion = await waitForElement(() => getByText(/onion/));
    fireEvent.click(onion);
    fireEvent.click(onion);
    fireEvent.click(onion);
    fireEvent.click(onion);
    await waitForElement(() => getByText(/Would you like to save?/));
  })
});
