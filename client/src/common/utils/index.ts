import axios from 'axios';
import { GITHUB_QUERY_ORGANIZATION, GITHUB_QUERY_REPOS } from 'common/constants/text';

export const updateLocationWhitQuerySearch = (query: string): void => {
  const value = `${query}`;

  query
    ? window.history.pushState({ organization: value }, 'organization', value)
    : window.history.pushState('', '', '/');
};

export const fetchOrganization = async (
  organization: string
): Promise<Array<Record<string, any>>> => {
  return organization ? await axios.get(GITHUB_QUERY_ORGANIZATION(organization)) : [];
};

export const fetchRepository = async (
  organization: string,
  repo: string
): Promise<Array<Record<string, any>>> => {
  return organization && repo
    ? await axios.get(`${GITHUB_QUERY_REPOS}/${organization}/${repo}`)
    : [];
};

export const fetchContributors = async (url: string): Promise<Array<Record<string, any>>> => {
  return url ? await axios.get(url) : [];
};

export const parseUrl = (url: string): string => {
  const matches = url.split(GITHUB_QUERY_REPOS);
  return matches.length > 1 ? `/details${matches[1]}` : matches[0];
};
