import * as React from 'react';
import { Hello } from '../../../client/components/Hello';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('components/Hello', () => {
  const MOCK = { compiler: 'TypeScript', framework: 'React' };
  it('Hello mounts properly', () => {
    const { container } = render(<Hello compiler={MOCK.compiler} framework={MOCK.framework} />);
    expect(container).toMatchSnapshot();
  });

  it('Hello mounts properly', () => {
    const { getByTestId } = render(<Hello compiler={MOCK.compiler} framework={MOCK.framework} />);
    expect(getByTestId('string-data')).toHaveTextContent(`Hello from ${MOCK.compiler} and ${MOCK.framework}!`);
  });
});
