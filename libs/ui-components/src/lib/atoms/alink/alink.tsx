import Link, { LinkProps } from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { NavRouter } from '@bbl-nx/constants';
import { makePathname } from '@bbl-nx/utils';

export type ALinkProps<F extends keyof NavRouter> = Omit<LinkProps, 'href'> & {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
  urlPath: F;
  urlPathValues?: NavRouter[F]['path'];
};

/**
urlPathValues 값이 never이 아닐 경우에만 노출하고 싶을때,
{
  [key in F as key extends infer K extends keyof NavRouter
    ? NavRouter[K] extends { path: never }
      ? never
      : 'path'
    : never]?: NavRouter[key]['path'];
};
 */



export function ALink<F extends keyof NavRouter>(props: ALinkProps<F>) {
  const {
    className: childClassName,
    activeClassName,
    children,
    urlPath,
    urlPathValues,
    ...rest
  } = props;
  const { asPath, isReady } = useRouter();
  const [className, setClassName] = useState(childClassName);
  const href = makePathname(urlPath, urlPathValues ?? {});

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(
        (props.as || href) as string,
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
    href,
    childClassName,
    activeClassName,
    setClassName,
    className,
  ]);

  return (
    <Link {...rest} href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
}

export default ALink;
