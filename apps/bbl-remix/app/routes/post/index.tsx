import _ from 'lodash';
import { Link, useLoaderData } from '@remix-run/react';
import styled from 'styled-components';

   
import { deferred } from "@remix-run/node";

import { getAllPosts, PostItem as MDPostItem } from '~/libs/post.server';
import { getFeednamiTistories, TistoryItem } from '~/libs/tistory';
import { PostCard } from '@bbl-nx/ui-components';
import { postMachine, PostItem } from '@bbl-nx/machines';
import { interpret, assign, Subscription } from 'xstate';

const Root = styled.div`
  padding-top: 20px;
`;


const postService = interpret(
  postMachine.withConfig({
    actions: {
      'updatePostsContext': assign((ctx, event) => {
        return {
          posts: [...ctx.posts, ...event.data],
        };
      }),
    },
    services: {
      'fetchTistories': async (ctx, event) => {
        const response = await getFeednamiTistories(
          'http://cultist-tp.tistory.com/rss'
        );
        const data = mapTistoryToPosts(response);
        return data;
      },
      'fetchMD': async () => {
        const response = await getAllPosts();
        const data = mapRemarkToPosts(response);
        return data;
      },
    },
  })
);

const getPostItems = () => {
  let postServiceSubscription: Subscription | null = null;
  return new Promise((resolve) => {
    postService.start();
    postServiceSubscription = postService.subscribe((state) => {
      if (state.matches('Done')) {
        resolve(state.context.posts);
        postServiceSubscription?.unsubscribe?.();
      }
    });
  });
};

const mapRemarkToPosts = (allMarkdownRemark: MDPostItem[]) => {
  const posts = allMarkdownRemark;
  return _.map(
    posts,
    ({ slug, frontmatter: { title, date, path, published } }) => {
      return {
        createdAt: date,
        id: slug,
        title,
        url: path ?? '',
        published,
        isExternal: false,
      };
    }
  );
};

const mapTistoryToPosts = (tistories: TistoryItem[]) => {
  return _.map(tistories, (item) => ({
    createdAt: item.date,
    id: item.guid,
    title: item.title,
    url: item.link,
    published: true,
    isExternal: true,
  }));
};

export const loader = async () => {
  const data = await getPostItems();
  return data;
};

export default function Posts() {
  const posts = useLoaderData<PostItem[]>();
  const postsByDESC = _.orderBy(posts, ['date'], ['desc']);
  const filterPublished = postsByDESC.filter((item) => item.published);
  return (
    <Root>
      {_.map(filterPublished, (item) => {
        const { title, createdAt, url, isExternal } = item;
        return (
          <PostCard
            key={item.id}
            title={title}
            {...(isExternal ? { externalUrl: url } : { url })}
            createdAt={createdAt}
          />
        );
      })}
    </Root>
  );
}
