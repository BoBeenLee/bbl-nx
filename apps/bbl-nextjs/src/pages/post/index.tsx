import _ from 'lodash';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { PostCard, Layout } from '@bbl-nx/ui-components';
import { TistoryItem } from '../../configs/tistory';
import { getAllPosts, PostItem } from '../../configs/post';
import { getFeednamiTistories } from '../../configs/tistory';

interface PostPageProps {
  tistories: TistoryItem[];
  allMarkdownRemark: Array<PostItem>;
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

class PostPage extends PureComponent<PostPageProps> {
  public render() {
    const posts = [...this.mapTistoryToPosts(), ...this.mapRemarkToPosts()];
    const postsByDESC = _.orderBy(posts, ['date'], ['desc']);
    const filterPublished = postsByDESC.filter((item) => item.published);
    return (
      <Layout>
        <Root>
          {_.map(filterPublished, (item) => {
            const { title, createdAt, url, isExternal } = item;
            return (
              <PostCard
                key={item.id}
                title={title}
                {...(isExternal ? { externalUrl: url } : { url })}
                createdAt={Number(createdAt)}
              />
            );
          })}
        </Root>
      </Layout>
    );
  }

  private mapRemarkToPosts = () => {
    const { allMarkdownRemark } = this.props;
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

  private mapTistoryToPosts = () => {
    const { tistories = [] } = this.props;
    return _.map(tistories, (item) => ({
      createdAt: item.date,
      id: item.guid,
      title: item.title,
      url: item.link,
      published: true,
      isExternal: true,
    }));
  };
}

export default PostPage;
