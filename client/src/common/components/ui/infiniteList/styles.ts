import styled from 'styled-components';
import { SECONDARY_DARK, SECONDARY_LIGHT, TEXT_COLOR } from 'common/constants/colors';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 40px;
  max-height: 400px;
  width: 100%;
  overflow-y: overlay;
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 5px 0 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    min-height: 50px;
    background: ${SECONDARY_LIGHT};
    border: 4px solid transparent;
    background-clip: padding-box;
  }
`;

export const ListItem = styled.li`
  height: 50px;
  max-width: 500px;
  padding: 5px 20px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  color: ${TEXT_COLOR};
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
