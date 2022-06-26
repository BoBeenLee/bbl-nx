import { ComponentType } from 'react';
import { Virtuoso } from 'react-virtuoso';

export interface InfiniteListProps<T> {
  hasMore: boolean;
  height?: number | string;
  items: T[];
  renderItem: (index: number, data: T) => React.ReactNode;
  onMore: (index: number) => Promise<any> | void;
  LoadingComponent?: ComponentType;
  EmptyComponent?: ComponentType;
}

export function InfiniteList<T>(props: InfiniteListProps<T>) {
  const {
    hasMore,
    height,
    items,
    renderItem,
    onMore,
    LoadingComponent,
    EmptyComponent,
  } = props;
  return (
    <Virtuoso
      style={{
        height: height ?? '100%',
      }}
      data={items}
      itemContent={renderItem}
      endReached={hasMore ? onMore : undefined}
      overscan={200}
      components={{
        EmptyPlaceholder: EmptyComponent,
        Footer: LoadingComponent,
      }}
    />
  );
}

export default InfiniteList;
