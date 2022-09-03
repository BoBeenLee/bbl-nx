import { makePathname } from '@bbl-nx/utils';

export type NavRouter = {
  '/': {
    path: never;
  };
  '/about': { path: never };
  '/project': { path: never };
  '/blog': { path: never };
  '/blog/[id]': {
    path: {
      id: string;
    };
  };
};

export type NavRouterKey = keyof NavRouter;

export type NavRouterParam<Path extends NavRouterKey> =
  NavRouter[Path] extends { path: infer TPath }
    ? TPath extends Record<string, unknown>
      ? [Path, TPath]
      : [Path, undefined]
    : [Path, undefined];

export const getNavRouterPath = <Path extends NavRouterKey>([
  path,
  pathValues,
]: NavRouterParam<Path>) => {
  return makePathname(path, pathValues ?? {});
};

export const nav = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Project', href: '/project' },
  { text: 'Blog', href: '/blog' },
] as const;

export type NavKey = typeof nav[number]['href'];

export const getBlogById = (id: string) => {
  return `/blog/${id}`;
};
