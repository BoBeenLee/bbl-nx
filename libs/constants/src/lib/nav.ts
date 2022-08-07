export const nav = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Project', href: '/project' },
  { text: 'Blog', href: '/blog' },
];

export const getBlogById = (id: string) => {
  return `/blog/${id}`;
};
