import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { SearchInput, SearchInputProps } from './search-input';

export default {
  component: SearchInput,
  title: 'molecules/SearchInput',
  argTypes: {},
} as Meta;

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onSearch: action('onSearch'),
};
