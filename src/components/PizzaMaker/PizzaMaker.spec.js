import React from 'react';
import {
  render, fireEvent, cleanup, waitForElement,
  getByText as getByTextAll,
  queryByText as queryByTextAll,
} from '@testing-library/react';

import PizzaMaker from './PizzaMaker';

describe('PizzaMaker', () => {
  afterEach(cleanup);
  // Check for text in the render method
  it('should render options column and order column', async () => {
  });

  it('should add item to Custom Order Column', async () => {
  });

  it('should add multiple items', async () => {
  })

  it('should remove item from column', async () => {
  })

  it('should show marketing modal', async () => {
  })

  it('should show unavailable modal', async () => {
  })

  it('should show save modal', async () => {
  })
});
