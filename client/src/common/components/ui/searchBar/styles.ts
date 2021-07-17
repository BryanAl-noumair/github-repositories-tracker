import styled from 'styled-components';

import { SECONDARY_DARK, TEXT_COLOR } from 'common/constants/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  height: 40px;
  border-radius: 5px;
  padding: 5px 20px;
  box-sizing: border-box;
  font-size: 25px;
  font-weight: bold;
  color: ${TEXT_COLOR};
  background: transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    opacity: 0.5;
    text-transform: capitalize;
  }
`;

export const Label = styled.label`
  border: 2px solid ${TEXT_COLOR};
  border-radius: 5px 0 0 5px;
  padding: 5px 10px;
  color: ${TEXT_COLOR};
  background: ${SECONDARY_DARK};
  font-weight: bold;
  text-transform: capitalize;
  min-width: 50px;
  text-align: center;
`;
