import { FC, ReactElement } from 'react';

import { useInfiniteList } from 'common/hooks/useInfiniteList';
import Button from 'common/components/ui/button';
import ListElement from './components/listElement';
import { List } from './styles';

type props = {
  list: Array<Record<string, string>>;
  parseUrl: (link: string) => string;
};

const PAGINATION = 10;

const InfiniteList: FC<props> = ({ list, parseUrl }): ReactElement => {
  const { visibleList, hasMore, handleNext } = useInfiniteList(list, PAGINATION);

  return (
    <List>
      {visibleList.map(({ id, name, description, url }) => (
        <ListElement key={id} name={name} description={description} url={parseUrl(url)} />
      ))}
      {hasMore && <Button text={'Next'} onClick={handleNext} />}
    </List>
  );
};

export default InfiniteList;
