import { Wrapper } from './styles';
import { FC, ReactElement } from 'react';

type props = {
  text: string;
  onClick: () => void;
};

const Button: FC<props> = ({ text, onClick }): ReactElement => (
  <Wrapper onClick={onClick}>{text}</Wrapper>
);

export default Button;
