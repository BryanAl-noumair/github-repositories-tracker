import { FC, ReactElement } from 'react';

import { Wrapper, Data, Link, TitleWrapper } from './styles';
import link_png from 'common/icons/link.png';

type props = {
  data: Record<string, any>;
};

const InfoDetails: FC<props> = ({ data }): ReactElement => {
  const { owner, name, open_issues_count, stargazers_count, forks_count, language, html_url } =
    data;
  const avatar = owner?.avatar_url || '';

  return (
    <Wrapper>
      <TitleWrapper>
        {avatar && <img src={avatar} alt={'owner'} />}
        {name && <h1>{name}</h1>}
      </TitleWrapper>
      {language && (
        <Data>
          <div>Language : </div> {language}
        </Data>
      )}
      {open_issues_count && (
        <Data>
          <div>Issues : </div>
          {open_issues_count}
        </Data>
      )}
      {stargazers_count && (
        <Data>
          <div>Stars : </div>
          {stargazers_count}
        </Data>
      )}
      {forks_count && (
        <Data>
          <div>Forks : </div>
          {forks_count}
        </Data>
      )}
      {html_url && (
        <Link href={html_url} target="_blank">
          <strong>Repository Link: </strong>
          <img src={link_png} alt={'link'} />
        </Link>
      )}
    </Wrapper>
  );
};

export default InfoDetails;
