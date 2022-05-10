import _ from 'lodash';
import { feednamiApi} from '@bbl-nx/apis';

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

export const getFeednamiTistories = (rssUrl: string) => {
  return new Promise((resolve, reject) => {
    feednamiApi.load(rssUrl, (res: TistoryResponse) => {
      const tistories = _.map(res.feed.entries, (article) => ({
        guid: article.guid,
        title: article.title,
        link: article.link,
        date: article.date,
        description: article.description,
        showDetails: false,
      }));
      resolve(tistories);
    });
  });
};
