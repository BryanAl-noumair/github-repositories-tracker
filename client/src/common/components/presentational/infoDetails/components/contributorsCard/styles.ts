import styled from 'styled-components';

import { SECONDARY_LIGHT, TEXT_COLOR } from 'common/constants/colors';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: ${TEXT_COLOR};
  width: 110px;
  min-height: 200px;
  border: 2px solid ${SECONDARY_LIGHT};
  border-radius: 20px;
  margin: 5px;
  padding: 5px;
  > img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
`;
