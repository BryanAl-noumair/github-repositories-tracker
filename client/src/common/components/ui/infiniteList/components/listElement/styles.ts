import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { SECONDARY_DARK, TEXT_COLOR } from 'common/constants/colors';

export const ListItem = styled(Link)`
  height: 50px;
  max-width: 500px;
  padding: 5px 20px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  color: ${TEXT_COLOR};
  text-decoration: none;
  &:nth-child(odd) {
    background: ${SECONDARY_DARK};
  }
  > div {
    flex: 1;
    min-width: 0;
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-style: italic;
  }
`;
