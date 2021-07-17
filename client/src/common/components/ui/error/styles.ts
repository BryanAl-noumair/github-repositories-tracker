import styled from 'styled-components';

import { ReactComponent as Error } from 'common/icons/error.svg';
import { TEXT_COLOR } from 'common/constants/colors';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  color: ${TEXT_COLOR};
  margin-top: 30px;
`;

export const ErrorIcon = styled(Error)`
  width: 50%;
  height: 50%;
`;
