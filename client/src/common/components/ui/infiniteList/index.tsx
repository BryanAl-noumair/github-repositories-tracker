import { FC, ReactElement } from 'react';

import link_png from 'common/icons/link.png';
import { List, ListItem } from './styles';

const InfiniteList: FC = (): ReactElement => (
  <List>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 32].map((element) => (
      <ListItem key={element}>
        <div>
          <h3>holaa duicisjdc scnsdocsnd</h3>
          <p> deddedfdf sf sf sf sjnji</p>
        </div>
        <a href="https://www.w3schools.com" target="_blank">
          <img src={link_png} alt={'link'} />
        </a>
      </ListItem>
    ))}
  </List>
);

export default InfiniteList;
