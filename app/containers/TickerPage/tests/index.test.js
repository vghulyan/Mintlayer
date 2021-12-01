import React from 'react';
import axiosMock from 'axios';
import { render, cleanup, waitForElement } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import TickerPage from '../index';

import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('<FeaturePage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <TickerPage />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });

  it('fetches and displays data', async () => {
    // We'll be explicit about what data Axios is to return when `get` is called.
    axiosMock.get.mockResolvedValueOnce({ data: { greeting: 'hello there' } });

    // Let's render our TickerPage component
    // the `getByTestId` function so we can find individual elements.
    const url = '/fetch?symbols=ALL';
    const { getByTestId } = render(<TickerPage />);

    // On first render, we expect the "loading" span to be displayed
    expect(getByTestId('loading')).toHaveTextContent('Loading data...');

    // Because the useAxios call (useEffect) happens after initial render
    // We need to handle the async nature of an AJAX call by waiting for the
    // element to be rendered.
    const resolvedDiv = await waitForElement(() => getByTestId('resolved'));

    // Now with the resolvedDiv in hand, we can ensure it has the correct content
    expect(resolvedDiv).toHaveTextContent('hello there');
    // Let's also make sure our Axios mock was called the way we expect
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });
});
