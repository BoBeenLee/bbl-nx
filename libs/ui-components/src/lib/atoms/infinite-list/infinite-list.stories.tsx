import _ from 'lodash';
import { Story, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { InfiniteList, InfiniteListProps } from './infinite-list';
import styled from 'styled-components';

export default {
  component: InfiniteList,
  title: 'atoms/InfiniteList',
  argTypes: {},
} as Meta;

const StyledList = styled.div`
  height: 500px;
`;

const Template: Story<InfiniteListProps<string>> = (args) => (
  <StyledList>
    <InfiniteList {...args} />
  </StyledList>
);

export const Primary = Template.bind({});
Primary.args = {
  hasMore: true,
  height: 200,
  items: _.times(100, (index) => `test${index}`),
  renderItem: (index, item) => {
    return <div key={`${item}`}>{item}</div>;
  },
  onMore: () => {},
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // TODO SOMETHING
};
