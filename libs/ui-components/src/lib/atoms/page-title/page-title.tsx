import cn from 'classnames';

export interface PageTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function PageTitle(props: PageTitleProps) {
  const { className, children } = props;
  return (
    <div
      className={cn(
        className,
        'text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'
      )}
    >
      {children}
    </div>
  );
}

export default PageTitle;
