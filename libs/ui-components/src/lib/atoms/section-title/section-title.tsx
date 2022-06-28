import cn from 'classnames';

export interface SectionTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function SectionTitle(props: SectionTitleProps) {
  const { className, children } = props;
  return (
    <div
      className={cn(
        className,
        'font-bold text-3xl tracking-tigh text-black dark:text-white'
      )}
    >
      {children}
    </div>
  );
}

export default SectionTitle;
