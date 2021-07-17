import styled from 'styled-components';
import { SECONDARY_LIGHT, TEXT_COLOR } from 'common/constants/colors';

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${TEXT_COLOR};
  > img {
    width: 75px;
    height: 75px;
    margin-right: 30px;
  }
`;

export const Data = styled.div`
  color: ${TEXT_COLOR};
  margin-top: 20px;
  font-size: 20px;
  display: flex;
  font-style: italic;
  > div {
    font-weight: bold;
    text-transform: uppercase;
    min-width: 140px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${SECONDARY_LIGHT};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid ${SECONDARY_LIGHT};
  padding: 5px;
  border-radius: 5px;
  margin-top: 30px;
`;
