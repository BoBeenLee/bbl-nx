import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { ProjectCard, ProjectCardProps } from './project-card';

export default {
  component: ProjectCard,
  title: 'organisms/ProjectCard',
  argTypes: {},
} as Meta;

const Template: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Henesis',
  period: '2020.5 - 2022.5',
  techStacks: [
    'react',
    'mobx state tree',
    'mobx',
    'nextjs',
    'emotion',
    'typescript',
    'storybook',
    'material-ui',
    'i18next',
  ],
  summary: `국내 주요 은행, 가상자산 거래소, 핀테크 회사, 가상자산 
수탁업체가 Henesis로 가상자산 서비스`,
};
