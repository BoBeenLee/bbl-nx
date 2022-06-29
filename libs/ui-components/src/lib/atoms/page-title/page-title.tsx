import cn from 'classnames';

export interface PageTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function PageTitle(props: PageTitleProps) {
  const { className, children } = props;
  return (
    <h1
      className={cn(
        className,
        'font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'
      )}
    >
      {children}
    </h1>
  );
}

export default PageTitle;
