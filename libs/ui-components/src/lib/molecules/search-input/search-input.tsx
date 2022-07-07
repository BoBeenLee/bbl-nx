import { ChangeEvent, useCallback } from 'react';
import Icon from '../../atoms/icon/icon';
import cn from 'classnames';

export interface SearchInputProps {
  className?: string;
  onSearch: (text: string) => void;
}

export function SearchInput(props: SearchInputProps) {
  const { className, onSearch } = props;
  const onChangeText = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onSearch(e.target.value);
    },
    [onSearch]
  );

  return (
    <div className={cn(className, 'relative flex flex-row items-center')}>
      <input
        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        aria-label="Search articles"
        type="text"
        placeholder="Search articles"
        onChange={onChangeText}
      />
      <div className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300">
        <Icon name={'search'} />
      </div>
    </div>
  );
}

export default SearchInput;
