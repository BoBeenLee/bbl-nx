import { Story, Meta } from '@storybook/react';
import BlogByIdPage, { getStaticProps } from '../../src/pages/blog/[id]';
import { PostItem } from '../../src/libs/post';

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
};
