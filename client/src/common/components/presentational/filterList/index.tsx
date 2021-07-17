import { FC, ReactElement, useState } from 'react';

import SearchBar from 'common/components/ui/searchBar';
import InfiniteList from 'common/components/ui/infiniteList';
import { INPUT_ID, INPUT_LABEL, INPUT_PLACEHOLDER } from './constants';

const FilterList: FC = (): ReactElement => {
  const [filterValue, setFilterValue] = useState('');

  return (
    <>
      <SearchBar
        initialValue={filterValue}
        onChangeCb={(value) => setFilterValue(value)}
        inputId={INPUT_ID}
        label={INPUT_LABEL}
        placeholder={INPUT_PLACEHOLDER}
      />
      <InfiniteList />
    </>
  );
};

export default FilterList;
