import React from 'react';
import { render, userEvent } from 'whale-ui-test-utils';
import { Button } from '../button';

describe('<Button/>', () => {
  test('first', async () => {
    const { getByTestId, getByText } = render(<Button />);

    expect(getByTestId('count')).toHaveTextContent('0');
    userEvent.click(getByText('button'));
    expect(getByTestId('count')).toHaveTextContent('1');
  });
});
