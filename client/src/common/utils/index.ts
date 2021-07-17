import axios from 'axios';
import { GITHUB_QUERY_REPOS } from 'common/constants/text';

// Update current location with a value provided
export const updateLocationWhitQuerySearch = (query: string): void => {
  const value = `${query}`;

  query
    ? window.history.pushState({ searchValue: value }, 'search', value)
    : window.history.pushState('', '', '/');
};

// Get song and parse it to fit a more standard format
export const fetchOrganization = async (value: string): Promise<Array<Record<string, any>>> => {
  return await axios.get(GITHUB_QUERY_REPOS(value));
};
