import styled from 'styled-components';
import { SECONDARY_LIGHT } from 'common/constants/colors';

export const Wrapper = styled.div`
  color: ${SECONDARY_LIGHT};
  font-size: 25px;
  margin: 10px 0;
  cursor: pointer;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;
