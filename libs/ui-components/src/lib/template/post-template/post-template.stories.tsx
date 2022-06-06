import { Story, Meta } from '@storybook/react';
import { PostTemplate, PostTemplateProps } from './post-template';

export default {
  component: PostTemplate,
  title: 'PostTemplate',
} as Meta;

const Template: Story<PostTemplateProps> = (args) => <PostTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
