import { FC, ReactElement, useEffect, useState } from 'react';

import SearchBar from 'common/components/ui/searchBar';
import InfiniteList from 'common/components/ui/infiniteList';
import { parseUrl } from 'common/utils';
import { INPUT_ID, INPUT_LABEL, INPUT_PLACEHOLDER } from './constants';

type props = {
  data: Array<Record<string, any>>;
};

const FilterList: FC<props> = ({ data }): ReactElement => {
  const [filterValue, setFilterValue] = useState('');
  const [filteredList, setFiltered] = useState(data);

  useEffect(() => {
    let currentFilteredList = data;
    if (filterValue) {
      currentFilteredList = data.filter((element) =>
        element?.name.toLowerCase().includes(filterValue)
      );
    }
    setFiltered(currentFilteredList);
  }, [filterValue]);

  return (
    <>
      <SearchBar
        initialValue={filterValue}
        onChangeCb={(value) => setFilterValue(value)}
        inputId={INPUT_ID}
        label={INPUT_LABEL}
        placeholder={INPUT_PLACEHOLDER}
      />
      <InfiniteList list={filteredList} parseUrl={parseUrl} />
    </>
  );
};

export default FilterList;
