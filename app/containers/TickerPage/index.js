/*
 * TikerPage
 *
 * List all the features
 */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';

import axios from 'axios';

import PropTypes from 'prop-types';
import Button from '../../components/Button';
import messages from './messages';
import {
  TickerArea,
  StyledColumn,
  TickersTable,
  TH,
  TD,
  // LiveTicker, // --> Uncomment for live ticker data
} from './Styles';

import { HEADINGS, generateNewResultData } from './helper';

// const ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

const getData = async (symbol, setNewResultData) => {
  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const result = await axios.get(`/fetch?symbols=${symbol || 'ALL'}`);
      if (mounted) {
        const generatedData = generateNewResultData(result.data);
        setNewResultData(generatedData);
      }
    };
    loadData();

    return () => {
      mounted = false;
    };
  }, [symbol]);
};

export default function TickerPage({ url }) {
  const [tickerSymbol, setTickerSymbol] = useState(url);
  const [newResultData, setNewResultData] = useState([]);

  /**
   * Uncomment this state props for the live ticker data
   */
  // const [price, setPrice] = useState(null);
  // const [lastPrice, setLastPrice] = useState(null);
  // const [priceColor, setPriceColor] = useState('');

  getData(tickerSymbol, setNewResultData);

  const onChangeHandler = el => {
    setTickerSymbol(el.target.value);
  };
  const onClickHandler = () => {
    getData(tickerSymbol);
  };

  const renderHeading = headings =>
    headings.map(key => <TH key={Math.random()}>{key.toUpperCase()}</TH>);

  const renderTableData = row =>
    row.map(result => <TD key={Math.random()}>{result}</TD>);

  /**
   * Uncomment the function to pull the latest ticker
   */
  // const getLiveTicker = flag => {
  //   if (flag) {
  //     ws.onmessage = event => {
  //       const stockObject = JSON.parse(event.data);
  //       const priceVal = parseFloat(stockObject.p).toFixed(2);
  //       setPrice(priceVal);
  //       const color =
  //         !lastPrice || lastPrice === priceVal
  //           ? 'black'
  //           : priceVal > lastPrice
  //             ? 'green'
  //             : 'red';
  //       setPriceColor(color);
  //       setLastPrice(priceVal);
  //     };
  //   }
  // };

  /**
   * Uncomment the function to make live ticker call
   * Change the flag for live ticker price for etheur.
   */
  // getLiveTicker(false);

  if (!newResultData) {
    return <span data-testid="loading">Loading data...</span>;
  }

  return (
    <div data-testid="resolved">
      <Helmet>
        <title>Ticker Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>

      {/** Uncomment here to see live ticker data
       {price && (
        <LiveTicker $priceColor={priceColor}>
          <h3>ETHEUR [{price}]</h3>
        </LiveTicker>
      )} */}

      <TickerArea>
        <StyledColumn>
          <FormattedMessage {...messages.message} />
        </StyledColumn>
        <StyledColumn>
          <input type="text" onChange={onChangeHandler} />
        </StyledColumn>
        <StyledColumn>
          <Button onClick={onClickHandler} simple>
            Fetch
          </Button>
        </StyledColumn>
      </TickerArea>

      {newResultData && (
        <TickersTable id="tickersTable">
          <tbody>
            <tr>{renderHeading(HEADINGS)}</tr>
            {newResultData &&
              newResultData.map((row, index) => (
                <tr key={Math.random()}>{renderTableData(row, index)}</tr>
              ))}
          </tbody>
        </TickersTable>
      )}
    </div>
  );
}

TickerPage.propTypes = {
  url: PropTypes.string,
};
TickerPage.defaultProps = {
  url: 'ALL',
};
