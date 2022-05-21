import _ from 'lodash';
import { feednamiApi } from '@bbl-nx/apis';

export interface TistoryItem {
  guid: string;
  title: string;
  link: string;
  date: string;
  description: string;
  showDetails: boolean;
}

export interface TistoryResponse {
  feed: {
    entries: Array<TistoryItem>;
  };
}

export const getFeednamiTistories = async (rssUrl: string) => {
  const response = await feednamiApi(rssUrl) as TistoryResponse;
  const tistories = _.map(response.feed.entries, (article) => ({
    guid: article.guid,
    title: article.title,
    link: article.link,
    date: article.date,
    description: article.description,
    showDetails: false,
  }));
  return tistories;
};
