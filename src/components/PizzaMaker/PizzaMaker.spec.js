import React from 'react';
import {
  render, fireEvent, cleanup, waitForElement,
  getByText as getByTextAll,
  queryByText as queryByTextAll,
} from '@testing-library/react';

import PizzaMaker from './PizzaMaker';

describe('PizzaMaker', () => {
  afterEach(cleanup);

  /*
   * Wait for elements to load
   * Check for column headers
   */
  it('should render options column and order column', async () => {
  });

  /*
   * Wait for elements to load
   * Capture the onion button
   * Click onion button twice
   * Check for two onions in
   * the order: onion (2)
   */
  it('should add multiple items', async () => {
  })

  /*
   * Wait for the marketing text:
   * 'Dude, you rock so hard'
   */
  it('should show marketing modal', async () => {
  })

  /*
   * Wait for elements to load.
   * Click dodo egg.
   * Await for text: 'Topping Not Available'
   */
  it('should show unavailable modal', async () => {
  })
});
