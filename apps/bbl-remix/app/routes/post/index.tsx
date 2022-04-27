import _ from "lodash";
import { Link, useLoaderData } from "remix";
import styled from "styled-components";

import { getPosts, PostItem } from "~/post";
import { PostCard } from "~/components/Card";

const Root = styled.div`
  padding-top: 20px;
`;

export const loader = async () => {
  const response = await getPosts();
  const filteredPublished = response.filter((item) => Boolean(item.published));
  return filteredPublished;
};

export default function Posts() {
  const posts = useLoaderData<PostItem[]>();
  // const postsByDESC = _.orderBy(posts, ["date"], ["desc"]);
  return (
    <Root>
      {_.map(posts, (item) => (
        <PostCard key={item.slug} {...item} />
      ))}
    </Root>
  );
}
