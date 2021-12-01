export const headingArrayObjects = [
  { index: 0, value: 'Symbol' },
  { index: 2, value: 'Bid' },
  { index: 5, value: 'Ask' },
];
export const headingIndex = headingArrayObjects.map(heading => heading.index);
export const HEADINGS = headingArrayObjects.map(heading => heading.value);

export const generateNewResultData = data => {
  const resData = data.map(row => {
    const spreadObj = [];
    for (let i = 0; i < headingIndex.length; i++) {
      spreadObj.push(row[headingIndex[i]]);
    }
    return spreadObj;
  });
  return resData;
};

// export const fetchTickers = async tickerSymbol => {
//   const queryParams = `symbols=${tickerSymbol}`;
//   const response = await axios.get(`/fetch?${queryParams}`);
//   return response;
// };

/**
 * From this array of headings you can add into headingArrayObjects
 * @type {string[]}
 */
export const ALL_HEADINGS = [
  'SYMBOL',
  'FRR',
  'BID',
  'BID_PERIOD',
  'BID_SIZE',
  'ASK',
  'ASK_PERIOD',
  'ASK_SIZE',
  'DAILY_CHANGE',
  'DAILY_CHANGE_RELATIVE',
  'LAST_PRICE',
  'VOLUME',
  'HIGH',
  'LOW',
  '_PLACEHOLDER',
  '_PLACEHOLDER',
  'FRR_AMOUNT_AVAILABLE',
];
