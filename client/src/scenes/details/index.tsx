import { FC, ReactElement } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from 'common/components/ui/button';
import { useFetchData } from 'common/hooks/useFetchData';
import InfoDetails from 'common/components/presentational/infoDetails';
import { fetchRepository } from 'common/utils';
import { CACHE_REPOSITORY_QUERY } from 'common/constants/text';
import { trackRepo } from './utils';
import { BACK_BUTTON_TEXT, TRACK_BUTTON_TEXT } from './constants';
import { ButtonsWrapper } from './styles';

type params = {
  organization: string;
  repo: string;
};

const Details: FC = (): ReactElement => {
  const { organization, repo } = useParams<params>();
  const history = useHistory();

  const { component: Component, data } = useFetchData(
    repo,
    InfoDetails,
    (repository: string) => fetchRepository(organization, repository),
    CACHE_REPOSITORY_QUERY
  );

  const handleBackClick = () => {
    history.push('/' + organization);
  };

  const repoData = data?.data || {};
  const handleTrack = () => trackRepo(repoData);

  return (
    <>
      <ButtonsWrapper>
        <Button text={BACK_BUTTON_TEXT} onClick={handleBackClick} />
        <Button text={TRACK_BUTTON_TEXT} onClick={handleTrack} />
      </ButtonsWrapper>
      <Component data={repoData} />
    </>
  );
};

export default Details;
