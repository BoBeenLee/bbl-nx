import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';

import { PostCard, Layout } from '@bbl-nx/ui-components';
import { TistoryItem } from '../../libs/tistory';
import { getAllPosts, PostItem } from '../../libs/post';
import { getFeednamiTistories } from '../../libs/tistory';

interface PostPageProps {
  tistories: TistoryItem[];
  allMarkdownRemark: PostItem[];
}

const Root = styled.div`
  padding-top: 20px;
`;

export async function getStaticProps() {
  const posts = getAllPosts();
  const tistories = await getFeednamiTistories(
    'http://cultist-tp.tistory.com/rss'
  );

  return {
    props: {
      allMarkdownRemark: posts,
      tistories,
    },
  };
}

const mapRemarkToPosts = (allMarkdownRemark: PostItem[]) => {
  const posts = allMarkdownRemark;
  return _.map(
    posts,
    ({ slug, frontmatter: { title, date, path, published } }) => {
      return {
        createdAt: date,
        id: slug,
        title,
        url: path,
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

const PostPage = (props: PostPageProps) => {
  const { tistories = [], allMarkdownRemark } = props;
  const posts = [
    ...mapTistoryToPosts(tistories),
    ...mapRemarkToPosts(allMarkdownRemark),
  ];
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
};

PostPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default PostPage;
