import styled, { keyframes } from 'styled-components';

import { SECONDARY_LIGHT } from 'common/constants/colors';

const lds = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-top: 30px;
  > div {
    position: absolute;
    border: 4px solid ${SECONDARY_LIGHT};
    opacity: 1;
    border-radius: 50%;
    animation: ${lds} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;
