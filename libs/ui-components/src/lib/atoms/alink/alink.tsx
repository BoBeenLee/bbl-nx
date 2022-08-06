import Link, { LinkProps } from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

export interface ALinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function ALink(props: ALinkProps) {
  const {
    className: childClassName,
    activeClassName,
    isExternal,
    children,
    ...rest
  } = props;
  const { asPath, isReady } = useRouter();
  const [className, setClassName] = useState(childClassName);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(
        (props.as || props.href) as string,
        window.location.href
      ).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, window.location.href).pathname;

      const newClassName =
        linkPathname === activePathname
          ? cn(childClassName, activeClassName)
          : childClassName;

      if (newClassName !== className) {
        setClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    childClassName,
    activeClassName,
    setClassName,
    className,
  ]);

  return (
    <Link
      {...rest}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <a className={className}>{children}</a>
    </Link>
  );
}

export default ALink;
