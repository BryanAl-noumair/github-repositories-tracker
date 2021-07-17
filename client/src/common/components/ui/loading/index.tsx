import React, { FC, ReactElement } from 'react';
import { Ripple } from './styles';

const Loading: FC = (): ReactElement => {
  return (
    <Ripple>
      <div></div>
      <div></div>
    </Ripple>
  );
};

export default Loading;
