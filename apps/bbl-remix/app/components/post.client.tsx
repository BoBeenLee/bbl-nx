import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import { PostCard } from '@bbl-nx/ui-components';
import { useMachine } from '@xstate/react';
import { postServiceWithConfig } from '../machines/post-service-machine';
import { fetchTistories } from '../apis/post';

interface PostPageProps {
  postMachineState: string;
}

const Root = styled.div`
  padding-top: 20px;
`;

const PostClient = (props: PostPageProps) => {
  const { postMachineState } = props;
  const [state, __] = useMachine(postServiceWithConfig, {
    state: JSON.parse(postMachineState),
  });
  const { data = [] } = useQuery('fetchTistories', fetchTistories, {
    suspense: true,
  });
  const posts = [...state.context.posts, ...data];
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

export default PostClient;
