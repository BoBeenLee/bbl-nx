import { Story, Meta } from '@storybook/react';
import BlogByIdPage, { getStaticProps } from '../../src/pages/blog/[id]';
import { PostItem } from '../../src/libs/post';
import { rest } from 'msw';
import feedsJSON from '../../__mocks__/feeds.json';
import postsJSON from '../../__mocks__/posts.json';

export default {
  component: BlogByIdPage,
  title: 'pages/BlogId',
  argTypes: {},
} as Meta;

const Template: Story<PostItem> = (args, { loaded }) => {
  return <BlogByIdPage {...args} {...loaded} />;
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.loaders = [
  async () => {
    const context = {};
    const data = await getStaticProps(context);
    if ('props' in data) {
      return data.props;
    }
    return {};
  },
];

Primary.parameters = {
  nextRouter: {
    path: '/blog',
    asPath: '/blog',
  },
  msw: {
    handlers: [
      rest.get(
        'https://api.feednami.com/api/v1/feeds/load',
        (req, res, ctx) => {
          return res(ctx.json(feedsJSON));
        }
      ),
      rest.get('https://localhost:3000/api/posts', (req, res, ctx) => {
        return res(ctx.json(postsJSON));
      }),
    ],
  },
};
