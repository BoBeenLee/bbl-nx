import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import BlogPage, {
  getStaticProps,
  BlogPageProps,
} from '../../src/pages/blog/index';

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
};
