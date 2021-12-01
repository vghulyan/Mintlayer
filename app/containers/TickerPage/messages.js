/*
 * TickerPage Messages
 *
 * This contains all the text for the TickerPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.TickerPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Ticker',
  },
  message: {
    id: `${scope}.message`,
    defaultMessage: 'Please enter ticker symbol(s), separated with comma',
  },
});
