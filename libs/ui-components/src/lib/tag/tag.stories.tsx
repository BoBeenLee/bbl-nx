import { Story, Meta } from '@storybook/react';
import { Tag, TagProps } from './tag';

export default {
  component: Tag,
  title: 'Tag',
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  name: '',
};
