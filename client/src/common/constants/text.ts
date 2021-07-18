export const GITHUB_QUERY_ORGANIZATION = (value: string): string =>
  `https://api.github.com/orgs/${value}/repos`;

export const GITHUB_QUERY_REPOS = 'https://api.github.com/repos';
export const TRACK_REPO_QUERY = 'http://localhost:3001/api/track';

export const CACHE_ORGANIZATION_QUERY = 'CACHE_ORGANIZATION_QUERY';
export const CACHE_REPOSITORY_QUERY = 'CACHE_REPOSITORY_QUERY';
export const CACHE_CONTRIBUTORS_QUERY = 'CACHE_CONTRIBUTORS_QUERY';
