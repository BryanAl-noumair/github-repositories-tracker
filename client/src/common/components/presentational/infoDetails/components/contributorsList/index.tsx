import { FC, ReactElement } from 'react';

import ContributorsCard from '../contributorsCard';
import { ListWrapper } from './styles';

type props = {
  data: Array<Record<string, any>>;
};

const ContributorsList: FC<props> = ({ data }): ReactElement => (
  <ListWrapper>
    {data.slice(0, 5).map(({ id, login, avatar_url, contributions, html_url }) => (
      <ContributorsCard
        key={id}
        name={login}
        avatarUrl={avatar_url}
        contributions={contributions}
        url={html_url}
      />
    ))}
  </ListWrapper>
);

export default ContributorsList;
