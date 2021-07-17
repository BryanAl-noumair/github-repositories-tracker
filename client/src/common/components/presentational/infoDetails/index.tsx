import { FC, ReactElement } from 'react';

import { Wrapper, Data, Link, TitleWrapper } from './styles';
import link_png from 'common/icons/link.png';
import { useFetchData } from 'common/hooks/useFetchData';
import { fetchContributors } from 'common/utils';
import { CACHE_CONTRIBUTORS_QUERY } from 'common/constants/text';
import ContributorsList from './components/contributorsList';

type props = {
  data: Record<string, any>;
};

const InfoDetails: FC<props> = ({ data }): ReactElement => {
  const {
    owner,
    name,
    open_issues_count,
    stargazers_count,
    forks_count,
    language,
    contributors_url,
    html_url
  } = data;
  const avatar = owner?.avatar_url || '';

  const { component: Component, data: contributors } = useFetchData(
    contributors_url,
    ContributorsList,
    fetchContributors,
    CACHE_CONTRIBUTORS_QUERY
  );

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
      <Component data={contributors?.data || []} />
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
