import { useState } from 'react';
import styled, { css } from 'styled-components';

const Count = ({ size }) => {
  const [count, setCount] = useState(1);

  const handlePlusCount = () => {
    setCount(count + 1);
  };

  const handleMinusCount = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <CountContainer size={size}>
      <CountInnerWrap size={size}>
        <button onClick={handleMinusCount} disabled={count === 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={handlePlusCount}>+</button>
      </CountInnerWrap>
    </CountContainer>
  );
};

export default Count;

const COUNT_SIZE = {
  small: {
    padding: '0',
  },

  medium: {
    padding: '5px 0',
  },
};

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountContainer = styled.section`
  ${FlexCenter};

  width: 100%;
  padding: ${({ size }) =>
    COUNT_SIZE[size]?.padding || COUNT_SIZE.medium.padding};
  border: 1px solid #000;
  border-radius: 4px;
`;

const CountInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;

  & > button {
    width: 32px;
    height: 32px;
    border: none;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
  }

  & > button:first-child {
    border-right: ${({ size }) =>
      size === 'small' ? '1px solid #000' : 'none'};
  }

  & > button:last-child {
    border-left: ${({ size }) =>
      size === 'small' ? '1px solid #000' : 'none'};
  }
`;