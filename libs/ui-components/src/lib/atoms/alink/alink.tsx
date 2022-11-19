import Link, { LinkProps } from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { NavRouter, NavRouterKey } from '@bbl-nx/constants';
import { makePathname } from '@bbl-nx/utils';

export type ALinkProps<F extends NavRouterKey> = Omit<LinkProps, 'href'> & {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
  urlPath: F;
} & {
  [key in F as key extends infer K extends NavRouterKey
    ? NavRouter[K] extends { path: never }
      ? never
      : 'urlPathValues'
    : never]: NavRouter[key]['path'];
};

export function ALink<F extends NavRouterKey>(props: ALinkProps<F>) {
  const {
    className: childClassName,
    activeClassName,
    children,
    urlPath,
    ...restWithURLPathValues
  } = props;
  const { asPath, isReady } = useRouter();
  const [className, setClassName] = useState(childClassName);
  const getRestWithPathValues = () => {
    if('urlPathValues' in restWithURLPathValues) {
      return {
        ...restWithURLPathValues,
        urlPathValues: (restWithURLPathValues as any).urlPathValues
      } 
    }
    return { ...restWithURLPathValues, urlPathValues: {} }
  }
  const { urlPathValues, ...rest } = getRestWithPathValues()
  const href = makePathname(urlPath, urlPathValues);

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
    <Link {...rest} className={className} href={href}>
      {children}
    </Link>
  );
}

export default ALink;
