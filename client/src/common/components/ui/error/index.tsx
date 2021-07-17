import React, { FC, ReactElement } from 'react';

import { ERROR_MESSAGE } from './constants';
import { ErrorWrapper, ErrorIcon } from './styles';

const Error: FC = (): ReactElement => {
  return (
    <ErrorWrapper>
      <ErrorIcon />
      <p>{ERROR_MESSAGE}</p>
    </ErrorWrapper>
  );
};

export default Error;
