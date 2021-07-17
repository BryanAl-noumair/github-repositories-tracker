import { FC, ReactElement, useState } from 'react';
import { useParams } from 'react-router-dom';

import SearchBar from 'common/components/ui/searchBar';
import FilterList from 'common/components/presentational/filterList';
import { useFetchData } from 'common/hooks/useFetchData';
import { CACHE_ORGANIZATION_QUERY } from 'common/constants/text';
import { updateLocationWhitQuerySearch, fetchOrganization } from 'common/utils';
import { INPUT_ID, INPUT_LABEL, INPUT_PLACEHOLDER } from './constants';

type params = {
  organization: string;
};

// TODO: check all strings
// TODO: create readme
// TODO: review all

const Home: FC = (): ReactElement => {
  const { organization } = useParams<params>();
  const [searchValue, setSearchValue] = useState(organization || '');

  const { component: Component, data } = useFetchData(
    searchValue,
    FilterList,
    fetchOrganization,
    CACHE_ORGANIZATION_QUERY
  );

  const onChangeCb = (value: string) => {
    setSearchValue(value);
    updateLocationWhitQuerySearch(value);
  };

  return (
    <>
      <SearchBar
        initialValue={searchValue}
        onChangeCb={onChangeCb}
        inputId={INPUT_ID}
        label={INPUT_LABEL}
        placeholder={INPUT_PLACEHOLDER}
      />
      <Component data={data?.data || []} />
    </>
  );
};

export default Home;
