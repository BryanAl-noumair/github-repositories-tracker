import styled from 'styled-components';

import { PRIMARY_DARK, PRIMARY_LIGHT } from 'common/constants/colors';

export const MainContainer = styled.div`
  background: ${PRIMARY_DARK};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RoutesContainer = styled.div`
  background: ${PRIMARY_LIGHT};
  max-width: calc(100% - 40px);
  padding: 40px 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
