
export const menus = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'Post', url: '/post' },
];

export type MenuItem = Readonly<MergeArrayType<typeof menus>>;