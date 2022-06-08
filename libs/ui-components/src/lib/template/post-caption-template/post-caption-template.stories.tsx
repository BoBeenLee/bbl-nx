import { Story, Meta } from '@storybook/react';
import {
  PostCaptionTemplate,
  PostCaptionTemplateProps,
} from './post-caption-template';

export default {
  component: PostCaptionTemplate,
  title: 'Components/PostCaptionTemplate',
} as Meta;

const Template: Story<PostCaptionTemplateProps> = (args) => (
  <PostCaptionTemplate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  url: '',
  title: 'Components/',
  description: '',
};
