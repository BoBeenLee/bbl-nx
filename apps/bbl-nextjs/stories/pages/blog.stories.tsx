import { Story, Meta } from '@storybook/react';
import BlogPage, {
  getStaticProps,
  BlogPageProps,
} from '../../src/pages/blog/index';
import { rest } from 'msw';
import feedsJSON from '../../__mocks__/feeds.json';
import postsJSON from '../../__mocks__/posts.json';
import { getHostname } from '@bbl-nx/utils';

export default {
  component: BlogPage,
  title: 'pages/Blog',
  argTypes: {},
} as Meta;

const Template: Story<BlogPageProps> = (args, { loaded }) => {
  return <BlogPage {...args} allBlogs={loaded.allBlogs} />;
};

export const Primary = Template.bind({});
Primary.args = {
  allBlogs: [],
};
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
      rest.get(`${getHostname()}/api/posts`, (req, res, ctx) => {
        return res(ctx.json(postsJSON));
      }),
    ],
  },
};
