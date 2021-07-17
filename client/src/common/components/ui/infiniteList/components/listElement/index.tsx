import { FC, ReactElement } from 'react';

import { ListItem } from './styles';

type props = {
  name: string;
  description: string;
  url: string;
};

const ListElement: FC<props> = ({ name, description, url }): ReactElement => (
  <ListItem to={url}>
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </ListItem>
);

export default ListElement;
