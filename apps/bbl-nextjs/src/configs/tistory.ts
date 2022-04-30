import _ from 'lodash';
import feednami from '@bbl-nextjs/apis/feednami';

export interface TistoryItem {
  guid: string;
  title: string;
  link: string;
  date: string;
  description: string;
  showDetails: boolean;
}

export interface ITistory {
  feed: {
    entries: Array<TistoryItem>;
  };
}

export const getFeednamiTistories = (rssUrl: string) => {
  return new Promise((resolve, reject) => {
    (feednami as any).load(rssUrl, (res: ITistory) => {
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
