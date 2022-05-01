import { Story, Meta } from '@storybook/react';
import { PortfolioCard, PortfolioCardProps } from './portfolio-card';

export default {
  component: PortfolioCard,
  title: 'PortfolioCard',
  argTypes: {
    onImagePopup: { action: 'onImagePopup executed!' },
  },
} as Meta;

const Template: Story<PortfolioCardProps> = (args) => (
  <PortfolioCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  period: '',
  summary: '',
  githubUrl: '',
  linkUrl: '',
  storybookUrl: '',
  googleStoreUrl: '',
  appStoreUrl: '',
};
