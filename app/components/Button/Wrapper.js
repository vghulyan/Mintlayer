import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: ${({ $simple }) => ($simple ? '0 1em' : '4em 0')};
`;

export default Wrapper;
