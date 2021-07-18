import axios from 'axios';

import { TRACK_REPO_QUERY } from 'common/constants/text';
import { ERROR_ALERT_TEXT, SUCCESS_ALERT_TEXT } from '../constants';

export const trackRepo = async (data: Record<string, any>): Promise<void> => {
  const {
    id,
    name,
    owner,
    stargazers_count,
    forks_count,
    open_issues_count,
    subscribers_count,
    network_count
  } = data;

  try {
    await axios.post(TRACK_REPO_QUERY, {
      apiId: id,
      name,
      owner: owner?.login || '',
      stargazers_count,
      forks_count,
      open_issues_count,
      subscribers_count,
      network_count
    });
    alert(SUCCESS_ALERT_TEXT);
  } catch (e) {
    alert(ERROR_ALERT_TEXT);
  }
};
