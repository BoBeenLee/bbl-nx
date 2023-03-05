import Link from 'next/link';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { NavRouter, NavRouterKey } from '@bbl-nx/constants';
import { makePathname } from '@bbl-nx/utils';

export type ALinkProps<F extends NavRouterKey> = {
  as?: string;
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
  const pathname = usePathname();
  const getRestWithPathValues = () => {
    if ('urlPathValues' in restWithURLPathValues) {
      return {
        ...restWithURLPathValues,
        urlPathValues: (restWithURLPathValues as any).urlPathValues,
      };
    }
    return { ...restWithURLPathValues, urlPathValues: {} };
  };
  const { urlPathValues, ...rest } = getRestWithPathValues();
  const href = makePathname(urlPath, urlPathValues);
  const className = useMemo(() => {
    // Dynamic route will be matched via props.as
    // Static route will be matched via props.href
    const linkPathname = props.as || href

    // Using URL().pathname to get rid of query and hash
    const activePathname = pathname;

    const newClassName =
      linkPathname === activePathname
        ? cn(childClassName, activeClassName)
        : childClassName;

    if (newClassName !== childClassName) {
      return newClassName;
    }
    return childClassName;
  }, [activeClassName, childClassName, href, pathname, props.as]);

  return (
    <Link {...rest} className={className} href={href}>
      {children}
    </Link>
  );
}

export default ALink;
