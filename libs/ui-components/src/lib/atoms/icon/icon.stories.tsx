import { Story, Meta } from '@storybook/react';
import { Icon, IconProps } from './icon';
import { svgIcons, reactIcons } from './svg';

export default {
  component: Icon,
  title: 'atoms/Icon',
  argTypes: {
    name: {
      options: [...Object.keys(svgIcons), ...Object.keys(reactIcons)],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'facebook',
};
