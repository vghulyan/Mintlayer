import styled from 'styled-components';

export const TickerArea = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const StyledColumn = styled.div`
  background-color: transparent;
  width: 100%;
  margin: 10px;
  text-align: center;
`;

export const TickersTable = styled.table`
  text-align: center;
  font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 3px solid #ddd;
  width: 100%;
`;

export const TH = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4caf50;
  color: white;
`;

export const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const LiveTicker = styled.div`
  color: ${({ $priceColor }) => $priceColor};
`;
