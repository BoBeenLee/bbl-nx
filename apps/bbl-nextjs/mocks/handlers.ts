import { rest } from 'msw';
import feedsJSON from './feeds.json';
import postsJSON from './posts.json';

// https://api.feednami.com/api/v1/feeds/load?url=http://cultist-tp.tistory.com/rss
const getFeedsLoad: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(feedsJSON));
};

const getPostsLoad: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(postsJSON));
};

export const handlers = [
  // Handles a GET /feeds/load request
  rest.get('https://api.feednami.com/api/v1/feeds/load', getFeedsLoad),
  rest.get('https://localhost:3000/api/posts', getPostsLoad),
];
