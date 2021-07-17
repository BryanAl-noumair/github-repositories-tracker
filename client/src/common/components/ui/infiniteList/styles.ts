import styled from 'styled-components';

import { SECONDARY_LIGHT } from 'common/constants/colors';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 40px;
  max-height: 400px;
  width: 100%;
  overflow-y: overlay;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 5px 0 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    min-height: 50px;
    background: ${SECONDARY_LIGHT};
    border: 4px solid transparent;
    background-clip: padding-box;
  }
`;
