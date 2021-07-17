export const GITHUB_QUERY_REPOS = (value: string): string =>
  `https://api.github.com/orgs/${value}/repos`;
export const CACHE_ORGANIZATION_QUERY = 'CACHE_ORGANIZATION_QUERY';
