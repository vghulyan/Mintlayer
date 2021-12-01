import React from 'react';
import { render } from 'react-testing-library';

import H6 from '../index';

describe('<H6 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<H6 id={id} />);
    expect(container.querySelector('h6').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<H6>{children}</H6>);
    const { childNodes } = container.querySelector('h6');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
