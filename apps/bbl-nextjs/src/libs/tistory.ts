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
  const response = (await feednamiApi(rssUrl)) as TistoryResponse;
  const tistories = (response.feed.entries ?? []).map((article) => ({
    guid: article.guid,
    title: article.title,
    link: article.link,
    date: article.date,
    description: article.description,
    showDetails: false,
  }));
  return tistories;
};
