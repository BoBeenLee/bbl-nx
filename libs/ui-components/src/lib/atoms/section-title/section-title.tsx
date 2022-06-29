import cn from 'classnames';

export interface SectionTitleProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
}

export function SectionTitle(props: SectionTitleProps) {
  const { className, href, children } = props;
  return (
    <a
      className={cn(
        className,
        'font-bold text-3xl tracking-tigh text-black dark:text-white'
      )}
      href={href}
    >
      {children}
    </a>
  );
}

export default SectionTitle;
