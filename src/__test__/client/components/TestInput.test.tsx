import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TestInput } from '../../../client/components/TestInput';
import '@testing-library/jest-dom/extend-expect';

describe('components/TestInput', () => {
  const NAME_TEST = 'Typescript Rules';

  it('Hello mounts properly', () => {
    const { container } = render(<TestInput />);
    expect(container).toMatchSnapshot();
  });

  const setup = () => {
    const utils = render(<TestInput />);
    const input = utils.getByLabelText('test-input') as HTMLInputElement;
    const button = utils.getByText('Get New Name');
    return {
      input,
      button,
      ...utils,
    };
  };

  it('updates the component successfully when the input is typed within', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: NAME_TEST } });
    expect(input.value).toBe(NAME_TEST);
  });

  it('updates the component successfully when the button is click', () => {
    const { input, button } = setup();
    fireEvent.click(button);
    expect(input.value).toBe('drew');
  });
});
