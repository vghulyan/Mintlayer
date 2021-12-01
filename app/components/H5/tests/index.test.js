import React from 'react';
import { render } from 'react-testing-library';

import H5 from '../index';

describe('<H5 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const { container } = render(<H5 id={id} />);
    expect(container.querySelector('h5').id).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const { container, queryByText } = render(<H5>{children}</H5>);
    const { childNodes } = container.querySelector('h5');
    expect(childNodes).toHaveLength(1);
    expect(queryByText(children)).not.toBeNull();
  });
});
