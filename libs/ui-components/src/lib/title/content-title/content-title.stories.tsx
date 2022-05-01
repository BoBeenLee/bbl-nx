import { Story, Meta } from '@storybook/react';
import { ContentTitle, ContentTitleProps } from './content-title';

export default {
  component: ContentTitle,
  title: 'ContentTitle',
} as Meta;

const Template: Story<ContentTitleProps> = (args) => <ContentTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  title: '',
  uri: '',
};
