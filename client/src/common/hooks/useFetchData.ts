import { FC } from 'react';
import { useQuery } from 'react-query';

import Loading from 'common/components/ui/loading';
import Error from 'common/components/ui/error';

// Fetch Data and handle loading or error view
export function useFetchData(
  searchValue: string,
  renderElement: FC,
  fetchFn: (searchValue: string) => Promise<Array<Record<string, any>>>,
  cacheValue: string
): Record<string, any> {
  const { isLoading, isError, data } = useQuery(
    [cacheValue, searchValue],
    () => fetchFn(searchValue),
    {
      staleTime: 1000 * 3600 * 24
    }
  );

  if (isLoading) {
    return {
      component: Loading
    };
  }

  if (isError || !data) {
    return {
      component: Error
    };
  }

  return {
    component: renderElement,
    data: data
  };
}
