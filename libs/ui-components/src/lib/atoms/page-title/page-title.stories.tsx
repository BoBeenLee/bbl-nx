import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { PageTitle, PageTitleProps } from './page-title';

export default {
  component: PageTitle,
  title: 'atoms/PageTitle',
  argTypes: {},
} as Meta;

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div>Hello World</div>,
};
