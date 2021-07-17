import { FC, ReactElement } from 'react';

import link_png from 'common/icons/link.png';
import { CardWrapper } from './styles';

type props = {
  name: string;
  avatarUrl: string;
  contributions: number;
  url: string;
};

const ContributorsCard: FC<props> = ({ name, avatarUrl, contributions, url }): ReactElement => {
  return (
    <CardWrapper>
      {avatarUrl && <img src={avatarUrl} alt={'avatar'} />}
      {name && <div>{name}</div>}
      {contributions && <div>Total: {contributions}</div>}
      {url && (
        <a href={url} target="_blank">
          <img src={link_png} alt={'link'} />
        </a>
      )}
    </CardWrapper>
  );
};

export default ContributorsCard;
